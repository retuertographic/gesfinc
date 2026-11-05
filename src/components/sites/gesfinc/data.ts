// Content mirrored from https://gesfinc.com/ (home page).
export const SOURCE = "https://gesfinc.com";
export const IMG = "/sites/gesfinc/images";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Empresa",
    href: "/empresa",
    children: [
      { label: "¿Por qué Gesfinc?", href: "/por-que-gesfinc-canarias" },
      { label: "Recursos", href: "/recursos-humanos-y-materiales" },
      { label: "Filosofía empresarial", href: "/filosofia-empresarial" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Servicio Integral", href: "/servicios/servicio-integral" },
      { label: "Administrador de Fincas", href: "/servicios/administrador-de-fincas" },
      { label: "Limpieza", href: "/servicios/limpieza" },
      { label: "Mantenimiento", href: "/servicios/mantenimiento" },
      { label: "Jardinería", href: "/servicios/jardineria" },
      { label: "Asesoría Jurídica Integral", href: "/servicios/asesoria-juridica-integral" },
      { label: "Seguros", href: "/servicios/seguros" },
      { label: "Inmobiliaria", href: "/inmobiliaria" },
      { label: "Certificaciones Energéticas", href: "/servicios/certificaciones-energeticas" },
      { label: "Certificados Electrónicos", href: "/servicios/certificados-electronicos" },
    ],
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Sala de Juntas", href: "/sala-de-juntas" },
  { label: "Zona Privada", href: "https://cloud.gesfinc.com/" },
  {
    label: "Contactar",
    href: "/contactar",
    children: [
      { label: "Hacernos una pregunta", href: "/contactar" },
      { label: "Pedir Presupuesto", href: "/pedir-presupuesto" },
      { label: "¿Dónde estamos?", href: "/donde-estamos" },
    ],
  },
  { label: "Inmobiliaria", href: "/inmobiliaria" },
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
  { title: "Certificados Electrónicos", image: "certificados-digitales-eadministracion-publica-iesa-004-800x600-1.jpg", href: "/servicios/certificados-electronicos" },
  { title: "Certificaciones Energéticas", image: null, href: "/servicios/certificaciones-energeticas" },
  { title: "Inmobiliaria", image: "Inmobiliaria-WEB-700x460-1.jpg", href: "/inmobiliaria" },
  { title: "Seguros", image: "Seguro-WEB-700x460-1.jpg", href: "/servicios/seguros" },
  { title: "Asesoría Jurídica Integral", image: "SLA_7474-700x460-1.jpg", href: "/servicios/asesoria-juridica-integral" },
  { title: "Servicio Integral", image: "SLA_7464-700x460-1.jpg", href: "/servicios/servicio-integral" },
  { title: "Administrador de Fincas", image: "SLA_7449-700x460-1.jpg", href: "/servicios/administrador-de-fincas" },
  { title: "Mantenimiento", image: "GESFINC-170509-64-1170x548-1.jpg", href: "/servicios/mantenimiento" },
  { title: "Limpieza", image: "DSC_1780-700x460-1.jpg", href: "/servicios/limpieza" },
  { title: "Jardinería", image: "DSC_1853-700x460-1.jpg", href: "/servicios/jardineria" },
].map((s) => ({ ...s, image: s.image ? `${IMG}/${s.image}` : null }));

export const posts = [
  {
    title: "Próximamente: Juntas por videoconferencia",
    href: "/proximamente-juntas-por-videoconferencia",
    image: `${IMG}/AdobeStock_340095251-Videoconferencia-270x154-1.jpg`,
    excerpt:
      "Desde que el pasado 11 de marzo la Organización Mundial de la Salud declaró la situación de pandemia en todo el mundo son muchas las medidas que se han ido adoptando para paliar sus efectos. En la actualidad estamos trabajando",
    date: "11 junio, 2020",
  },
  {
    title: "Modelos fiscales exigibles a las comunidades de propietarios",
    href: "/modelos-fiscales-exigibles-a-las-comunidades-de-propietarios",
    image: `${IMG}/Anuncio-347.jpg`,
    excerpt:
      "El Consejo General de Colegios de Administradores de fincas ha publicado una Nota de prensa en la que hace hincapié en la obligación de las comunidades de propietarios de declarar las operaciones que superen los 3000 €. Por otra parte, el Colegio",
    date: "3 febrero, 2017",
  },
  {
    title: "App Gesfinc",
    href: "/app-gesfinc",
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
  { label: "Empresa", href: "/por-que-gesfinc-canarias" },
  { label: "Servicios", href: "/servicios" },
  { label: "Inmobiliaria", href: "/inmobiliaria" },
  { label: "Contactar", href: "/contactar" },
];

export const footerClients = [
  { label: "Area Privada", href: "https://cloud.gesfinc.com/" },
  { label: "Sala de VideoConferencias", href: "/sala-de-juntas" },
  { label: "Ministerio de Vivienda", href: "http://www.mviv.es/" },
  { label: "Ministerio de Administraciones Públicas", href: "http://www.map.es/" },
  { label: "Agencia de Protección de Datos", href: "http://www.agpd.es/" },
  { label: "Registradores de España", href: "http://www.registradores.org/" },
  { label: "Boletín Oficial de España", href: "http://www.boe.es/" },
  { label: "Boletín Oficial de Canarias", href: "http://www.gobiernodecanarias.org/boc/" },
];
