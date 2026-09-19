---
name: Michael Chandler — Strategic Construction Executive
description: A bone-and-ink editorial record where restraint carries the authority and brass is the only warmth.
colors:
  bone: "#F4F0E8"
  bone-raised: "#FAF8F4"
  bone-sunk: "#EBE6DC"
  bone-muted: "#E5E0D6"
  ink: "#1C1916"
  ink-muted: "#6B6660"
  ink-faint: "#9C978E"
  rule: "#D8D3CA"
  struck-brass: "#d4a574"
  struck-brass-deep: "#8E733E"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.28rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  none: "0"
  hairline: "2px"
  chip: "4px"
  dot: "50%"
spacing:
  xs: "8px"
  sm: "14px"
  md: "18px"
  lg: "28px"
  xl: "48px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-dark-hover:
    backgroundColor: "#2a2a2a"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  option-chip:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    padding: "14px 18px"
  option-chip-selected:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px"
---

# Design System: Michael Chandler — Strategic Construction Executive

## Overview

**Creative North Star: "Quiet Authority"**

Restraint is the flex. This is the visual language of someone who has delivered a
$500M+ portfolio over thirty-seven years and feels no need to raise their voice about
it. Every corner is square, every division is a hairline, and the single warm colour
appears perhaps four times on a page. The confidence is in what has been left out.

The surface is bone paper, not a screen: a warm off-white that never goes stark, holding
near-black ink text at newspaper contrast. Structure comes from 1px rules and generous
negative space rather than from boxes, fills or shadows. Photography of the built work
is the only saturated thing in the system, which is the point — the projects are the
argument and the interface is the mount they hang on.

Where warmth enters it is brass, and it enters sparingly: a rule under a heading, a
figure in a statistic, the state of an active filter. Brass is never asked to carry a
sentence. The system's whole tension is the discipline of leaving it alone.

**Key Characteristics:**
- Bone-and-ink ground with a single brass accent used at roughly 5% of any screen
- Zero-radius form language — square corners are the default, not a variant
- Hairline rules and negative space in place of cards, fills and containers
- Flat at rest; depth appears only as a response to intent
- Uppercase, wide-tracked labels as the system's structural voice

## Colors

A warm achromatic ground — bone through ink — interrupted by exactly one chromatic
voice. The palette has no secondary or tertiary role and should not be given one.

### Primary
- **Struck Brass** (`#d4a574`): The system's only colour. Hardware, not decoration —
  it reads as a fitting or a fixture rather than as luxury ornament. Used for rules
  beneath section headings, statistic figures, active filter states and small marks.
  **It scores 1.96:1 on bone and therefore cannot carry text at any size.** Treat it as
  a graphic material.
- **Struck Brass Deep** (`#8E733E`): The text-capable brass, at 3.95:1 on bone — legal
  for large text only (24px+, or 19px bold). Reach for this whenever brass must be read
  rather than seen.

### Neutral
- **Bone** (`#F4F0E8`): The primary ground. Warm off-white; never white, never grey.
- **Bone Raised** (`#FAF8F4`): Card and panel fill, a single step brighter than the
  ground — the only elevation signal the system has at rest.
- **Bone Sunk** (`#EBE6DC`): Alternating section bands, used to separate without a border.
- **Bone Muted** (`#E5E0D6`): Inset wells and the lighter of the two rule weights.
- **Ink** (`#1C1916`): Primary text and display headings. 15.40:1 on bone.
- **Ink Muted** (`#6B6660`): Secondary text, metadata, project specs. 5.00:1 — passes,
  but it is the floor. Nothing lighter may carry a sentence.
- **Ink Faint** (`#9C978E`): 2.56:1. **Not a text colour.** Rules, dividers and
  decorative marks only.
- **Rule** (`#D8D3CA`): The 1px structural line that does the work cards would otherwise do.

### Named Rules

**The One Warmth Rule.** Brass is the only colour in the system. Adding a second accent —
a success green, a destructive red, a category hue — breaks the whole argument. States
are carried by ink weight, border strength and position, not by new colour.

**The Brass Never Speaks Rule.** `struck-brass` is a graphic material, never a text
colour. If brass must be read, it is `struck-brass-deep` at large size or it is ink.
This is measured, not stylistic: 1.96:1 fails at every size.

**The Two-Ink Floor Rule.** Body and secondary text stop at `ink-muted` (5.00:1).
`ink-faint` draws lines; it does not form words.

## Typography

**Display Font:** Inter (with `system-ui, sans-serif`)
**Body Font:** Inter (same family; hierarchy is carried by weight and tracking, not by a
second face)
**Label Font:** Inter at 700, uppercase, wide-tracked

**Character:** A single neutral grotesque worked hard across its full weight range —
300 through 900 — so that hierarchy reads as force rather than as decoration. The
personality lives entirely in the tracking: display type pulls tight (`-0.02em`) while
labels push wide (`0.12em`), and the distance between those two extremes is the system's
whole typographic signature.

