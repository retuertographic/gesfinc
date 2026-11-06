"use client";

import { useEffect, useState } from "react";

/** Same storage the clone's cookie dialog uses (widgets.tsx). */
const COOKIE_KEY = "gesfinc-cookie-consent";
type Consent = { stats: boolean; marketing: boolean };

const CHEVRON =
  "M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z";

function Chevron() {
  return (
    <span className="gf-bl-consent-icon" aria-hidden="true">
      <svg viewBox="0 0 448 512">
        <path d={CHEVRON} />
      </svg>
    </span>
  );
}

function read(): Consent | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as Partial<Consent>;
    return { stats: v.stats === true, marketing: v.marketing === true };
  } catch {
    return null;
  }
}

/**
 * "7.1 Gestiona tus ajustes de consentimiento": the Complianz category list. Ticking a box stores the choice
 * immediately, like the source, so it reopens/changes the choice made in the cookie dialog.
 */
export function ConsentManager() {
  const [consent, setConsent] = useState<Consent>({ stats: false, marketing: false });
  const [note, setNote] = useState("");

  useEffect(() => {
    const stored = read();
    // Hydrate from localStorage after mount so server and client render the same markup.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored) setConsent(stored);
    const onStorage = (e: StorageEvent) => {
      if (e.key !== COOKIE_KEY) return;
      const v = read();
      if (v) setConsent(v);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const update = (key: keyof Consent, value: boolean) => {
    const next = { ...consent, [key]: value };
    setConsent(next);
    try {
      window.localStorage.setItem(COOKIE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("gesfinc-consent-change"));
      setNote("Preferencias guardadas.");
    } catch {
      setNote("No se han podido guardar las preferencias en este navegador.");
    }
  };

  const box = (key: keyof Consent, label: string) => (
    <span className="gf-bl-consent-check">
      <input
        type="checkbox"
        aria-label={label}
        checked={consent[key]}
        onChange={(e) => update(key, e.target.checked)}
        onClick={(e) => e.stopPropagation()}
      />
    </span>
  );

  return (
    <div className="gf-bl-consent">
      <details>
        <summary>
          <span className="gf-bl-consent-head">
            <span>Funcional</span>
            <span className="gf-bl-consent-always">Siempre activo</span>
            <Chevron />
          </span>
        </summary>
        <div className="gf-bl-consent-desc">
          El almacenamiento o acceso técnico es estrictamente necesario para el
          propósito legítimo de permitir el uso de un servicio específico
          explícitamente solicitado por el abonado o usuario, o con el único
          propósito de llevar a cabo la transmisión de una comunicación a través
          de una red de comunicaciones electrónicas.
        </div>
      </details>
      <details>
        <summary>
          <span className="gf-bl-consent-head">
            <span>Estadísticas</span>
            {box("stats", "Estadísticas")}
            <Chevron />
          </span>
        </summary>
        <div className="gf-bl-consent-desc">
          El almacenamiento o acceso técnico que es utilizado exclusivamente con
          fines estadísticos.
        </div>
      </details>
      <details>
        <summary>
          <span className="gf-bl-consent-head">
            <span>Marketing</span>
            {box("marketing", "Marketing")}
            <Chevron />
          </span>
        </summary>
        <div className="gf-bl-consent-desc">
          El almacenamiento o acceso técnico es necesario para crear perfiles de
          usuario para enviar publicidad, o para rastrear al usuario en una web o
          en varias web con fines de marketing similares.
        </div>
      </details>
      <div className="gf-bl-consent-note" role="status" aria-live="polite">
        {note}
      </div>
    </div>
  );
}
