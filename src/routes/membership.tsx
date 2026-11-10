import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/enquiry-form";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/membership")({
  head: () => ({ meta: [{ title: "Membership | BHTCC" }, { name: "description", content: "Ask BHTCC about membership and how to participate in the community." }, { property: "og:title", content: "Membership | BHTCC" }, { property: "og:description", content: "Contact BHTCC about membership and participation." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: MembershipPage,
});

function MembershipPage() {
  return <SiteShell><EditorialPage eyebrow="Membership" title={<>A community is built<br />by those who take part.</>} intro="Membership is one way to connect with the work and vision of BHTCC." sections={[
    { number: "01", title: "Ask about membership", paragraphs: ["Membership categories, fees and application arrangements need confirmation from BHTCC before they can be published. Contact the team with your question and they can share current information."], note: "No unconfirmed membership prices are displayed on this page." },
    { number: "02", title: "Applications are reviewed", paragraphs: ["Sending an enquiry does not create a membership or automatically approve an application. The organisation will advise you about any current process and next steps."] },
  ]} aside="For current membership information, please speak directly with the BHTCC team." />
    <EnquiryForm kind="membership" title="Ask about membership" intro="Share your details and a question. This is an enquiry only; it does not submit or approve a membership application." />
  </SiteShell>;
}