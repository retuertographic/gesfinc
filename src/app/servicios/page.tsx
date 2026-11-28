/* eslint-disable @next/next/no-img-element */
import { withBase } from "@/lib/base-path";
import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/pages.css";
import { Header } from "@/components/sites/gesfinc/header";
import { Icon } from "@/components/sites/gesfinc/icons";
import { IMG } from "@/components/sites/gesfinc/data";
import { Shape, SiteFooter, V_SHAPE } from "@/components/sites/gesfinc/shared";
import { ScrollDrift } from "@/components/sites/gesfinc/scroll-drift";
import { InfoRequestForm } from "@/components/sites/gesfinc/info-form";

export const metadata: Metadata = {
  title: "Servicios – Gesfinc Canarias",
  description:
    "Servicios de Gesfinc Canarias para comunidades de propietarios: administración de fincas, servicio integral, asesoría jurídica y más.",
};

const heroList = [
  {
    label: "Administrador de Fincas",
    href: withBase("/servicios/administrador-de-fincas"),
  },
  {
    label: "Servicio Integral",
    href: withBase("/servicios/servicio-integral"),
  },
  {
    label: "Asesoría Jurídica Integral",
    href: withBase("/servicios/asesoria-juridica-integral"),
  },
  { label: "Inmobiliaria", href: withBase("/inmobiliaria") },
  { label: "Otros servicios", href: "#otros-servicios" },
];

const others: { title: string; href: string; image: string | null }[] = [
  {
    title: "Limpieza",
    href: withBase("/servicios/limpieza"),
    image: "GESFINC-170509-121-300x200-1.webp",
  },
  {
    title: "Mantenimiento",
    href: withBase("/servicios/mantenimiento"),
    image: "GESFINC-170509-83-300x200-1.webp",
  },
  {
    title: "Jardinería",
    href: withBase("/servicios/jardineria"),
    image: "DSC_1833-300x200-1.webp",
  },
  {
    title: "Seguros",
    href: withBase("/servicios/seguros"),
    image: "Seguro-WEB-700x460-1.webp",
  },
  {
    title: "Inmobiliaria",
    href: withBase("/inmobiliaria"),
    image: "Inmobiliaria-WEB-700x460-1.webp",
  },
  {
    title: "Certificados electrónicos",
    href: withBase("/servicios/certificados-electronicos"),
    image:
      "certificados-digitales-eadministracion-publica-iesa-004-800x600-1.webp",
  },
  {
    title: "Certificaciones energéticas",
    href: withBase("/servicios/certificaciones-energeticas"),
    image: "GESFINC-170104-58-700x460-1.webp",
  },
];

function MoreButton({ href, about }: { href: string; about: string }) {
  return (
    <a className="gf-sv-btn" href={href}>
      Más información<span className="sr-only"> sobre {about}</span>{" "}
      <Icon name="arrow-right" />
    </a>
  );
}

