"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Source: Avante "scrollme" effect. The element moves from translateY(0) to translateY(distance)
 * while its (untransformed) top travels from the bottom of the viewport to 100px from the top.
 * Measured on gesfinc.com/servicios: 0 → -100px over ~800px of scrolling. Disabled on mobile, as on the source.
 */
export function ScrollDrift({
  distance,
  className,
  style,
  children,
}: {
  distance: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let current = 0;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (window.innerWidth < 768) {
        current = 0;
        el.style.transform = "";
        return;
      }
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top - current;
      const progress = Math.max(0, Math.min(1, (vh - top) / (vh - 100)));
      current = progress * distance;
      el.style.transform = `translateY(${current}px)`;
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
  }, [distance]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
}
