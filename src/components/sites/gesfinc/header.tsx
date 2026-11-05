"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./icons";
import { IMG, nav, SOURCE } from "./data";

function Menu() {
  return (
    <ul className="gf-menu">
      {nav.map((item) => (
        <li key={item.label}>
          <a href={item.href}>
            {item.label}
            {item.children && <Icon name="angle-down" className="gf-caret" />}
          </a>
          {item.children && (
            <ul className="gf-sub">
              {item.children.map((c) => (
                <li key={c.label}>
                  <a href={c.href}>{c.label}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function Logo() {
  return (
    <Link href="/" className="gf-logo" aria-label="Gesfinc Canarias – Inicio">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${IMG}/Logo-Gesfinc.png`}
        alt="Gesfinc Canarias"
        width={100}
        height={100}
      />
    </Link>
  );
}

export function Header() {
  const [sticky, setSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Fixed layers render into <body> so the hero's stacking context can't trap them under later sections.
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPortalTarget(document.querySelector<HTMLElement>(".gf"));
  }, []);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const focusTimer = searchOpen
      ? window.setTimeout(() => inputRef.current?.focus(), 50)
      : 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [searchOpen]);

  const controls = (
    <>
      <button
        type="button"
        className="gf-search-btn"
        aria-label="Buscar"
        onClick={() => setSearchOpen(true)}
      >
        <Icon name="search" />
      </button>
      <button
        type="button"
        className="gf-burger"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <Icon name="ellipsis-v" />
      </button>
    </>
  );

  return (
    <>
      <div className="gf-container">
        <div className="gf-topbar">
          <ul>
            <li>
              <Icon name="map-marker-alt" />
              Calle Juan Ortiz de Zárate 6 Edificio Mencey - Local A Peatonal
              38300 La Orotava.
            </li>
          </ul>
          <ul>
            <li>
              <a href="tel:+34922975075">
                <Icon name="phone-alt" />
                922 975 075
              </a>
            </li>
            <li>
              <a href="mailto:info@gesfinc.es">
                <Icon name="envelope" />
                info@gesfinc.es
              </a>
            </li>
          </ul>
        </div>
        <header className="gf-header">
          <Logo />
          <nav className="gf-nav" aria-label="Principal">
            <Menu />
            {controls}
          </nav>
        </header>
      </div>

      {portalTarget &&
        createPortal(
          <>
            <div
              className={`gf-sticky${sticky ? " is-visible" : ""}`}
              aria-hidden={!sticky}
            >
              <div className="gf-container">
                <Logo />
                <nav className="gf-nav" aria-label="Principal (fija)">
                  <Menu />
                  {controls}
                </nav>
              </div>
            </div>

            <div
              className={`gf-search${searchOpen ? " is-open" : ""}`}
              onClick={(e) =>
                e.target === e.currentTarget && setSearchOpen(false)
              }
            >
              <form action={SOURCE} method="get" role="search">
                <input
                  ref={inputRef}
                  name="s"
                  placeholder="Search for anything"
                  autoComplete="off"
                  aria-label="Search for anything"
                />
                <button type="submit" aria-label="Search for anything">
                  <Icon name="search" />
                </button>
              </form>
            </div>

            <div
              className={`gf-mobile-overlay${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen(false)}
            />
            <aside
              className={`gf-mobile${menuOpen ? " is-open" : ""}`}
              aria-hidden={!menuOpen}
            >
              <button
                type="button"
                className="gf-mobile-close"
                aria-label="Cerrar menú"
                onClick={() => setMenuOpen(false)}
              >
                <Icon name="times" />
              </button>
              <ul>
                {nav.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={openSub === item.label}
                          onClick={() =>
                            setOpenSub(
                              openSub === item.label ? null : item.label,
                            )
                          }
                        >
                          {item.label}
                        </button>
                        {openSub === item.label && (
                          <ul>
                            {item.children.map((c) => (
                              <li key={c.label}>
                                <a href={c.href}>{c.label}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <a href={item.href}>{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          </>,
          portalTarget,
        )}
    </>
  );
}
