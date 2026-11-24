import type { Metadata } from "next";
import { BlogShell, PageTitle } from "@/components/sites/gesfinc/blog/layout";
import { IncidentForm } from "@/components/sites/gesfinc/blog/incident-form";

export const metadata: Metadata = {
  title: "Comunicación de incidencias – Gesfinc Canarias",
  description: "Comunica una incidencia de tu comunidad a Gesfinc Canarias.",
};

export default function FormularioContactoAppPage() {
  return (
    <BlogShell className="gf-bl-appform">
      <PageTitle title="Comunicación de incidencias" />
      <div className="gf-bl-form-wrap">
        <IncidentForm />
      </div>
    </BlogShell>
  );
}
