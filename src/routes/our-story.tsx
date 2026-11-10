import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/our-story")({
  head: () => ({ meta: [{ title: "Our Story | BHTCC" }, { name: "description", content: "Learn about BHTCC's community vision and mission in Ballarat and Regional Victoria." }, { property: "og:title", content: "Our Story | BHTCC" }, { property: "og:description", content: "A community vision for worship, heritage and belonging." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SiteShell><EditorialPage eyebrow="Our story" title={<>A community vision,<br />carried forward together.</>} intro="Ballarat Hindu Temple & Cultural Centre Incorporated brings people together around a shared vision for spiritual life, cultural heritage and community connection." sections={[
    { number: "01", title: "A vision for Ballarat and beyond", paragraphs: ["Founded in 2016, BHTCC is working toward a traditional Hindu temple and cultural centre serving Ballarat and Regional Victoria.", "The vision is to create a welcoming place for worship, learning, cultural activities and service across generations."] },
    { number: "02", title: "Our mission", paragraphs: ["The organisation's mission is to promote Hindu worship, preserve and share Indian cultural heritage, support education and community learning, and encourage charitable welfare and service.", "BHTCC also seeks to foster multicultural harmony and create opportunities for young people and families."] },
    { number: "03", title: "A place to belong", paragraphs: ["A cultural centre grows through the people who gather, learn, celebrate and care for one another. The planned project brings these shared purposes together in a home for generations to come."] },
  ]} aside="Faith, heritage, community and service—held together by a shared sense of belonging." cta={{ label: "Get involved", to: "/volunteer" }} /></SiteShell>,
});