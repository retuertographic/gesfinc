"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import { IMG } from "../data";

export type GalleryImage = { src: string; width: number; height: number };

/**
 * Avante "horizontal gallery" (Flickity: autoPlay 8000, contain, pauseAutoPlayOnHover, no arrows/dots).
 * Desktop: 500px-tall cells, 80px apart, selected cell centred and the strip contained to the edges.
 * Mobile (<768px): images at their natural size (capped at 460px tall), selected cell centred.
 * Autoplay wraps back to the first image, as Flickity's autoplay does. Drag/swipe changes the slide.
 */
export function ExGallery({ images }: { images: GalleryImage[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef<{ x: number; id: number } | null>(null);

  const layout = useCallback(() => {
    const w = wrap.current;
    const t = track.current;
    if (!w || !t) return;
    const cells = Array.from(t.children) as HTMLElement[];
    const cell = cells[index];
    if (!cell) return;
    const size = w.clientWidth;
    const mobile = window.innerWidth < 768;
    let target = cell.offsetLeft + cell.offsetWidth / 2 - size / 2;
    if (!mobile) {
      const last = cells[cells.length - 1];
      const max = Math.max(0, last.offsetLeft + last.offsetWidth - size);
      target = Math.max(0, Math.min(max, target));
    }
    // Written straight to the DOM: the position depends on measured layout, not on React state.
    t.style.transform = `translateX(${-target}px)`;
  }, [index]);

  useEffect(() => {
    layout();
    window.addEventListener("resize", layout);
    // Re-measure once images have their real sizes.
    const imgs = track.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => img.addEventListener("load", layout));
    return () => {
      window.removeEventListener("resize", layout);
      imgs.forEach((img) => img.removeEventListener("load", layout));
    };
  }, [layout]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(
      () => setIndex((i) => (i + 1) % images.length),
      8000,
    );
    return () => window.clearTimeout(t);
  }, [index, paused, images.length]);

  return (
    <div
      className="gf-ex-gallery"
      ref={wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => {
        drag.current = { x: e.clientX, id: e.pointerId };
      }}
      onPointerUp={(e) => {
        const d = drag.current;
        drag.current = null;
        if (!d || d.id !== e.pointerId) return;
        const dx = e.clientX - d.x;
        if (Math.abs(dx) < 40) return;
        setIndex((i) =>
          dx < 0 ? Math.min(images.length - 1, i + 1) : Math.max(0, i - 1),
        );
      }}
      onPointerCancel={() => {
        drag.current = null;
      }}
    >
      <div
        className="gf-ex-gallery-track"
        ref={track}
      >
        {images.map((img) => (
          <img
            key={img.src}
            src={`${IMG}/${img.src}`}
            alt=""
            width={img.width}
            height={img.height}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
