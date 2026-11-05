"use client";

import { useState } from "react";
import { IMG } from "../data";
import { TiArrow } from "./icons";

type Slide = {
  image: string;
  title: string;
  text: string;
  link: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    image: "young-businesswoman-smiling-at-office-LGQRJY2.jpg",
    title: "Sala de Juntas Videoconferencia",
    text: "Abrimos nuestro nuevo servicio de Juntas a través de videoconferencia, para ello los clientes deberán tener instalado la herramienta Zoom.",
    link: { label: "Entrar en la Sala de Juntas", href: "/sala-de-juntas" },
  },
];

/**
 * Dark band with the Avante "animated slider" (Elementor widget d84dcba): image on the right 65%
 * (lifted 40px), caption on the left, prev/next arrows. The source has a single slide, so the arrows
 * cycle through one slide (as on the source). `withRule` adds the white 10px divider that separates
 * this band from the "Su opinión" band on Recursos / Filosofía.
 */
export function MeetingSlider({ withRule = false }: { withRule?: boolean }) {
  const [current, setCurrent] = useState(0);
  const go = (delta: number) =>
    setCurrent((c) => (c + delta + SLIDES.length) % SLIDES.length);

  return (
    <section className="gf-ex-band">
      <div className="gf-ex-slider">
        {SLIDES.map((s, i) => (
          <div
            key={s.title}
            className={`gf-ex-slide${i === current ? " is-current" : ""}`}
            aria-hidden={i !== current}
          >
            <div
              className="gf-ex-slide-img"
              style={{ backgroundImage: `url(${IMG}/${s.image})` }}
            />
            <div className="gf-ex-slide-cap">
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <a className="gf-ex-slide-link" href={s.link.href}>
                <span>{s.link.label}</span>
              </a>
            </div>
          </div>
        ))}
        <div className="gf-ex-slide-ctrl">
          <button type="button" aria-label="Anterior" onClick={() => go(-1)}>
            <TiArrow dir="left" />
          </button>
          <button type="button" aria-label="Siguiente" onClick={() => go(1)}>
            <TiArrow dir="right" />
          </button>
        </div>
      </div>
      <div className="gf-ex-band-space" />
      {withRule && (
        <div className="gf-ex-band-rule" aria-hidden="true">
          <span />
        </div>
      )}
    </section>
  );
}
