import type { Metadata } from "next";
import { BlogShell, LegalText, PageTitle } from "@/components/sites/gesfinc/blog/layout";
import { privacidadHtml } from "@/components/sites/gesfinc/blog/legal-content";

export const metadata: Metadata = {
  title: "Política de privacidad – Gesfinc Canarias",
  description: "Política de privacidad y tratamiento de datos personales de GESFINC CANARIAS S.L.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <BlogShell footer className="gf-bl--srcfooter">
      <PageTitle title="Política de privacidad" />
      <div className="gf-bl-wrap gf-bl-legal">
        <LegalText html={privacidadHtml} />
      </div>
    </BlogShell>
  );
}
