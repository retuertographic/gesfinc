import type { Metadata } from "next";
import {
  IntroText,
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
  ServiceRow,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Servicio Integral – Gesfinc Canarias",
  description:
    "Todos los servicios propios de la gestión de comunidades sin necesidad de recurrir a subcontratas.",
};

export default function ServicioIntegralPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Servicio Integral"
        texts={[
          "En Gesfinc Canarias, tenemos el firme propósito de suministrarle todos los servicios propios de la gestión de comunidades sin necesidad de recurrir a subcontratas, salvo en el caso de servicios muy específicos o puntuales.",
        ]}
        list={[
          {
            label: "Administrador de Fincas",
            href: "/servicios/administrador-de-fincas",
          },
          {
            label: "Asesoría Jurídica Integral",
            href: "/servicios/asesoria-juridica-integral",
          },
          { label: "Inmobiliaria", href: "/inmobiliaria" },
          { label: "Otros servicios" },
        ]}
        photo={PHOTOS.integral}
        shapeHeight={110}
      />
      {/* Source links are "/gesfinc/servicios/..." (404, left over from a staging path); pointed at the real pages. */}
      <IntroText>
        <p>
          Nuestra estructura empresarial nos permite asistir a su comunidad en
          todo lo concerniente a la{" "}
          <a href="/servicios/administrador-de-fincas">administración</a>, la{" "}
          <a href="/servicios/limpieza">limpieza de zonas comunes</a> , el{" "}
          <a href="/servicios/mantenimiento">mantenimiento del inmueble</a>, el{" "}
          <a href="/servicios/jardineria">mantenimiento de jardines</a> y la{" "}
          <a href="/servicios/asesoria-juridica-integral">
            asistencia jurídica
          </a>
          .
        </p>
      </IntroText>
      <ServiceRow
        heading={
          <>
            Administración <br /> de Fincas
          </>
        }
        // Source button points at /servicios/administracion-de-fincas/ (404).
        button="/servicios/administrador-de-fincas"
        image={PHOTOS.admin}
        imageTop={-23}
      >
        Este Departamento se encarga de gestionar todas las actividades
        relacionadas con la Administración
        <ul>
          <li>Secretaría de la Comunidad</li>
          <li>Economía</li>
          <li>Servicios</li>
        </ul>
      </ServiceRow>
      <ServiceRow
        heading={"Asesoría Juridica​"}
        button="/servicios/asesoria-juridica-integral"
        image={PHOTOS.juridica}
        imageTop={-13.571}
        imageSide="left"
      >
        Gesfinc Canarias le proporciona la mejor asistencia jurídica de
        Canarias. En todo lo relativo Propiedad Horizontal, Gesfinc dispone de
        los letrados más experimentados y prestigiosos, que ostentan el
        privilegio de impartir clases en la Universidad de La Laguna y de
        ostentar un Master en Propiedad Horizontal por la Universidad de
        Valencia.
      </ServiceRow>
      <OtherServices page="servicio-integral" />
      <QuoteSection title="Petición de información" />
    </ServicePage>
  );
}
