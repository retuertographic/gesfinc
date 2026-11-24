import type { Metadata } from "next";
import {
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Seguros – Gesfinc Canarias",
  description:
    "Gestión de los seguros de su comunidad de vecinos: altas de pólizas y resolución de trámites.",
};

export default function SegurosPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Seguros"
        texts={[
          "El seguro de comunidad de vecinos es la vía adecuada para la protección de todo el edificio. Sin ser obligatorio en la mayoría de las comunidades autónomas, dispone de más o menos coberturas que pueden salvar de una derrama elevada. En Gesfinc Canarias nos dedicamos a:",
        ]}
        list={[
          { label: "Gestión de los seguros" },
          { label: "Altas de pólizas" },
          { label: "Resolución de tratamites" },
          { label: "Etc..." },
        ]}
        photo={PHOTOS.seguros}
        shapeHeight={110}
      />
      <OtherServices page="seguros" />
      <QuoteSection />
    </ServicePage>
  );
}
