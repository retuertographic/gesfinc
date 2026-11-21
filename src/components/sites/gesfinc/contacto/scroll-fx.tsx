"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Avante "scrollme" on the Contactar decorations. Measured on the source: the transform grows linearly from 0 to its
 * full value while the element's top moves from the bottom of the viewport to the top (progress = (vh - top) / vh),
 * eased by a short smoothing. Disabled below `minWidth`, as on the source ("disable mobile/tablet").
 */
export function ScrollFx({
  tx = 0,
  ty = 0,
  rx = 0,
  ry = 0,
  minWidth = 768,
  className,
  style,
  children,
}: {
  tx?: number;
  ty?: number;
  rx?: number;
  ry?: number;
  minWidth?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.innerWidth < minWidth) {
        i.style.transform = "";
        return;
      }
      const vh = window.innerHeight;
      const p = Math.max(
        0,
        Math.min(1, (vh - o.getBoundingClientRect().top) / vh),
      );
      i.style.transform = `perspective(1000px) translate(${tx * p}px, ${ty * p}px) rotateX(${rx * p}deg) rotateY(${ry * p}deg)`;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [tx, ty, rx, ry, minWidth]);

  return (
    <div ref={outer} className={className} style={style} aria-hidden="true">
      <div ref={inner} style={{ transition: "transform 0.6s ease-out" }}>
        {children}
      </div>
    </div>
  );
}
