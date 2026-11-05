import type { Metadata } from "next";
import { BlogShell, PageTitle } from "@/components/sites/gesfinc/blog/layout";
import { ConsentManager } from "@/components/sites/gesfinc/blog/consent-manager";
import {
  cookiesAfterConsentHtml,
  cookiesBeforeConsentHtml,
} from "@/components/sites/gesfinc/blog/legal-content";

export const metadata: Metadata = {
  title: "Política de cookies (UE) – Gesfinc Canarias",
  description: "Política de cookies de gesfinc.com: qué cookies usamos y cómo gestionar tu consentimiento.",
};

export default function PoliticaCookiesPage() {
  return (
    <BlogShell>
      <PageTitle title="Política de cookies (UE)" />
      <div className="gf-bl-wrap gf-bl-legal">
        <div className="gf-bl-text gf-bl-doc">
          <div dangerouslySetInnerHTML={{ __html: cookiesBeforeConsentHtml }} />
          <ConsentManager />
          <div dangerouslySetInnerHTML={{ __html: cookiesAfterConsentHtml }} />
        </div>
      </div>
    </BlogShell>
  );
}
