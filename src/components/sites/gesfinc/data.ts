// Content mirrored from https://gesfinc.com/ (home page).
export const SOURCE = "https://gesfinc.com";
export const IMG = "/sites/gesfinc/images";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Empresa",
    href: `${SOURCE}/empresa/`,
    children: [
      { label: "¿Por qué Gesfinc?", href: `${SOURCE}/por-que-gesfinc-canarias/` },
      { label: "Recursos", href: `${SOURCE}/recursos-humanos-y-materiales/` },
      { label: "Filosofía empresarial", href: `${SOURCE}/filosofia-empresarial/` },
    ],
  },
  {
    label: "Servicios",
    href: `${SOURCE}/servicios/`,
    children: [
      { label: "Servicio Integral", href: `${SOURCE}/servicios/servicio-integral/` },
      { label: "Administrador de Fincas", href: `${SOURCE}/servicios/administrador-de-fincas/` },
      { label: "Limpieza", href: `${SOURCE}/servicios/limpieza/` },
      { label: "Mantenimiento", href: `${SOURCE}/servicios/mantenimiento/` },
      { label: "Jardinería", href: `${SOURCE}/servicios/jardineria/` },
      { label: "Asesoría Jurídica Integral", href: `${SOURCE}/servicios/asesoria-juridica-integral/` },
      { label: "Seguros", href: `${SOURCE}/servicios/seguros/` },
      { label: "Inmobiliaria", href: `${SOURCE}/inmobiliaria/` },
      { label: "Certificaciones Energéticas", href: `${SOURCE}/servicios/certificaciones-energeticas/` },
      { label: "Certificados Electrónicos", href: `${SOURCE}/servicios/certificados-electronicos/` },
    ],
  },
  { label: "Noticias", href: `${SOURCE}/noticias/` },
  { label: "Sala de Juntas", href: `${SOURCE}/sala-de-juntas/` },
  { label: "Zona Privada", href: "https://cloud.gesfinc.com/" },
  {
    label: "Contactar",
    href: `${SOURCE}/contactar/`,
    children: [
      { label: "Hacernos una pregunta", href: `${SOURCE}/contactar/` },
      { label: "Pedir Presupuesto", href: `${SOURCE}/pedir-presupuesto/` },
      { label: "¿Dónde estamos?", href: `${SOURCE}/donde-estamos/` },
    ],
  },
  { label: "Inmobiliaria", href: `${SOURCE}/inmobiliaria/` },
];

export const heroImages = [
  "APP-GESFINC-43685274_xxl.jpg",
  "GESFINC-170509-149-1170x548-1.jpg",
  "GESFINC-170509-121-1170x548-1.jpg",
  "GESFINC-170104-48-1170x548-1.jpg",
  "SLA_7470-1170x548-1.jpg",
  "GESFINC-170509-64-1170x548-1.jpg",
  "Buzones-WEB.jpg",
  "50853954_xxl-ADMON.jpg",
].map((f) => `${IMG}/${f}`);

