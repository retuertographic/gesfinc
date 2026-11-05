# Contact group: Contactar, Pedir Presupuesto, ¿Dónde estamos?, Sala de Juntas, Noticias

## Route map

| Source | Local | Files |
| --- | --- | --- |
| `https://gesfinc.com/contactar/` | `/contactar` | `src/app/contactar/page.tsx` |
| `https://gesfinc.com/pedir-presupuesto/` | `/pedir-presupuesto` | `src/app/pedir-presupuesto/page.tsx` |
| `https://gesfinc.com/donde-estamos/` | `/donde-estamos` | `src/app/donde-estamos/page.tsx` |
| `https://gesfinc.com/sala-de-juntas/` | `/sala-de-juntas` | `src/app/sala-de-juntas/page.tsx` |
| `https://gesfinc.com/noticias/` | `/noticias` | `src/app/noticias/page.tsx` |

Components in `src/components/sites/gesfinc/contacto/`:
- `parts.tsx`: `PageHero` (shared `<Header />` over the blue section, Poppins title and lead, 116px V divider), `ContactLine`, `RedButtons`.
- `forms.tsx`: `ContactForm` and `BudgetForm`. Both check the source's required fields, then open a mailto to info@gesfinc.es, the same approach as `info-form.tsx`.
- `scroll-fx.tsx`: the Avante "scrollme" transform on the Contactar decorations.
- `news.tsx`: the Noticias masonry (5 posts).
- `fonts.ts`: Poppins 400/600 (`--gf-ct-poppins`) and Roboto 400/700 (`--gf-ct-roboto`), loaded with `next/font` because the shared layout does not load them.
- `contacto.css`: all styles. Every class starts with `gf-ct-`.

New images in `public/sites/gesfinc/images/`: `purple_bubble.png`, `orange_bubble-1.png`, `orange_triangle2.png`, `orange_triangle-1.png`, `APP-GESFINC-43685274_xxl-768x360.jpg`, `Cabecera-Web-Gesfing-Navidad-2018-1170x548-px-100-768x360.jpg`, `IMG_7278-1024x768-1-768x576.jpg`.

## Measurements that mattered (1440px; Elementor post CSS 5858, 7893, 7878, 3371, 7992)

- Hero: `rgba(44,61,132,.91)`, padding 250px top and 300px bottom, V divider 116px high.
  - Title: Poppins 600, 50/70px, white.
  - Lead: Poppins 400, 20/28px, `rgba(255,255,255,.7)`, 30px below the title.
  - Below 767px: padding-bottom 340px, title 24px, lead 18px, both centred.
- Card: pulled 250px into the hero (section −46px plus column −204px), so its top is at 596px on Contactar and 512px elsewhere.
  - White background, 5px radius, shadow `0 45px 60px rgba(0,0,0,.05)`, padding 70/60/50px.
  - Pedir Presupuesto's card has no background colour on the source, so the hero's V shows between the fields. Reproduced.
  - Its Enviar button also overlaps the top 16px of the red buttons (the next section starts 45px above the card's bottom). Reproduced.
- Form fields:
  - Text inputs: 46.8px high, 1px border `rgb(105,114,125)`, 5px radius, Roboto 16px, 10px between fields.
  - Number field (Teléfono): 40px high, Arial 15px, 3px radius.
  - Textarea: 96px. Submit button: 40px high, `rgb(105,114,125)`, Cabin 700 15px.
  - Contactar's form sits 25px inside the card (fields 970px wide).
- Red buttons: Roboto 16px, padding 15/30px, 4px radius, `#B91E2B`, in three 373px columns inside a 1120px row, 80px above the footer.
- Contactar's "Gesfinc Canarias: Expertos…" block: Cabin 600, 50/65px, 20% side padding. It sits 120px below the card section, whose bottom margin is −46px.
  - Seven decorations, positioned in % of that block: two bubbles with infinite scale/bounce animations (3s, alternate) and five with scrollme transforms.
  - Scrollme rule, measured: progress = (viewport height − element top) ÷ viewport height, clamped to 0–1. Off on mobile.
- ¿Dónde estamos?: two 510px columns with 10px padding. Text: Cabin 28px title, then two empty lines, then Roboto 16/28.8px. The map box is 490×353px.
- Noticias: 3 masonry columns of 343px with 45px gaps; placement as on the source (1 and 5, 2, then 3 and 4).
  - Card text: Roboto Slab 14px category `#002A8F`, Cabin 22/35.2px title, Roboto 16/28.8px excerpt.
  - "Continue Reading": 30px line before it while idle; on hover the line moves after the text and an arrowhead appears. Copied from Avante `screen.css`, including the image zoom and the white cross.
- Every local element checked numerically sits within 0–4px of the source, except the sala "Filosofia" caption (4px, shared footer).
  - Page heights are about 8px shorter. The difference comes from the shared footer's bottom.

## Decisions and known differences

- Mobile hero: the source draws the title on the same row as the logo (they overlap). The clone puts it below the header.
- Sala de Juntas: the page's own section (two app-store buttons) is hidden on every device on the source. So the page is only the header over the footer's blue band (1010px tall, image at 397px).
  - On this page the source loses some kit CSS. The band's top divider shows as a black wedge under the logo, and the rule above the footer has no colour. Both are reproduced on desktop.
  - The source's footer links are black on black (invisible) on this page. The clone keeps them visible, since invisible links help nobody.
  - From 1180px down, the header is placed above the band instead of over it, and the wedge is hidden.
- ¿Dónde estamos?: the source map is a Complianz placeholder ("Haz clic para aceptar cookies de marketing…"). The clone embeds the real Google Maps iframe with the same query (`q=Gesfinc&t=m&z=15`).
  - Two more office sections (Santa Cruz, Tenerife Sur) are hidden on every device on the source. They are not rendered.
- Fixed broken source links:
  - ¿Dónde estamos?: the title is wrapped in a broken Zoom shortcode link (`http://[zoom_api_link …]`). The clone renders it as plain text.
  - Lead "telefónica" (`href="+34922975075"`) now goes to `tel:+34922975075`; "correo electrónico" (`mailto:mailto:…`) to `mailto:info@gesfinc.es`.
  - Contactar's "Oficinas" and "Pedir presupuesto" buttons (`#`) now go to `/donde-estamos` and `/pedir-presupuesto`.
  - The footer "Sala de Juntas" button is the shared one and points to `/sala-de-juntas`, not to Zoom.
- Not reproduced:
  - "Smoove" entrance animations: the hero text rotating in, the card scaling from 0.8, and the masonry cards' 450px rise.
  - On Pedir Presupuesto, the reCAPTCHA (a 1px-high empty field group is kept so the spacing matches).
- Header on Pedir Presupuesto, ¿Dónde estamos?, Sala de Juntas and Noticias: the source nav sits 3px lower (header block 160px instead of 150px). The clone uses the shared header as is.
