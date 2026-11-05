import type { Metadata } from "next";
import {
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Certificados Electrónicos – Gesfinc Canarias",
  description:
    "Gesfinc Canarias es Operador de Registro y gestiona firma electrónica y certificados electrónicos.",
};

export default function CertificadosElectronicosPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Certificados Electrónicos"
        titleSize={35}
        texts={[
          "En Gesfinc disponemos de acreditación como Operador de Registro que lo que nos convierte en miembro de la Red de Autoridades de Registro, y nos faculta para la solicitud de Certificados Electrónicos tanto para nuestras Comunidades de Propietarios como para terceros. Gestionamos:",
        ]}
        list={[
          { label: "Firma electrónica" },
          { label: "Certificados Electrónicos" },
          { label: "Etc...." },
        ]}
        photo={PHOTOS.certificados}
        shape="tilt"
      />
      {/* On this page the heading and form live inside the grid section (no 10px column padding). */}
      <OtherServices page="certificados-electronicos">
        <QuoteSection inline />
      </OtherServices>
    </ServicePage>
  );
}