### Hierarchy
- **Display** (900, `clamp(2.4rem, 5.5vw, 4.5rem)`, 1.02, `-0.02em`): Section-opening
  statements. One per viewport, never two.
- **Headline** (700, `clamp(2rem, 5vw, 3.5rem)`, 1.08, `-0.02em`): Sub-section openers
  and pinned-panel headings.
- **Title** (600, `1.28rem`, 1.3, `-0.015em`): Project names, card headings, work rows.
- **Body** (400, `1rem`, 1.65): Paragraph text. Hold to 56–62ch; the ground is warm
  enough that longer measures get tiring.
- **Label** (700, `0.72rem`, `0.12em`, uppercase): Eyebrows, metadata keys, region tags,
  stat captions. Used 29 times across the homepage — this is the system's connective tissue.

### Named Rules

**The Tracking Split Rule.** Type either pulls in or spreads out; nothing sits at
neutral tracking except body copy. Display and headline take `-0.02em`. Labels take
`0.08em` to `0.12em` and uppercase. A 700-weight heading at default tracking belongs to
no level of this system.

**The One Family Rule.** Inter carries every role. Adding a display serif or a second
grotesque does not enrich this system, it dilutes the weight-driven hierarchy that
replaces it.

## Layout

A centred measure on an asymmetric grid. The primary container caps at **1280px**;
reading-width blocks narrow to **768px**, and focused single-column passages to
**640px** or **560px**. Sections breathe at roughly 110–130px of vertical padding on
desktop, compressing to ~76–88px below 720px.

Structure is expressed by 1px rules and by alternating bone bands (`bone` against
`bone-sunk`), not by nested boxes. Grids favour offset and asymmetric column counts;
multi-column card grids use `repeat(auto-fit, minmax(...))` so columns are never forced
to equal weight. Below 900px everything collapses to a single column without exception —
there is no intermediate two-column state.

The spacing rhythm is loose and irregular by design: 8 / 14 / 18 / 28 / 48px steps,
chosen per component rather than snapped to a strict 4pt grid.

## Elevation & Depth

**This system is flat at rest.** Surfaces sit directly on the ground and are bounded by
a 1px `rule` border or separated by a tonal band. There is no resting shadow anywhere in
the system, and `bone-raised` against `bone` is the only elevation signal a static
surface gets.

Depth appears exclusively as a response to intent. On hover, elements translate upward —
`-1px` for a bordered button, `-2px` for a filled one, up to `-8px` for a process card —
and a shadow fades in underneath for the duration of that state only. The lift is the
feedback; the shadow is just its evidence.

### Shadow Vocabulary

Hover-state only. Currently eight distinct one-off values exist in the codebase; these
three are the ones worth keeping, and new work should use them rather than inventing a
ninth:

- **Lift Low** (`box-shadow: 0 10px 28px rgba(0, 0, 0, .18)`): Filled buttons on hover.
- **Lift Soft** (`box-shadow: 0 20px 60px rgba(0, 0, 0, .10)`): Cards and panels on hover.
- **Focus Ring** (`box-shadow: 0 0 0 3px rgba(0, 0, 0, .05)`): Input focus. Ink-based, not brass.

### Named Rules

**The Flat-At-Rest Rule.** No element carries a shadow in its default state. If a surface
needs to separate from the ground, it takes a 1px `rule` border or a tonal band — not a
shadow. Shadows are reserved for hover and focus, and they leave when the state does.

**The Lift-On-Intent Rule.** Every interactive surface moves toward the viewer on hover,
between `-1px` and `-8px` depending on mass. Elements that do not move are, by that
fact, declaring themselves non-interactive.

## Shapes

**Square by default.** 13 of the 19 radius declarations in the system are `0`, and that
is the form language: cards, buttons, inputs, chips, images and panels all have hard
corners. The two exceptions are deliberate — `50%` for dots, progress indicators and
avatar marks, and a `2–4px` softening reserved for the smallest interactive chips.

Borders are the primary structural device, at two weights: **1px** for structural rules
and card edges, **1.5px** for interactive boundaries (buttons, option chips) so that
touchable things read as fractionally heavier than static ones.

Imagery is cinematic and rectangular — 21:9 and 4:3 — and carries a resting
`grayscale(30%) brightness(.95)` filter that clears to full colour on hover. The
photography being the only saturated element on the page is what gives the restraint
elsewhere its payoff.

### Named Rules

**The Square Corner Rule.** Radius is `0` unless the element is a dot. A rounded card in
this system reads as borrowed from somewhere else.

## Components

### Buttons
- **Shape:** Square (`border-radius: 0`), padding `14px 28px`.
- **Dark (primary):** Ink fill (`#1C1916`) with white text at 17.5:1. Hover shifts the
  fill to `#2a2a2a`, translates `-2px`, and fades in *Lift Low*.
- **Outline (secondary):** Transparent with ink text and a `1.5px` border at `#d0d0d0`.
  Hover drives the border to full ink and translates `-1px`. No fill ever appears.
