import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type EditorialSection = {
  number: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  note?: string;
};

export function EditorialPage({
  eyebrow,
  title,
  intro,
  sections,
  aside,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: EditorialSection[];
  aside?: string;
  cta?: { label: string; to: "/contact" | "/volunteer" | "/donations" | "/membership" | "/temple-project" };
}) {
  return (
    <>
      <section className="editorial-hero page-wrap">
        <div className="editorial-hero__topline"><span className="eyebrow">{eyebrow}</span><span className="editorial-hero__index">BHTCC / Ballarat, Victoria</span></div>
        <h1>{title}</h1>
        <div className="editorial-hero__bottom"><p>{intro}</p><span className="editorial-hero__rule" /></div>
      </section>
      <section className="editorial-body page-wrap">
        <div className="editorial-body__sections">
          {sections.map((section) => (
            <article className="editorial-section" key={section.number}>
              <div className="editorial-section__number">{section.number}</div>
              <div className="editorial-section__content">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && <ul className="editorial-list">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.note && <p className="editorial-note">{section.note}</p>}
              </div>
            </article>
          ))}
        </div>
        {aside && <aside className="editorial-aside"><span className="editorial-aside__line" /><p>{aside}</p><Link className="text-link" to="/contact">Contact BHTCC <ArrowUpRight aria-hidden="true" /></Link></aside>}
      </section>
      {cta && <section className="editorial-cta"><div className="page-wrap editorial-cta__inner"><p className="eyebrow eyebrow--light">Continue the conversation</p><h2>Be part of what<br />comes next.</h2><Link className="editorial-cta__link" to={cta.to}>{cta.label}<ArrowRight aria-hidden="true" /></Link></div></section>}
    </>
  );
}