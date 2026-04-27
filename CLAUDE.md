# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**mcdesign** is a premium construction/design-build portfolio website for a company with 37+ years and $500M+ in projects. It is a single-page static site deployed to Vercel.

## Architecture

- **Single-file application**: All HTML, CSS, and JavaScript live in `index.html` (root working directory) — there are no separate JS or CSS source files besides what's inline
- **Git-tracked structure**: The git repo expects files inside `public/` (see `vercel.json` `outputDirectory: "public"`), but the working copy has the main `index.html` at the project root alongside image assets
- **No build system**: No bundler, no npm, no package.json. Pure static HTML served directly

## Key Technologies (all loaded via CDN)

- **Tailwind CSS** via CDN `cdn.tailwindcss.com` — utility classes used throughout
- **GSAP 3.12.5 + ScrollTrigger** — drives all scroll animations
- **Google Fonts (Inter)** — primary typeface

## Hero Animation System

The hero section uses a **scroll-driven frame sequence** (the most complex part of the codebase):

- 294 JPEG frames (`ezgif-frame-001.jpg` through `ezgif-frame-294.jpg`) at project root
- Frames are preloaded into an in-memory image cache, with a loading overlay showing progress
- An HTML5 `<canvas>` element draws frames using object-fit:cover math
- GSAP ScrollTrigger pins the canvas across `400vh` of scroll height and drives a progress proxy (`0→1`)
- A `requestAnimationFrame` render loop interpolates frame index from the proxy
- Three text panels fade in/out at defined progress checkpoints (0-0.30, 0.33-0.62, 0.66-0.90)
- Progress dots on the right side track which panel section is active

## Page Sections (in order)

1. **Loader overlay** — progress bar while frames preload
2. **Hero canvas** — scroll-driven frame animation with 3 text panels
3. **Intro statement** — tagline section
4. **Services** — 3 service cards (Turf Care, Precision Edging, Seasonal Cleanups) + add-on list
5. **Portfolio** — filterable grid of 19 project cards (categories: Residential Construction, Design Build, Civil, Hospitality, Residential Development)
6. **Quote form** — contact form with simulated submission (no backend)
7. **CTA band** — dark call-to-action section
8. **Footer**

## Project Images

- `projects/` directory contains portfolio cover images organized by project name
- `projects/assets/` has optimized `.webp` cover images for some projects
- Other project folders contain original `.jpg`/`.png`/`.JPG` cover photos

## Deployment

- **Platform**: Vercel
- **Config**: `vercel.json` sets `outputDirectory` to `"public"`
- The git repo has files tracked under `public/` — `public/index.html` and `public/style.css` (style.css just contains a comment since styles are embedded)

## Development

To preview locally, just open `index.html` in a browser or use any static file server:
```bash
npx serve .
# or
python -m http.server
```

## Important Notes

- The quote form submit handler is client-side only (simulated) — needs a real backend/API endpoint for production
- All scroll reveal animations use the `.reveal` CSS class and are initialized via `initRevealAnimations()`
- Portfolio filtering is handled by a separate inline `<script>` block that toggles `hidden` on `.portfolio-card` elements based on `data-category` attributes