- **Never brass-filled.** A brass button would need ink text at 8.48:1, which is legal
  but spends the system's one warmth on a control rather than on a mark.

### Chips (filter and option)
- **Style:** White ground, `1.5px` `rule` border, `14px 18px` padding, label typography
  (700, `0.82rem`, `0.04em`).
- **Selected:** Border and text both go to full ink; the ground drops to `bone`. Selection
  is shown by contrast gain, not by a fill colour.

### Cards / Containers
- **Corner:** Square (`0`).
- **Background:** White or `bone-raised` against the bone ground.
- **Border:** 1px `rule`. This does the work, not shadow.
- **Shadow:** None at rest. *Lift Soft* on hover only — see Elevation & Depth.
- **Padding:** `28px` internal, rising to `38px` on larger panels.

### Inputs / Fields
- **Style:** Square, `1.5px` border, white ground, ink text.
- **Focus:** *Focus Ring* (`0 0 0 3px rgba(0,0,0,.05)`) plus a border shift to ink.
  Focus is ink-based, never brass — brass lacks the contrast to signal state.
- **Error:** Border to `#d44`. The single sanctioned exception to The One Warmth Rule,
  and it applies to a 1px border only, never to a fill or to text.

### Navigation
- **Style:** Label typography, `ink-muted` at rest, resolving to full ink on hover.
- **Scroll behavior:** Transparent over the hero, transitioning to a bone ground with a
  1px bottom rule once scrolled past ~60px.
- **Mobile:** Links collapse below 860px into a drawer; the primary CTA stays visible.

### Frame-Sequence Hero (signature component)
The system's one genuinely distinctive component. A `<canvas>` is pinned inside a tall
scroll section and painted with a JPEG frame sequence driven by ScrollTrigger, so that
scrolling scrubs a construction-to-completion transformation rather than playing it.

- Frames are drawn with cover-fit maths and an explicit pixel-sized canvas — never CSS
  `width: 100%`, which desynchronises the backing store from the display size.
- A missing frame falls back to the nearest loaded neighbour within ±4 rather than
  blanking the canvas.
- Overlaid text sits on individual backdrop pills; the headline carries a text-shadow
  instead. **No vignette, no darkening gradient, and no single wrapper panel behind all
  the hero content.**

## Do's and Don'ts

### Do:
- **Do** let brass appear roughly four times per screen and no more — a heading rule, a
  statistic, an active state, a mark. Its rarity is the entire effect.
- **Do** use `struck-brass-deep` (`#8E733E`) when brass must be read, and only at 24px+
  or 19px bold.
- **Do** separate surfaces with a 1px `rule` border or an alternating bone band.
- **Do** carry hierarchy with weight and tracking — 300 to 900, `-0.02em` to `0.12em` —
  rather than by introducing a second typeface.
- **Do** keep uppercase wide-tracked labels as the connective tissue between sections.
- **Do** let project photography be the only saturated thing on the page.

### Don't:
- **Don't** set text in `struck-brass` (1.96:1) or `ink-faint` (2.56:1). Both fail at
  every size. This is measured, not a preference.
- **Don't** add a resting shadow. Shadows belong to hover and focus, and they leave with
  the state.
- **Don't** round a corner. Radius is `0` unless the element is a dot.
- **Don't** introduce a second accent colour for status, category or emphasis. Ink
  weight, border strength and position carry those jobs.
- **Don't** add a display serif. Weight-driven hierarchy in one family is the system.
- **Don't** put a vignette, darkening gradient, or single wrapper panel behind hero text
  over the frame sequence.
- **Don't** trust this repository's other documents. `README.md`, the previous
  `DESIGN.md` and `CLAUDE.md` each describe palettes and stacks that do not ship. Read
  the CSS.

---

## Known drift (not yet reconciled)

Recorded for future cleanup; documented here rather than silently normalised.

1. **Two near-duplicate palettes ship side by side.** `index.html` uses
   `--bg #F4F0E8` / `--text #1C1916` with a hardcoded `#d4a574` accent. `portfolio.html`
   and `project-detail.html` use a separate `--bone #F4F1EB` / `--carbon #0E0E0E` /
   `--brass #C9A961` set. The backgrounds differ by 3 hex points and the two brass values
   differ by 0.02:1 in contrast — clearly one intended colour implemented twice. **The
   frontmatter above is normative**; the interior set should be migrated onto it.
2. **The accent is not a variable on the homepage.** `#d4a574` is hardcoded in nine
   places in `index.html` while the interior pages expose `var(--brass)`. The token
   should exist everywhere.
3. **Eight single-use box-shadows.** Only the three named in Elevation & Depth are
   sanctioned; the rest are one-offs that should collapse into that vocabulary.
4. **Seven easing curves, none dominant.** Motion is not tokenised. A future pass should
   settle on one standard and one entrance curve.
5. **A second typeface ships on two of three pages.** `portfolio.html` and
   `project-detail.html` load Playfair Display; `index.html` does not. Per The One Family
   Rule the system is Inter-only, so either the interior pages drop it or the rule changes
   deliberately.
