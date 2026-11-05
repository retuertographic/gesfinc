import type { Metadata } from "next";
import {
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Jardinería – Gesfinc Canarias",
  description:
    "Servicio de jardinería de calidad para los jardines comunitarios de su edificio.",
};

export default function JardineriaPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Jardinería"
        texts={[
          "Tal y como su nombre indica este departamento se encarga de ofrecer un servicio de calidad para jardines comunitarios de los edificios que así lo requieran, tales como:",
        ]}
        list={[
          { label: "Poda" },
          { label: "Plantar" },
          { label: "Tratamientos" },
          { label: "Control de plagas" },
          { label: "Etc..." },
        ]}
        photo={PHOTOS.jardineria}
        photoGapMobile={20}
      />
      <OtherServices page="jardineria" />
      <QuoteSection />
    </ServicePage>
  );
}
