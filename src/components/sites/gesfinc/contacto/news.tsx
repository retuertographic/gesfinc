/* eslint-disable @next/next/no-img-element */
import { withBase } from "@/lib/base-path";
import { IMG } from "../data";

type NewsPost = {
  title: string;
  href: string;
  image: string;
  width: number;
  height: number;
  excerpt: string;
};

// Avante "blog posts" widget on /noticias, in source order (newest first). Excerpts are the widget's truncated text.
const newsPosts: NewsPost[] = [
  {
    title: "Próximamente: Juntas por videoconferencia",
    href: withBase("/proximamente-juntas-por-videoconferencia"),
    image: "AdobeStock_340095251-Videoconferencia-270x154-1.jpg",
    width: 270,
    height: 154,
    excerpt:
      "Desde que el pasado 11 de marzo la Organización Mundial de la Salud declaró la situación de...",
  },
  {
    title: "Modelos fiscales exigibles a las comunidades de propietarios",
    href: withBase(
      "/modelos-fiscales-exigibles-a-las-comunidades-de-propietarios",
    ),
    image: "Anuncio-347.jpg",
    width: 656,
    height: 912,
    excerpt:
      "El Consejo General de Colegios de Administradores de fincas ha publicado una Nota de prensa en la...",
  },
  {
    title: "App Gesfinc",
    href: withBase("/app-gesfinc"),
    image: "APP-GESFINC-43685274_xxl-768x360.jpg",
    width: 768,
    height: 360,
    excerpt:
      "Consigue aquí la App de Gesfinc para tu móvil: Descargar Gesfinc para IOS Descargar Gesfinc para...",
  },
  {
    // The source post's title says 2017 while its slug says 2018; both kept as on the source.
    title: "Felices fiestas, y próspero año 2017",
    href: withBase("/felices-fiestas-y-prospero-ano-2018"),
    image: "Cabecera-Web-Gesfing-Navidad-2018-1170x548-px-100-768x360.jpg",
    width: 768,
    height: 360,
    excerpt:
      "Siempre le tenemos muy presente y en estas señaladas fechas queremos expresarle nuestro más...",
  },
  {
    title: "GesFinc por el Deporte Canario",
    href: withBase("/gesfinc-por-el-deporte-canario"),
    image: "IMG_7278-1024x768-1-768x576.jpg",
    width: 768,
    height: 576,
    excerpt:
      "En GesFinc apostamos por el deporte canario Buena muestra de ello es nuestro apoyo al CD...",
  },
];

// Masonry placement measured on the source at 1440px: each post goes to the shortest column.
const columns = [[0, 4], [1], [2, 3]];

function NewsCard({ post, order }: { post: NewsPost; order: number }) {
  return (
    <article className="gf-ct-post" style={{ order }}>
      <div className="gf-ct-post-img">
        <img
          src={`${IMG}/${post.image}`}
          alt=""
          width={post.width}
          height={post.height}
          loading="lazy"
        />
        <a href={post.href} aria-label={post.title} />
      </div>
      <div className="gf-ct-post-body">
        <div className="gf-ct-post-cat">
          <a href={withBase("/category/noticias")}>Noticias</a>
        </div>
        <h5>
          <a href={post.href} title={post.title}>
            {post.title}
          </a>
        </h5>
        <p>{post.excerpt}</p>
        <div className="gf-ct-post-more">
          <a href={post.href} title={post.title}>
            Continue Reading
            <span />
          </a>
        </div>
      </div>
    </article>
  );
}

export function NewsMasonry() {
  return (
    <div className="gf-ct-news">
      {columns.map((col, i) => (
        <div key={i} className="gf-ct-news-col">
          {col.map((idx) => (
            <NewsCard key={idx} post={newsPosts[idx]} order={idx} />
          ))}
        </div>
      ))}
    </div>
  );
}
