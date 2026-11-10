import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery | BHTCC" }, { name: "description", content: "View approved BHTCC construction, festival and community photography." }, { property: "og:title", content: "Gallery | BHTCC" }, { property: "og:description", content: "Approved images from the BHTCC community and project journey." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: GalleryPage,
});

function GalleryPage() {
  return <SiteShell><section className="editorial-hero page-wrap"><div className="editorial-hero__topline"><span className="eyebrow">Gallery</span><span className="editorial-hero__index">BHTCC / Ballarat, Victoria</span></div><h1>Moments from<br />a shared journey.</h1><div className="editorial-hero__bottom"><p>Approved photographs from the BHTCC site, festivals and community life will be gathered here.</p><span className="editorial-hero__rule" /></div></section><section className="empty-state page-wrap"><span className="empty-state__number">01</span><h2>Approved photographs are being gathered.</h2><p>There are no approved BHTCC photographs in the gallery yet. The architectural image on this site is clearly labeled as a concept rendering and is not presented as a photograph of the BHTCC site.</p></section></SiteShell>;
}