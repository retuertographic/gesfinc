/* eslint-disable @next/next/no-img-element */
import "@/components/sites/gesfinc/gesfinc.css";
import { Header } from "@/components/sites/gesfinc/header";
import { Icon } from "@/components/sites/gesfinc/icons";
import {
  CookieBanner,
  HeroGallery,
  ServicesCarousel,
  ToTop,
} from "@/components/sites/gesfinc/widgets";
import {
  apps,
  footerClients,
  footerNav,
  IMG,
  posts,
  SOURCE,
} from "@/components/sites/gesfinc/data";

const SLANT_LEFT = "M0,0 H1000 V6 L0,100 Z"; // white wedge, deep on the left
const SLANT_LEFT_BOTTOM = "M0,94 L1000,0 V100 H0 Z";

function Shape({ d, position }: { d: string; position: "top" | "bottom" }) {
  return (
    <div className={`gf-shape gf-shape--${position}`} aria-hidden="true">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d={d} />
      </svg>
    </div>
  );
}

function Arrow() {
  return <Icon name="long-arrow-alt-right" />;
}

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
              <a className="gf-btn" href={`${SOURCE}/servicios/`}>
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

      {/* Sala de Juntas */}
      <section className="gf-meeting" style={{ marginTop: 2 }}>
        <Shape d={SLANT_LEFT} position="top" />
        <div className="gf-container">
          <div className="gf-meeting-img">
            <img src={`${IMG}/2529-1024x683.jpg`} alt="" loading="lazy" />
            <h2 className="gf-quote">
              “Usted tiene derecho al mejor servicio posible y eso nos hace
              diferentes e imprescindibles.”
            </h2>
            <div className="gf-quote-by">Filosofia Gesfinc</div>
          </div>
          <div className="gf-meeting-text">
            <h2>Sala de Juntas Videoconferencia</h2>
            <p>
              Abrimos nuestro nuevo servicio de Juntas a través de
              videoconferencia, para ello los clientes deberán tener instalada
              nuestra App en su dispositivo móvil
            </p>
            <a
              className="gf-btn gf-btn--square"
              href={`${SOURCE}/sala-de-juntas/`}
            >
              Sala de Juntas <Arrow />
            </a>
          </div>
        </div>
      </section>
      <div className="gf-meeting-rule">
        <div className="gf-container">
          <hr />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="gf-footer">
          <div className="gf-container">
            <div className="gf-footer-brand">
              <img
                src={`${IMG}/Logo-Gesfinc.png`}
                alt="Gesfinc Canarias"
                width={130}
                height={130}
              />
              <h2>
                Expertos en Administración de fincas de comunidades de vecinos
              </h2>
              <div className="gf-social">
                <a href={apps.footerIos} aria-label="Apple">
                  <Icon name="apple" />
                </a>
                <a href={apps.footerAndroid} aria-label="Android">
                  <Icon name="android" />
                </a>
              </div>
            </div>
            <div>
              <h3>Navegación</h3>
              <ul className="gf-footer-links">
                {footerNav.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Clientes</h3>
              <ul className="gf-footer-links">
                {footerClients.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gf-footer-contact">
              <h3>Gesfinc Canarias</h3>
              <address>
                Calle Juan Ortiz de Zárate 6 Edificio Mencey – Local A Peatonal
                38300 La Orotava.
                <br />
                <a href="tel:+34922975075">Teléfono: 922 975 075</a>
                <br />
                <a href="tel:+34922325048">Fax: 922 32 50 48</a>
                <br />
                <a href="mailto:info@gesfinc.es">E-mail: info@gesfinc.es</a>
              </address>
            </div>
          </div>
        </div>
        <div className="gf-copy">
          <div className="gf-container">
            <p>
              Copyright 2020. Diseño X-Net Software.{" "}
              <a href={`${SOURCE}/aviso-legal/`}>Aviso Legal</a> |{" "}
              <a href={`${SOURCE}/politica-privacidad/`}>
                Políticas de Privacidad
              </a>{" "}
              |{" "}
              <a href={`${SOURCE}/politica-de-cookies-ue/`}>
                Políticas de Cookies
              </a>
            </p>
          </div>
        </div>
      </footer>

      <ToTop />
      <CookieBanner />
    </main>
  );
}
