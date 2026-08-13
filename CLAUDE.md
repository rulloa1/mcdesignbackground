# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal executive portfolio for Michael Chandler (MC Design Build) — a high-end construction/design-build site showcasing $500M+ in luxury residential, hospitality, and civil projects. Static site with no build step.

## Architecture

- **No build system** — pure static HTML served directly; no npm, no bundler, no package.json
- **Multi-page**: `index.html` (main portfolio), `project-detail.html` (per-project gallery, reads `?id=` from URL), `portfolio.html` (filterable grid), `design.html` (design exploration page)
- **Shared data layer**: `projects-data.js` exports a `projectsData` array of 21 project objects — all pages import this file via `<script src>` and consume it at runtime
- **Deployment**: Vercel (`vercel.json` → `outputDirectory: "public"`) and Cloudflare Pages (`wrangler.toml` → `pages_build_output_dir: "."`) are both configured; the working copy's `index.html` lives at the project root (not under `public/`)

## Key Technologies (all CDN — no local installs)

- **Tailwind CSS** via `cdn.tailwindcss.com` with custom config (see below)
- **GSAP 3.12.2 + ScrollTrigger** — all scroll animations and pinned sequences
- **Swiper.js v11** — project image galleries in `project-detail.html`
- **Google Fonts**: Plus Jakarta Sans, Playfair Display, JetBrains Mono

## Custom Tailwind Tokens

Defined in the inline `tailwind.config` block in `index.html`:

```js
colors: { carbon: '#0E0E0E', brass: '#C9A961', bone: '#F4F1EB' }
fontFamily: { serif: 'Playfair Display', sans: 'Plus Jakarta Sans', mono: 'JetBrains Mono' }
transitionTimingFunction: { cinematic: 'cubic-bezier(0.25, 1, 0.5, 1)' }
```

CSS custom properties (`--carbon`, `--brass`, `--brass-dark`, `--bone`) are also declared in `:root` for use in non-Tailwind CSS rules.

## Page Sections — index.html (in order)

1. **Entrance overlay** (`#entrance-overlay`) — cinematic intro with animated `#blueprint-canvas` (SVG lines) and `#dust-canvas` (particles), plus character-by-character name reveal driven by GSAP
2. **Hero** — full-viewport static hero with profile image and asymmetric layout; scroll indicator animates out
3. **Marquee band** — auto-scrolling credential ticker (pauses on hover)
4. **Profile / About** — stats display (21+ projects, $500M+, 6 regions)
5. **Selected Works** (`#works`) — asymmetric 12-column masonry grid; cards link to `project-detail.html?id=<id>`
6. **Featured Case Studies** — three pinned scroll sequences (`#featured-case-1/2/3`) each running GSAP ScrollTrigger timelines that cross-fade images and animate stat counters
7. **Philosophy** — signature SVG draw animation on scroll
8. **Process** (`#process`) — timeline with progress fill bar; steps fade in sequentially via ScrollTrigger
9. **Stats Calculator** — interactive `#experience-slider` that updates project/sqft/capital estimates
10. **Portfolio grid** (`portfolio.html`) — filterable by category; `hidden` toggled on `.portfolio-card` via `data-category`
11. **Contact / Quote form** — client-side only (simulated submission, no backend)
12. **Footer**

## projects-data.js

Single source of truth for all 21 projects. Each record shape:
```js
{ id, title, subtitle, category, location, role, specs, description, notes, featured, coverImage, images[] }
```
Categories: `owners-representation`, `residential-construction`, `design-build`, `civil`, `hospitality`

When adding a project: add the record here, add cover to `projects/assets/`, then add a card to the HTML grid in `index.html` and `portfolio.html`.

## Animation Patterns

- **Scroll reveals**: `.gs-reveal` / `.reveal` classes; initialized by `initRevealAnimations()` using `gsap.from` + ScrollTrigger `once: true`
- **Pinned case studies**: three GSAP timelines (`pinTl`, `pinTl2`, `pinTl3`) each pinning a full-viewport section across `+=3000` scroll and cross-fading three stacked `.img-N` / `.cap-N` layers
- **Stat counters**: GSAP `innerHTML` tween with `snap` inside pinned timelines; counters formatted with `toLocaleString()` in `onUpdate`
- **Entrance sequence**: character spans animated with staggered `translateY` + opacity, followed by underline width draw and title fade

## Design System (see DESIGN.md)

- **Banned**: Inter font, pure black `#000000`, neon/outer glow, 3-column equal grids, AI clichés ("Elevate", "Seamless")
- **Background texture**: subtle SVG fractalNoise filter applied to `body` via `background-image: url(data:image/svg+xml...)`
- **Images**: default `grayscale(30%) brightness(.95)` filter, removed on hover; project cards use `scale(1.05)` zoom on hover

## Development

```bash
npx serve .
# or
python -m http.server
```

No build step. Open `index.html` directly or via any static file server.