export default function ServiciosPage() {
  return (
    <main className="gf gf-sv">
      <section className="gf-hero gf-sv-hero">
        <Header />
        <div className="gf-container gf-sv-hero-body">
          <div className="gf-sv-hero-text">
            <h1>Servicios</h1>
            <p>
              Ponemos a disposición de todos los clientes de Gesfinc, una serie
              de servicios que harán posible la buena gestión de su comunidad de
              propietarios
            </p>
            <ul className="gf-sv-checks">
              {heroList.map((item) => (
                <li key={item.label}>
                  <Icon name="chevron-right" />
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="gf-sv-hero-art">
            <img
              loading="eager"
              decoding="async"
              className="gf-sv-hero-circle"
              src={`${IMG}/service1_red_circle.webp`}
              alt=""
              width={408}
              height={405}
            />
            <img
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="gf-sv-hero-photo gf-sv-shadow"
              src={`${IMG}/SLA_7464-700x460-1.webp`}
              alt=""
              width={680}
              height={447}
            />
          </div>
        </div>
        <Shape d={V_SHAPE} position="bottom" className="gf-sv-hero-shape" />
      </section>

      <section className="gf-container gf-sv-intro">
        <p>
          <strong>
            Trabajamos cada día, para dar a nuestros clientes el asesoramiento
            más adecuado a sus necesidades, con la máxima profesionalidad y
            transparencia en cada una de nuestras actuaciones.
          </strong>
        </p>
      </section>

      <section className="gf-sv-row gf-sv-row--1">
        <div className="gf-sv-text">
          <h2>
            Administración
            <br />
            de Fincas
          </h2>
          <div className="gf-sv-copy">
            <p>
              Este Departamento se encarga de gestionar todas las actividades
              relacionadas con la Administración
            </p>
            <ul>
              <li>Secretaría de la Comunidad</li>
              <li>Economía</li>
              <li>Servicios</li>
            </ul>
          </div>
          <MoreButton
            href={withBase("/servicios/administrador-de-fincas")}
            about="Administración de Fincas"
          />
        </div>
        <div className="gf-sv-media">
          <ScrollDrift
            distance={-100}
            className="gf-sv-photo"
            style={{ left: -6, top: -90 }}
          >
            <img
              loading="lazy"
              decoding="async"
              className="gf-sv-shadow"
              src={`${IMG}/SLA_7449-700x460-1.webp`}
              alt=""
              width={598}
              height={393}
            />
          </ScrollDrift>
        </div>
      </section>

      <section className="gf-sv-row gf-sv-row--2">
        <div className="gf-sv-media gf-sv-media--wide">
          <img
            loading="lazy"
            decoding="async"
            className="gf-sv-circle"
            src={`${IMG}/service1_red_circle.webp`}
            alt=""
            width={418}
            height={415}
          />
          <ScrollDrift
            distance={-100}
            className="gf-sv-photo"
            style={{ left: -112, top: -45 }}
          >
            <img
              loading="lazy"
              decoding="async"
              className="gf-sv-shadow"
              src={`${IMG}/SLA_7464-700x460-1.webp`}
              alt=""
              width={598}
              height={393}
            />
          </ScrollDrift>
        </div>
        <div className="gf-sv-text">
          <h2>Servicio Integral</h2>
          <div className="gf-sv-copy">
            <p>
              En Gesfinc Canarias, tenemos el firme propósito de suministrarle
              todos los servicios propios de la gestión de comunidades sin
              necesidad de recurrir a subcontratas, salvo en el caso de
              servicios muy específicos o puntuales.
            </p>
          </div>
          <MoreButton
            href={withBase("/servicios/servicio-integral")}
            about="Servicio Integral"
          />
        </div>
      </section>

      <section className="gf-sv-row gf-sv-row--3">
        <div className="gf-sv-text">
          <h2>Asesoría Juridica</h2>
          <div className="gf-sv-copy">
            <p>
              Gesfinc Canarias le proporciona la mejor asistencia jurídica de
              Canarias. En todo lo relativo Propiedad Horizontal, Gesfinc
              dispone de los letrados más experimentados y prestigiosos, que
              ostentan el privilegio de impartir clases en la Universidad de La
              Laguna y de ostentar un Master en Propiedad Horizontal por la
              Universidad de Valencia.
            </p>
          </div>
          <MoreButton
            href={withBase("/servicios/asesoria-juridica-integral")}
            about="Asesoría Jurídica"
          />
        </div>
        <div className="gf-sv-media">
          <ScrollDrift
            distance={-100}
            className="gf-sv-photo"
            style={{ left: -6, top: -98 }}
          >
            <img
              loading="lazy"
              decoding="async"
              className="gf-sv-shadow"
              src={`${IMG}/SLA_7474-700x460-1.webp`}
              alt=""
              width={598}
              height={393}
            />
          </ScrollDrift>
        </div>
      </section>

      <section className="gf-container gf-sv-others" id="otros-servicios">
        <div className="gf-sv-others-head">
          <h2 className="gf-arial">Otros servicios de Gesfinc Canarias</h2>
          <p>
            Cada Comunidad de propietarios es diferente y puede tener unas
            necesidades especiales, por eso en Gesfinc Canarias estudiamos cada
            caso para ofrecerte los mejores servicios que más se amolden a las
            características de tu Comunidad.
          </p>
        </div>
        <div className="gf-sv-grid">
          {others.map((o) => (
            <article key={o.title}>
              <a
                className={`gf-sv-thumb${o.image ? "" : " gf-sv-thumb--empty"}`}
                href={o.href}
                aria-label={o.title}
              >
                <img
                  decoding="async"
                  src={o.image ? `${IMG}/${o.image}` : `${IMG}/default.svg`}
                  alt=""
                  loading="lazy"
                />
              </a>
              <h3>
                <a href={o.href}>{o.title}</a>
              </h3>
              <div className="gf-sv-sub">Servicios</div>
            </article>
          ))}
        </div>
      </section>

      <section className="gf-container gf-sv-form">
        <h2 className="gf-arial">Petición de información</h2>
        <InfoRequestForm />
      </section>

      <SiteFooter />
    </main>
  );
}
