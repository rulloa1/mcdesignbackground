# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences of roughly equal weight; no single primary was established, and the
quote form's six service types deliberately serve all three:

- **Private ultra-luxury homeowners** commissioning a custom residence or estate
  renovation, frequently reaching him through an architect or family office. They are
  judging whether one person can be trusted with a large, personal, multi-year project.
- **Developers and owners needing owner's representation** who hire him to protect their
  budget, schedule and standard against a project team answering to someone else. They
  judge track record, scale and accountability.
- **Architects and general contractors who refer work.** For them the site functions as
  professional credibility rather than direct sales.

Because no audience is primary, each surface must choose its own audience explicitly
rather than inheriting one.

## Product Purpose

A personal executive portfolio for Michael Chandler. It exists to win and qualify
high-value construction engagements by establishing that a single named executive —
not a firm — has delivered a $500M+ portfolio across five disciplines and six regions.
Success is a qualified inbound inquiry from a serious prospect.

## Positioning

Breadth of discipline and geography under one accountable individual. The portfolio
spans ultra-luxury residential, civil and site development, design-build, historic
coastal restoration and hospitality, across California, the Bahamas, Texas, Montana,
Utah and Florida — carried by one principal rather than distributed across a firm's
departments. A neighbouring builder can claim a category or a region; the defensible
claim here is the combination held by one person over 37 years.

## Operating Context

- Prospects evaluate through project galleries: a filterable portfolio and per-project
  detail pages, each carrying location, role, specifications and photography.
- Engagements begin with a scoped inquiry. The quote form asks for a service type and a
  budget tier before any conversation, which pre-qualifies by project size.
- Projects are long-duration and high-consequence; the evaluation is about trust and
  accountability more than price.

## Capabilities and Constraints

**Implemented**

- Three pages: `index.html` (main portfolio), `portfolio.html` (filterable grid),
  `project-detail.html` (reads `?id=` from the URL).
- `projects-data.js` is the single source of truth: 21 projects, 6 flagged featured,
  across five categories — residential construction (9), civil (4), design-build (4),
  owner's representation (3), hospitality (1).
- Canvas frame-sequence scroll hero driven by `ScrollTrigger`, with a nearby-frame
  fallback when a frame is missing.
- Quote form collects name, email, optional phone and notes, plus one of six service
  types (Ultra-Luxury Custom Home, Design-Build Construction Mgmt, Historic / Coastal
  Restoration, Civil & Site Development, Hospitality / Commercial, Other) and one of
  four budget tiers ($500K–$1M, $1M–$3M, $3M–$10M, $10M+).
- Jest test suite: 42 tests over `projects-data` and `utils`.

**Known broken — confirmed as a real gap to fix**

- **The quote form has no backend.** It simulates a successful submission and sends
  nothing. Inquiries are currently lost silently. This is the most consequential defect
  on the site and future work must fix it rather than restyle it.
- No `tel:` or `mailto:` link exists anywhere in the source, so there is no route to
  direct contact if the form fails.

**Technical constraints**

- No build step. Static HTML served directly; no bundler, no framework.
- Tailwind is loaded from `cdn.tailwindcss.com` with an inline config; GSAP 3.12.5 and
  ScrollTrigger are loaded from cdnjs with SRI hashes.
- Deploy targets: Vercel (`vercel.json` → `outputDirectory: "."`) and Cloudflare Pages
  (`wrangler.toml` → `pages_build_output_dir: "."`). Both serve from the repository root.

**The written documentation is unreliable; the shipped code is the authority**

Four documents describe this project and three of them are wrong about material facts:

- `README.md` claims a stack of "Next.js, Tailwind CSS, GSAP" — there is no Next.js in
  this project at all — and brand colours that do not appear in the shipped CSS.
- `DESIGN.md` describes a dark obsidian (`#09090B`) system with an electric cyan accent
  that exists nowhere in the code, and bans the Inter font that the site actually loads.
- `CLAUDE.md` gives a third palette, and states the Vercel `outputDirectory` is `public`
  when it is `.`.

Future work must verify claims against the code before acting on any of these files.

## Brand Commitments

- Name: **Michael Chandler**; entity **Michael Chandler Design + Construction**.
  Title used throughout: *Strategic Construction Executive*. Practising since **1989**.
- Canonical domain: `https://mcdesign.bio`.
- Existing assets in-repo: `mc-logo.png`, `mcdesign-logo.webp`, `logo-horizontal.webp`,
  `logo-vertical.webp`, `mike-profile.webp` (profile photography).
- Voice, as established by the existing copy: direct, plainspoken, and result-stated.
  Short declaratives over adjectives — *"On time. On budget. Built to endure."*
  It does not sell with superlatives; it states what was delivered.

## Evidence on Hand

**Verified and cleared for public use** (confirmed by the owner):

- 37 years active · $500M+ completed portfolio · 21 projects · 6 regions.
- Named projects, including high-profile ones, are cleared without confidentiality
  restriction: Bakers Bay Resort (Bahamas), Yellowstone Club (Montana), Houston Oaks
  (SE Texas), Abaco Luxe Boat House, Carmel Knolls, Laguna Grande, Hillside Restoration
  & Environmental Cleanup.
- Real project photography in `projects/assets/` and `public/projects/assets/`, keyed to
  each record in `projects-data.js`.
- `Improved Interior 1–4.webp` (2400×1792) are genuine photographs of a completed
  Carmel/Monterey coastal project.

**Absent — future work must not fabricate these:**

- No testimonials or client quotes exist anywhere in the source.
- No pricing, rate card or fee structure.
- No licence numbers, certifications, bonding or insurance details.
- No press coverage or awards.

**Provenance caveat:** the 4K hero frame sequence in `public/` carries a visible "Veo"
watermark in the bottom-right of every frame, marking it as AI-generated. It is not
photography of his work and should not be presented as such.

## Product Principles

1. **Evidence over adjectives.** The portfolio is the argument. Real project names,
   real photography, real numbers — never a superlative standing in for a fact.
2. **One accountable principal.** Every surface should reinforce that a named individual,
   not a department, carries the project. This is the positioning and the differentiator.
3. **Qualify before converting.** Service type and budget tier are asked up front by
   design. Surfaces should help a serious prospect self-identify rather than maximise
   raw inquiry volume.
4. **Trust is the conversion currency.** These are multi-year, high-consequence
   commitments. Anything that reads as overstated or unreachable costs more than it gains.
5. **Verify against the code, not the docs.** This repository's written documentation
   has repeatedly contradicted what ships.

## Accessibility & Inclusion

No target standard was set by the owner. Two measured defects exist in the shipped
palette and should be treated as facts, not opinions:

- The brass accent `#d4a574` scores **1.96:1** on the bone background `#F4F0E8`.
- `--text-faint` `#9C978E` scores **2.56:1** on the same background.

Both fall below the 3:1 floor for large text, so neither is usable as text on the light
theme as it currently stands. The site does respect `prefers-reduced-motion`.
