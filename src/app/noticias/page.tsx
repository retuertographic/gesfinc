import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/contacto/contacto.css";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { ctFonts } from "@/components/sites/gesfinc/contacto/fonts";
import {
  ContactLine,
  PageHero,
} from "@/components/sites/gesfinc/contacto/parts";
import { NewsMasonry } from "@/components/sites/gesfinc/contacto/news";

export const metadata: Metadata = {
  title: "Noticias – Gesfinc Canarias",
  description:
    "Mantente al día de todas las noticias de Gesfinc Canarias, administración de fincas en Tenerife.",
};

export default function NoticiasPage() {
  return (
    <main className={`gf gf-ct ${ctFonts}`}>
      <PageHero title="Noticias">
        Mantente al día de todas las noticias de Gesfinc Canarias
        <br />
        <br />
        <ContactLine prefix="¿Tienes dudas? Recuerda que siempre puede" />
      </PageHero>

      <section className="gf-container gf-ct-newswrap">
        <NewsMasonry />
      </section>

      <SiteFooter />
    </main>
  );
}
