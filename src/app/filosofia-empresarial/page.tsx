/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/pages.css";
import "@/components/sites/gesfinc/empresa-extra/empresa-extra.css";
import { IMG } from "@/components/sites/gesfinc/data";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { exFonts } from "@/components/sites/gesfinc/empresa-extra/fonts";
import {
  ExFooterGap,
  ExHero,
} from "@/components/sites/gesfinc/empresa-extra/hero";
import { ExGallery } from "@/components/sites/gesfinc/empresa-extra/gallery";
import { galleries } from "@/components/sites/gesfinc/empresa-extra/galleries";
import { MeetingSlider } from "@/components/sites/gesfinc/empresa-extra/meeting-slider";
import { OpinionBand } from "@/components/sites/gesfinc/empresa-extra/opinion-band";

export const metadata: Metadata = {
  title: "Filosofía empresarial – Gesfinc Canarias",
  description:
    "Somos conscientes de que la seriedad y rigurosidad de una empresa equivale a la calidad del servicio que presta.",
};

// Three columns of two photos each (source order, column by column).
const team: [string, number, number][][] = [
  [
    ["DSC_1673-300x200-1.jpg", 300, 200],
    ["SLA_7464-700x460-1.jpg", 700, 460],
  ],
  [
    ["SLA_7492-300x200-1.jpg", 300, 200],
    ["SLA_7484-300x200-1.jpg", 300, 200],
  ],
  [
    ["DSC_1833-300x200-1.jpg", 300, 200],
    ["SLA_7495-300x200-1.jpg", 300, 200],
  ],
];

export default function FilosofiaPage() {
  return (
    <main className={`gf gf-ex ${exFonts}`}>
      <ExHero title="Filosofía empresarial" low>
        Somos conscientes de que la seriedad y rigurosidad de una empresa
        equivale a la calidad del servicio que presta, siendo ésta nuestra razón
        de ser, procurando en todo momento la satisfacción del cliente; por lo
        tanto la filosofía empresarial es moderna y progresiva, así conseguimos
        diferenciarnos de otras Administraciones, demostrando así una forma
        clara de administrar las comunidades de propietarios siendo nuestros
        propios clientes quienes nos avalan.
        <br />
        <br />
        GESFINC ofrece a sus empleados un entorno dinámico, donde se valoran sus
        ideas, en el que su futuro profesional depende de ellos y de su
        capacidad. Les ofrecemos formar parte de un equipo ganador,
        concienciados de que GESFINC presta un servicio esencial para la
        comunidad. Esta es una responsabilidad conocida y asumida por todos
        quienes trabajamos en esta Empresa.
      </ExHero>

      <section className="gf-ex-gallery-sec">
        <ExGallery images={galleries.filosofia} />
      </section>

      <section className="gf-ex-content">
        <div className="gf-container">
          <h1 className="gf-ex-title">Equipo Humano</h1>
          <div className="gf-ex-pad gf-ex-copy">
            <p>
              Una gran empresa se hace siempre con un equipo humano que trabaja
              en la consecución de un mismo objetivo. Procuramos cubrir todos
              los servicios y necesidades en la gestión de administración de
              Fincas que el cliente pueda necesitar a través de un servicio
              eficiente y eficaz. Consideramos que la implicación de una
              formación continua de nuestro personal a todos los niveles es
              fundamental para conseguir un servicio de calidad que satisfaga
              las expectativas del cliente
            </p>
          </div>
          <div className="gf-ex-grid">
            {team.map((col) => (
              <div key={col[0][0]}>
                {col.map(([src, w, h]) => (
                  <img
                    key={src}
                    src={`${IMG}/${src}`}
                    alt=""
                    width={w}
                    height={h}
                    loading="lazy"
                  />
                ))}
              </div>
            ))}
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
