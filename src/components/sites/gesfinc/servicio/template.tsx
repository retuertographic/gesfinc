/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import "../gesfinc.css";
import "../pages.css";
import "./servicio.css";
import { Header } from "../header";
import { Icon } from "../icons";
import { IMG } from "../data";
import { Shape, SiteFooter, SLANT_LEFT_BOTTOM, V_SHAPE } from "../shared";
import { ScrollDrift } from "../scroll-drift";
import { QuoteRequestForm } from "./quote-form";
import { OTHERS, type OtherCard, type Photo } from "./data";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Page shell: everything between the overlay header (inside the hero) and the shared footer (Elementor footer 5211). */
export function ServicePage({ children }: { children: ReactNode }) {
  return (
    <main className="gf gf-sd">
      {children}
      <SiteFooter />
    </main>
  );
}

export type HeroItem = { label: string; href?: string };

/**
 * Blue hero (section 5ac5a52): Elementor header 5204 laid over it, a 40% text column centred between y=80 and the
 * section's min-height, and a 680px photo + red circle hanging from y = minHeight / 2 + 60 into the next section.
 */
export function ServiceHero({
  title,
  titleSize = 55,
  titleSizeMobile = 36,
  texts,
  list,
  photo,
  minHeight = 780,
  shape = "v",
  shapeHeight = 100,
  photoGapMobile = 60,
}: {
  title: ReactNode;
  titleSize?: number;
  titleSizeMobile?: number;
  texts: ReactNode[];
  list?: HeroItem[];
  photo: Photo;
  minHeight?: number;
  shape?: "v" | "tilt";
  shapeHeight?: 100 | 110;
  /** Space between the text column and the photo once stacked (≤1024px); 20px on Jardinería, 60px elsewhere. */
  photoGapMobile?: number;
}) {
  const style: Vars = {
    "--gf-sd-min": `${minHeight}px`,
    "--gf-sd-h1": `${titleSize}px`,
    "--gf-sd-h1-m": `${titleSizeMobile}px`,
    "--gf-sd-ratio": `${photo.width} / ${photo.height}`,
    "--gf-sd-gap-m": `${photoGapMobile}px`,
  };
  return (
    <section className="gf-hero gf-sd-hero" style={style}>
      <Header />
      <div className="gf-sd-hero-body">
        <div className="gf-container">
          <div className="gf-sd-hero-text">
            <h1>{title}</h1>
            {texts.map((t, i) => (
              <div className="gf-sd-hero-copy" key={i}>
                {t}
              </div>
            ))}
            {list && (
              <ul className="gf-sd-checks">
                {list.map((item) => (
                  <li key={item.label}>
                    <Icon name="chevron-right" />
                    {item.href ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="gf-sd-hero-art">
        <img
          className="gf-sd-hero-circle"
          src={`${IMG}/service1_red_circle.png`}
          alt=""
          width={1066}
          height={1058}
        />
        <img
          className="gf-sd-hero-photo"
          src={photo.src}
          alt=""
          width={photo.width}
          height={photo.height}
        />
      </div>
      <Shape
        d={shape === "tilt" ? SLANT_LEFT_BOTTOM : V_SHAPE}
        position="bottom"
        className={`gf-sd-shape gf-sd-shape--${shapeHeight}`}
      />
    </section>
  );
}

/** Grey text under the hero on the long pages (inner section 0821f25). */
export function IntroText({ children }: { children: ReactNode }) {
  return (
    <section className="gf-container gf-sd-intro">
      <div className="gf-sd-intro-text">{children}</div>
    </section>
  );
}

/**
 * Alternating 40/60 row (sections 3bda538, 5eddfad, e94d863): text column + absolutely placed photo that drifts
 * up 100px while scrolling (Avante "scrollme"). `imageTop` is the photo's `top` in % of the row height.
 */
export function ServiceRow({
  heading,
  children,
  small = false,
  button,
  image,
  imageTop,
  imageSide = "right",
  last = false,
}: {
  heading?: ReactNode;
  children: ReactNode;
  small?: boolean;
  button?: string;
  image: Photo;
  imageTop: number;
  imageSide?: "left" | "right";
  last?: boolean;
}) {
  const media = (
    <div className="gf-sd-row-media">
      {imageSide === "left" && (
        <img
          className="gf-sd-row-circle"
          src={`${IMG}/service1_red_circle.png`}
          alt=""
          width={1066}
          height={1058}
        />
      )}
      {/* The navy circle next to the right-hand photos (service1_navy_circle.png) is a 404 on the source: not rendered. */}
      <ScrollDrift
        distance={-100}
        className="gf-sd-row-photo"
        style={{ top: `${imageTop}%` }}
      >
        <img src={image.src} alt="" width={image.width} height={image.height} />
      </ScrollDrift>
    </div>
  );
  return (
    <section
      className={`gf-sd-row gf-sd-row--${imageSide}${last ? " gf-sd-row--last" : ""}`}
    >
      {imageSide === "left" && media}
      <div className="gf-sd-row-text">
        {heading && <h2>{heading}</h2>}
        <div
          className={`gf-sd-row-copy${small ? " gf-sd-row-copy--small" : ""}`}
        >
          {children}
        </div>
        {button && (
          <a className="gf-sd-btn" href={button}>
            <Icon name="arrow-right" />
            Más información
          </a>
        )}
      </div>
      {imageSide === "right" && media}
    </section>
  );
}

function Card({ card }: { card: OtherCard }) {
  return (
    <article className="gf-sd-card">
      <a
        className={`gf-sd-thumb${card.image ? "" : " gf-sd-thumb--empty"}`}
        href={card.href}
        aria-label={card.title}
      >
        <img
          src={card.image ? `${IMG}/${card.image}` : `${IMG}/default.svg`}
          alt=""
          loading="lazy"
        />
      </a>
      <div className="gf-sd-card-body">
        <h3>
          <a href={card.href}>{card.title}</a>
        </h3>
        <div className="gf-sd-card-sub">Servicios</div>
      </div>
    </article>
  );
}

/** "Otros servicios de Gesfinc Canarias" heading, intro and 5-column portfolio grid (widget avante-portfolio-contain). */
export function OtherServices({
  page,
  children,
}: {
  page: keyof typeof OTHERS;
  /** Extra content inside the grid section (certificados-electronicos puts its form there). */
  children?: ReactNode;
}) {
  return (
    <>
      <section className="gf-container gf-sd-others-head">
        <h2 className="gf-arial">Otros servicios de Gesfinc Canarias</h2>
        <p>
          Cada Comunidad de propietarios es diferente y puede tener unas
          necesidades especiales, por eso en Gesfinc Canarias estudiamos cada
          caso para ofrecerte los mejores servicios que más se amolden a las
          características de tu Comunidad.
        </p>
      </section>
      <section className="gf-container gf-sd-others">
        <div className="gf-sd-grid">
          {OTHERS[page].map((c) => (
            <Card key={c.title + c.href} card={c} />
          ))}
        </div>
        {children}
      </section>
    </>
  );
}

/** "Petición de presupuesto" heading + form. `inline` = placed inside the grid section without the 10px padding. */
export function QuoteSection({
  title = "Petición de presupuesto",
  inline = false,
}: {
  title?: string;
  inline?: boolean;
}) {
  return (
    <div
      className={
        inline ? "gf-sd-quote gf-sd-quote--inline" : "gf-container gf-sd-quote"
      }
    >
      <h2 className="gf-arial">{title}</h2>
      <QuoteRequestForm subject={title} />
    </div>
  );
}
