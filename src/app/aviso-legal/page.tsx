import type { Metadata } from "next";
import { BlogShell, LegalText, PageTitle } from "@/components/sites/gesfinc/blog/layout";
import { avisoLegalHtml } from "@/components/sites/gesfinc/blog/legal-content";

export const metadata: Metadata = {
  title: "Aviso Legal – Gesfinc Canarias",
  description: "Aviso legal y condiciones de uso de la web de GESFINC CANARIAS S.L.",
};

export default function AvisoLegalPage() {
  return (
    <BlogShell footer className="gf-bl--srcfooter">
      <PageTitle title="Aviso Legal" />
      <div className="gf-bl-wrap gf-bl-legal">
        <LegalText html={avisoLegalHtml} />
      </div>
    </BlogShell>
  );
}
