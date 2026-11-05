/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "@/components/sites/gesfinc/gesfinc.css";
import "@/components/sites/gesfinc/contacto/contacto.css";
import { IMG } from "@/components/sites/gesfinc/data";
import { SiteFooter } from "@/components/sites/gesfinc/shared";
import { ctFonts } from "@/components/sites/gesfinc/contacto/fonts";
import { PageHero, RedButtons } from "@/components/sites/gesfinc/contacto/parts";
import { ContactForm } from "@/components/sites/gesfinc/contacto/forms";
import { ScrollFx } from "@/components/sites/gesfinc/contacto/scroll-fx";

export const metadata: Metadata = {
  title: "Contactar – Gesfinc Canarias",
  description:
    "Contacta con Gesfinc Canarias, expertos en administración de fincas en La Orotava (Tenerife): teléfono, correo electrónico y formulario.",
};

export default function ContactarPage() {
  return (
    <main className={`gf gf-ct ${ctFonts}`}>
      <PageHero title="Contactar">
        Trabajamos cada día, para dar a nuestros clientes el asesoramiento más
        adecuado a sus necesidades, con la máxima profesionalidad y
        transparencia en cada una de nuestras actuaciones.
        <br />
        <br />
        Puede contactar con nosotros vía telefónica o bien por correo
        electrónico.
        <br />
        <br />
        Nuestro personal estará encantado de atenderle para aclarar todas su
        dudas. Para ello facilitamos los siguientes medios de contacto:
      </PageHero>

      <section className="gf-container gf-ct-card gf-ct-card--contact">
        <ContactForm />
      </section>

      <section className="gf-container gf-ct-about">
        {/* Decorative bubbles and triangles (Avante infinite / scrollme effects). */}
        <div className="gf-ct-deco gf-ct-deco--1 gf-ct-if-scale" aria-hidden="true">
          <img src={`${IMG}/purple_bubble.png`} alt="" width={90} height={90} />
        </div>
        <div className="gf-ct-deco gf-ct-deco--2 gf-ct-if-bounce" aria-hidden="true">
          <img src={`${IMG}/orange_bubble-1.png`} alt="" width={70} height={70} />
        </div>
        <ScrollFx ty={200} rx={-360} className="gf-ct-deco gf-ct-deco--3">
          <img src={`${IMG}/orange_triangle2.png`} alt="" width={150} height={120} />
        </ScrollFx>
        <ScrollFx tx={300} ty={60} rx={360} ry={360} className="gf-ct-deco gf-ct-deco--4">
          <img src={`${IMG}/orange_triangle-1.png`} alt="" width={190} height={150} />
        </ScrollFx>
        <ScrollFx tx={-200} ty={60} ry={-360} className="gf-ct-deco gf-ct-deco--5">
          <img src={`${IMG}/orange_triangle-1.png`} alt="" width={190} height={150} />
        </ScrollFx>
        <ScrollFx tx={-100} ty={-50} minWidth={1025} className="gf-ct-deco gf-ct-deco--6">
          <img src={`${IMG}/purple_bubble.png`} alt="" width={90} height={90} />
        </ScrollFx>
        <ScrollFx tx={-200} ty={-70} ry={360} className="gf-ct-deco gf-ct-deco--7">
          <img src={`${IMG}/orange_bubble-1.png`} alt="" width={70} height={70} />
        </ScrollFx>

        <h2>Gesfinc Canarias: Expertos en Administración de fincas</h2>
        <p>
          Con sede en La Orotava, y con más de 10 años de experiencia en la
          Administración de Fincas, Gesfinc Canarias es una empresa dedicada a
          la Administración de Comunidades de Propietarios. Gesfinc Canarias
          pretende que se le reconozca con una empresa de Servicio Integral para
          Comunidades de Propietarios
        </p>
      </section>

      {/* "Oficinas" and "Pedir presupuesto" link to "#" on the source; pointed at their real pages. */}
      <RedButtons
        items={[
          { label: "Servicios", href: "/servicios" },
          { label: "Oficinas", href: "/donde-estamos" },
          { label: "Pedir presupuesto", href: "/pedir-presupuesto" },
        ]}
      />

      <SiteFooter />
    </main>
  );
}
