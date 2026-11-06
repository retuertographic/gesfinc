"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { heroImages, services } from "./data";

/** Hero horizontal gallery: 790px cells with 40px gaps, advancing every 8s (source: Flickity, autoplay 8000). */
export function HeroGallery() {
  const [index, setIndex] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const [cell, setCell] = useState(830);

  useEffect(() => {
    const measure = () => {
      const img = wrap.current?.querySelector("img");
      if (img) setCell(img.getBoundingClientRect().width + 40);
    };
    measure();
    window.addEventListener("resize", measure);
    const t = window.setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      8000,
    );
    return () => {
      window.removeEventListener("resize", measure);
      window.clearInterval(t);
    };
  }, []);

  return (
    <div className="gf-gallery" ref={wrap}>
      <div
        className="gf-gallery-track"
        style={{ transform: `translateX(${-index * cell}px)` }}
      >
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            width={1170}
            height={548}
          />
        ))}
      </div>
    </div>
  );
}

/** "¿Qué hacemos?" synchronized carousel: number, title and image change together. */
export function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const clip = useRef<HTMLDivElement>(null);
  const [pitch, setPitch] = useState(700);
  const drag = useRef<{ x: number; id: number } | null>(null);
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  // Source: Elementor motion effect "translateY, speed 4" — the widget drifts 0.3px per scrolled px
  // relative to the viewport centre, clamped to ±200px.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!outer.current || !inner.current) return;
      const r = outer.current.getBoundingClientRect();
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * 0.3;
      inner.current.style.transform = `translateY(${Math.max(-200, Math.min(200, offset))}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const slide =
        clip.current?.querySelector<HTMLElement>(".gf-carousel-slide");
      const track = clip.current?.firstElementChild;
      if (slide && track)
        setPitch(
          slide.offsetWidth +
            parseFloat(getComputedStyle(track).columnGap || "0"),
        );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const go = (i: number) =>
    setIndex(Math.max(0, Math.min(services.length - 1, i)));
  const s = services[index];

  return (
    <div className="gf-carousel" ref={outer}>
      <div className="gf-carousel-inner" ref={inner}>
        <div
          key={`n${index}`}
          className="gf-carousel-num gf-fade"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="gf-carousel-clip" ref={clip}>
          <div
            className="gf-carousel-track"
            style={{ transform: `translateX(${-index * pitch}px)` }}
            onPointerDown={(e) => {
              drag.current = { x: e.clientX, id: e.pointerId };
            }}
            onPointerUp={(e) => {
              if (!drag.current) return;
              const dx = e.clientX - drag.current.x;
              drag.current = null;
              if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
            }}
            onPointerCancel={() => (drag.current = null)}
          >
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="gf-carousel-slide"
                onClick={() => i !== index && go(i)}
                role={i !== index ? "button" : undefined}
                aria-label={i !== index ? svc.title : undefined}
              >
                {svc.image && (
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div key={`t${index}`} className="gf-carousel-text gf-fade">
          <h3>{s.title}</h3>
          <a href={s.href}>Más información</a>
        </div>
        <div className="gf-dots" role="tablist" aria-label="Servicios">
          {services.map((svc, i) => (
            <button
              key={svc.title}
              type="button"
              aria-label={svc.title}
              aria-current={i === index}
              onClick={() => go(i)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`gf-totop${visible ? " is-visible" : ""}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Icon name="long-arrow-alt-right" />
    </button>
  );
}

const COOKIE_KEY = "gesfinc-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [stats, setStats] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(COOKIE_KEY);
    } catch {
      stored = null;
    }
    // Read after hydration so the server render never shows the banner to people who already chose.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setShow(true);
    // Close the dialog when a choice is saved elsewhere: another tab ("storage") or the
    // cookie-policy page's settings in this tab ("gesfinc-consent-change").
    const onChange = (e: Event) => {
      if (e instanceof StorageEvent && e.key !== COOKIE_KEY) return;
      setShow(false);
    };
    window.addEventListener("storage", onChange);
    window.addEventListener("gesfinc-consent-change", onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener("gesfinc-consent-change", onChange);
    };
  }, []);

  const save = (value: { stats: boolean; marketing: boolean }) => {
    try {
      window.localStorage.setItem(COOKIE_KEY, JSON.stringify(value));
    } catch {
      /* storage unavailable: just hide */
    }
    setShow(false);
  };

  if (!show) return null;
  const toggle = (on: boolean, set: (v: boolean) => void, label: string) => (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      className="gf-toggle"
      onClick={(e) => {
        e.preventDefault();
        set(!on);
      }}
    />
  );

  return (
    <div
      className="gf-cookie"
      role="dialog"
      aria-label="Gestionar consentimiento"
    >
      <p>
        Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio.
      </p>
      <details>
        <summary>
          <span>Funcional</span>
          <span>
            <span className="gf-always">Siempre activo</span>
            <Icon name="angle-down" className="gf-chev" />
          </span>
        </summary>
        <p>
          El almacenamiento o acceso técnico es estrictamente necesario para el
          propósito legítimo de permitir el uso de un servicio específico
          explícitamente solicitado por el abonado o usuario, o con el único
          propósito de llevar a cabo la transmisión de una comunicación a través
          de una red de comunicaciones electrónicas.
        </p>
      </details>
      <details>
        <summary>
          <span>Estadísticas</span>
          <span>
            {toggle(stats, setStats, "Estadísticas")}
            <Icon name="angle-down" className="gf-chev" />
          </span>
        </summary>
        <p>
          El almacenamiento o acceso técnico que es utilizado exclusivamente con
          fines estadísticos.
        </p>
      </details>
      <details>
        <summary>
          <span>Marketing</span>
          <span>
            {toggle(marketing, setMarketing, "Marketing")}
            <Icon name="angle-down" className="gf-chev" />
          </span>
        </summary>
        <p>
          El almacenamiento o acceso técnico es necesario para crear perfiles de
          usuario para enviar publicidad, o para rastrear al usuario en una web
          o en varias web con fines de marketing similares.
        </p>
      </details>
      <div className="gf-cookie-btns">
        <button
          type="button"
          onClick={() => save({ stats: true, marketing: true })}
        >
          Aceptar cookies
        </button>
        <button
          type="button"
          onClick={() => save({ stats: false, marketing: false })}
        >
          Denegar
        </button>
        <button type="button" onClick={() => save({ stats, marketing })}>
          Guardar preferencias
        </button>
      </div>
      <div className="gf-cookie-links">
        <a href="/politica-de-cookies-ue">Política de cookies</a>
        <a href="/politica-privacidad">Política de privacidad</a>
      </div>
    </div>
  );
}
