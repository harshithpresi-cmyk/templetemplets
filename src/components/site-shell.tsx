import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const mainLinks = [
  { to: "/our-story" as const, label: "Our story" },
  { to: "/temple-project" as const, label: "Temple project" },
  { to: "/worship" as const, label: "Worship" },
  { to: "/community" as const, label: "Community" },
  { to: "/events" as const, label: "Events" },
  { to: "/gallery" as const, label: "Gallery" },
];

const otherLinks = [
  { to: "/donations" as const, label: "Donations" },
  { to: "/membership" as const, label: "Membership" },
  { to: "/volunteer" as const, label: "Volunteer" },
  { to: "/governance" as const, label: "Governance" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="site-header__inner page-wrap">
          <Link to="/" className="brand-lockup" aria-label="BHTCC home">
            <span className="brand-lockup__mark" aria-hidden="true">B</span>
            <span className="brand-lockup__text"><strong>BHTCC</strong><small>Ballarat Hindu Temple<br className="brand-lockup__break" /> & Cultural Centre</small></span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            {mainLinks.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} className="site-nav__link">{item.label}</Link>)}
          </nav>
          <div className="site-header__actions">
            <Button asChild variant="outline" className="account-link"><Link to="/auth">Sign in</Link></Button>
            <Button asChild variant="default" className="donate-link"><Link to="/donations">Support <ArrowUpRight aria-hidden="true" /></Link></Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mobile-menu-trigger" aria-label="Open navigation menu"><Menu aria-hidden="true" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="site-mobile-menu">
                <SheetHeader className="site-mobile-menu__header">
                  <SheetTitle className="site-mobile-menu__title">BHTCC</SheetTitle>
                  <SheetDescription>Ballarat Hindu Temple & Cultural Centre</SheetDescription>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="site-mobile-menu__nav">
                  {[{ to: "/" as const, label: "Home" }, ...mainLinks, ...otherLinks, { to: "/auth" as const, label: "Sign in" }].map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link to={item.to} className="site-mobile-menu__link">{item.label}<ArrowUpRight aria-hidden="true" /></Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="page-wrap site-footer__main">
          <div className="site-footer__identity">
            <Link to="/" className="brand-lockup brand-lockup--footer" aria-label="BHTCC home">
              <span className="brand-lockup__mark" aria-hidden="true">B</span>
              <span className="brand-lockup__text"><strong>BHTCC</strong><small>Ballarat Hindu Temple<br />& Cultural Centre</small></span>
            </Link>
            <p>A sacred home for worship, cultural heritage and community life in Ballarat and Regional Victoria.</p>
          </div>
          <div className="site-footer__links">
            <p className="eyebrow">Explore</p>
            <div className="site-footer__link-grid">
              {[...mainLinks, ...otherLinks].map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            </div>
          </div>
          <div className="site-footer__contact">
            <p className="eyebrow">Get in touch</p>
            <a href="mailto:info@ballarathindutemple.org.au">info@ballarathindutemple.org.au</a>
            <a href="tel:+61353000000">+61 3 5300 0000</a>
            <p>110 Vaggs Road<br />Ross Creek, VIC 3351<br />Australia</p>
          </div>
        </div>
        <div className="page-wrap site-footer__bottom"><span>Ballarat Hindu Temple & Cultural Centre Incorporated</span><span>ABN 13 397 829 440</span><span>© BHTCC</span></div>
      </footer>
    </div>
  );
}