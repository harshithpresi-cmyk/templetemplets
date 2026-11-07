# BHTCC website implementation plan

## Goal
Replace the blank starter page with a trustworthy, editorial website for Ballarat Hindu Temple & Cultural Centre, then add secure member sign-in and a protected administration foundation.

## Direction
- **Selected creative direction:** The Sacred Architectural Journal — compare against Living Sacred Landscape and Contemporary Cultural Institution; select this direction for its fit with the user's Paper & Maroon palette and Editorial Journal layout.
- **Visual system:** Paper & Maroon; Libre Baskerville headings and IBM Plex Sans body; editorial composition, asymmetric story sections, restrained accents, accessible contrast and responsive layouts.
- **Media policy:** Use the generated temple image only as an explicitly labeled conceptual architectural rendering, never as a completed BHTCC building or documentary site photo. No invented testimonials, events, dates, financial progress or operational claims.
- **Design research checklist:** Plan around the real community task and content; prioritize hierarchy and structure before decoration; use real/relevant imagery with clear provenance; keep expression proportionate to the surface; inspect desktop and mobile layouts and accessibility; use reduced-motion behavior.

## Implementation
1. Replace the placeholder at `/` with an editorial home page, shared navigation/footer, and the supplied confirmed organisation details.
2. Add distinct public pages for Our Story, Temple Project, Worship, Community, Events, Gallery, Donations, Membership, Volunteer, Governance, and Contact. Pages must label planned facilities and current construction status carefully; show appropriate empty states in place of unknown future events and unpublished funding data.
3. Add account sign-in and use Lovable Cloud for persistence. Create profile data because the user confirmed it is needed. Keep roles in a separate protected roles table and secure `/admin` with server-validated role checks.
4. Build an initial admin area around editable site content and community submissions, with safe publication states. Do not create or publish unconfirmed fundraising figures, membership prices, operational schedules, legal claims, or invented governance documents.
5. Keep donations as an informational page with payment setup explicitly deferred; do not add checkout or imply donations can currently be processed online.
6. Apply the design tokens and page-specific SEO metadata, then run the existing routing tests and inspect the public experience at desktop (1280px), tablet (768px), and mobile (390px and 360px) widths. Navigation, reading layouts, forms, and actions must remain usable with touch and keyboard.

## Technical notes
- Preserve TanStack Start and existing generated Lovable Cloud integration files.
- Additive Cloud schema only; every public table receives explicit grants and RLS policies. Admin writes require server-side authentication and a role-table check, not client state.
- Email confirmation stays enabled. Password recovery, if implemented, includes a public `/reset-password` page and the recovery flow requirements.
- Keep the project maintainable with reusable site shell, form, and content patterns; use no invented stock photography or financial data.

## Pending external decisions
- Current campaign amounts, targets, fundraising period, whether totals are pledges or received donations, and publication permission.
- Membership fees, worship/ceremony schedules, confirmed future events, and approved governance/legal documents.
- Payment processing enablement and account setup (deferred by user).
- Real approved BHTCC imagery and any official logo/brand files.