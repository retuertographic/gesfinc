/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/pages.css";
import "@/components/sites/gesfinc/empresa-extra/empresa-extra.css";
import { IMG } from "@/components/sites/gesfinc/data";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { exFonts } from "@/components/sites/gesfinc/empresa-extra/fonts";
import { ExHero } from "@/components/sites/gesfinc/empresa-extra/hero";
import { PropertySearch } from "@/components/sites/gesfinc/empresa-extra/property-search";

export const metadata: Metadata = {
  title: "Inmobiliaria – Gesfinc Canarias",
  description:
    "Gesfinc Canarias, pone a disposición de los propietarios que forman parte de las comunidades el servicio de mediación en la compraventa de pisos, locales, garajes y otros bienes inmuebles.",
};

const POST = "/proximamente-juntas-por-videoconferencia";

export default function InmobiliariaPage() {
  return (
    <main className={`gf gf-ex ${exFonts}`}>
      <ExHero title="Inmobiliaria" compact>
        Gesfinc Canarias, pone a disposición de los propietarios que forman
        parte de las comunidades el servicio de mediación en la compraventa de
        pisos, locales, garajes y otros bienes inmuebles.
      </ExHero>

      <section className="gf-container gf-ex-inmo">
        <div className="gf-ex-inmo-main">
          {/* The source's WPCasa listing has no published properties, so it shows this message. */}
          <p>
            Lo sentimos, pero no hay coincidencias en el listado con los
            criterios de esta búsqueda.
          </p>
          {/* Stray "." left after the shortcode on the source. */}
          <p className="gf-ex-dot">.</p>
        </div>
        <aside className="gf-ex-inmo-side">
          <h2>Búsqueda</h2>
          <PropertySearch />
          <article className="gf-ex-card">
            <a className="gf-ex-card-thumb" href={POST} tabIndex={-1}>
              <img
                src={`${IMG}/AdobeStock_340095251-Videoconferencia-270x154-1.jpg`}
                alt=""
                width={270}
                height={154}
                loading="lazy"
              />
              <span className="gf-ex-card-badge">Noticias</span>
            </a>
            <div className="gf-ex-card-avatar">
              <img
                src={`${IMG}/gravatar-mm-200.jpg`}
                alt="X-Net"
                width={60}
                height={60}
                loading="lazy"
              />
            </div>
            <div className="gf-ex-card-text">
              <h3>
                <a href={POST}>Próximamente: Juntas por videoconferencia</a>
              </h3>
              <p>
                Desde que el pasado 11 de marzo la Organización Mundial de la
                Salud declaró la situación de pandemia en todo el mundo son
                muchas las medidas que se han ido adoptando para paliar sus
                efectos. En la actualidad estamos trabajando
              </p>
            </div>
            <div className="gf-ex-card-meta">
              {/* The source spans keep a trailing space before the "•" separator. */}
              <span>{"11 junio, 2020 "}</span>
              <span>{"No hay comentarios "}</span>
            </div>
          </article>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
