import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getAdminOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin, error: roleError } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (roleError || !isAdmin) return { authorized: false as const };

    const [events, content, campaigns, enquiries] = await Promise.all([
      context.supabase.from("events").select("id, title, starts_at, status", { count: "exact", head: true }),
      context.supabase.from("site_content").select("id, publication_state", { count: "exact", head: true }),
      context.supabase.from("campaigns").select("id", { count: "exact", head: true }),
      context.supabase.from("community_enquiries").select("id, status", { count: "exact", head: true }),
    ]);
    if (events.error || content.error || campaigns.error || enquiries.error) {
      return { authorized: true as const, unavailable: true as const, counts: null };
    }
    return {
      authorized: true as const,
      unavailable: false as const,
      counts: {
        events: events.count ?? 0,
        content: content.count ?? 0,
        campaigns: campaigns.count ?? 0,
        enquiries: enquiries.count ?? 0,
        pendingEnquiries: enquiries.data?.length ?? 0,
      },
    };
  });