/* eslint-disable @next/next/no-img-element */
import { withBase } from "@/lib/base-path";
import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/pages.css";
import { Header } from "@/components/sites/gesfinc/header";
import { Icon } from "@/components/sites/gesfinc/icons";
import { IMG } from "@/components/sites/gesfinc/data";
import { SiteFooter } from "@/components/sites/gesfinc/shared";

export const metadata: Metadata = {
  title: "Empresa – Gesfinc Canarias",
  description:
    "Quiénes somos: Gesfinc Canarias, empresa de administración de fincas y comunidades de propietarios en el norte de Tenerife desde 2001.",
};

function CircleLink({
  href,
  label,
  color,
  iconFirst,
}: {
  href: string;
  label: string;
  color: string;
  iconFirst?: boolean;
}) {
  const icon = (
    <span className="gf-em-circle" style={{ background: color }}>
      <Icon name="long-arrow-alt-right" />
    </span>
  );
  return (
    <a
      className={`gf-em-more${iconFirst ? " gf-em-more--icon-first" : ""}`}
      href={href}
    >
      {iconFirst && icon}
      <span>{label}</span>
      {!iconFirst && icon}
    </a>
  );
}

export default function EmpresaPage() {
  return (
    <main className="gf gf-em">
      <Header variant="white" />

      <section className="gf-container gf-em-intro">
        <div>
          <h1 className="gf-arial">Quiénes Somos</h1>
          <p>
            GesFinc es una empresa canaria que fue constituida en el año 2001,
            por 2 socios fundadores, y que actualmente se encuentra formada por
            24 trabajadores, dedicada al sector de la gestión de fincas y
            comunidad de propietarios, la cual está situada en la zona norte de
            la isla de Tenerife.
          </p>
        </div>
      </section>

      <section className="gf-em-admin">
        <img
          className="gf-em-dots gf-em-dots--1"
          src={`${IMG}/home3_oval_bg.png`}
          alt=""
        />
        <img
          className="gf-em-dots gf-em-dots--2"
          src={`${IMG}/home3_oval_bg.png`}
          alt=""
        />
        <div className="gf-container gf-em-admin-inner">
          <div className="gf-em-admin-text">
            <h2 className="gf-em-kicker">Servicios</h2>
            <h2 className="gf-arial gf-em-title">ADMINISTRACIÓN DE FINCAS</h2>
            <p className="gf-em-lead">
              UN SERVICIO EXCLUSIVO Y PERSONALIZADO EN LA GESTIÓN ADMINISTRATIVA
              Y ECONÓMICA DE LA COMUNIDAD DE PROPIETARIOS.
            </p>
            <a
              className="gf-em-more gf-em-more--arial"
              href={withBase("/servicios/administrador-de-fincas")}
            >
              <span>Más información</span>
              <span
                className="gf-em-circle gf-em-circle--34"
                style={{ background: "rgb(236, 129, 42)" }}
              >
                <Icon name="long-arrow-alt-right" />
              </span>
            </a>
          </div>
          <div className="gf-em-admin-art">
            <img
              className="gf-em-art-back"
              src={`${IMG}/Neighbours-on-balconies-or-windows-during-Coronavirus-rafiki-1024x1024.png`}
              alt=""
            />
            <img
              className="gf-em-art-front"
              src={`${IMG}/vecinos-balcones-concepto-cuarentena_23-2148514127.jpg`}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="gf-em-legal">
        <div className="gf-em-legal-img">
          <img src={`${IMG}/SLA_7464-700x460-1.jpg`} alt="" />
        </div>
        <div className="gf-em-legal-text">
          <h2 className="gf-arial">ASESORAMIENTO LEGAL</h2>
          <p>
            COBERTURA LEGAL Y ASESORAMIENTO EN EL ÁMBITO DE LAS COMUNIDADES DE
            PROPIETARIOS
          </p>
          <CircleLink
            href={withBase("/servicios/asesoria-juridica-integral")}
            label="Más información"
            color="rgb(236, 42, 42)"
            iconFirst
          />
        </div>
      </section>

      <section className="gf-container gf-em-contact">
        <div className="gf-em-contact-art">
          <img
            className="gf-em-woman"
            src={`${IMG}/happy-young-woman-work-in-office-using-computer-PERMEN2-683x1024.jpg`}
            alt=""
          />
          <img
            className="gf-em-team"
            src={`${IMG}/brainstorming-team-working-office-colleagues-PCD33AX-1024x1024.jpg`}
            alt=""
          />
        </div>
        <div className="gf-em-contact-text">
          <h2 className="gf-arial">Contactar con nosotros</h2>
          <div className="gf-em-contact-cols">
            <div>
              <div className="gf-em-label">Dirección</div>
              <p>
                Calle Juan Ortiz de Zárate 6 Edificio Mencey - Local A Peatonal
                38300 La Orotava.
              </p>
            </div>
            <div>
              <div className="gf-em-label">Contacto directo</div>
              <p>
                <a href="tel:+34922975075">Teléfono: 922 975 075</a>
                <br />
                <a href="tel:+34922325048">FAX: 922 32 50 48</a>
                <br />
                <a href="mailto:info@gesfinc.es">E-mail: info@gesfinc.es</a>
              </p>
            </div>
          </div>
          <a
            className="gf-em-contact-btn gf-arial"
            href={withBase("/contactar")}
          >
            Contactar <Icon name="long-arrow-alt-right" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
