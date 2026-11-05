# gesfinc.com — page brief

Source: https://gesfinc.com/ (WordPress 6.9 + Elementor 3.33, theme "Avante"). Cloned scope: home, Servicios and Empresa.

## Route map

| Source | Local | Files |
| --- | --- | --- |
| `https://gesfinc.com/` | `/` | `src/app/page.tsx`, `src/components/sites/gesfinc/*` |
| `https://gesfinc.com/servicios/` | `/servicios` | `src/app/servicios/page.tsx`, `pages.css`, `info-form.tsx`, `scroll-drift.tsx` |
| `https://gesfinc.com/empresa/` | `/empresa` | `src/app/empresa/page.tsx`, `pages.css` |

Shared across all three: `header.tsx` (overlay variant for home/Servicios, white variant for Empresa), `shared.tsx` (Sala de Juntas band, footer, back-to-top, cookie dialog).

Every other internal link (Noticias, individual service pages, blog posts, legal pages, search) still points at `https://gesfinc.com/...` because those pages were not cloned.

## Servicios (/servicios)

- Navy hero (`rgb(24,48,93)`, 780px) with a checklist of yellow chevrons, a photo and a red circle, and a 110px V divider.
- Three alternating rows (Administración de Fincas, Servicio Integral, Asesoría Jurídica). Each photo drifts up 100px while scrolling ("scrollme" effect, measured: 0 → −100px as its top moves from the viewport bottom to 100px from the top; off on mobile).
- "Otros servicios" grid: 4 columns, 25px rounded thumbnails, Roboto Slab titles. Two entries have no image on the source and show WordPress's generic file icon; reproduced.
- "Petición de información" form. The source posts to WordPress; the clone validates the same required fields and then opens a pre-filled email to info@gesfinc.es.

## Empresa (/empresa)

- White header template: top bar with visible list bullets (a source CSS quirk, reproduced) and a nav that wraps onto two lines.
- Sections: Quiénes Somos, Administración de Fincas (illustrations + dotted ovals), Asesoramiento Legal (full-bleed photo), Contactar con nosotros.
- Headings ask for "Gilroy-ExtraBold", which the source never loads, so they render in Arial. The clone uses Arial on purpose. Body text is Karla.

## Sections (desktop 1440px, measured)

1. Top bar + header inside the hero (`rgba(44,61,132,.91)` over white), height 740px, V-shaped white shape divider at the bottom.
   - Nav: GlacialIndifference-Bold 15px, 34px gaps, dropdowns for Empresa / Servicios / Contactar (white panel, 5px radius, red underline on hover).
   - Sticky white header (130px) appears after scrolling. The source nav wraps to two lines there; this is reproduced.
   - Search icon opens a full-screen search overlay that submits to `https://gesfinc.com/?s=`.
   - ≤1024px: nav collapses to an ellipsis button that opens a 270px off-canvas menu from the left.
2. Hero: "Nuevos aires en Gesfinc" (55/66) + horizontal gallery (8 images, 790×370 cells, 40px gap, advances every 8s).
3. "¿Qué es Gesfinc Canarias?": +300 counter, red rule, two cards (shadow `0 2px 60px rgba(0,0,0,.1)`) with red zig-zag dividers.
4. "Necesitas conocernos más": three overlapping illustrations + red pill button.
5. "¿Qué hacemos…?" on `#f9f9f9` with slanted top and bottom dividers, plus a services carousel (10 slides, synchronised number, title and image, line pagination).
   - The carousel drifts on scroll: translateY = 0.3 × (widget centre − viewport centre), clamped to ±200px. This comes from the Elementor motion-fx "translateY speed 4" setting and was measured on the source.
6. "Descarga nuestra App" (Roboto Slab 52px) with Android and iOS store buttons.
7. "Artículos de nuestro blog": 3 Elementor post cards (Cabin titles, Roboto excerpts).
8. Blue "Sala de Juntas Videoconferencia" band with a quote over the image (Covered By Your Grace).
9. Black footer in 4 columns + copyright.
10. Complianz cookie dialog (stored in localStorage) and a back-to-top button.

## Assets

- Fonts: GlacialIndifference Regular/Bold (`public/sites/gesfinc/fonts`, downloaded from the theme). Roboto, Roboto Slab, Cabin and Covered By Your Grace come from Google Fonts via `next/font`.
- Images: `public/sites/gesfinc/images`, downloaded from `https://gesfinc.com/wp-content/uploads/...` under their original file names.
- Icons: Font Awesome Free 5.15.4 SVG paths, the same set the source loads (`src/components/sites/gesfinc/icons.tsx`).

## Known differences

- The source's 2nd carousel slide image (`photo-of-business-man…PB3SK4U.jpg`) returns 404 and shows as a grey panel. The clone keeps the grey panel.
- The source's "Más información" carousel links point at broken URLs (`/single-portfolio/`, `#`, the literal text "Más información"). The clone links each slide to its real service page instead.
- The source's "Sala de Juntas" button links to one specific Zoom meeting with a join token. The clone links to `/sala-de-juntas/` instead.
- Not reproduced: the Elementor entrance animations ("smoove" rotate-in on the counter, headings and divider), the hero gallery's inner parallax, and the mouse-parallax on the illustrations.
- On mobile the hero gallery's starting image and crop can differ: the source's Flickity start position varies between loads.
- Servicios/Empresa: on mobile the source shows several images as broken placeholders (lazy-load bug). The clone shows the real images there.
- Servicios/Empresa: entrance animations ("smoove") and the mouse parallax on the Empresa illustrations are not reproduced. Empresa's decorative photos don't drift on scroll.
- Empresa's "Más información" and "Contactar" links point to broken URLs on the source (`/single-portfolio-2/`, `/single-portfolio-3/`, `/contact-1`). The clone links them to the real Administrador de Fincas, Asesoría Jurídica and Contactar pages.

Screenshots: `src/` holds the source captures and `local/` the clone captures.
