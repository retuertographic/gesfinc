"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./icons";

/**
 * "Petición de información" form. The source posts to WordPress (admin-ajax) which this static clone can't reach,
 * so a valid submission opens the visitor's mail app with the message addressed to info@gesfinc.es.
 */
export function InfoRequestForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject =
      `Petición de información – ${get("nombre")} ${get("apellidos")}`.trim();
    const body = [
      `Nombre: ${get("nombre")}`,
      `Apellidos: ${get("apellidos")}`,
      `Email: ${get("email")}`,
      "",
      get("mensaje"),
    ].join("\n");
    window.location.href = `mailto:info@gesfinc.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="gf-form" onSubmit={onSubmit}>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        aria-label="Nombre"
      />
      <input
        name="apellidos"
        type="text"
        placeholder="Apellidos"
        aria-label="Apellidos"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Email"
        required
      />
      <textarea
        name="mensaje"
        rows={4}
        placeholder="Mensaje"
        aria-label="Mensaje"
      />
      <label className="gf-form-check">
        <input type="checkbox" name="privacidad" required />
        Acepto la pólitica de privacidad de Gesfinc Canarias
      </label>
      <button type="submit">
        <Icon name="mail-bulk" /> Enviar
      </button>
      {sent && (
        <p className="gf-form-note" role="status">
          Se ha abierto tu programa de correo con el mensaje para
          info@gesfinc.es.
        </p>
      )}
    </form>
  );
}
