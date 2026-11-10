import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community | BHTCC" }, { name: "description", content: "Discover BHTCC's community mission across cultural education, families, youth and service." }, { property: "og:title", content: "Community | BHTCC" }, { property: "og:description", content: "Building connection across generations in Ballarat and Regional Victoria." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: CommunityPage,
});

function CommunityPage() {
  return <SiteShell><EditorialPage eyebrow="Community" title={<>Culture lives<br />when it is shared.</>} intro="BHTCC's vision extends beyond a building: it is a place for people to connect, learn and take part in community life." sections={[
    { number: "01", title: "Learning across generations", paragraphs: ["Cultural education, community learning and opportunities for young people and families are part of the organisation's mission."] },
    { number: "02", title: "Culture and connection", paragraphs: ["Festivals, cultural activities and community gatherings can create space for shared heritage and new friendships. Confirmed programme details will be published when available."] },
    { number: "03", title: "Service in the wider community", paragraphs: ["BHTCC's mission includes charitable welfare, community service and multicultural harmony. The organisation welcomes enquiries from people interested in contributing."] },
  ]} aside="A welcoming community is shaped by everyone who gives their time, care and curiosity." cta={{ label: "Find a way to help", to: "/volunteer" }} /></SiteShell>;
}