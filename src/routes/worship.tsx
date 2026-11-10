import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/worship")({
  head: () => ({ meta: [{ title: "Worship | BHTCC" }, { name: "description", content: "Learn about the planned sacred spaces at the Ballarat Hindu Temple and Cultural Centre." }, { property: "og:title", content: "Worship | BHTCC" }, { property: "og:description", content: "A future home for Hindu worship and spiritual practice in Regional Victoria." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: WorshipPage,
});

function WorshipPage() {
  return <SiteShell><EditorialPage eyebrow="Worship & spiritual life" title={<>A place for devotion,<br />reflection and prayer.</>} intro="The planned centre is intended to support Hindu worship and spiritual practice for Ballarat and Regional Victoria." sections={[
    { number: "01", title: "Planned sacred spaces", paragraphs: ["The project plan includes dedicated spaces for Sri Ganesha, Lord Shiva and Goddess Ambal, as well as a Navagraha Mandapam and prayer and meditation hall."], note: "These are planned facilities; no opening or worship schedule is being published." },
    { number: "02", title: "Ceremonies and enquiries", paragraphs: ["Pooja and ceremony details depend on confirmed arrangements. Contact BHTCC with an enquiry; please do not assume a ceremony time, fee or priest availability."], note: "Visits are currently limited to scheduled festivals, ceremonies or organised working bees. Contact BHTCC before travelling to the site." },
  ]} aside="Worship information will be shared when dates and arrangements are confirmed by BHTCC." />
    <EnquiryForm kind="pooja" title="Send a worship enquiry" intro="Share your question with the BHTCC team. This form is an enquiry only; it does not book a ceremony." />
  </SiteShell>;
}