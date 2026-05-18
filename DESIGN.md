# Design System: Michael Chandler Executive Portfolio

## 1. Visual Theme & Atmosphere
A highly curated, cinematic, and authoritative executive portfolio. The atmosphere is an "Art Gallery Airy" (Density: 2) with "Offset Asymmetric" layouts (Variance: 6) and "Cinematic Choreography" (Motion: 8). It feels expensive, clean, and meticulously engineered—like a pristine architectural blueprint coming to life.

## 2. Color Palette & Roles
- **Canvas Obsidian** (`#09090B`) — Primary background surface (Zinc-950 depth, not pure black)
- **Architectural Slate** (`#18181B`) — Card and container fill, subtle elevation
- **Pristine White** (`#FAFAFA`) — Primary text, display headings
- **Muted Steel** (`#71717A`) — Secondary text, metadata, descriptions
- **Blueprint Line** (`rgba(255,255,255,0.08)`) — 1px structural lines, glassmorphism inner borders
- **Electric Cyan** (`#06B6D4`) — Single accent for micro-interactions, active states, focus rings (Saturation controlled, used sparingly)

## 3. Typography Rules
- **Display:** `Outfit` or `Cabinet Grotesk` — Track-tighter, controlled scale, weight-driven hierarchy. Used for massive, asymmetric Hero headers.
- **Body:** `Geist` — Relaxed leading, 65ch max-width, neutral secondary color.
- **Mono:** `JetBrains Mono` — For project statistics, timestamps, data metrics.
- **Banned:** Inter, standard system fonts, any generic serifs.

## 4. Component Stylings
* **Buttons:** Flat, magnetic micro-physics on hover. Tactile -1px translate on active. No outer glow.
* **Cards:** Used sparingly. Prefer border-top dividers or negative space to group content. When cards are used, use subtle inner borders (Liquid Glass refraction) instead of box shadows.
* **Images:** Cinematic aspect ratios (21:9 or 4:3). Use `grayscale` or subtle dimming filters that reveal full color on hover.
* **Loaders:** Architectural blueprint loading sequences (lines drawing themselves).
* **Empty States:** Highly composed, elegant typography instead of basic "No data" strings.

## 5. Layout Principles
Grid-first responsive architecture. Centered hero layouts are BANNED. Force Split Screen or Left-Aligned content with asymmetric white space. Strict single-column collapse below 768px. Max-width containment (1400px). No 3-column equal cards; use masonry or offset zig-zag layouts. Generous internal padding (p-10 or higher).

## 6. Motion & Interaction
Cinematic GSAP ScrollTrigger orchestration for page reveals. Spring physics (`stiffness: 100, damping: 20`) for interactive elements. Magnetic buttons, staggered cascade reveals for project grids. No instant mounting. Hardware-accelerated transforms only.

## 7. Anti-Patterns (Banned)
- NO emojis.
- NO Inter font.
- NO pure black (`#000000`).
- NO neon/outer glow shadows.
- NO 3-column equal grids.
- NO AI copywriting clichés ("Elevate", "Seamless", "Unleash").
- NO overlapping text and images.
- NO custom mouse cursors.
- NO generic placeholders.
