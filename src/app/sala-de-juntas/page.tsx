import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/contacto/contacto.css";
import { Icon } from "@/components/sites/gesfinc/icons";
import { apps } from "@/components/sites/gesfinc/data";
import { PageHero } from "@/components/sites/gesfinc/contacto/parts";
import { ctFonts } from "@/components/sites/gesfinc/contacto/fonts";
import { SiteFooter } from "@/components/sites/gesfinc/shared";

export const metadata: Metadata = {
  title: "Sala de Juntas – Gesfinc Canarias",
  description:
    "Sala de Juntas por videoconferencia de Gesfinc Canarias: los clientes necesitan tener instalada la App de Gesfinc en su móvil.",
};

/**
 * Improved over the source (whose own content is hidden, leaving only the header over the footer band):
 * a proper page hero that explains the service and offers the two app-store buttons the page was built around.
 */
export default function SalaDeJuntasPage() {
  return (
    <main className={`gf gf-ct gf-ct--sala ${ctFonts}`}>
      <PageHero title="Sala de Juntas">
        <p>
          Abrimos nuestro nuevo servicio de Juntas a través de videoconferencia,
          para ello los clientes deberán tener instalada nuestra App en su
          dispositivo móvil.
        </p>
        <div className="gf-ct-sala-apps">
          <a className="gf-ct-sala-app" href={apps.ios}>
            <Icon name="apple" /> Descargar para iOS
          </a>
          <a className="gf-ct-sala-app" href={apps.android}>
            <Icon name="android" /> Descargar para Android
          </a>
        </div>
      </PageHero>
      <div className="gf-ct-sala-gap" aria-hidden="true" />
      <SiteFooter meeting={false} />
    </main>
  );
}
