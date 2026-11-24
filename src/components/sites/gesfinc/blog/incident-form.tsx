"use client";

import { useState, type FormEvent } from "react";

const MAX_MB = 10;

/**
 * "Comunicación de incidencias" (Elementor form on /formulario-de-contacto-app/). The source posts to WordPress,
 * which this static clone can't reach, so a valid submission opens a pre-filled email to info@gesfinc.es.
 * A mailto: link cannot carry files, so chosen attachments are listed in the message for the user to attach.
 */
export function IncidentForm() {
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(
    null,
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const files = data
      .getAll("adjuntos")
      .filter((f): f is File => f instanceof File && f.name !== "");
    if (files.some((f) => f.size > MAX_MB * 1024 * 1024)) {
      setStatus({
        ok: false,
        text: "Este archivo excede el tamaño máximo permitido.",
      });
      return;
    }
    const subject = `Comunicación de incidencias – ${get("asunto")}`;
    const body = [
      `Nombre: ${get("nombre")}`,
      `Email: ${get("email")}`,
      `Teléfono: ${get("telefono")}`,
      `Asunto: ${get("asunto")}`,
      `Comunidad: ${get("comunidad")}`,
      "",
      get("mensaje"),
      ...(files.length
        ? ["", `Archivos para adjuntar: ${files.map((f) => f.name).join(", ")}`]
        : []),
    ].join("\n");
    window.location.href = `mailto:info@gesfinc.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      ok: true,
      text: files.length
        ? "Se ha abierto tu programa de correo con la incidencia para info@gesfinc.es. Adjunta allí los archivos seleccionados."
        : "Se ha abierto tu programa de correo con la incidencia para info@gesfinc.es.",
    });
  };

  return (
    <form className="gf-bl-form" onSubmit={onSubmit} aria-label="New Form">
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        aria-label="Nombre"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Email"
        required
      />
      <input
        name="telefono"
        type="tel"
        placeholder="Teléfono"
        aria-label="Teléfono"
        required
        pattern="[0-9\(\)#&\+\*\-=\. ]+"
        title="Solo se aceptan números y caracteres de teléfono (#,-,*,etc)."
      />
      <input
        name="asunto"
        type="text"
        placeholder="Asunto"
        aria-label="Asunto"
        required
      />
      <input
        name="comunidad"
        type="text"
        placeholder="Comunidad"
        aria-label="Comunidad"
        required
      />
      <textarea
        name="mensaje"
        rows={4}
        placeholder="Mensaje"
        aria-label="Mensaje"
      />
      <input name="adjuntos" type="file" multiple aria-label="Archivos" />
      <button type="submit">Enviar</button>
      {status && (
        <p
          className={`gf-bl-form-msg${status.ok ? "" : " gf-bl-form-msg--error"}`}
          role="status"
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
