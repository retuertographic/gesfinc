"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import { Icon } from "../icons";
import { IMG } from "../data";

type ScrollMe = {
  x?: number;
  y?: number;
  rotateX?: number;
  rotateY?: number;
  smoothness: number;
  /** below this viewport width the effect is off ("mobile" = 501, "tablet" = 769 on the source) */
  disableBelow: number;
};

type Deco = {
  id: string;
  img: string;
  /** Avante "infinite animation" class */
  loop?: "scale" | "bounce";
  scroll?: ScrollMe;
};

// Positions/sizes/opacity/blur live in CSS (.gf-ex-deco--<id>), from the Elementor post CSS.
const DECOS: Deco[] = [
  { id: "a", img: "purple_bubble.png", loop: "scale" },
  { id: "b", img: "purple_bubble.png", loop: "bounce" },
  { id: "c", img: "orange_bubble-1.png", loop: "bounce" },
  { id: "d", img: "orange_triangle2.png", scroll: { y: 200, rotateX: -360, smoothness: 60, disableBelow: 501 } },
  { id: "e", img: "orange_triangle2.png", scroll: { x: 70, rotateX: -360, smoothness: 60, disableBelow: 501 } },
  { id: "f", img: "orange_triangle-1.png", scroll: { x: 300, y: 60, rotateX: 360, rotateY: 360, smoothness: 60, disableBelow: 501 } },
  { id: "g", img: "orange_triangle-1.png", scroll: { x: -200, y: 60, rotateY: -360, smoothness: 60, disableBelow: 501 } },
  { id: "h", img: "purple_bubble.png", scroll: { x: -100, y: -50, smoothness: 30, disableBelow: 769 } },
  { id: "i", img: "purple_bubble.png", scroll: { x: -100, y: -50, smoothness: 30, disableBelow: 769 } },
  { id: "j", img: "orange_bubble-1.png", scroll: { x: -200, y: -70, rotateY: 360, smoothness: 30, disableBelow: 501 } },
];

const KEYS = ["x", "y", "rotateX", "rotateY"] as const;

/**
 * Avante "scrollme" (jquery.parallax-scroll): each value goes from 0 to its target while the page scrolls
 * from (element top − viewport height) over one viewport height, eased by 1/smoothness per frame.
 */
function useScrollMe(
  refs: React.RefObject<(HTMLDivElement | null)[]>,
  decos: Deco[],
) {
  useEffect(() => {
    const els = refs.current ?? [];
    const state = decos.map(() => ({ x: 0, y: 0, rotateX: 0, rotateY: 0 }));
    let raf = 0;
    const frame = (instant: boolean) => {
      raf = 0;
      let moving = false;
      const vh = window.innerHeight;
      decos.forEach((d, i) => {
        const el = els[i];
        const cfg = d.scroll;
        if (!el || !cfg) return;
        const img = el.firstElementChild as HTMLElement | null;
        if (!img) return;
        if (window.innerWidth < cfg.disableBelow) {
          img.style.transform = "";
          return;
        }
        const top = el.getBoundingClientRect().top + window.scrollY;
        const from = Math.max(0, top - vh);
        const p = Math.max(0, Math.min(1, (window.scrollY - from) / vh));
        const s = state[i];
        for (const k of KEYS) {
          const to = cfg[k] ?? 0;
          const next = to * p;
          const v = instant ? next : s[k] + (next - s[k]) / cfg.smoothness;
          s[k] = Math.abs(next - v) < 0.01 ? next : v;
          if (s[k] !== next) moving = true;
        }
        img.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotateX(${s.rotateX}deg) rotateY(${s.rotateY}deg)`;
      });
      if (moving) raf = requestAnimationFrame(() => frame(false));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(() => frame(false));
    };
    frame(true);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [refs, decos]);
}

/** Dark "Su opinión es muy importante para nosotros" band with floating shapes and an "Enviar" button. */
export function OpinionBand() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useScrollMe(refs, DECOS);

  return (
    <section className="gf-ex-opinion">
      <div className="gf-container gf-ex-opinion-inner">
        {DECOS.map((d, i) => (
          <div
            key={d.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`gf-ex-deco gf-ex-deco--${d.id}${d.loop ? ` gf-ex-loop-${d.loop}` : ""}`}
            aria-hidden="true"
          >
            <img src={`${IMG}/${d.img}`} alt="" />
          </div>
        ))}
        <h2>Su opinión es muy importante para nosotros</h2>
        <h2 className="gf-ex-opinion-accent">envíenos sus comentarios</h2>
        {/* Source button: https://gesfinc.com/contactar/ */}
        <a className="gf-ex-opinion-btn" href="/contactar">
          Enviar <Icon name="long-arrow-alt-right" />
        </a>
      </div>
    </section>
  );
}
