
        (() => {
            'use strict';
            
            // === Global error handler for non-critical animations ===
            const safeExecute = (fn, context = null) => {
                try {
                    return fn.call(context);
                } catch (e) {
                    if (window.__DEV__) {
                        console.error('Animation error (non-critical):', e.message);
                    }
                    return null;
                }
            };

            // === Performance mark helper ===
            const marks = {};
            const mark = (label) => {
                marks[label] = performance.now();
                if (window.__DEV__) console.log(`[MARK] ${label}`);
            };
            const measure = (label, start, end) => {
                const duration = marks[end] - marks[start];
                if (window.__DEV__) console.log(`[MEASURE] ${label}: ${duration.toFixed(2)}ms`);
                return duration;
            };
            
            // === Allow manual debug mode ===
            if (window.location.hash === '#debug') window.__DEV__ = true;
            
            // === Listen for errors globally but only log important ones ===
            window.addEventListener('error', (e) => {
                if (e.message.includes('failed to load')) {
                    console.warn('Resource load failed (non-critical):', e.filename);
                }
            }, { once: false });
            
            // === Unhandled promise rejections ===
            window.addEventListener('unhandledrejection', (event) => {
                if (window.__DEV__) {
                    console.warn('Unhandled promise:', event.reason);
                }
                // Don't preventDefault to let normal error handling proceed
            });
            
            // === Animation Configuration: All timing and transform values centralized here ===
            const CONFIG = {
                TOTAL_FRAMES: 294,
                PRELOAD_TIMEOUT: 30000, // 30s timeout for frame loading

                // === Scroll Reveal Animations ===
                REVEAL_DURATION: 0.85,
                REVEAL_EASE: 'power3.out',
                REVEAL_Y_OFFSET: 24,      // translateY distance for reveal animations
                REVEAL_SCALE_START: 0.95, // scale for reveal animations

                // === Scroll Trigger Configuration ===
                SCROLL_TRIGGER_OFFSET: 0.9, // 90% from top for scroll reveal
                PANEL_CHECKPOINTS: [
                    // Panel 1 starts after the hero wordmark fades (~0.08) so the two don't overlap
                    { index: 0, start: 0.08, end: 0.30 },
                    { index: 1, start: 0.33, end: 0.62 },
                    { index: 2, start: 0.66, end: 0.90 },
                ],
                DOT_THRESHOLDS: [
                    { index: 0, min: 0.00 },
                    { index: 1, min: 0.33 },
                    { index: 2, min: 0.66 },
                ],

                // === Canvas and Scroll Behavior ===
                SCRUB_DURATION: 0.8,
                FRAME_LERP_DURATION: 0.1, // smooth frame interpolation

                // === Service Card Animations ===
                SERVICE_CARD_ROTATION: 3,  // rotationX degrees
                SERVICE_CARD_LIFT: -8,     // translateY pixels
                SERVICE_CARD_DURATION: 0.8,

                // === Process Card Animations ===
                PROCESS_CARD_STAGGER_DELAY: 0.1, // delay between each card
                PROCESS_CARD_SCALE: 0.95,
                PROCESS_CARD_Y_OFFSET: 40,

                // === Portfolio Card Effects ===
                PORTFOLIO_PARALLAX_Y: 15, // yPercent for parallax effect
                PORTFOLIO_HOVER_LIFT: -12, // y offset on scroll
                PORTFOLIO_HOVER_SHADOW: '0 24px 64px rgba(0, 0, 0, .12)',

                // === Text Parallax ===
                TEXT_PARALLAX_Y: -20, // section heading parallax offset

                // === Heading Line Animations ===
                HEADING_LINE_Y_START: 30,

                // === Navbar Scroll ===
                NAVBAR_SCROLL_OFFSET: 60,
                NAVBAR_SCROLL_BG: 'rgba(244, 240, 232, 0.95)',

                // === Form Input Animations ===
                FORM_INPUT_STAGGER: 0.08, // delay between form inputs
                FORM_INPUT_Y_OFFSET: 30,
                FORM_INPUT_DURATION: 0.6,

                // === Typography Animation ===
                TYPE_SPEED_MS: 38, // ms per character
                TYPE_CURSOR_REMOVAL_MS: 900,
            };

            /**
             * Detect WebP support for optimal compression
             * WebP saves ~40% bandwidth vs JPEG
             */
            let supportsWebP = false;
            const webpCanvas = document.createElement('canvas');
            if (webpCanvas.getContext && webpCanvas.getContext('2d')) {
                webpCanvas.width = webpCanvas.height = 1;
                supportsWebP = webpCanvas.toDataURL('image/webp').indexOf('image/webp') === 5;
            }

            /**
             * Generate the array of relative frame paths with format preference.
             * Files: ezgif-frame-001.webp (if supported) or ezgif-frame-001.jpg
             */
            const FRAME_URLS = Array.from({ length: CONFIG.TOTAL_FRAMES }, (_, i) => {
                const n = String(i + 1).padStart(3, '0');
                return `flava-depot/frames/ezgif-frame-${n}.jpg`;
            });
            // ===================================================================================
            //  DOM REFS
            // ===================================================================================
            const loaderEl = document.getElementById('loader');
            const loaderBar = document.getElementById('loader-bar');
            const loaderPct = document.getElementById('loader-pct');
            const canvasSec = document.getElementById('canvas-section');
            const canvas = document.getElementById('hero-canvas');
            const ctx = canvas.getContext('2d');
            const panels = [
                document.getElementById('panel-1'),
                document.getElementById('panel-2'),
                document.getElementById('panel-3'),
            ];
            const dots = document.querySelectorAll('.dot');
            const progressEl = document.getElementById('progress-dots');
            const scrollCue = document.getElementById('scroll-cue');
            const navbar = document.getElementById('navbar');
            const prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            const prefersReducedMotion = prefersReducedMotionQuery.matches;
            const saveDataEnabled = Boolean(navigator.connection && navigator.connection.saveData);
            const shouldBypassHeavyHero = prefersReducedMotion || saveDataEnabled;
            // ===================================================================================
            //  CANVAS SIZING
            // ===================================================================================
            canvasSec.style.height = '400vh';
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resizeCanvas();
            window.addEventListener('resize', () => {
                resizeCanvas();
                drawFrameIndex(currentFrameIndex);
            });
            // ===================================================================================
            //  IMAGE CACHE
            // ===================================================================================
            /** @type {(HTMLImageElement|null)[]} */
            const cache = new Array(CONFIG.TOTAL_FRAMES).fill(null);
            let loaded = 0;
            let currentFrameIndex = 0;
            /**
             * Draws a cached frame using object-fit:cover semantics.
             * @param {number} idx &mdash; frame index (float ok, will be rounded+clamped)
             */
            // Draw a single frame to canvas using object-fit:cover math
            // Clamps index to valid range, retrieves cached image, and uses cover scaling
            // to fill canvas while maintaining aspect ratio (like CSS object-fit: cover).
            function drawFrameIndex(idx) {
                const i = Math.max(0, Math.min(CONFIG.TOTAL_FRAMES - 1, Math.round(idx)));
                currentFrameIndex = i;
                const img = cache[i];

                if (img && img.complete && img.naturalWidth !== 0) {
                    const cw = canvas.width, ch = canvas.height;
                    const iw = img.naturalWidth, ih = img.naturalHeight;
                    // Cover scaling: zoom to fill canvas while preserving aspect ratio
                    const scale = Math.max(cw / iw, ch / ih);
                    const sw = iw * scale, sh = ih * scale;
                    const sx = (cw - sw) / 2, sy = (ch - sh) / 2;
                    ctx.clearRect(0, 0, cw, ch);
                    ctx.drawImage(img, sx, sy, sw, sh);
                } else {
                    ctx.fillStyle = '#111';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#fff';
                    ctx.fillText('Loading frame ' + i, 20, 30);
                }
            }
            // ===================================================================================
            //  PRELOAD WITH PROGRESS & ERROR HANDLING
            //  Loads all frames concurrently, tracks progress, with timeout fallback.
            // ===================================================================================
            // === Improved preload with better error recovery ===
            function preloadFrames(onComplete) {
                let hasError = false;
                let loadedCount = 0;

                // Timeout safety net: if loading takes too long, proceed anyway
                const timeoutId = setTimeout(() => {
                    if (loadedCount < CONFIG.TOTAL_FRAMES && !hasError) {
                        if (window.__DEV__) console.warn(`Frame preload timeout: ${loadedCount}/${CONFIG.TOTAL_FRAMES} loaded`);
                        onComplete();
                    }
                }, CONFIG.PRELOAD_TIMEOUT);

                // Paint first frame as early as possible
                const seed = new Image();
                seed.onload = () => { cache[0] = seed; drawFrameIndex(0); };
                seed.onerror = () => {
                    hasError = true;
                    clearTimeout(timeoutId);
                    if (window.__DEV__) console.error('Failed to load first frame');
                    onComplete();
                };
                seed.src = FRAME_URLS[0];

                const tick = () => {
                    loadedCount++;
                    const pct = Math.round((loadedCount / CONFIG.TOTAL_FRAMES) * 100);
                    if (loaderBar) loaderBar.style.width = pct + '%';
                    if (loaderPct) loaderPct.textContent = pct + '%';
                    if (loadedCount === CONFIG.TOTAL_FRAMES) {
                        clearTimeout(timeoutId);
                        onComplete();
                    }
                };

                // Batch image loads efficiently
                FRAME_URLS.forEach((url, i) => {
                    const img = new Image();
                    img.onload = () => {
                        cache[i] = img;
                        if (i === 0) drawFrameIndex(0);
                        tick();
                    };
                    img.onerror = () => {
                        // Mark as loaded but leave as null — canvas will skip it
                        tick();
                    };
                    img.src = url;
                });
            }

            function renderStaticHeroFallback() {
                const fallback = new Image();
                fallback.onload = () => {
                    cache[0] = fallback;
                    drawFrameIndex(0);
                };
                fallback.onerror = () => {
                    ctx.fillStyle = '#1C1916';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                };
                fallback.src = FRAME_URLS[0];
            }
            // ===================================================================================
            //  TEXT PANEL TRANSITIONS
            //  CSS class toggling (is-visible) with CSS transitions for smooth
            //  interpolation handled by the browser's compositor.
            // ===================================================================================
            function updatePanels(progress) {
                CONFIG.PANEL_CHECKPOINTS.forEach(({ index, start, end }) => {
                    const panel = panels[index];
                    const visible = progress >= start && progress < end;
                    panel.classList.toggle('is-visible', visible);
                    panel.style.pointerEvents = visible ? 'auto' : 'none';
                });
            }
            // ===================================================================================
            //  SIDEBAR DOTS
            // ===================================================================================
            function updateDots(progress) {
                let active = 0;
                for (const { index, min } of CONFIG.DOT_THRESHOLDS) {
                    if (progress >= min) active = index;
                }
                dots.forEach((d, i) => d.classList.toggle('active', i === active));
            }
            // ===================================================================================
            //  SMOOTH FRAME SCRUBBING
            //
            //  Strategy: ScrollTrigger drives a gsap-tweened "scrub proxy" object.
            //  We lerp toward the raw progress value each rAF tick, then map to
            //  a frame index. This gives buttery-smooth canvas updates even when
            //  the user scrubs quickly.
            // ===================================================================================
            const proxy = { progress: 0 };  // GSAP-tweened progress target
            let rAFid = null;
            let lastDrawnFrame = -1;
            const wordmarkEl = document.getElementById('hero-wordmark');
            function updateWordmark(progress) {
                if (!wordmarkEl) return;
                // Wordmark is fully visible until ~5% scroll, fully hidden by ~15%.
                // It lives in the "pre-panel" window before panel-1 reaches is-visible.
                const hidden = progress > 0.05;
                wordmarkEl.classList.toggle('is-hidden', hidden);
            }
            // Continuous frame render loop: converts smooth proxy progress (0→1) to frame index
            // Called via requestAnimationFrame only during hero scroll section for performance.
            // Maps proxy.progress to frame index: (0→1) * 293 = (0→293 frame range).
            function renderLoop() {
                const currentFrame = Math.round(proxy.progress * (CONFIG.TOTAL_FRAMES - 1));
                drawFrameIndex(currentFrame);      // Render frame to canvas
                updatePanels(proxy.progress);      // Show/hide text panels based on progress
                updateDots(proxy.progress);        // Highlight active progress dots
                updateWordmark(proxy.progress);    // Fade wordmark as user scrolls
                rAFid = requestAnimationFrame(renderLoop);
            }
            // ===================================================================================
            //  BELOW-FOLD SCROLL REVEALS
            // ===================================================================================
            function initServiceCardAnimations() {
                if (!canAnimate()) return;
                // Service cards with subtle rotation on scroll
                gsap.utils.toArray('.service-card').forEach((card, idx) => {
                    gsap.to(card, {
                        rotationX: 3,
                        y: -8,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 70%',
                            end: 'top 30%',
                            scrub: 0.5,
                            markers: false,
                        },
                    });
                });
            }

            function initProcessCardAnimations() {
                if (!canAnimate()) return;
                // Process cards with staggered entrance and hover effect prep
                gsap.utils.toArray('.process-card').forEach((card, idx) => {
                    gsap.fromTo(card,
                        { opacity: 0, y: 40, scale: 0.95 },
                        {
                            opacity: 1, y: 0, scale: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            delay: idx * 0.15,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 75%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                });
            }

            function initSectionScrollEffects() {
                // Smooth background transitions between sections
                const sections = gsap.utils.toArray('section');
                sections.forEach((section, idx) => {
                    if (idx < sections.length - 1) {
                        const nextSection = sections[idx + 1];
                        gsap.to(section, {
                            opacity: 0.98,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: section,
                                start: 'center center',
                                end: 'bottom center',
                                scrub: 0.3,
                                markers: false,
                            },
                        });
                    }
                });
            }

            // Cache section headings for performance
            const cachedHeadings = gsap.utils.toArray('.section-h2');

            function initTextParallax() {
                // Subtle text parallax for section headers (using cached elements)
                cachedHeadings.forEach(heading => {
                    gsap.to(heading, {
                        y: -20,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: heading.closest('section'),
                            start: 'top center',
                            end: 'center center',
                            scrub: 0.5,
                            markers: false,
                        },
                    });
                });
            }

            function initRevealAnimations() {
                if (!canAnimate()) return;
                // Collect reveals by parent container for staggered effect
                const revealGroups = {};
                gsap.utils.toArray('.reveal').forEach(el => {
                    const parent = el.closest('section') || el.closest('[class*="max-w"]');
                    const parentKey = parent ? parent.innerHTML.substring(0, 50) : 'default';
                    if (!revealGroups[parentKey]) revealGroups[parentKey] = [];
                    revealGroups[parentKey].push(el);
                });

                // Stagger reveals within each group  " direction-aware animations
                Object.values(revealGroups).forEach(group => {
                    group.forEach((el, idx) => {
                        // Determine animation direction based on element type
                        let fromY = 24, fromX = 0, fromScale = 1;
                        let stagger = 0.08;

                        // Headings: larger upward slide
                        if (el.matches('h1, h2, h3, .section-h2')) {
                            fromY = 40;
                            stagger = 0.1;
                        }
                        // Cards: scale + slide
                        else if (el.matches('.service-card, .process-card, .portfolio-card')) {
                            fromY = 50;
                            fromScale = 0.96;
                            stagger = 0.1;
                        }
                        // Stats: light scale
                        else if (el.matches('.stat-item, [class*="stat"]')) {
                            fromY = 20;
                            fromScale = 0.95;
                        }

                        gsap.fromTo(el,
                            { opacity: 0, y: fromY, x: fromX, scale: fromScale },
                            {
                                opacity: 1, y: 0, x: 0, scale: 1,
                                duration: CONFIG.REVEAL_DURATION,
                                ease: CONFIG.REVEAL_EASE,
                                delay: idx * stagger,
                                scrollTrigger: {
                                    trigger: el,
                                    start: `top ${CONFIG.SCROLL_TRIGGER_OFFSET * 100}%`,
                                    toggleActions: 'play none none none',
                                    once: true,
                                },
                            }
                        );
                    });
                });

                // Portfolio card parallax effect with elevation
                gsap.utils.toArray('.portfolio-card').forEach(card => {
                    const img = card.querySelector('.portfolio-img-wrap img');
                    if (!img) return;

                    gsap.to(img, {
                        yPercent: 15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.5,  // Smooth parallax
                            markers: false,
                        },
                    });

                    // Card elevation on scroll
                    gsap.to(card, {
                        y: -12,
                        boxShadow: '0 24px 64px rgba(0, 0, 0, .12)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 60%',
                            end: 'top 20%',
                            scrub: 0.5,
                            markers: false,
                        },
                    });
                });
            }
            // ===================================================================================
            //  LINE-BY-LINE HEADING ANIMATIONS
            // ===================================================================================
            function initHeadingLineAnimations() {
                if (!canAnimate()) return;
                // Animate section headings line by line (split on <br>)
                gsap.utils.toArray('.section-h2').forEach(heading => {
                    const html = heading.innerHTML;
                    const lines = html.split('<br>').map((line, i) => {
                        return `<span class="line-wrap" style="display:block;overflow:hidden;"><span class="line" style="display:block;">${line}</span></span>`;
                    });
                    heading.innerHTML = lines.join('');

                    // Animate each line
                    const lineEls = heading.querySelectorAll('.line');
                    gsap.fromTo(lineEls,
                        { y: 30, opacity: 0 },
                        {
                            y: 0, opacity: 1,
                            duration: 0.7,
                            ease: 'power3.out',
                            stagger: 0.15,
                            scrollTrigger: {
                                trigger: heading,
                                start: 'top 80%',
                                once: true,
                            }
                        }
                    );
                });
            }

            // ===================================================================================
            //  INTRO STATEMENT LINE ANIMATIONS
            // ===================================================================================
            function initIntroStatementAnimation() {
                if (!canAnimate()) return;
                const intro = document.querySelector('.intro-statement');
                if (!intro) return;

                const html = intro.innerHTML;
                const lines = html.split('<br class="hidden md:block">').map(line => {
                    return `<span class="line-wrap" style="display:block;overflow:hidden;"><span class="line" style="display:block;">${line}</span></span>`;
                });
                intro.innerHTML = lines.join('');

                const lineEls = intro.querySelectorAll('.line');
                gsap.fromTo(lineEls,
                    { y: 24, opacity: 0 },
                    {
                        y: 0, opacity: 1,
                        duration: 0.65,
                        ease: 'power3.out',
                        stagger: 0.12,
                        scrollTrigger: {
                            trigger: intro,
                            start: 'top 85%',
                            once: true,
                        }
                    }
                );
            }

            // ===================================================================================
            //  MARQUEE ENTRANCE ANIMATION
            // ===================================================================================
            function initMarqueeEntrance() {
                if (!canAnimate()) return;
                const marquee = document.querySelector('.marquee-band');
                if (!marquee) return;

                gsap.fromTo(marquee,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1, y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: marquee,
                            start: 'top 95%',
                            once: true,
                        }
                    }
                );
            }

            // ===================================================================================
            //  FOOTER ANIMATIONS
            // ===================================================================================
            function initFooterAnimations() {
                if (!canAnimate()) return;
                // Animate footer columns with left-to-right stagger
                const footerCols = document.querySelectorAll('footer .footer-col');
                if (footerCols.length === 0) return;

                gsap.fromTo(footerCols,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1, x: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: 'footer',
                            start: 'top 85%',
                            once: true,
                        }
                    }
                );
            }

            // ===================================================================================
            //  TYPED MICRO-INTERACTIONS (Named function for debugging)
            //  Section labels (.section-label) type themselves in on scroll
            // ===================================================================================
            function typeCharacters(el, text, cursor) {
                let i = 0;
                const interval = setInterval(() => {
                    el.textContent = text.slice(0, i + 1);
                    el.appendChild(cursor);
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                        // Add class to trigger underline animation after typing
                        setTimeout(() => {
                            el.classList.add('typed-complete');
                            cursor.remove();
                        }, CONFIG.TYPE_CURSOR_REMOVAL_MS);
                    }
                }, CONFIG.TYPE_SPEED_MS);
                return interval; // Return for potential cleanup
            }

            function initTypedLabels() {
                const typeIntervals = [];
                document.querySelectorAll('.section-label').forEach(el => {
                    const original = el.textContent.trim();
                    el.textContent = '';
                    el.classList.add('typed-init');
                    const cursor = document.createElement('span');
                    cursor.className = 'type-cursor';
                    el.appendChild(cursor);

                    ScrollTrigger.create({
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                        onEnter: () => {
                            el.style.opacity = '1';
                            const intervalId = typeCharacters(el, original, cursor);
                            typeIntervals.push(intervalId);
                        },
                    });
                });
                return typeIntervals; // For cleanup if needed
            }
            // ===================================================================================
            //  ANIMATED STAT COUNTERS
            // ===================================================================================
            function initCounters() {
                document.querySelectorAll('.stat-counter').forEach(el => {
                    const target  = parseFloat(el.dataset.target);
                    const prefix  = el.dataset.prefix  || '';
                    const suffix  = el.dataset.suffix  || '';
                    const obj     = { val: 0 };
                    ScrollTrigger.create({
                        trigger: el,
                        start: 'top 85%',
                        once: true,
                        onEnter: () => {
                            gsap.to(obj, {
                                val: target,
                                duration: 2,
                                ease: 'power2.out',
                                onUpdate() {
                                    el.textContent = prefix + Math.round(obj.val) + suffix;
                                },
                            });
                        },
                    });
                });
            }

            function initAdvancedScrollEffects() {
                try {
                    // Paragraph fade-in effect
                    gsap.utils.toArray('p:not(.reveal *)').forEach(para => {
                        if (para.textContent.length < 40) return;
                        gsap.fromTo(para, { opacity: 0 }, {
                            opacity: 1, duration: 0.7, ease: 'power2.out',
                            scrollTrigger: { trigger: para, start: 'top 85%', once: true }
                        });
                    });

                    // Stat number scale animation
                    gsap.utils.toArray('.stat-number').forEach(stat => {
                        gsap.fromTo(stat, { scale: 0.5, opacity: 0 }, {
                            scale: 1, opacity: 1, duration: 1, ease: 'back.out',
                            scrollTrigger: { trigger: stat, start: 'top 80%', once: true }
                        });
                    });

                    // About images slide in
                    gsap.utils.toArray('#about .grid img').forEach((img, idx) => {
                        const direction = idx % 2 === 0 ? -60 : 60;
                        gsap.fromTo(img, { opacity: 0, x: direction }, {
                            opacity: 1, x: 0, duration: 0.8, delay: idx * 0.1,
                            ease: 'power3.out',
                            scrollTrigger: { trigger: img, start: 'top 75%', once: true }
                        });
                    });

                    // Form inputs slide up
                    gsap.utils.toArray('.form-input, .form-select, .form-textarea').forEach((input, idx) => {
                        gsap.fromTo(input, { opacity: 0, y: 30 }, {
                            opacity: 1, y: 0, duration: 0.6, delay: idx * 0.08,
                            ease: 'power2.out',
                            scrollTrigger: { trigger: input, start: 'top 80%', once: true }
                        });
                    });

                    // Heading glow effect (using cached headings)
                    cachedHeadings.forEach(heading => {
                        gsap.to(heading, {
                            textShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            ease: 'none',
                            scrollTrigger: {
                                trigger: heading.closest('section'),
                                start: 'top 70%',
                                end: 'center 50%',
                                scrub: 0.3,
                            }
                        });
                    });

                    // Testimonial cards  " already animated via .reveal class, skip double animation
                    // gsap.utils.toArray('.testimonial-card').forEach((card, idx) => { ... });

                    // Section background color shift  " commented out (too subtle + single-section bug)
                    // gsap.to('section', { backgroundColor: ..., scrollTrigger: { ... } });

                    // Scrub text effect for intro statement
                    const scrubWords = gsap.utils.toArray('#intro-scrub-text .scrub-word');
                    if (scrubWords.length > 0) {
                        gsap.fromTo(scrubWords, 
                            { opacity: 0.15 },
                            {
                                opacity: 1,
                                stagger: 0.1,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: '#intro-scrub-text',
                                    start: 'top 80%',
                                    end: 'bottom 50%',
                                    scrub: 1,
                                }
                            }
                        );
                    }
                } catch(e) {
                    // Scroll effects non-critical; silently fail
                    // console.warn('Scroll effect error:', e);
                }
            }

            // ===================================================================================
            //  SCROLL PROGRESS INDICATOR
            // ===================================================================================
            function initScrollToTop() {
                const scrollBtn = document.getElementById('scroll-to-top');
                if (!scrollBtn) return;

                // Show/hide button based on scroll position
                const toggleButton = () => {
                    if (window.scrollY > 300) {
                        scrollBtn.classList.add('visible');
                    } else {
                        scrollBtn.classList.remove('visible');
                    }
                };

                // Scroll to top on click
                scrollBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });

                // Update visibility on scroll
                window.addEventListener('scroll', toggleButton, { passive: true });

                // Initial check
                toggleButton();
            }

            // ===================================================================================
            //  SCROLL CUE BUTTON (Interactive scroll trigger)
            // ===================================================================================
            function initScrollCueButton() {
                const scrollCueBtn = document.getElementById('scroll-cue');
                if (!scrollCueBtn) return;

                // Make sure it's visible initially
                scrollCueBtn.style.opacity = '1';

                scrollCueBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const nextSection = document.getElementById('services') || document.querySelector('section:nth-of-type(2)');
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });

                // Keyboard accessibility
                scrollCueBtn.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        scrollCueBtn.click();
                    }
                });

                // Fade out scroll cue as user scrolls
                gsap.to(scrollCueBtn, {
                    opacity: 0,
                    pointerEvents: 'none',
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '#canvas-section',
                        start: 'top 20%',
                        end: 'top 5%',
                        scrub: 0.5,
                    }
                });
            }
            // ===================================================================================
            //  MAIN SCROLL TRIGGER (Named function for debugging)
            // ===================================================================================
            const scrollTriggers = []; // Track for cleanup

            function initScrollTrigger() {
                // Smooth navbar transition on scroll with better easing
                let navbarScrolled = false;
                scrollTriggers.push(ScrollTrigger.create({
                    start: CONFIG.NAVBAR_SCROLL_OFFSET,
                    onEnter: () => {
                        if (!navbarScrolled) {
                            navbarScrolled = true;
                            gsap.to(navbar, {
                                duration: 0.4,
                                ease: 'power2.out',
                                backgroundColor: 'rgba(244, 240, 232, 0.95)',
                            });
                            navbar.classList.add('scrolled');
                        }
                    },
                    onLeaveBack: () => {
                        navbarScrolled = false;
                        gsap.to(navbar, {
                            duration: 0.4,
                            ease: 'power2.out',
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                        });
                        navbar.classList.remove('scrolled');
                    },
                }));

                // Canvas pin + scroll-driven scrub
                // Strategy: ScrollTrigger pins the canvas for 400vh scroll height and drives a
                // tweened "proxy" object that lerps toward the raw progress value. This allows
                // smooth frame interpolation even on fast user scrolling. The proxy value then
                // maps to a frame index via requestAnimationFrame render loop.
                scrollTriggers.push(ScrollTrigger.create({
                    trigger: '#canvas-section',
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: '#sticky-canvas',
                    pinSpacing: false,
                    scrub: CONFIG.SCRUB_DURATION,
                    onUpdate(self) {
                        // Tween proxy toward scroll progress with smooth easing
                        gsap.to(proxy, {
                            progress: self.progress,
                            duration: CONFIG.FRAME_LERP_DURATION,
                            ease: 'none',
                            overwrite: true
                        });
                    },
                    onEnter() {
                        progressEl.classList.add('visible');
                        gsap.to(scrollCue, { opacity: 0, duration: .5 });
                        if (!rAFid) rAFid = requestAnimationFrame(renderLoop);
                    },
                    onLeave() {
                        progressEl.classList.remove('visible');
                        cancelAnimationFrame(rAFid); rAFid = null;
                    },
                    onEnterBack() {
                        progressEl.classList.add('visible');
                        if (!rAFid) rAFid = requestAnimationFrame(renderLoop);
                    },
                    onLeaveBack() {
                        progressEl.classList.remove('visible');
                        gsap.to(scrollCue, { opacity: 1, duration: .5 });
                        cancelAnimationFrame(rAFid); rAFid = null;
                    },
                }));

                updatePanels(0);
            }
            // ===================================================================================
            //  REDUCED MOTION CHECK
            // ===================================================================================
            function canAnimate() {
                return !prefersReducedMotion;
            }

            // ===================================================================================
            //  INIT SEQUENCE
            // ===================================================================================
            gsap.registerPlugin(ScrollTrigger);
            // Neutral placeholder while loading
            ctx.fillStyle = '#1C1916';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Init scroll button before preload
            initScrollCueButton();
            initScrollToTop();

            if (shouldBypassHeavyHero) {
                loaderEl.classList.add('hidden');
                canvasSec.style.height = '100vh';
                if (progressEl) progressEl.classList.remove('visible');
                if (scrollCue) {
                    scrollCue.style.opacity = '0';
                    scrollCue.style.pointerEvents = 'none';
                }
                updatePanels(0);
                updateDots(0);
                renderStaticHeroFallback();
                initRevealAnimations();
                initHeadingLineAnimations();
                // initIntroStatementAnimation(); // Disabled in favor of scrub text
                initServiceCardAnimations();
                initProcessCardAnimations();
                initSectionScrollEffects();
                initTextParallax();
                initCounters();
                initTypedLabels();
                initMarqueeEntrance();
                initAdvancedScrollEffects();
                initFooterAnimations();
                return;
            }

            preloadFrames(() => {
                // All frames loaded &mdash; hide loader, init animations
                loaderEl.classList.add('hidden');
                drawFrameIndex(0);
                initScrollTrigger();
                initRevealAnimations();
                initHeadingLineAnimations();
                // initIntroStatementAnimation(); // Disabled in favor of scrub text
                initServiceCardAnimations();
                initProcessCardAnimations();
                initSectionScrollEffects();
                initTextParallax();
                initCounters();
                initTypedLabels();
                initMarqueeEntrance();
                initAdvancedScrollEffects();
                initFooterAnimations();
            });
        })();
    