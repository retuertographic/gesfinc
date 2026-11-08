import type { Metadata } from "next";
import {
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Mantenimiento – Gesfinc Canarias",
  description:
    "Servicio integral de mantenimiento de los elementos comunes de su comunidad de propietarios.",
};

export default function MantenimientoPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Mantenimiento"
        texts={[
          "En este caso el departamento, realiza un servicio integral de mantenimiento eficaz y permanente con el fin de mantener en perfecto estado de conservación los elementos comunes. Asimismo, se encarga de realizar, entre otros labores de:",
        ]}
        list={[
          { label: "Desinsectación" },
          { label: "Desratización" },
          { label: "Limpieza de pozos negros" },
          {
            label:
              "Control e instalación de extintores (revisiones periódicas),",
          },
          { label: "Instalaciones contra incendios" },
          { label: "Sistemas de seguridad (alarma, puertas blindadas, etc.)" },
          {
            label:
              "Reformas en general (pintura, fontanería, electricidad, albañilería, etc.).",
          },
          { label: "Etc...." },
        ]}
        photo={PHOTOS.mantenimiento}
        shapeHeight={110}
      />
      <OtherServices page="mantenimiento" />
      <QuoteSection />
    </ServicePage>
  );
}
