"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Icon } from "../icons";

/** Inline post image that opens full size in a lightbox (the source uses ModuloBox for image links). */
export function ZoomImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href={src}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <img
          className="gf-bl-inline-img"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
      {open && (
        <div
          className="gf-bl-lightbox"
          role="dialog"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <img src={src} alt={alt} width={width} height={height} />
          <button type="button" aria-label="Cerrar" autoFocus>
            <Icon name="times" />
          </button>
        </div>
      )}
    </>
  );
}