// The source slide for "Certificaciones Energéticas" points at a missing image
// (renders as a grey panel), so image is null there.
export const services: { title: string; image: string | null; href: string }[] = [
  { title: "Certificados Electrónicos", image: "certificados-digitales-eadministracion-publica-iesa-004-800x600-1.jpg", href: `${SOURCE}/servicios/certificados-electronicos/` },
  { title: "Certificaciones Energéticas", image: null, href: `${SOURCE}/servicios/certificaciones-energeticas/` },
  { title: "Inmobiliaria", image: "Inmobiliaria-WEB-700x460-1.jpg", href: `${SOURCE}/inmobiliaria/` },
  { title: "Seguros", image: "Seguro-WEB-700x460-1.jpg", href: `${SOURCE}/servicios/seguros/` },
  { title: "Asesoría Jurídica Integral", image: "SLA_7474-700x460-1.jpg", href: `${SOURCE}/servicios/asesoria-juridica-integral/` },
  { title: "Servicio Integral", image: "SLA_7464-700x460-1.jpg", href: `${SOURCE}/servicios/servicio-integral/` },
  { title: "Administrador de Fincas", image: "SLA_7449-700x460-1.jpg", href: `${SOURCE}/servicios/administrador-de-fincas/` },
  { title: "Mantenimiento", image: "GESFINC-170509-64-1170x548-1.jpg", href: `${SOURCE}/servicios/mantenimiento/` },
  { title: "Limpieza", image: "DSC_1780-700x460-1.jpg", href: `${SOURCE}/servicios/limpieza/` },
  { title: "Jardinería", image: "DSC_1853-700x460-1.jpg", href: `${SOURCE}/servicios/jardineria/` },
].map((s) => ({ ...s, image: s.image ? `${IMG}/${s.image}` : null }));

export const posts = [
  {
    title: "Próximamente: Juntas por videoconferencia",
    href: `${SOURCE}/proximamente-juntas-por-videoconferencia/`,
    image: `${IMG}/AdobeStock_340095251-Videoconferencia-270x154-1.jpg`,
    excerpt:
      "Desde que el pasado 11 de marzo la Organización Mundial de la Salud declaró la situación de pandemia en todo el mundo son muchas las medidas que se han ido adoptando para paliar sus efectos. En la actualidad estamos trabajando",
    date: "11 junio, 2020",
  },
  {
    title: "Modelos fiscales exigibles a las comunidades de propietarios",
    href: `${SOURCE}/modelos-fiscales-exigibles-a-las-comunidades-de-propietarios/`,
    image: `${IMG}/Anuncio-347.jpg`,
    excerpt:
      "El Consejo General de Colegios de Administradores de fincas ha publicado una Nota de prensa en la que hace hincapié en la obligación de las comunidades de propietarios de declarar las operaciones que superen los 3000 €. Por otra parte, el Colegio",
    date: "3 febrero, 2017",
  },
  {
    title: "App Gesfinc",
    href: `${SOURCE}/app-gesfinc/`,
    image: `${IMG}/APP-GESFINC-43685274_xxl.jpg`,
    excerpt: "Consigue aquí la App de Gesfinc para tu móvil: Descargar Gesfinc para IOS Descargar Gesfinc para Android",
    date: "21 diciembre, 2016",
  },
];

export const apps = {
  android: "https://play.google.com/store/apps/details?id=gesfincloudxnet.com",
  ios: "https://apps.apple.com/app/id1533839356",
  footerIos: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1179693949&mt=8",
  footerAndroid: "https://play.google.com/store/apps/details?id=com.mobincube.gesfinc_incidencias_copy.sc_H5AZ78",
};

export const footerNav = [
  { label: "Inicio", href: "/" },
  { label: "Empresa", href: `${SOURCE}/por-que-gesfinc-canarias/` },
  { label: "Servicios", href: `${SOURCE}/servicios/` },
  { label: "Inmobiliaria", href: `${SOURCE}/inmobiliaria/` },
  { label: "Contactar", href: `${SOURCE}/contactar/` },
];

export const footerClients = [
  { label: "Area Privada", href: "https://cloud.gesfinc.com/" },
  { label: "Sala de VideoConferencias", href: `${SOURCE}/sala-de-juntas/` },
  { label: "Ministerio de Vivienda", href: "http://www.mviv.es/" },
  { label: "Ministerio de Administraciones Públicas", href: "http://www.map.es/" },
  { label: "Agencia de Protección de Datos", href: "http://www.agpd.es/" },
  { label: "Registradores de España", href: "http://www.registradores.org/" },
  { label: "Boletín Oficial de España", href: "http://www.boe.es/" },
  { label: "Boletín Oficial de Canarias", href: "http://www.gobiernodecanarias.org/boc/" },
];
