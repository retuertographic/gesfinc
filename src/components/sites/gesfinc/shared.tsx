/* eslint-disable @next/next/no-img-element */
import { Icon } from "./icons";
import { apps, footerClients, footerNav, IMG, SOURCE } from "./data";
import { CookieBanner, ToTop } from "./widgets";

export const SLANT_LEFT = "M0,0 H1000 V6 L0,100 Z"; // white wedge, deep on the left
export const SLANT_LEFT_BOTTOM = "M0,94 L1000,0 V100 H0 Z";
export const V_SHAPE = "M500.2,94.7L0,0v100h1000V0L500.2,94.7z";

export function Shape({
  d,
  position,
  className,
}: {
  d: string;
  position: "top" | "bottom";
  className?: string;
}) {
  return (
    <div
      className={`gf-shape gf-shape--${position}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d={d} />
      </svg>
    </div>
  );
}

export function Arrow() {
  return <Icon name="long-arrow-alt-right" />;
}

/** "Sala de Juntas" band, footer, back-to-top and cookie dialog — identical on every source page. */
export function SiteFooter() {
  return (
    <>
      {/* Sala de Juntas */}
      <section className="gf-meeting">
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
    </>
  );
}
