import type { ReactNode } from "react";
import { Header } from "../header";
import { Shape, V_SHAPE } from "../shared";

/**
 * Blue hero of the Avante "page header" template (Elementor header 5204 laid over a coloured section):
 * Poppins 50px title, Poppins 20px text at 70% white and a 110px V-shaped divider.
 * `compact` = 140px bottom padding (Inmobiliaria) instead of 400px (pages followed by an overlapping gallery).
 */
export function ExHero({
  title,
  children,
  compact = false,
  low = false,
}: {
  title: string;
  children: ReactNode;
  compact?: boolean;
  /** Recursos / Filosofía: the title sits 30px lower on mobile than on the other two pages (measured). */
  low?: boolean;
}) {
  const mods = `${compact ? " gf-ex-hero--compact" : ""}${low ? " gf-ex-hero--low" : ""}`;
  return (
    <section className={`gf-hero gf-ex-hero${mods}`}>
      <Header />
      <div className="gf-container gf-ex-hero-body">
        <h1>{title}</h1>
        <div className="gf-ex-hero-text">{children}</div>
      </div>
      <Shape d={V_SHAPE} position="bottom" className="gf-ex-hero-shape" />
    </section>
  );
}

/** White 200px gap before the footer (source: section b568a22 with a spacer and a white 10px divider). */
export function ExFooterGap() {
  return <div className="gf-ex-gap" aria-hidden="true" />;
}
