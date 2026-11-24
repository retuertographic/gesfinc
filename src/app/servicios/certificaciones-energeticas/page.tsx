import type { Metadata } from "next";
import {
  OtherServices,
  QuoteSection,
  ServiceHero,
  ServicePage,
} from "@/components/sites/gesfinc/servicio/template";
import { PHOTOS } from "@/components/sites/gesfinc/servicio/data";

export const metadata: Metadata = {
  title: "Certificaciones Energéticas – Gesfinc Canarias",
  description:
    "Certificado de Eficiencia Energética: obligatorio para vender o alquilar un inmueble. Consulte con Gesfinc Canarias.",
};

export default function CertificacionesEnergeticasPage() {
  return (
    <ServicePage>
      <ServiceHero
        title="Certificaciones Energéticas"
        titleSize={35}
        texts={[
          "El Certificado de Eficiencia Energética es un documento que informa sobre las características energéticas de un inmueble. Gracias a él podremos conocer el consumo anual de energía necesaria para satisfacer la demanda energética de un edificio en condiciones normales de ocupación y funcionamiento, incluidas la producción de agua caliente, calefacción, iluminación, refrigeración y ventilación.",
          <>
            <p>
              Con él sabremos cómo de eficiente es su inmueble y si puede hacer
              algo para reducir el gasto energético del mismo y ahorrar en la
              factura energética.El certificado es obligatorio por ley desde
              2013 siempre que se quiera vender o alquilar el inmueble y tendrá
              una vigencia de 10 años desde su registro.
            </p>
            <p>Para más información consulta con Gesfinc Canarias.</p>
          </>,
        ]}
        photo={PHOTOS.certificaciones}
        minHeight={860}
        shapeHeight={110}
      />
      <OtherServices page="certificaciones-energeticas" />
      <QuoteSection />
    </ServicePage>
  );
}
