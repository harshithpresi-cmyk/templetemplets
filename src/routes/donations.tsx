import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorialPage } from "@/components/editorial-page";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/donations")({
  head: () => ({ meta: [{ title: "Support the Project | BHTCC" }, { name: "description", content: "Learn how to contact BHTCC about supporting the temple and cultural centre project." }, { property: "og:title", content: "Support the Project | BHTCC" }, { property: "og:description", content: "Contact BHTCC about supporting its vision for a temple and cultural centre." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: DonationsPage,
});

function DonationsPage() {
  return <SiteShell><EditorialPage eyebrow="Support the vision" title={<>Help shape<br />what comes next.</>} intro="Community support is part of the BHTCC story. For now, supporters can contact the organisation directly to ask about contributing." sections={[
    { number: "01", title: "Speak with BHTCC", paragraphs: ["Online payment processing has not been enabled. Contact BHTCC directly to discuss current ways to support the temple and cultural centre project."] },
    { number: "02", title: "Figures are not published here", paragraphs: ["Campaign totals and targets require confirmation of the current amounts, fundraising period, whether figures represent received donations or pledges, and permission to publish. They are therefore not shown as live financial data."] },
    { number: "03", title: "Important information", paragraphs: ["No claim about tax deductibility is made here. Please contact BHTCC if you need information about the organisation's current donation arrangements."] },
  ]} aside="A conversation first. Online payment options may be added after the organisation confirms the details." />
    <section className="donation-contact page-wrap"><p className="eyebrow">Contact BHTCC</p><h2>Ask how you can<br />support the project.</h2><p>info@ballarathindutemple.org.au<br />+61 3 5300 0000</p><Button asChild variant="default"><Link to="/contact">Send a message <ArrowUpRight aria-hidden="true" /></Link></Button></section>
  </SiteShell>;
}