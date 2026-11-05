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

export const metadata: Metadata = {
  title: "¿Dónde estamos? – Gesfinc Canarias",
  description:
    "Oficina de Gesfinc Canarias en La Orotava, Tenerife: Calle Juan Ortiz de Zárate 6, Edificio Mencey – Local A Peatonal.",
};

export default function DondeEstamosPage() {
  return (
    <main className={`gf gf-ct ${ctFonts}`}>
      {/* The source wraps this title in a broken Zoom shortcode link; rendered as plain text. */}
      <PageHero title="¿Dónde estamos?">
        Gesfinc Canarias se encuentra en la isla de Tenerife, con sedes en el
        norte y el sur de la isla haciendo más cercano el trato con nuestros
        clientes de cualquier parte de la isla o dezplazandonos a otras islas.
        <br />
        <br />
        <ContactLine prefix="Puede" />
      </PageHero>

      <section className="gf-container gf-ct-card gf-ct-card--office">
        <div className="gf-ct-office">
          <div className="gf-ct-office-text">
            <h2>TENERIFE – SANTA CRUZ</h2>
            <br />
            <br />
            <b>Oficina</b>
            <br />
            Calle Juan Ortiz de Zárate 6
            <br />
            Edificio Mencey – Local A Peatonal
            <br />
            38300 La Orotava
            <br />
            <b>Teléfono</b>: <a href="tel:+34922975075">922975075</a>
            <br />
            <b>FAX</b>: 922 32 50 48
            <br />
            <b>E-mail</b>: <a href="mailto:info@gesfinc.es">info@gesfinc.es</a>
          </div>
          <div className="gf-ct-map">
            <iframe
              src="https://maps.google.com/maps?q=Gesfinc&t=m&z=15&output=embed&iwloc=near"
              title="Gesfinc"
              aria-label="Gesfinc"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <RedButtons
        className="gf-ct-btns--office"
        items={[
          { label: "Servicios", href: "/servicios" },
          { label: "Contactar", href: "/contactar" },
          { label: "Pedir presupuesto", href: "/pedir-presupuesto" },
        ]}
      />

      <SiteFooter />
    </main>
  );
}
