# Blog, legal pages, Noticias archive and incident form

Builder notes for the theme's plain templates: white header (Elementor header 5196, `<Header variant="white" />`).

## Route map

| Source | Local | Template | Shared footer |
| --- | --- | --- | --- |
| `/aviso-legal/` | `/aviso-legal` | grey title band + text | yes |
| `/politica-privacidad/` | `/politica-privacidad` | grey title band + text | yes |
| `/politica-de-cookies-ue/` | `/politica-de-cookies-ue` | grey title band + Complianz statement | no |
| `/gesfinc-por-el-deporte-canario/` and the four other posts | same slugs | single post | no |
| `/category/noticias/` | `/category/noticias` | archive list | no |
| `/formulario-de-contacto-app/` | `/formulario-de-contacto-app` | grey title band + Elementor form | no (main nav hidden too) |

The source pages without a footer have an empty `#footer-wrapper`. They still have the back-to-top button and the cookie dialog. The clone uses `ToTop` and `CookieBanner` from `widgets.tsx` for these.

Files are in `src/components/sites/gesfinc/blog/`:

| File | Contents |
| --- | --- |
| `layout.tsx` | `BlogShell`, `PageTitle`, `LegalText` |
| `posts.tsx` | Data and body for the 5 posts, plus prev/next |
| `post-page.tsx` | Post template |
| `archive.tsx` | Noticias archive list |
| `consent-manager.tsx` | Section 7.1 of the cookie policy |
| `incident-form.tsx` | Incident form |
| `lightbox.tsx` | Image zoom for the Modelos 347 post |
| `legal-content.ts` | Legal HTML, generated |
| `blog.css` | All styles, prefix `gf-bl-` |

`legal-content.ts` is generated from the source HTML with `scratchpad/blog/scripts/gen_legal.py`.

## Measurements (1440 / 390)

- The shared white header is 228px tall, but the source's is 237px. A spacer (`.gf-bl-top`) adds 9px, or 42px at ≤1180px where the source header is 162px.
  - The incident form page has 0px desktop / 61px mobile instead, because that page hides the nav row.
- Title band: `#f9f9f9`, 60px padding, 60px margin-bottom. h1 is Roboto Slab 45/54 `rgb(24,27,49)` (28/33.6 on mobile).
- Text column: max 1425px wrapper with 90px padding, giving 1245px of text at x=98. The padding is 45px at ≤1024px and 20px at ≤767px.
- Body text: Roboto 16/28.8, `p` padding 19.2px 0, `ol` margin 5px 0 5px 20px. Privacy h2 is Cabin 28/44.8 and h3 is Cabin 24/38.4.
- Cookie statement:
  - Max width 800px, text 14/25.2, h2 Cabin 22.
  - The Complianz `document.min.css` rules were ported and scoped under `.gf-bl-doc`. This covers the dropdown grid, the 3-column cookie table and the chevron (inlined as an SVG data URI).
- Post hero:
  - 510px tall (450px at ≤1024px), `background-size: cover` centred, `rgba(0,0,0,.3)` overlay.
  - Title Roboto Slab 45/58.5 (28/36.4 on mobile), category Roboto Slab 14, "BY X-NET" Roboto 13 uppercase.
  - The title block is not exactly centred. Measured from 1-line and 2-line titles: top = 50% + 11px − 55% of the block height.
- Post body: white box overlapping the hero by 100px, 60px padding (10px + 30/20px on mobile). Each post ends with the source's `<br class="clear">`, a 28.8px empty line.
- Previous/next article tabs:
  - Fixed at y≈520, 11px uppercase with 2px letter-spacing, opacity .4.
  - Hover slides in a 350px card: shadow `0 10px 30px rgba(0,0,0,.12)`, 220px thumbnail, Cabin 18 title, transition .5s.
  - Hidden at ≤767px; on the source mobile the tabs sit under the title layer and are never visible.
- Archive cards:
  - Image at 100% width on `#f9f9f9`, 20px gap, then category (Roboto Slab 14, green `rgb(87,185,87)`) and title (Cabin 24/38.4, `rgb(34,34,34)`).
  - Excerpt, then "BY X-NET" with a 25px round avatar and "Continue Reading" (Roboto 700 `rgb(24,27,49)`).
  - Hover: image scales 1.07 at opacity .9, a white 60px cross fades in, and "Continue Reading" moves from "—— text" to "text ⟶".
  - Rhythm: 10px above the footer row, 50px below it.
