# Service detail pages (`/servicios/<slug>`)

Source: `https://gesfinc.com/servicios/<slug>/` (Elementor pages 7693–7771, header 5204 over the hero, footer 5211).

## Route map

| Source | Local | Elementor page | Variant |
| --- | --- | --- | --- |
| `/servicios/limpieza/` | `/servicios/limpieza` | 7713 | template |
| `/servicios/mantenimiento/` | `/servicios/mantenimiento` | 7721 | template, 8-item list, 110px shape |
| `/servicios/jardineria/` | `/servicios/jardineria` | 7734 | template (mobile photo gap 20px) |
| `/servicios/seguros/` | `/servicios/seguros` | 7756 | template, 110px shape |
| `/servicios/certificados-electronicos/` | `/servicios/certificados-electronicos` | 7770 | template, 35px title, tilt shape, form inside the grid section |
| `/servicios/certificaciones-energeticas/` | `/servicios/certificaciones-energeticas` | 7771 | template, 35px title, 2 text blocks and no list, 860px hero |
| `/servicios/administrador-de-fincas/` | `/servicios/administrador-de-fincas` | 7693 | long: intro + 3 rows |
| `/servicios/servicio-integral/` | `/servicios/servicio-integral` | 7704 | long: intro + 2 rows with buttons, heading "Petición de información" |
| `/servicios/asesoria-juridica-integral/` | `/servicios/asesoria-juridica-integral` | 7744 | long: 37px title, intro + 1 row without heading |

Files:
- `src/app/servicios/<slug>/page.tsx` contains only page data.
- `src/components/sites/gesfinc/servicio/template.tsx` holds `ServicePage`, `ServiceHero`, `IntroText`, `ServiceRow`, `OtherServices` and `QuoteSection`.
- `servicio/data.ts` holds the photos and the per-page "Otros servicios" cards. Their order, titles (typos included) and images change on every page.
- `servicio/quote-form.tsx` is the mailto form. `servicio/servicio.css` styles everything, with the `gf-sd-` prefix.

Evidence (scratch): Elementor post CSS for each page plus probes. Screenshots: `src/servicios_<slug>-{desktop-1440,mobile-390}.png` and `local/` (same names).

## Measurements that mattered (1440)

- Hero: `rgba(44,61,132,.91)`, min-height 780 (860 on Certificaciones Energéticas).
  - The text column (456px) is vertically centred between y=80 and the bottom: column margin-top 80, "items-middle".
  - The photo column (margin-top 120, height 0) puts the 680px photo at `top = height/2 + 60`, `left = 50% − 26px`. The red circle is 408px wide at `50% + 349px`.
  - The source's per-page `top:-29%/-42%…` on the photo is a percentage of a 0-height column, so it has no effect.
  - Shape: V divider, 100 or 110px (70px on mobile). Certificados electrónicos uses the "tilt" divider instead (= `SLANT_LEFT_BOTTOM`).
- Title: GlacialIndifference-Bold, 1.2 line-height. 55px by default, 37px on Asesoría, 35px on Certificados and Certificaciones. 36px on mobile (28px on Administrador).
  - Text block: 17/30.6px with 10px top margin. List: 50px above it (20px widget gap + 30px margin), 14px yellow `#ffc70a` chevrons in a 17.5px box, then 5px before the text.
  - Paragraphs inside text widgets get `padding: 1.2em 0` (theme rule).
- Otros servicios:
  - Header: section margin-top 20. H2 45/54 (Arial: "Gilroy-ExtraBold" is never loaded), 510px wide. The paragraph sits 60px to its right, 17/28.9, 20px top / 30px bottom margins.
  - The hero photo covers this paragraph on the source. Reproduced through the same stacking (hero z-index 2).
  - Grid: margin-top 40, 5 columns of 200.6px, 34.19px column gap and 45.59px row gap (also below the last row), then 80px.
  - Card: image box with 25px radius (shrink-to-fit, so default.svg is 48×64 and 300px images stay 300px on mobile), then 30px / 10px padding. Title: Roboto Slab 20/20. Subtitle: 12px, 2px letter-spacing, `#999`.
  - Hover: image scales to 1.15 over 1s with `cubic-bezier(.19,1,.22,1)`.
