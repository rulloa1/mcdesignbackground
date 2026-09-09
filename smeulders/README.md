# Smeulders Interieurgroep — concept redesign

A self-contained static redesign concept for [smeulders-ig.nl](https://smeulders-ig.nl/),
built in the same no-build-step spirit as the rest of this repository. Nothing here
touches the MC Design Build site at the repo root.

**This is an unsolicited concept, not an official communication of Smeulders
Interieurgroep.** Every page carries `<meta name="robots" content="noindex">` and a
footer line saying so.

## Run it

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000/smeulders/
```

No dependencies to install. Tailwind is deliberately *not* used here — the root site's
utility-class approach doesn't suit a page this typographic — but GSAP and the Google
Fonts CDN are, matching the root site's delivery model.

## Files

| File | Role |
| --- | --- |
| `index.html` | Homepage: hero, client ticker, about, featured work, method, sustainability, group brands, careers, contact |
| `projecten.html` | Project index, filterable by sector; accepts `?sector=<id>` |
| `project.html` | Project detail template; reads `?id=<project-id>` |
| `data.js` | Single source of truth — projects, brands, capabilities, vacancies, and the NL/EN dictionary |
| `app.js` | Language switching, procedural plate artwork, rendering, GSAP scroll choreography |
| `styles.css` | Design tokens and component layer |

`data.js` mirrors the root site's `projects-data.js` pattern: one array of records, loaded
by every page via `<script src>` and consumed at runtime.

## Design system

Follows the anti-patterns in the repo's `DESIGN.md` — no pure black, no centred hero, no
equal three-column card grids, no neon glow, no emoji, no Inter — with a palette and type
pairing of its own, chosen for a Dutch interior-construction firm rather than for MC Design
Build.

```
--ink   #15140F   deep warm near-black, never #000
--paper #F4F1EA   warm off-white canvas
--oak   #B8875A   single accent (--oak-deep #8A5F35 for text on paper)
--moss  #3E4A38   reserved for the circularity section
--stone #7C776C   secondary text
```

Display type is **Fraunces** (soft serif — sixty years of craft), body is **Archivo**,
data and labels are **JetBrains Mono**.

## Bilingual

NL is primary, matching the real site; EN is a full parallel translation. Every
user-facing string lives in `dict` (interface) or in `{ nl, en }` pairs on the data
records. The `NL / EN` toggle re-renders in place and remembers the choice in
`localStorage`. Body copy is authored in Dutch first and translated, not the reverse.

## Artwork

There is no photography here. Each project instead gets a **procedural joinery
elevation**: uneven bays, stacked panels in varying material tones, shelving, louvre
fields, grip reveals, perforated acoustic panels and timber grain, all drawn as inline
SVG and seeded deterministically from the project `id` — the same project always draws
the same elevation. Material palettes (`oak`, `walnut`, `terrazzo`, `linen`, `moss`,
`ink`, `brass`, `stone`, `clay`, `felt`) live at the top of `data.js`.

Drop-in replacement with real photography is a two-line change in `app.js`
(`projectCard()` and the detail renderer) plus a `coverImage` field per record.

## Progressive enhancement

- Renders fully with JavaScript disabled? No — the project lists are client-rendered, as
  they are on the root site's portfolio page. But the page never *hides* content it then
  fails to reveal: if GSAP does not load, a `no-gsap` class restores every `.reveal` to
  full opacity, and a 2.5s timeout catches a slow or blocked CDN.
- `prefers-reduced-motion` is honoured throughout: no loader wipe, no reveal offsets, no
  marquee, counters jump straight to their final value.
- Verified with Playwright at 390px, 768px and 1440px — no horizontal overflow, no console
  errors, no elements left invisible.

## Content provenance

The network policy in the environment this was built in blocks `smeulders-ig.nl`, so the
live pages could not be read directly. Company facts (founding era, ~300 staff, the
QYUUBS / Saniskill / Amfia brands, the address, phone and email, the project roster and
its architects) come from public search summaries. Three lines are quoted from the real
site's indexed page descriptions — the sustainability paragraph, the careers opening, and
the Skins, Ogér, Pink Gellac and Aalberts project intros. **All other body copy is written
for this concept and should not be taken as the company's own words.**
