"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "../icons";

/**
 * The source forms post to WordPress (admin-ajax), which this clone can't reach. A valid submission
 * (same required fields as the source) opens the visitor's mail app with the message for info@gesfinc.es.
 */
function useMailto(
  subject: (get: (k: string) => string) => string,
  lines: (get: (k: string) => string) => string[],
) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    window.location.href = `mailto:info@gesfinc.es?subject=${encodeURIComponent(subject(get))}&body=${encodeURIComponent(lines(get).join("\n"))}`;
    setSent(true);
  };
  return { sent, onSubmit };
}

function Submit({ sent }: { sent: boolean }) {
  return (
    <>
      <button type="submit" className="gf-ct-submit">
        <Icon name="mail-bulk" /> Enviar
      </button>
      {sent && (
        <p className="gf-ct-note" role="status">
          Se ha abierto tu programa de correo con el mensaje para
          info@gesfinc.es.
        </p>
      )}
    </>
  );
}

function Check({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="gf-ct-check">
      <input type="checkbox" id={`gf-ct-${name}`} name={name} required={required} />{" "}
      <label htmlFor={`gf-ct-${name}`}>{children}</label>
    </div>
  );
}

/** Contactar: Nombre, Email (required), Mensaje, optional acceptance. */
export function ContactForm() {
  const { sent, onSubmit } = useMailto(
    (get) => `Contacto web – ${get("nombre") || get("email")}`,
    (get) => [`Nombre: ${get("nombre")}`, `Email: ${get("email")}`, "", get("mensaje")],
  );
  return (
    <form className="gf-ct-form" onSubmit={onSubmit}>
      <input name="nombre" type="text" placeholder="Nombre" aria-label="Nombre" />
      <input name="email" type="email" placeholder="Email" aria-label="Email" required />
      <textarea name="mensaje" rows={4} placeholder="Mensaje" aria-label="Mensaje" />
      <Check name="aviso">
        Confirmo haber leído y aceptar el <a href="/aviso-legal">aviso legal</a>{" "}
        y de <a href="/politica-privacidad">privacidad del sitio</a>
      </Check>
      <Submit sent={sent} />
    </form>
  );
}

const budgetFields: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}[] = [
  { name: "nombre", label: "Nombre", placeholder: "Nombre de la persona de contacto" },
  { name: "apellidos", label: "Apellidos", placeholder: "Apellidos de la persona de contacto ", required: true },
  { name: "email", label: "Email", placeholder: "Email de la persona de contacto ", type: "email", required: true },
  { name: "telefono", label: "Teléfono", placeholder: "Teléfono de la persona de contacto", type: "number", required: true },
  { name: "comunidad", label: "Comunidad", placeholder: "Nombre de la Comunidad de propietarios" },
  { name: "direccion", label: "Dirección", placeholder: "Dirección de la Comunidad" },
  // The source repeats this field with the same placeholder; kept.
  { name: "direccion2", label: "Dirección (2)", placeholder: "Dirección de la Comunidad" },
  { name: "viviendas", label: "Nº viviendas", placeholder: "Nº viviendas" },
  { name: "locales", label: "Nº locales comerciales", placeholder: "Nº locales comerciales" },
  { name: "garaje", label: "Nº plazas de garaje", placeholder: "Nº plazas de garaje" },
];

/** Pedir Presupuesto: ten fields, Observaciones and a required privacy acceptance. */
export function BudgetForm() {
  const { sent, onSubmit } = useMailto(
    (get) => `Petición de presupuesto – ${get("comunidad") || `${get("nombre")} ${get("apellidos")}`.trim()}`,
    (get) => [
      ...budgetFields.map((f) => `${f.label}: ${get(f.name)}`),
      "",
      `Observaciones: ${get("observaciones")}`,
    ],
  );
  return (
    <form className="gf-ct-form" onSubmit={onSubmit}>
      {budgetFields.map((f) => (
        <input
          key={f.name}
          name={f.name}
          type={f.type ?? "text"}
          placeholder={f.placeholder}
          aria-label={f.label}
          required={f.required}
          className={f.type === "number" ? "gf-ct-number" : undefined}
        />
      ))}
      <textarea name="observaciones" rows={4} placeholder="Observaciones" aria-label="Observaciones" />
      {/* Empty reCAPTCHA field group on the source (1px high). */}
      <div className="gf-ct-recaptcha" aria-hidden="true" />
      <Check name="privacidad" required>
        Acepto la política de privacidad de Gesfinc Canarias
      </Check>
      <Submit sent={sent} />
    </form>
  );
}