- Form section: 10px column padding, so the heading is at x=160 and both heading and form are 1120 wide. The source has 11 fields and no labels:
  - Text fields: 46.8px high, 5px radius, Roboto 16.
  - Phone field (`type=number`): 40px high, 3px radius, Arial 15.
  - Textarea: 96px. Empty reCAPTCHA row: 1px.
  - Acceptance checkbox, then a 40px button `rgb(105,114,125)` in Cabin 700 15 with the mail-bulk icon. 10px gaps.
  - Required fields: Apellidos, Email, Teléfono and the privacy checkbox. Name is not required.
- Long-page rows:
  - Layout: 996px wide (section padding 10%), 40/60 columns vertically centred, 280px margin-bottom (240px on Administrador's last row).
  - H2: 42/50.4. Copy: margin-top 40 (20 without a heading), padding-right 20%, 17/30.6 (14/25.2 on Administrador).
  - Photo: 598px, absolute. Right-hand photos use `right:1%`. Left-hand photos use `right:18.745%` with a red circle (70%, `top:-42%`) behind them.
  - Photo `top`: Administrador rows 0%, −13.571% and 29%. Servicio Integral rows −23% and −13.571%. Asesoría row 0%.
  - Every row photo drifts −100px with scroll (shared `ScrollDrift`, off on mobile).
- Intro text: 70px below the hero, 456px wide, and the next row starts 120px after it.

Mobile (390):
- Hero: h1 at y=260. Text, then the list 40px further down. The photo is in the flow 60px below (20px on Jardinería, measured from the live column margin). The red circle (60%) sits at left 44%, top +28px.
- Rows stack text-first: centred 30/42 H2, then 60px, then the photo, with 100px bottom padding. The circle is 70% wide, at left 13%, top −14px.
- Grid: 1 column, 40px gaps. The "Otros" paragraph uses 28.8px line boxes, which is the measured source value.

## Decisions / known differences

- **Source bugs kept (harmless, visible on desktop):**
  - The Administrador hero title literally reads "Administración de fincas <brde Fincas".
  - Card typos ("Servicio Integal", "Mantenimientos", "Certificados energéticos", "Asesoría Juridica").
  - "Dirección de la Comunidad" appears twice in the form.
  - "Asesoría Juridica" plus a zero-width space in the Servicio Integral heading.
  - The empty `&nbsp;` paragraph in the Asesoría intro.
  - default.svg placeholder cards.
- **Not rendered (404 on the source, so invisible there too):** `service1_navy_circle.png` (next to right-hand row photos) and `home2_morph_bg1.png` (behind the intro). Both are requested from `//wp-content/...`.
- **Broken links fixed:**
  - Servicio Integral intro links `/gesfinc/servicios/...` now go to the local service routes.
  - Servicio Integral "Más información" (`/servicios/administracion-de-fincas/`) now goes to `/servicios/administrador-de-fincas`.
  - Certificados electrónicos' last card (`//single-portfolio`) now goes to `/servicios/certificaciones-energeticas`.
- **Mobile lazy-load bug:** the source shows several mobile images as broken (0×0 natural size). The clone shows the real images, as on the other cloned pages.
- **Form:** posts nothing. It validates the same required fields, then opens a pre-filled `mailto:info@gesfinc.es` with every field (subject = section heading).
- **Not reproduced:** the Elementor "smoove" entrance animations (headings, cards fading/rotating in) and the inert `grid_tilt` class. This matches the policy on the other pages.
- **Tablet (768–1024):** the source uses 50/50 columns there. The clone already switches to the stacked mobile layout at ≤1024, within a 640px column, and shows a 3-column grid.
- **Desktop hero (1025–1180):** keeps its absolute layout. The photo starts at `50% − 26px`, so it may come close to the text column.
- **Document height:** off by −8px (desktop) and +87px (mobile) on every page. The whole difference is in the shared footer (`SiteFooter`); everything above it is within ±3px of the source on all 9 pages at 1440 and 390.
