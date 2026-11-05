// Content mirrored from https://gesfinc.com/servicios/<slug>/ (Elementor pages 7693–7771).
import { IMG } from "../data";

export type Photo = { src: string; width: number; height: number };
export type OtherCard = { title: string; href: string; image: string | null };

const photo = (file: string, width: number, height: number): Photo => ({
  src: `${IMG}/${file}`,
  width,
  height,
});

export const PHOTOS = {
  limpieza: photo("DSC_1780-700x460-1.jpg", 700, 460),
  mantenimiento: photo("DSC_1519-700x460-1.jpg", 700, 460),
  jardineria: photo("DSC_1853-700x460-2.jpg", 700, 460),
  seguros: photo("Seguro-WEB-700x460-1.jpg", 700, 460),
  certificados: photo(
    "certificados-digitales-eadministracion-publica-iesa-004-800x600-1.jpg",
    498,
    380,
  ),
  certificaciones: photo("GESFINC-170104-58-700x460-1.jpg", 700, 460),
  // The source serves SLA_7470.jpg (2048px) through srcset; the 1024px rendition is plenty for a 680px slot.
  administrador: photo("SLA_7470-1024x683.jpg", 1024, 683),
  integral: photo("SLA_7464-700x460-1.jpg", 700, 460),
  juridica: photo("SLA_7474-700x460-1.jpg", 700, 460),
  admin: photo("SLA_7449-700x460-1.jpg", 700, 460),
  jardin300: photo("DSC_1833-300x200-1.jpg", 300, 200),
  juridica300: photo("SLA_7484-300x200-1.jpg", 300, 200),
};

/* "Otros servicios de Gesfinc Canarias" cards. Titles (typos included) and order are per page on the source. */
const card = (title: string, href: string, image: string | null): OtherCard => ({
  title,
  href,
  image,
});
const C = {
  integral: (t = "Servicio Integal") =>
    card(t, "/servicios/servicio-integral", "SLA_7470-700x466.jpg"),
  integralAlt: (t: string) =>
    card(t, "/servicios/servicio-integral", "SLA_7464-700x460-1.jpg"),
  admin: (t = "Administración de fincas") =>
    card(t, "/servicios/administrador-de-fincas", "SLA_7449-700x460-1.jpg"),
  juridica: (t = "Asesoría Juridica") =>
    card(t, "/servicios/asesoria-juridica-integral", "SLA_7474-700x460-1.jpg"),
  limpieza: () =>
    card("Limpieza", "/servicios/limpieza", "GESFINC-170509-121-300x200-1.jpg"),
  mantenimiento: (img = "GESFINC-170509-83-300x200-1.jpg", t = "Mantenimiento") =>
    card(t, "/servicios/mantenimiento", img),
  jardineria: (img = "DSC_1833-300x200-1.jpg", t = "Jardinería") =>
    card(t, "/servicios/jardineria", img),
  seguros: () => card("Seguros", "/servicios/seguros", "Seguro-WEB-700x460-1.jpg"),
  inmobiliaria: () =>
    card("Inmobiliaria", "/inmobiliaria", "Inmobiliaria-WEB-700x460-1.jpg"),
  // No featured image on the source: WordPress shows its generic file icon (default.svg).
  certificados: () =>
    card("Certificados electrónicos", "/servicios/certificados-electronicos", null),
  certificaciones: (t = "Certificaciones energéticas") =>
    card(t, "/servicios/certificaciones-energeticas", null),
};

export const OTHERS: Record<string, OtherCard[]> = {
  limpieza: [
    C.integral(),
    C.admin(),
    C.juridica(),
    C.mantenimiento(),
    C.jardineria(),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones(),
  ],
  mantenimiento: [
    C.integral(),
    C.admin(),
    C.juridica(),
    C.limpieza(),
    C.jardineria(),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones(),
  ],
  jardineria: [
    C.integral(),
    C.admin(),
    C.juridica(),
    C.limpieza(),
    C.mantenimiento("DSC_1519-700x460-1.jpg"),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones(),
  ],
  seguros: [
    C.integral(),
    C.admin(),
    C.juridica(),
    C.limpieza(),
    C.mantenimiento("DSC_1519-700x460-1.jpg"),
    C.jardineria("DSC_1853-700x460-2.jpg", "Jardineria"),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones("Certificaciones Energéticas"),
  ],
  "certificados-electronicos": [
    C.integral(),
    C.admin(),
    C.juridica(),
    C.limpieza(),
    C.jardineria(),
    C.mantenimiento("DSC_1519-700x460-1.jpg", "Mantenimientos"),
    C.seguros(),
    C.inmobiliaria(),
    // Source href is the broken "//single-portfolio"; linked to the intended page.
    C.certificaciones("Certificados energéticos"),
  ],
  "certificaciones-energeticas": [
    C.integral(),
    C.admin(),
    C.juridica(),
    C.limpieza(),
    C.jardineria(),
    C.mantenimiento("DSC_1519-700x460-1.jpg"),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
  ],
  "administrador-de-fincas": [
    C.integralAlt("Servicios Integrales"),
    C.juridica("Asesoría Jurídica"),
    C.limpieza(),
    C.mantenimiento(),
    C.jardineria(),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones(),
  ],
  "servicio-integral": [
    C.admin(),
    C.limpieza(),
    C.juridica(),
    C.mantenimiento(),
    C.jardineria(),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones("Certificados energéticos"),
  ],
  "asesoria-juridica-integral": [
    C.integral("Servicio Integral"),
    C.admin(),
    C.limpieza(),
    C.mantenimiento(),
    C.jardineria(),
    C.seguros(),
    C.inmobiliaria(),
    C.certificados(),
    C.certificaciones(),
  ],
};
