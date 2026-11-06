import type { ReactNode } from "react";
import { IMG } from "../data";
import { Icon } from "../icons";
import { ZoomImage } from "./lightbox";


export type Post = {
  slug: string;
  title: string;
  /** Featured image shown behind the title (full size on the source). */
  hero: string;
  /** 610px crop used by the previous/next article cards. */
  navThumb: string;
  /** Image used on the Noticias archive. */
  archiveImage: { src: string; width: number; height: number };
  excerpt: string;
  description: string;
  body: ReactNode;
};

// Newest first, the order of the Noticias archive.
export const posts: Post[] = [
  {
    slug: "proximamente-juntas-por-videoconferencia",
    title: "Próximamente: Juntas por videoconferencia",
    hero: `${IMG}/AdobeStock_340095251-Videoconferencia-270x154-1.jpg`,
    navThumb: `${IMG}/AdobeStock_340095251-Videoconferencia-270x154-1.jpg`,
    archiveImage: {
      src: `${IMG}/AdobeStock_340095251-Videoconferencia-270x154-1.jpg`,
      width: 270,
      height: 154,
    },
    excerpt:
      "Desde que el pasado 11 de marzo la Organización Mundial de la Salud declaró la situación de pandemia en todo el mundo son muchas las medidas que se han ido adoptando para paliar sus efectos. En la actualidad estamos trabajando […]",
    description:
      "Estamos trabajando para ofrecer a nuestros clientes un sistema de videoconferencia para organizar las juntas de vecinos.",
    body: (
      <div className="gf-bl-body-text">
        <p>
          Desde que el pasado 11 de marzo la Organización Mundial de la Salud
          declaró la situación de pandemia en todo el mundo son muchas las
          medidas que se han ido adoptando para paliar sus efectos.
        </p>
        <p>
          En la actualidad estamos trabajando para poder ofrecer a nuestros
          cliente un sistema de videoconferencia para organizar las junta de
          vecinos.
        </p>
        <p>Próximamente más información.</p>
      </div>
    ),
  },
  {
    slug: "modelos-fiscales-exigibles-a-las-comunidades-de-propietarios",
    title: "Modelos fiscales exigibles a las comunidades de propietarios",
    hero: `${IMG}/Anuncio-347.jpg`,
    navThumb: `${IMG}/Anuncio-347-610x610.jpg`,
    archiveImage: { src: `${IMG}/Anuncio-347-656x604.jpg`, width: 656, height: 604 },
    excerpt:
      "El Consejo General de Colegios de Administradores de fincas ha publicado una Nota de prensa en la que hace hincapié en la obligación de las comunidades de propietarios de declarar las operaciones que superen los 3000 €. Por otra parte, el Colegio […]",
    description:
      "Obligación de las comunidades de propietarios de declarar las operaciones que superen los 3000 € (Modelo 347) y otros modelos fiscales exigibles.",
    body: (
      <div className="gf-bl-body-text">
        <p>
          <ZoomImage
            src={`${IMG}/Anuncio-347-e1486123237353.jpg`}
            alt="Anuncio 347"
            width={656}
            height={645}
          />
          El Consejo General de Colegios de Administradores de fincas ha
          publicado una&nbsp;
          <a href="/sites/gesfinc/docs/NP-MODELO-347-1.pdf">Nota de prensa</a>
          &nbsp;en la que hace hincapié en la obligación de las comunidades de propietarios
          de declarar las operaciones que superen los 3000 €.
        </p>
        <p>
          Por otra parte, el Colegio de Administradores de Fincas de Sta. Cruz de
          Tenerife &nbsp;ha emitido una circular con información relativa a la
          obligación de cumplimentar en tiempo y forma los distintos&nbsp;
          <a href="/sites/gesfinc/docs/MODELOS-FISCALES.pdf">Modelos fiscales</a>
          &nbsp;que son exigibles a las comunidades de propietarios; lo que hace
          resaltar la importancia de asesorarse con profesionales.
        </p>
      </div>
    ),
  },
  {
    slug: "app-gesfinc",
    title: "App Gesfinc",
    hero: `${IMG}/APP-GESFINC-43685274_xxl.jpg`,
    navThumb: `${IMG}/APP-GESFINC-43685274_xxl-610x548.jpg`,
    archiveImage: { src: `${IMG}/APP-GESFINC-43685274_xxl-960x548.jpg`, width: 960, height: 548 },
    excerpt:
      "Consigue aquí la App de Gesfinc para tu móvil: Descargar Gesfinc para IOS Descargar Gesfinc para Android",
    description:
      "Consigue aquí la App de Gesfinc para tu móvil: descargar Gesfinc para iOS y para Android.",
    body: (
      <div className="gf-bl-app">
        <div className="gf-bl-app-lead">
          <p>Consigue aquí la App de Gesfinc para tu móvil:</p>
        </div>
        <div className="gf-bl-app-btns">
          <div>
            <a
              className="gf-bl-btn"
              href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1179693949&mt=8"
            >
              <Icon name="apple" />
              Descargar Gesfinc para IOS
            </a>
          </div>
          <div>
            <a
              className="gf-bl-btn"
              href="https://play.google.com/store/apps/details?id=com.mobincube.gesfinc_incidencias_copy.sc_H5AZ78"
            >
              <Icon name="android" />
              Descargar Gesfinc para Android
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "felices-fiestas-y-prospero-ano-2018",
    // The source title really says 2017 while the slug and text say 2018.
    title: "Felices fiestas, y próspero año 2017",
    hero: `${IMG}/Cabecera-Web-Gesfing-Navidad-2018-1170x548-px-100.jpg`,
    navThumb: `${IMG}/Cabecera-Web-Gesfing-Navidad-2018-1170x548-px-100-610x548.jpg`,
    archiveImage: {
      src: `${IMG}/Cabecera-Web-Gesfing-Navidad-2018-1170x548-px-100-960x548.jpg`,
      width: 960,
      height: 548,
    },
    excerpt:
      "Siempre le tenemos muy presente y en estas señaladas fechas queremos expresarle nuestro más sincero deseo de unas pacíficas y felices fiestas, y de un próspero año 2018. Afectuosamente: Gesfinc Canarias",
    description:
      "Gesfinc Canarias le desea unas pacíficas y felices fiestas, y un próspero año 2018.",
    body: (
      <div className="gf-bl-body-text">
        <p>
          Siempre le tenemos muy&nbsp;presente y en estas señaladas&nbsp;fechas
          queremos expresarle&nbsp;nuestro más sincero deseo de&nbsp;unas
          pacíficas y felices fiestas,&nbsp;y de un próspero año 2018.
        </p>
        <p>
          Afectuosamente:
          <br />
          <strong>Gesfinc Canarias</strong>
        </p>
      </div>
    ),
  },
  {
    slug: "gesfinc-por-el-deporte-canario",
    title: "GesFinc por el Deporte Canario",
    hero: `${IMG}/IMG_7278-1024x768-1.jpg`,
    navThumb: `${IMG}/IMG_7278-1024x768-1-610x610.jpg`,
    archiveImage: { src: `${IMG}/IMG_7278-1024x768-1-960x604.jpg`, width: 960, height: 604 },
    excerpt:
      "En GesFinc apostamos por el deporte canario. Buena muestra de ello es nuestro apoyo al C.D. Salesianos «CDS» La Orotava, un equipo que está desarrollando una gran labor con más de 400 niños practicando deporte en el valle de la Orotava tanto fútbol […]",
    description:
      "En GesFinc apostamos por el deporte canario: nuestro apoyo al C.D. Salesianos «CDS» La Orotava.",
    body: (
      <div className="gf-bl-body-text">
        <p>
          En GesFinc apostamos por el deporte canario. Buena muestra de ello es
          nuestro apoyo al&nbsp;C.D. Salesianos «CDS» La Orotava, un&nbsp;equipo
          que está desarrollando una gran labor con&nbsp;más de 400 niños
          practicando deporte
          en el valle de la Orotava tanto fútbol sala como el voleibol.
        </p>
        <p>
          Visita su página en facebook:&nbsp;
          <a href="https://www.facebook.com/CDSTenerife/">
            www.facebook.com/CDSTenerife/
          </a>
        </p>
      </div>
    ),
  },
];

export function getPost(slug: string) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) throw new Error(`Unknown post ${slug}`);
  // "Previous article" is the older post, "Next article" the newer one.
  return { post: posts[i], previous: posts[i + 1], next: posts[i - 1] };
}
