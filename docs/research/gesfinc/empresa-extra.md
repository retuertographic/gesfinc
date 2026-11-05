# gesfinc.com: Empresa sub-pages and Inmobiliaria (empresa-extra)

## Route map

| Source | Local | Page file |
| --- | --- | --- |
| `https://gesfinc.com/por-que-gesfinc-canarias/` | `/por-que-gesfinc-canarias` | `src/app/por-que-gesfinc-canarias/page.tsx` |
| `https://gesfinc.com/recursos-humanos-y-materiales/` | `/recursos-humanos-y-materiales` | `src/app/recursos-humanos-y-materiales/page.tsx` |
| `https://gesfinc.com/filosofia-empresarial/` | `/filosofia-empresarial` | `src/app/filosofia-empresarial/page.tsx` |
| `https://gesfinc.com/inmobiliaria/` | `/inmobiliaria` | `src/app/inmobiliaria/page.tsx` |

All four pages use the shared `<Header />` (overlay over the blue hero) and `<SiteFooter />`.

Components live in `src/components/sites/gesfinc/empresa-extra/`. All of them can be reused:
- `hero.tsx`: `ExHero` is the blue Poppins hero with a 110px V-shaped divider. `compact` sets a 140px bottom padding (Inmobiliaria). `low` moves the title 30px lower on mobile (Recursos and Filosofía, as measured). `ExFooterGap` is the 200px white gap before the footer.
- `gallery.tsx` with `galleries.ts`: `ExGallery`, the Avante horizontal gallery (Flickity).
- `meeting-slider.tsx`: `MeetingSlider`, the dark "Sala de Juntas Videoconferencia" band with arrows. `withRule` adds the white 10px divider.
- `opinion-band.tsx`: `OpinionBand`, the dark "Su opinión es muy importante…" band with floating shapes.
- `property-search.tsx`: `PropertySearch`, the WPCasa "Búsqueda" form.
- `icons.tsx`: Themify arrow glyphs, taken from the theme's `themify.svg`.
- `fonts.ts`: Poppins 400/600/700 and Roboto 400/500/700 through `next/font`. The layout loads neither Poppins nor Roboto 700.
- `empresa-extra.css`: every class uses the `gf-ex-` prefix.

New images were downloaded to `public/sites/gesfinc/images/` under their source names: the gallery photos, the team grid photos and `young-businesswoman-smiling-at-office-LGQRJY2.jpg`. The decorative bubbles and triangles, the AdobeStock thumbnail and the gravatar were already there.

## Measurements that mattered (1440px)

- **Hero.** The section is `rgba(44,61,132,.91)` with 250/400px padding (Inmobiliaria: 250/140px).
  - The h1 is Poppins 600 50/70px at y=250.
  - The text is Poppins 20/28px at 70% white, 30px below the h1.
  - On mobile the h1 is 24px and centred. It sits at y=260 (Por qué, Inmobiliaria) or y=290 (Recursos, Filosofía). The text is 18/25.2px, 50px below the h1.
- **Gallery.** It overlaps the hero with a −300px margin.
  - Desktop cells are 500px tall, 80px apart. The selected cell is centred and contained (the first cell sits at x=0).
  - Autoplay advances every 8s, pauses on hover and wraps to the first image. Verified: after 8.6s the strip is at −501.5px, the same as the source's cell 1.
  - Mobile cells use their natural size and are centred.
- **Content.** Sections have 100/60px padding (80/60px on mobile).
  - Titles are Cabin 700 32/51.2px followed by 40px.
  - Body is Roboto 16/28.8px, and each `<p>` has 19.2px vertical padding.
- **Slider band** (`#000016`, 20px top margin). The slider is 640px tall.
  - The image covers the right 65% and is lifted 40px (a static −40px transform, checked at 8 scroll positions).
  - The caption is padded 110px. The title is Poppins 600 36/46.8px.
  - The yellow `#ffcc00` link has a 24px rule in front of it.
  - Themify arrows are 28px, 110px from the left and 103px above the bottom.
  - On mobile the image is 270px tall and on top, the caption is padded 30px, and the arrows are 20px, at the bottom right.
