import type { ReactNode } from "react";
import { Header } from "../header";
import { Shape, V_SHAPE } from "../shared";

/**
 * Blue hero used by Contactar, Pedir Presupuesto, ¿Dónde estamos? and Noticias (Elementor section "bbe4774"/"42d90f7"):
 * header template 5204 laid over a rgba(44,61,132,.91) section, Poppins title + 70%-white lead, 116px V divider.
 */
export function PageHero({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="gf-ct-hero">
      <Header />
      <div className="gf-container gf-ct-hero-body">
        <h1>{title}</h1>
        <div className="gf-ct-hero-lead">{children}</div>
      </div>
      <Shape d={V_SHAPE} position="bottom" className="gf-ct-hero-shape" />
    </section>
  );
}

/** The lead's second paragraph, shared by three pages. The source's two broken links are fixed here (see notes). */
export function ContactLine({ prefix }: { prefix: string }) {
  return (
    <>
      {prefix} <a href="/contactar">contactar</a> con nosotros vía{" "}
      <a href="tel:+34922975075">telefónica</a> o bien por{" "}
      <a href="mailto:info@gesfinc.es">correo electrónico</a>.
    </>
  );
}

/** Row of three red Elementor buttons (#B91E2B) closing each contact page. */
export function RedButtons({
  items,
  className,
}: {
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <section className={`gf-ct-btns${className ? ` ${className}` : ""}`}>
      {items.map((b) => (
        <div key={b.label}>
          <a className="gf-ct-btn" href={b.href}>
            {b.label}
          </a>
        </div>
      ))}
    </section>
  );
}
