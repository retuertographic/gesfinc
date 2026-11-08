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
  title: "Administrador de Fincas – Gesfinc Canarias",
  description:
    "Administración de fincas: secretaría de la comunidad, economía y todos los servicios para su comunidad de propietarios.",
};

const servicios = [
  "Confeccionamos y enviamos las convocatorias de reuniones.",
  "Asistimos a las juntas y levantamos las actas.",
  "Enviamos las actas y damos cumplimiento de los acuerdos tomados en las asambleas.",
  "Confeccionamos y hacemos el seguimiento del presupuesto anual de mantenimiento.",
  "Hacemos la evaluación del ejercicio anterior y hacemos el planteamiento para el nuevo ejercicio.",
  "Llevamos la contabilidad de los ingresos y de los gastos comunitarios.",
  "Emitimos los recibos y cobramos las cuotas comunitarias.",
  "Gestionamos el cobro a los morosos.",
  "Hacemos el pago de proveedores y custodiamos las facturas.",
  "Presentamos los presupuestos para mantenimientos y obras de la finca.",
  "Contratamos, controlamos y coordinamos las obras y mantenimientos.",
  "Informamos del estado de las cuentas de la comunidad en cualquier momento.",
  "Contratamos el seguro comunitario.",
  "Tramitamos los sinistros.",
  "Tramitamos las subvenciones y ayudas para obras y rehabilitaciones de las fincas.",
  "Nos encargamos de las tramitaciones a los organismos públicos y administraciones locales.",
  "Realizamos la tramitación para la obtención de vados y licencias.",
  "Custodiamos la documentación de la comunidad.",
  "Nos encargamos de hacer el seguimiento del libro del edificio.",
  "Asesoramos en el cumplimiento de la normativa legal.",
];

export default function AdministradorDeFincasPage() {
  return (
    <ServicePage>
      <ServiceHero
        // Literal source text: the "<br" in the Elementor heading is malformed and renders as text.
        title="Administración de fincas <brde Fincas"
        titleSizeMobile={28}
        texts={[
          "Este Departamento se encarga de gestionar todas las actividades relacionadas con la Administración:",
        ]}
        list={[
          { label: "Secretaría de la Comunidad" },
          { label: "Economía" },
          { label: "Servicios" },
          { label: "Otros servicios" },
        ]}
        photo={PHOTOS.administrador}
      />
      <IntroText>
        <strong>
          Trabajamos cada día, para dar a nuestros clientes el asesoramiento más
          adecuado a sus necesidades, con la máxima profesionalidad y
          transparencia en cada una de nuestras actuaciones.
        </strong>
      </IntroText>
      <ServiceRow
        heading="Secretaría de la Comunidad"
        small
        image={PHOTOS.admin}
        imageTop={0}
      >
        <p>
          Legalización de la comunidad, en caso de no estarlo, elaboración y
          asesoramiento al Presidente de las convocatorias a las Juntas,
          Comunicaciones individuales a los comuneros, asistencia a las Juntas
          (Ordinarias y Extraordinarias) con presencia de abogado, redacción de
          las actas de las sesiones, redacción de certificaciones, elaboración
          de los Estatutos, expedición de certificados (para organismos públicos
          y privados), confección del Reglamento de Régimen Interior y la
          llevanza y salvaguardia de los Libros de Actas de la Comunidad.
        </p>
      </ServiceRow>
      <ServiceRow
        heading="Economía"
        small
        image={PHOTOS.integral}
        imageTop={-13.571}
        imageSide="left"
      >
        Elaboración del Presupuesto de ingresos y gastos, Reparto proporcional
        entre los copropietarios, cobro de cuotas, requerimiento de pago a
        copropietarios, expedición de recibos por el periodo acordado,
        Confección de modelos fiscales, confección de la contabilidad de la
        comunidad en concordancia con la normativa mercantil actual, y
        elaboración de cuentas anuales (balance, cuenta de resultados y estado
        de flujos de efectivo) auditables. Pago de los gastos que se generen,
        Informes económicos individualizado de cualquier comunero y Liquidación
        al final del ejercicio.
      </ServiceRow>
      <ServiceRow
        heading="Servicios"
        small
        image={PHOTOS.jardin300}
        imageTop={29}
        last
      >
        <ul>
          {servicios.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </ServiceRow>
      <OtherServices page="administrador-de-fincas" />
      <QuoteSection />
    </ServicePage>
  );
}
