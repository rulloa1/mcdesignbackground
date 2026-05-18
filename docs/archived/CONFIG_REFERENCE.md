# Configuration Reference

All tuneable parameters are centralized in the `CONFIG` object inside the main script block.

## Hero Animation Settings

```javascript
TOTAL_FRAMES: 294              // Number of frames in animation
PRELOAD_TIMEOUT: 8000          // ms timeout before proceeding without all frames
SCRUB_DURATION: 0.8            // Scroll smoothness (higher = slower)
NAVBAR_SCROLL_OFFSET: 60       // px scrolled before navbar turns frosted
```

## Scroll Reveal Animations

```javascript
REVEAL_DURATION: 0.85          // Duration of fade-in effect (seconds)
REVEAL_EASE: 'power3.out'      // Easing function for reveals
SCROLL_TRIGGER_OFFSET: 0.9     // Trigger when element is 90% visible
```

## Text Typing Animation

```javascript
TYPE_SPEED_MS: 38              // Milliseconds between each character
TYPE_CURSOR_REMOVAL_MS: 900    // How long cursor stays after text completes
```

## Panel & Dot Checkpoints

**Panel visibility windows** (progress 0→1):
```javascript
PANEL_CHECKPOINTS: [
    { index: 0, start: 0.00, end: 0.30 },   // "The Build"
    { index: 1, start: 0.33, end: 0.62 },   // "The Craft"
    { index: 2, start: 0.66, end: 0.90 },   // "The Legacy"
]
```

**Dot active thresholds**:
```javascript
DOT_THRESHOLDS: [
    { index: 0, min: 0.00 },     // Dot 0 active from 0%
    { index: 1, min: 0.33 },     // Dot 1 active from 33%
    { index: 2, min: 0.66 },     // Dot 2 active from 66%
]
```

---

## Quick Tweaks

### Make hero animation faster
```javascript
SCRUB_DURATION: 0.4            // Was 0.8 → scroll 2x faster
```

### Speed up text typing
```javascript
TYPE_SPEED_MS: 20              // Was 38 → faster typing
```

### Change section reveal trigger
```javascript
SCROLL_TRIGGER_OFFSET: 0.75    // Was 0.9 → trigger earlier (75% visible)
```

### Adjust panel visibility windows
```javascript
// Show panel 1 earlier, hide sooner:
{ index: 0, start: 0.00, end: 0.25 }  // Was 0.30
```

---

## Image Optimization Notes

- Hero frames: 294 JPEGs (~150MB total), preloaded with progress bar
- Portfolio images: WebP format preferred, JPEG fallback
- Lightbox: Single reused preload Image object, ~3s timeout per image
- About section: Lazy-loaded with hover zoom effect (CSS-based)

## Performance Targets

- Frame preload: <5s on good connection, <8s max before fallback
- Scroll reveal: 0.85s fade-in
- Portfolio filter: <50ms response time
- Lightbox navigation: <100ms image swap
- Mobile nav toggle: <200ms animation

---

## Cleanup Functions (SPA Navigation)

If integrating into a single-page app, call before route change:

```javascript
// In your router's beforeEach hook:
window.formCleanup?.();
window.lightboxCleanup?.();
window.mobileNavCleanup?.();
```

This prevents event listener accumulation across page navigations.

---

## CSS Variables

Edit in the `:root` block for color theme:

```css
:root {
    --bg:          #F4F0E8;      /* Page background */
    --bg-alt:      #EBE6DC;      /* Alternate background */
    --text:        #1C1916;      /* Primary text */
    --text-muted:  #6B6660;      /* Secondary text */
    --border:      #D8D3CA;      /* Border color */
}
```

---

## Animation Easing Functions (GSAP)

Current easing choices:
- `power3.out` - Scroll reveals (smooth deceleration)
- `power1.out` - Progress tween (gentle acceleration)
- `cubic-bezier(.4, 0, .2, 1)` - Panel transitions (iOS-style ease)

[GSAP Easing Cheatsheet](https://gsap.com/docs/v3/Eases)

---

**Last updated**: 2026-04-13  
**Applies to**: Hero animation, forms, lightbox, portfolio filters
