import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getUpcomingEvents } from "@/lib/public-content.functions";
import { SiteShell } from "@/components/site-shell";

const eventsQuery = { queryKey: ["bhtcc", "upcoming-events"], queryFn: () => getUpcomingEvents() };

export const Route = createFileRoute("/events")({
  loader: ({ context }) => context.queryClient.ensureQueryData(eventsQuery),
  head: () => ({ meta: [{ title: "Events | BHTCC" }, { name: "description", content: "Find confirmed upcoming festivals and community events from BHTCC." }, { property: "og:title", content: "Events | BHTCC" }, { property: "og:description", content: "Confirmed upcoming community gatherings from BHTCC." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: EventsPage,
});

function EventsPage() {
  const { data } = useSuspenseQuery(eventsQuery);
  return <SiteShell><section className="editorial-hero page-wrap"><div className="editorial-hero__topline"><span className="eyebrow">Events & gatherings</span><span className="editorial-hero__index">BHTCC / Ballarat, Victoria</span></div><h1>Come together,<br />when the time is right.</h1><div className="editorial-hero__bottom"><p>Confirmed festivals and community events will appear here as they are announced by BHTCC.</p><span className="editorial-hero__rule" /></div></section>
    <section className="events-list page-wrap" aria-live="polite">
      {data.unavailable ? <div className="empty-state"><span className="empty-state__number">—</span><h2>Events are temporarily unavailable.</h2><p>Please check back later or contact BHTCC for confirmed information.</p></div> : data.events.length === 0 ? <div className="empty-state"><span className="empty-state__number">—</span><h2>No upcoming events are listed yet.</h2><p>When a future date is confirmed, it will be shared here. Past events are not shown as upcoming.</p></div> : data.events.map((event) => <article className="event-row" key={event.id}><time dateTime={event.starts_at}>{new Intl.DateTimeFormat("en-AU", { dateStyle: "medium", timeZone: "Australia/Melbourne" }).format(new Date(event.starts_at))}</time><div><h2>{event.title}</h2><p>{event.description}</p>{event.location && <span>{event.location}</span>}</div>{event.registration_url && <a href={event.registration_url} target="_blank" rel="noreferrer">Event details <span aria-hidden="true">↗</span></a>}</article>)}
    </section>
  </SiteShell>;
}