import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/pages.css";
import "@/components/sites/gesfinc/empresa-extra/empresa-extra.css";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { exFonts } from "@/components/sites/gesfinc/empresa-extra/fonts";
import {
  ExFooterGap,
  ExHero,
} from "@/components/sites/gesfinc/empresa-extra/hero";
import { ExGallery } from "@/components/sites/gesfinc/empresa-extra/gallery";
import { galleries } from "@/components/sites/gesfinc/empresa-extra/galleries";
import { MeetingSlider } from "@/components/sites/gesfinc/empresa-extra/meeting-slider";

export const metadata: Metadata = {
  title: "¿Por qué Gesfinc Canarias? – Gesfinc Canarias",
  description:
    "Gesfinc Canarias pretende que se le reconozca con una empresa de Servicio Integral para Comunidades de Propietarios.",
};

export default function PorQueGesfincPage() {
  return (
    <main className={`gf gf-ex ${exFonts}`}>
      <ExHero title="¿Por qué Gesfinc Canarias?">
        Gesfinc Canarias pretende que se le reconozca con una empresa de
        Servicio Integral para Comunidades de Propietarios.
        <br />
        <br />
        Nuestro libro de estilo de la administración de fincas, 15 años de
        experiencia y crecimiento nos han permitido alcanzar una cuota
        considerable del mercado con más de 250 comunidades en Canarias.
      </ExHero>

      <section className="gf-ex-gallery-sec">
        <ExGallery images={galleries.porQue} />
      </section>

      <section className="gf-ex-content">
        <div className="gf-container">
          <h1 className="gf-ex-title">¿Qué nos caracteriza?</h1>
          <div className="gf-ex-cols gf-ex-copy">
            <div>
              <p>Los cimientos del éxito alcanzado descansan en:</p>
              <ul>
                <li>
                  La <strong>seriedad</strong> del trato que dispensamos a
                  nuestros clientes.
                </li>
                <li>
                  El <strong>rigor profesional</strong>: la plena competencia y
                  el amplio conocimiento en materia de administración de fincas.
                </li>
                <li>
                  La <strong>calidad</strong> de los servicios suministrados que
                  usted puede medir por el grado de cumplimiento en tiempo, en
                  forma y en resultados.
                </li>
              </ul>
            </div>
            <div>
              <p>
                La satisfacción proporcionada a los clientes mediante la
                aplicación de estas premisas son nuestro principal argumento
                empresarial. También son el motivo por el que la capacidad de
                Gesfinc alcanza a dar cobertura de servicios de calidad a
                comunidades en Canarias. Si aún no es cliente de Gesfinc,
                pregunte a quienes ya lo son, seguro que alguno le queda muy
                cerca.
              </p>
              <p>
                En resumen, GESFINC existe porque usted tiene derecho al mejor
                servicio posible y eso nos hace diferentes e imprescindibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MeetingSlider />
      <ExFooterGap />
      <SiteFooter />
    </main>
  );
}
