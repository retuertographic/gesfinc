import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/contacto/contacto.css";
import { Header } from "@/components/sites/gesfinc/header";
import { SiteFooter } from "@/components/sites/gesfinc/shared";

export const metadata: Metadata = {
  title: "Sala de Juntas – Gesfinc Canarias",
  description:
    "Sala de Juntas por videoconferencia de Gesfinc Canarias: los clientes necesitan tener instalada la App de Gesfinc en su móvil.",
};

/**
 * On the source this page's own content (two app-store buttons) is hidden on every device, so it shows only the
 * header template laid over the footer's blue "Sala de Juntas Videoconferencia" band, followed by the footer.
 */
export default function SalaDeJuntasPage() {
  return (
    <main className="gf gf-ct gf-ct-sala">
      <div className="gf-ct-sala-head">
        <Header />
      </div>
      {/* Source quirk: the band's top divider loses its fill colour here and shows as a black wedge under the logo. */}
      <svg
        className="gf-ct-sala-wedge"
        viewBox="0 0 500 53"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 H500 V5 L0,53 Z" />
      </svg>
      <SiteFooter />
    </main>
  );
}
