import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact BHTCC | Ballarat Hindu Temple & Cultural Centre" }, { name: "description", content: "Contact Ballarat Hindu Temple & Cultural Centre in Ross Creek, Victoria." }, { property: "og:title", content: "Contact BHTCC | Ballarat Hindu Temple & Cultural Centre" }, { property: "og:description", content: "Get in touch with the BHTCC team in Ross Creek, Victoria." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ContactPage,
});

function ContactPage() {
  return <SiteShell><section className="editorial-hero page-wrap"><div className="editorial-hero__topline"><span className="eyebrow">Contact</span><span className="editorial-hero__index">We would be glad to hear from you</span></div><h1>Start a<br />conversation.</h1><div className="editorial-hero__bottom"><p>For questions about the project, worship, events or ways to participate, contact BHTCC.</p><span className="editorial-hero__rule" /></div></section>
    <section className="contact-details page-wrap"><div className="contact-details__item"><span className="eyebrow">Email</span><a href="mailto:info@ballarathindutemple.org.au">info@ballarathindutemple.org.au <ArrowUpRight aria-hidden="true" /></a></div><div className="contact-details__item"><span className="eyebrow">Phone</span><a href="tel:+61353000000">+61 3 5300 0000 <ArrowUpRight aria-hidden="true" /></a></div><div className="contact-details__item"><span className="eyebrow">Project site</span><p><MapPin aria-hidden="true" />110 Vaggs Road, Ross Creek, VIC 3351</p><a className="directions-link" href="https://maps.google.com/?q=110+Vaggs+Road+Ross+Creek+VIC+3351" target="_blank" rel="noreferrer">Directions <ArrowUpRight aria-hidden="true" /></a></div></section>
    <div className="visiting-notice page-wrap"><span className="eyebrow">Please note</span><p>The temple site is under development. Visits are currently limited to scheduled festivals, ceremonies or organised working bees. Please contact BHTCC before visiting.</p></div>
    <EnquiryForm kind="contact" title="Send a message" intro="Messages are received by the BHTCC team for follow-up. Please do not include financial or sensitive personal details." />
  </SiteShell>;
}