import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/pages.css";
import "@/components/sites/gesfinc/empresa-extra/empresa-extra.css";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { exFonts } from "@/components/sites/gesfinc/empresa-extra/fonts";
import { ExFooterGap, ExHero } from "@/components/sites/gesfinc/empresa-extra/hero";
import { ExGallery } from "@/components/sites/gesfinc/empresa-extra/gallery";
import { galleries } from "@/components/sites/gesfinc/empresa-extra/galleries";
import { MeetingSlider } from "@/components/sites/gesfinc/empresa-extra/meeting-slider";
import { OpinionBand } from "@/components/sites/gesfinc/empresa-extra/opinion-band";

export const metadata: Metadata = {
  title: "Recursos Humanos y materiales – Gesfinc Canarias",
  description:
    "GESFINC ofrece a sus empleados un entorno dinámico, donde se valoran sus ideas, y cuenta con herramientas y recursos propios.",
};

export default function RecursosPage() {
  return (
    <main className={`gf gf-ex ${exFonts}`}>
      <ExHero title="Recursos Humanos y materiales" low>
        GESFINC ofrece a sus empleados un entorno dinámico, donde se valoran sus
        ideas, en el que su futuro profesional depende de ellos y de su
        capacidad. Les ofrecemos formar parte de un equipo ganador,
        concienciados de que GESFINC presta un servicio esencial para la
        comunidad. Esta es una responsabilidad conocida y asumida por todos
        quienes trabajamos en esta Empresa.
        <br />
        <br />
        Una gran empresa se hace siempre con un equipo humano que trabaja en la
        consecución de un mismo objetivo. Procuramos cubrir todos los servicios
        y necesidades en la gestión de administración de Fincas que el cliente
        pueda necesitar a través de un servicio eficiente y eficaz.
      </ExHero>

      <section className="gf-ex-gallery-sec">
        <ExGallery images={galleries.recursos} />
      </section>

      <section className="gf-ex-content">
        <div className="gf-container">
          <div className="gf-ex-pad gf-ex-copy">
            <p>
              Consideramos que la implicación de una formación continua de
              nuestro personal a todos los niveles es fundamental para conseguir
              un servicio de calidad que satisfaga las expectativas del cliente.
            </p>
            <p>
              Entre nuestros recursos materiales, contamos con todas las
              herramientas y recursos propios, incluyendo nueve vehículos, para
              la ejecución de los trabajos de mantenimiento demandados nuestros
              clientes, e incluso para la ejecución de reformas de albañilería,
              electricidad, fontanería y terminados en escayola y yeso.
            </p>
          </div>
        </div>
      </section>

      <MeetingSlider withRule />
      <OpinionBand />
      <ExFooterGap />
      <SiteFooter />
    </main>
  );
}
