import { BASE_PATH } from "./base-path";

/** Public origin of the deployed site (GitHub Pages by default). Override with NEXT_PUBLIC_SITE_ORIGIN for a custom domain. */
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://retuertographic.github.io";
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

/** Every page of the site, for the sitemap. */
export const ROUTES = [
  "/",
  "/empresa",
  "/por-que-gesfinc-canarias",
  "/recursos-humanos-y-materiales",
  "/filosofia-empresarial",
  "/servicios",
  "/servicios/administrador-de-fincas",
  "/servicios/servicio-integral",
  "/servicios/asesoria-juridica-integral",
  "/servicios/limpieza",
  "/servicios/mantenimiento",
  "/servicios/jardineria",
  "/servicios/seguros",
  "/servicios/certificados-electronicos",
  "/servicios/certificaciones-energeticas",
  "/inmobiliaria",
  "/contactar",
  "/pedir-presupuesto",
  "/donde-estamos",
  "/sala-de-juntas",
  "/formulario-de-contacto-app",
  "/noticias",
  "/category/noticias",
  "/proximamente-juntas-por-videoconferencia",
  "/modelos-fiscales-exigibles-a-las-comunidades-de-propietarios",
  "/app-gesfinc",
  "/felices-fiestas-y-prospero-ano-2018",
  "/gesfinc-por-el-deporte-canario",
  "/aviso-legal",
  "/politica-privacidad",
  "/politica-de-cookies-ue",
] as const;
