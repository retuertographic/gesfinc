"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "../icons";

const fields: {
  name: string;
  label: string;
  type?: "text" | "email" | "number";
  required?: boolean;
}[] = [
  { name: "nombre", label: "Nombre de la persona de contacto" },
  { name: "apellidos", label: "Apellidos de la persona de contacto ", required: true },
  { name: "email", label: "Email de la persona de contacto ", type: "email", required: true },
  { name: "telefono", label: "Teléfono de la persona de contacto", type: "number", required: true },
  { name: "comunidad", label: "Nombre de la Comunidad de propietarios" },
  { name: "direccion", label: "Dirección de la Comunidad" },
  // The source repeats this placeholder on two fields; kept as is.
  { name: "direccion2", label: "Dirección de la Comunidad" },
  { name: "viviendas", label: "Nº viviendas" },
  { name: "locales", label: "Nº locales comerciales" },
  { name: "garajes", label: "Nº plazas de garaje" },
];

/**
 * "Petición de presupuesto" form of the service pages (Elementor form, 11 fields). The source posts to WordPress,
 * which this clone can't reach, so a valid submission opens the visitor's mail app addressed to info@gesfinc.es.
 */
export function QuoteRequestForm({ subject }: { subject: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const title = `${subject} – ${get("nombre")} ${get("apellidos")}`.trim();
    const body = [
      ...fields.map((f) => `${f.label.trim()}: ${get(f.name)}`),
      "",
      `Observaciones: ${get("observaciones")}`,
      "",
      `Página: ${window.location.href}`,
    ].join("\n");
    window.location.href = `mailto:info@gesfinc.es?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="gf-sd-form" onSubmit={onSubmit}>
      {fields.map((f) => (
        <input
          key={f.name}
          name={f.name}
          type={f.type ?? "text"}
          placeholder={f.label}
          aria-label={f.label.trim()}
          required={f.required}
          className={f.type === "number" ? "gf-sd-form-num" : undefined}
        />
      ))}
      <textarea
        name="observaciones"
        rows={4}
        placeholder="Observaciones"
        aria-label="Observaciones"
      />
      <span className="gf-sd-form-captcha" aria-hidden="true" />
      <label className="gf-sd-form-check">
        <input type="checkbox" name="privacidad" required />
        <span>Acepto la política de privacidad de Gesfinc Canarias</span>
      </label>
      <button type="submit">
        <Icon name="mail-bulk" /> Enviar
      </button>
      {sent && (
        <p className="gf-sd-form-note" role="status">
          Se ha abierto tu programa de correo con la petición para
          info@gesfinc.es.
        </p>
      )}
    </form>
  );
}
