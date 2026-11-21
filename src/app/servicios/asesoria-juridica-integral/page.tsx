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
  title: "Asesoría Jurídica Integral – Gesfinc Canarias",
  description:
    "La mejor asistencia jurídica de Canarias en Propiedad Horizontal para su comunidad de propietarios.",
};

export default function AsesoriaJuridicaIntegralPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Asesoría Jurídica Integral"
        titleSize={37}
        texts={[
          "Gesfinc Canarias le proporciona la mejor asistencia jurídica de Canarias. En todo lo relativo Propiedad Horizontal, Gesfinc dispone de los letrados más experimentados y prestigiosos, que ostentan el privilegio de impartir clases en la Universidad de La Laguna y de ostentar un Master en Propiedad Horizontal por la Universidad de Valencia.",
          "Nuestro despacho cuenta con letrados cuyas especialidades  van más allá de los asuntos relacionados con la propiedad horizontal. Cónsultenos sobre el particular.",
        ]}
        photo={PHOTOS.juridica}
      />
      <IntroText>
        <p>{" "}</p>
        <p>
          Este es, sin duda, uno de los principales argumentos de Gesfinc
          Canarias, que tiene:
        </p>
      </IntroText>
      <ServiceRow image={PHOTOS.juridica300} imageTop={0}>
        <ul>
          <li>Asistencia Jurídica a los miembros de la Junta Directiva</li>
          <li>
            Asistencia Letrada a las Juntas de Propietarios (Ordinarias o
            Extraordinarias)
          </li>
          <li>
            Tramitación de los requerimientos previstos en la Ley por posibles
            impagos
          </li>
          <li>Requerimientos a copropietarios infractores</li>
          <li>
            Redacción de contratos de servicios y suministros de la comunidad
            debidamente negociados y revisados en sus cláusulas
          </li>
          <li>
            Asesoramiento laboral y Asesoramiento en general para adopción de
            acuerdos en otros asuntos relacionados con la comunidad
          </li>
        </ul>
      </ServiceRow>
      <OtherServices page="asesoria-juridica-integral" />
      <QuoteSection />
    </ServicePage>
  );
}
