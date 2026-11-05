/* eslint-disable @next/next/no-img-element */
import "@/components/sites/gesfinc/gesfinc.css";
import { Header } from "@/components/sites/gesfinc/header";
import { Icon } from "@/components/sites/gesfinc/icons";
import {
  HeroGallery,
  ServicesCarousel,
} from "@/components/sites/gesfinc/widgets";
import { apps, IMG, posts, SOURCE } from "@/components/sites/gesfinc/data";
import {
  Arrow,
  Shape,
  SiteFooter,
  SLANT_LEFT,
  SLANT_LEFT_BOTTOM,
} from "@/components/sites/gesfinc/shared";

export default function Home() {
  return (
    <main className="gf">
      {/* Hero + header */}
      <section className="gf-hero">
        <Header />
        <div className="gf-container gf-hero-body">
          <div className="gf-hero-text">
            <h2>
              Nuevos aires
              <br />
              en Gesfinc
            </h2>
            <p>
              Nuestro libro de estilo de la administración de fincas, 15 años de
              experiencia y crecimiento nos han permitido alcanzar una cuota
              considerable del mercado con más de 250 comunidades en Canarias.
            </p>
            <a className="gf-more" href={`${SOURCE}/por-que-gesfinc-canarias/`}>
              <span>
                <Arrow />
              </span>
              <span>Más información</span>
            </a>
          </div>
          <HeroGallery />
        </div>
        <Shape d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" position="bottom" />
      </section>

      {/* ¿Qué es Gesfinc Canarias? */}
      <section className="gf-about">
        <div className="gf-container">
          <div className="gf-about-text">
            <h2 className="gf-h2">
              ¿Qué es
              <br />
              Gesfinc Canarias?
            </h2>
            <div className="gf-counter">
              <span>+300</span>
              <span>Comunidades de vecinos</span>
            </div>
            <div className="gf-redline" />
            <p>
              Con sede en La Orotava, y con más de 10 años de experiencia en la
              Administración de Fincas, Gesfinc Canarias es una empresa dedicada
              a la Administración de Comunidades de Propietarios.
            </p>
            <p>
              Gesfinc Canarias pretende que se le reconozca con una empresa de
              Servicio Integral para Comunidades de Propietarios
            </p>
          </div>
          <div className="gf-card gf-card--low">
            <div className="gf-card-icon">
              <img
                src={`${IMG}/home7_icon1.png`}
                alt=""
                width={92}
                height={58}
              />
            </div>
            <h3>Más de 15 años de experiencia</h3>
            <div className="gf-zigzag" />
            <p>
              Nos han permitido alcanzar una cuota considerable del mercado con
              más de 300 comunidades en Canarias.
            </p>
          </div>
          <div className="gf-card">
            <div className="gf-card-icon">
              <img
                src={`${IMG}/home7_icon2.png`}
                alt=""
                width={70}
                height={73}
              />
            </div>
            <h3>99.9% de satisfacción de nuestros clientes</h3>
            <div className="gf-zigzag" />
            <p>
              Disponemos de un departamento que se encarga de la gestión de
              Servicios jurídicos. La Claridad, responsabilidad y garantía son
              nuestro lema.
            </p>
          </div>
        </div>
      </section>

      {/* Necesitas conocernos más */}
      <section className="gf-know">
        <div className="gf-container">
          <div className="gf-know-art">
            <img
              src={`${IMG}/People-clapping-on-balconies-rafiki-1024x1024.png`}
              alt=""
              style={{ left: -104, top: -7, width: 328, height: 328 }}
            />
            <img
              src={`${IMG}/Neighbours-on-balconies-or-windows-during-Coronavirus-rafiki-1024x1024.png`}
              alt=""
              style={{ left: -65, top: 260, width: 308, height: 308 }}
            />
            <img
              src={`${IMG}/vecinos-balcones-concepto-cuarentena_23-2148514127.jpg`}
              alt=""
              style={{ left: 182, top: -9, width: 456, height: 456 }}
            />
          </div>
          <div className="gf-know-text">
            <h2 className="gf-h2">Necesitas conocernos más</h2>
            <p>
              Disipe sus dudas antes de contratar los servicios de Gesfinc o de
              cualquier otro administrador. La comodidad y el bienestar de sus
              vecinos es importante para todos.
            </p>
            <a
              className="gf-btn gf-btn--light-border"
              href={`${SOURCE}/por-que-gesfinc-canarias/`}
            >
              ¿Por qué Gesfinc? <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos? */}
      <section className="gf-services">
        <Shape d={SLANT_LEFT} position="top" />
        <div className="gf-container">
          <div className="gf-services-head">
            <div>
              <h2 className="gf-h2">
                ¿Qué hacemos
                <br />
                en Gesfinc Canarias?
              </h2>
            </div>
            <div>
              <p>
                Ponemos a disposición de todos los clientes de Gesfinc, una
                serie de servicios que harán posible la buena gestión de su
                comunidad de propietarios
              </p>
              <a className="gf-btn" href="/servicios">
                Más servicios <Arrow />
              </a>
            </div>
          </div>
          <ServicesCarousel />
        </div>
        <Shape d={SLANT_LEFT_BOTTOM} position="bottom" />
      </section>

      {/* Descarga nuestra App */}
      <section className="gf-container gf-app">
        <h1>Descarga nuestra App</h1>
        <div className="gf-app-buttons">
          <div>
            <a
              className="gf-app-btn"
              style={{ background: "rgb(92, 184, 92)" }}
              href={apps.android}
            >
              <Icon name="android" /> Descargar
            </a>
          </div>
          <div>
            <a
              className="gf-app-btn"
              style={{ background: "rgb(105, 114, 125)" }}
              href={apps.ios}
            >
              <Icon name="apple" /> Descargar
            </a>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="gf-blog">
        <div className="gf-container">
          <h1>Artículos de nuestro blog</h1>
        </div>
        <div className="gf-posts">
          {posts.map((p) => (
            <article key={p.href} className="gf-post">
              <a className="gf-post-thumb" href={p.href}>
                <img src={p.image} alt={p.title} loading="lazy" />
              </a>
              <span className="gf-badge">Noticias</span>
              <div className="gf-post-body">
                <h3>
                  <a href={p.href}>{p.title}</a>
                </h3>
                <p>{p.excerpt}</p>
              </div>
              <div className="gf-post-meta">
                <span>{p.date}</span>
                <span>No hay comentarios</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
