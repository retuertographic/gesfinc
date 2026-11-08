import { withBase } from "@/lib/base-path";
import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/contacto/contacto.css";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { ctFonts } from "@/components/sites/gesfinc/contacto/fonts";
import {
  ContactLine,
  PageHero,
  RedButtons,
} from "@/components/sites/gesfinc/contacto/parts";
import { BudgetForm } from "@/components/sites/gesfinc/contacto/forms";

export const metadata: Metadata = {
  title: "Pedir Presupuesto – Gesfinc Canarias",
  description:
    "Pide a Gesfinc Canarias un presupuesto sin compromiso para la administración de tu comunidad de propietarios.",
};

export default function PedirPresupuestoPage() {
  return (
    <main className={`gf gf-ct ${ctFonts}`}>
      <PageHero title="Pedir Presupuesto">
        ¿Te has decidido? Pidemos un presupuesto sin compromiso ninguno y
        nosotros responderemos en el periodo más breve de tiempo.
        <br />
        <br />
        <ContactLine prefix="¿Tienes dudas? Recuerda que siempre puede" />
      </PageHero>

      {/* On the source this column has a shadow but no background, so the hero's V shows between the fields. */}
      <section className="gf-container gf-ct-card gf-ct-card--budget">
        <BudgetForm />
      </section>

      <RedButtons
        className="gf-ct-btns--under"
        items={[
          { label: "Servicios", href: withBase("/servicios") },
          { label: "Contactar", href: withBase("/contactar") },
          { label: "Oficinas", href: withBase("/donde-estamos") },
        ]}
      />

      <SiteFooter />
    </main>
  );
}
