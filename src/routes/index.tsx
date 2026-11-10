import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import templeVision from "@/assets/bhtcc-vision-concept.jpg";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ballarat Hindu Temple & Cultural Centre | BHTCC" },
      { name: "description", content: "A place for worship, cultural heritage, community connection and spiritual growth in Ballarat and Regional Victoria." },
      { property: "og:title", content: "Ballarat Hindu Temple & Cultural Centre | BHTCC" },
      { property: "og:description", content: "A place for worship, cultural heritage, community connection and spiritual growth in Ballarat and Regional Victoria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      <section className="home-hero">
        <img
          className="home-hero__image"
          src={templeVision}
          alt="Concept rendering of a future temple and cultural centre in a regional Victorian landscape"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
        <div className="home-hero__shade" />
        <div className="home-hero__content page-wrap">
          <p className="eyebrow eyebrow--light">Ballarat Hindu Temple & Cultural Centre</p>
          <h1>A sacred home<br />for generations<br />to come.</h1>
          <p className="home-hero__lede">A place for worship, cultural heritage, community connection and spiritual growth in Ballarat and Regional Victoria.</p>
          <div className="home-hero__actions">
            <Button asChild variant="hero">
              <Link to="/donations">Support the vision <ArrowUpRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild variant="hero-outline">
              <Link to="/our-story">Discover our story <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
        <p className="home-hero__caption">An artist’s impression of a future vision · not a photograph of the BHTCC site</p>
        <a className="home-hero__scroll" href="#welcome" aria-label="Scroll to introduction"><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="intro-section page-wrap" id="welcome">
        <div className="intro-section__marker"><span>01</span><span className="rule" /></div>
        <div className="intro-section__copy">
          <p className="eyebrow">A shared vision, rooted in community</p>
          <h2>More than a place.<br /><em>A sense of belonging.</em></h2>
          <p className="intro-section__body">Since 2016, the Ballarat Hindu Temple & Cultural Centre Incorporated has been working toward a traditional Hindu temple and cultural centre for Ballarat and Regional Victoria.</p>
          <Link className="text-link" to="/our-story">Learn about BHTCC <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="intro-note">
          <span className="intro-note__line" />
          <p>Faith.<br />Heritage.<br />Community.<br />Service.</p>
        </div>
      </section>

      <section className="project-band">
        <div className="page-wrap project-band__grid">
          <div className="project-band__text">
            <p className="eyebrow">The temple project</p>
            <h2>A future taking shape on five acres in Ross Creek.</h2>
            <p>The planned centre brings worship, learning and cultural life together. Facilities are being developed; the site is not presented as an operational temple.</p>
            <Button asChild variant="editorial-outline"><Link to="/temple-project">Explore the project <ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
          <div className="project-band__facts" aria-label="Project location">
            <MapPin aria-hidden="true" />
            <span className="eyebrow">Project site</span>
            <strong>110 Vaggs Road</strong>
            <span>Ross Creek, VIC 3351</span>
            <span>Regional Victoria, Australia</span>
          </div>
        </div>
      </section>

      <section className="participate-section page-wrap">
        <header className="section-heading">
          <p className="eyebrow">A community made together</p>
          <h2>There is a place for you<br />in this story.</h2>
        </header>
        <div className="participate-grid">
          <Link className="participate-item" to="/worship"><span className="participate-item__number">01</span><span><strong>Worship & spiritual life</strong><small>Discover the traditions that will shape the centre.</small></span><ArrowUpRight aria-hidden="true" /></Link>
          <Link className="participate-item" to="/community"><span className="participate-item__number">02</span><span><strong>Culture & community</strong><small>Learning, service and connection across generations.</small></span><ArrowUpRight aria-hidden="true" /></Link>
          <Link className="participate-item" to="/volunteer"><span className="participate-item__number">03</span><span><strong>Share your time</strong><small>Let the team know how you would like to help.</small></span><ArrowUpRight aria-hidden="true" /></Link>
          <Link className="participate-item" to="/events"><span className="participate-item__number">04</span><span><strong>Events & gatherings</strong><small>See confirmed events as they are announced.</small></span><ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="visit-band">
        <div className="page-wrap visit-band__inner">
          <p className="eyebrow eyebrow--light">Before visiting</p>
          <h2>The temple site is<br />under development.</h2>
          <p>Visits are currently limited to scheduled festivals, ceremonies or organised working bees. Please contact BHTCC before visiting.</p>
          <Button asChild variant="hero-outline"><Link to="/contact">Contact BHTCC <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </SiteShell>
  );
}
