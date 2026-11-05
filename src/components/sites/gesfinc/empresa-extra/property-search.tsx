"use client";

import { useRef, useState } from "react";
import { SOURCE } from "../data";

const range = Array.from({ length: 10 }, (_, i) => String(i + 1));

/**
 * WPCasa "Búsqueda" sidebar form. The listings live in the WordPress database, so the clone submits the
 * same GET query to the real search on gesfinc.com/inmobiliaria/ (the source form posts to its own page).
 * "Búsqueda avanzada" reveals the price/sort fields and "Restablecer búsqueda" restores the defaults,
 * as on the source. Ubicación and Clase have no terms on the source, so they only offer the placeholder.
 */
export function PropertySearch() {
  const [advanced, setAdvanced] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={form}
      className="gf-ex-search"
      method="get"
      action={`${SOURCE}/inmobiliaria/`}
    >
      <div className="gf-ex-search-field">
        <input
          type="text"
          name="keyword"
          placeholder="Palabra clave o ID de anuncio…"
          title="Palabra clave o ID de anuncio…"
          aria-label="Palabra clave o ID de anuncio"
        />
      </div>
      <div className="gf-ex-search-field">
        <select name="offer" aria-label="Oferta" defaultValue="">
          <option value="">Oferta</option>
          <option value="sale">En venta</option>
          <option value="rent">En alquiler</option>
        </select>
      </div>
      <div className="gf-ex-search-field">
        <select name="location" aria-label="Ubicación" defaultValue="">
          <option value="">Ubicación</option>
        </select>
      </div>
      <div className="gf-ex-search-field">
        <select name="listing-type" aria-label="Clase" defaultValue="">
          <option value="">Clase</option>
        </select>
      </div>
      <div className="gf-ex-search-field">
        <select name="bedrooms" aria-label="Dormitorios" defaultValue="">
          <option value="">Dormitorios</option>
          {range.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="gf-ex-search-field">
        <select name="bathrooms" aria-label="Baños" defaultValue="">
          <option value="">Baños</option>
          {range.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div
        className={`gf-ex-search-advanced${advanced ? " is-open" : ""}`}
        hidden={!advanced}
      >
        <div className="gf-ex-search-field">
          <input
            type="text"
            name="min"
            placeholder="Precio (min)"
            title="Precio (min)"
            aria-label="Precio (min)"
          />
        </div>
        <div className="gf-ex-search-field">
          <input
            type="text"
            name="max"
            placeholder="Precio (máx.)"
            title="Precio (máx.)"
            aria-label="Precio (máx.)"
          />
        </div>
        <div className="gf-ex-search-field">
          <select name="orderby" aria-label="Ordenar por" defaultValue="date">
            <option value="">Ordenar por</option>
            <option value="date">Fecha</option>
            <option value="price">Precio</option>
            <option value="title">Título</option>
          </select>
        </div>
        <div className="gf-ex-search-field">
          <select name="order" aria-label="Ordenar" defaultValue="desc">
            <option value="">Ordenar</option>
            <option value="asc">ascendente</option>
            <option value="desc">descendente</option>
          </select>
        </div>
      </div>
      <div className="gf-ex-search-field">
        <input type="submit" value="Buscar" />
      </div>
      <button
        type="button"
        className="gf-ex-search-reset"
        onClick={() => form.current?.reset()}
      >
        Restablecer búsqueda
      </button>
      <button
        type="button"
        className="gf-ex-search-toggle"
        aria-expanded={advanced}
        onClick={() => setAdvanced((a) => !a)}
      >
        Búsqueda avanzada
      </button>
    </form>
  );
}
