import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/governance")({
  head: () => ({ meta: [{ title: "Governance | BHTCC" }, { name: "description", content: "Contact BHTCC for approved governance information and organisational documents." }, { property: "og:title", content: "Governance | BHTCC" }, { property: "og:description", content: "Governance information from Ballarat Hindu Temple & Cultural Centre." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: GovernancePage,
});

function GovernancePage() {
  return <SiteShell><EditorialPage eyebrow="Governance & transparency" title={<>Trust begins<br />with clear information.</>} intro="BHTCC is committed to building a transparent and accountable organisation." sections={[
    { number: "01", title: "Approved documents", paragraphs: ["Governance materials such as the constitution, child-safety information, volunteer code of conduct, financial reports and annual reports will be shared here when supplied and approved for publication."] },
    { number: "02", title: "Request information", paragraphs: ["No committee details, policies, certificates or reports are invented for this website. Contact BHTCC directly if you need current organisational information."] },
  ]} aside="Official documents will be published only after BHTCC confirms that they are current and approved." cta={{ label: "Contact BHTCC", to: "/contact" }} /></SiteShell>;
}