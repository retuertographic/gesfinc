import type { Metadata } from "next";
import {
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Limpieza – Gesfinc Canarias",
  description:
    "Servicio de limpieza de calidad para comunidades de propietarios y limpiezas de obras.",
};

export default function LimpiezaPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Limpieza"
        texts={[
          "Este departamento tiene como función principal dar un servicio de limpieza de calidad a cada edificio, además estamos especializados en limpiezas de obras. Existe un equipo de personas encargadas:",
        ]}
        list={[
          { label: "Limpiar las zonas comunitarias" },
          { label: "Cristales" },
          { label: "Escaleras" },
          { label: "Ascensores" },
          { label: "Etc...." },
        ]}
        photo={PHOTOS.limpieza}
      />
      <OtherServices page="limpieza" />
      <QuoteSection />
    </ServicePage>
  );
}
