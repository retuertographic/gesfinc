import type { ReactNode } from "react";
import "../gesfinc.css";
import "../pages.css";
import "./blog.css";
import { Header } from "../header";
import { SiteFooter } from "../shared";
import { CookieBanner, ToTop } from "../widgets";

/**
 * Theme "plain" page shell: white header (Elementor header 5196), optional shared footer (Elementor footer 5211).
 * Pages without the footer on the source still get the back-to-top button and the cookie dialog.
 */
export function BlogShell({
  children,
  footer = false,
  className,
}: {
  children: ReactNode;
  footer?: boolean;
  className?: string;
}) {
  return (
    <main className={`gf gf-bl${className ? ` ${className}` : ""}`}>
      <Header variant="white" />
      <div className="gf-bl-top" aria-hidden="true" />
      {children}
      {footer ? (
        <SiteFooter />
      ) : (
        <>
          <ToTop />
          <CookieBanner />
        </>
      )}
    </main>
  );
}

/** Grey title band (#page-header without a featured image). */
export function PageTitle({ title }: { title: string }) {
  return (
    <div className="gf-bl-title">
      <div className="gf-bl-wrap">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

/** Legal text taken verbatim from the WordPress content (static, trusted HTML). */
export function LegalText({ html }: { html: string }) {
  return (
    <div className="gf-bl-text" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