- **"Su opinión" band.** Padding is 140/60px. Headings are Poppins 600 40/48px (24/36px on mobile).
  - The white "Enviar" button is 48px tall, has a yellow hover and links to `/contactar`, as on the source.
  - Ten decorations use the post-CSS positions, with separate tablet/mobile positions.
  - Some decorations loop: "infinite" scale 1→2 or bounce 100px→0, 3s alternate.
  - The others follow a scroll effect that re-implements `jquery.parallax-scroll`: progress = (scrollY − (top − vh)) / vh, eased by 1/smoothness per frame. It is turned off below 501px, or below 769px for two of the bubbles.
- **Inmobiliaria.** The layout is a 66/33% split.
  - The form panel is `#ededed`, padded 30/15/29/30px.
  - Fields are 35px tall with 20px between them. The 46px submit button is `rgb(185,30,43)`.
  - The reset and advanced links are 11px and sit just below the panel.
  - The post card has a 0.66 thumbnail ratio (0.5 on mobile), a 60px avatar and Cabin 21px titles.
  - Desktop positions match the source to the pixel, including the card title, excerpt and meta.

Numeric comparison (`pos2.js`) at 1440px: the hero, content, slider and opinion band match the source to within 1px on all four pages. At 390px they match to within 1px, except where noted below.

## Decisions and known differences

- **Inmobiliaria search.** The source listing has no published properties, so it shows "Lo sentimos, pero no hay coincidencias…".
  - The clone keeps that message and the stray "." after it.
  - "Buscar" submits the same GET query (keyword, offer, location, listing-type, bedrooms, bathrooms, min, max, orderby, order) to the real search at `https://gesfinc.com/inmobiliaria/`.
  - "Búsqueda avanzada" shows or hides the price and sort fields. "Restablecer búsqueda" restores the defaults (Fecha, descendente).
  - Ubicación and Clase have no terms on the source, so they only offer the placeholder.
- **Slider arrows.** The source slider has a single slide, so the arrows cycle through one slide and nothing visible changes, as on the source. The component accepts more slides and crossfades between them.
- **Links.** The slider's "Entrar en la Sala de Juntas" goes to `/sala-de-juntas`. The Inmobiliaria post card goes to `/proximamente-juntas-por-videoconferencia`.
- **Filosofía gallery on mobile.** The first gallery image is the 2048×1365 original (`SLA_7385.jpg`). On a phone the source renders it at full size, which leaves a 900px gallery band with roughly 400px of blank space. The clone caps mobile gallery cells at 480px tall (the tallest other cell), so this mobile page is about 420px shorter than the source.
- **Mobile gallery start position.** The source's starting offset differs between loads (Flickity measures before the lazy images load). The clone centres the selected cell.
- **Slider at 768–1024px.** The source keeps the 65% image over the caption at tablet widths, so the caption is squeezed under the image. The clone stacks the image (420px) above the caption there.
- **Not reproduced.** Elementor/Avante "smoove" entrance animations (headings, gallery scale-in, button flip) and the slider's entrance animation.
- **Shared footer offset (not in this folder).** On mobile, the footer's internal spacing differs from the source by about +40px, measured on `/servicios` as well, so the pages are 30–80px taller. The footer starts at the same y as on the source.
- **Fonts.** The "¿Qué nos caracteriza?" and "Equipo Humano" titles are nested `<h1>`s on the source and render in the theme's Cabin 32px. The clone renders them in the same font.

Screenshots: `docs/research/gesfinc/src/<slug>-{desktop-1440,mobile-390}.png` and `docs/research/gesfinc/local/<slug>-{desktop-1440,mobile-390}.png`.
