import { createFileRoute } from "@tanstack/react-router";
import templeVision from "@/assets/bhtcc-vision-concept.jpg";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/temple-project")({
  head: () => ({ meta: [{ title: "Temple Project | BHTCC" }, { name: "description", content: "Explore the planned Ballarat Hindu Temple and Cultural Centre project in Ross Creek, Victoria." }, { property: "og:title", content: "Temple Project | BHTCC" }, { property: "og:description", content: "A planned spiritual and cultural home in Ross Creek." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: TempleProjectPage,
});

function TempleProjectPage() {
  return <SiteShell>
    <EditorialPage eyebrow="Temple project · planned facilities" title={<>A sacred place<br />to gather and grow.</>} intro="The planned Ballarat Hindu Temple & Cultural Centre is envisioned as a home for worship, cultural learning and community life on approximately five acres in Ross Creek." sections={[
      { number: "01", title: "The planned centre", paragraphs: ["The supplied project brief describes a prayer and meditation hall of approximately 26 metres by 12 metres, with a planned capacity of 350 people, and parking for 75 or more vehicles. These are planning specifications, not confirmation of completed facilities."], list: ["Sri Ganesha, Lord Shiva and Goddess Ambal temples", "Navagraha Mandapam", "Prayer and meditation hall", "Commercial kitchen, library and classrooms", "Gardens, Tulsi walkways and a children's playground", "Parking facilities"] },
      { number: "02", title: "A journey in progress", paragraphs: ["The site is an active construction project. Land, planning, foundations, temple development and future facilities form part of the wider journey.", "Dates, stage-by-stage progress and completion milestones will be shared when BHTCC has confirmed information to publish."], note: "No completion date or progress percentage is currently published here." },
      { number: "03", title: "Visiting the site", paragraphs: ["The temple site is under development. Visits are currently limited to scheduled festivals, ceremonies or organised working bees. Please contact BHTCC before visiting."] },
    ]} aside="The visual below is an artist’s impression of a future vision—not a photograph of the BHTCC site." cta={{ label: "Ask about the project", to: "/contact" }} />
    <figure className="project-visual page-wrap"><img src={templeVision} alt="Concept rendering of a future Hindu temple and cultural centre in a regional Victorian landscape" loading="lazy" width={1920} height={1088} /><figcaption><span>Future vision</span><span>Concept architectural rendering · not a completed BHTCC facility</span></figcaption></figure>
  </SiteShell>;
}