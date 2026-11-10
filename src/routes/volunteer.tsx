import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/volunteer")({
  head: () => ({ meta: [{ title: "Volunteer | BHTCC" }, { name: "description", content: "Share your skills and interests with the Ballarat Hindu Temple & Cultural Centre team." }, { property: "og:title", content: "Volunteer | BHTCC" }, { property: "og:description", content: "Explore ways to contribute your time and skills to the BHTCC community." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: VolunteerPage,
});

function VolunteerPage() {
  return <SiteShell><EditorialPage eyebrow="Volunteer" title={<>Many hands<br />make a home.</>} intro="BHTCC welcomes people interested in contributing to a shared community vision." sections={[
    { number: "01", title: "Share what interests you", paragraphs: ["Potential areas include event support, cultural activities, administration, communications, community service and construction support."] },
    { number: "02", title: "Tell us how you might help", paragraphs: ["Use the form to share your interests, availability and relevant skills. The volunteer coordinator can follow up with information about current opportunities."] },
  ]} aside="A volunteer enquiry is a first conversation; it does not confirm an assignment or site access." />
    <EnquiryForm kind="volunteer" title="Tell us how you would like to help" intro="Share only the details you are comfortable providing. The BHTCC team will review your enquiry." />
  </SiteShell>;
}