- Incident form: inputs 47px tall, 1px `rgb(105,114,125)` border, radius 4, padding 6/16, 10px gaps. Textarea 103.5px. "Enviar" button 40px, Cabin 700 15px, background `rgb(105,114,125)`.

Every page was compared numerically (`scratchpad/blog/cmp.js`, which matches text blocks by content).

- Content positions match within 1px at 1440 and 390 on all 10 pages.
- Page heights match except where the shared footer differs on mobile.
- No horizontal overflow at 320, 768, 1024 or 1920px.

## Decisions and known differences

- **Legal pages footer (source bug):** the source loads footer 5211 on these pages without Elementor's shape-divider CSS. The "tilt" divider therefore shows as a black wedge (500×53px, 140px below the top of the blue band) and pushes the band's content 110px down.
  - Reproduced with page-scoped CSS: `.gf-bl--srcfooter` hides the shared slant, draws the wedge and adds the height.
  - The rest of the shared footer's mobile layout is as built by the shared component; it is 40–70px shorter than the source on mobile.
- **Aviso legal links:**
  - The section heading "OBJETO" links to `portal.spanair.com/...` on the source (copy-paste leftover). It now points to an in-page anchor.
  - "www.gesfinc.es" pointed to the placeholder `www.pagina.com`. It now links to `/`.
  - The "correoinfo@gesfinc.es" mailto now goes to `info@gesfinc.es`; the visible text is kept as on the source.
  - Text like "MAX MADERA" is source content and is kept as is.
- **Cookie policy:**
  - The "Cookies usadas" dropdowns are native `<details>`.
  - Section 7.1, which Complianz builds with JS, is a React component with Funcional ("Siempre activo"), Estadísticas and Marketing.
  - Ticking a box saves `{"stats":bool,"marketing":bool}` to `localStorage["gesfinc-cookie-consent"]` straight away, as Complianz does. It also reads the stored choice back on load.
  - It cannot close an open cookie dialog in the same page view, because the dialog lives in `widgets.tsx` and only reads storage on mount.
  - "https://gesfinc.com" links in the statement go to `/`.
- **Posts:**
  - Text is copied exactly, including the source's non-breaking spaces, which affect mobile wrapping.
  - The 2018 post's title really says "año 2017".
  - The Modelos 347 image opens in a simple lightbox. The source uses ModuloBox, which also has zoom and fullscreen buttons; these are not reproduced.
  - The PDF links and external app/Facebook links point to their real URLs.
  - The "smoove" entrance animations of the hero texts are not reproduced, as on the other cloned pages.
- **Archive:**
  - On mobile the source shows a broken image for the Deporte Canario card (lazy srcset bug). The clone shows the real image.
  - The author avatar is Gravatar's default "mystery person" image, downloaded as `gravatar-mm-200.jpg`.
  - The source's "by X-Net" links to `/author/...` archives are out of scope, so the author name is plain text, as it already is in the source markup.
- **Incident form:**
  - The page's own custom CSS hides the main nav row and its sticky copy, leaving only the top bar on desktop and a 60px blank strip on mobile. The clone does the same by hiding `.gf-header--white` and `.gf-sticky` inside `.gf-bl-appform`.
  - Required fields are as on the source (Email, Teléfono, Asunto, Comunidad).
  - The source's phone `pattern` is invalid under the browser's `v` flag, so in practice the source accepts anything. The clone uses a valid pattern (digits, spaces, `()#&+*-=.`).
  - Files over 10 MB are rejected with the source's message.
  - Sending opens a mailto to info@gesfinc.es. Attachments cannot travel in a mailto, so their names are listed in the body and the user is told to attach them.
- New assets in `public/sites/gesfinc/images/`:
  - `IMG_7278-1024x768-1*.jpg`
  - `Cabecera-Web-Gesfing-Navidad-2018-1170x548-px-100*.jpg`
  - `Anuncio-347-{610x610,656x604,e1486123237353}.jpg`
  - `APP-GESFINC-43685274_xxl-{610x548,960x548}.jpg`
  - `gravatar-mm-200.jpg`

Screenshots: `src/<slug>-{desktop-1440,mobile-390}.png` and `local/<slug>-{desktop-1440,mobile-390}.png`, plus `*-post-nav-hover.png`.
