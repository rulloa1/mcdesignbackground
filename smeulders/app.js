/* ==========================================================================
   Smeulders Interieurgroep — behaviour layer
   Language switching, procedural plate artwork, project rendering,
   GSAP scroll choreography. Progressive: every page renders without JS.
   ========================================================================== */

(function () {
    'use strict';

    document.documentElement.classList.add('js');

    /* ------------------------------------------------------------ state --- */

    const STORE_KEY = 'smeulders-lang';
    let lang = 'nl';
    try {
        const saved = localStorage.getItem(STORE_KEY);
        if (saved === 'nl' || saved === 'en') lang = saved;
    } catch (e) { /* private mode */ }

    const t = key => (dict[lang] && dict[lang][key]) || (dict.nl[key] || '');
    const pick = val => (val && typeof val === 'object' && !Array.isArray(val)) ? (val[lang] || val.nl) : val;

    /* -------------------------------------------------- procedural art --- */
    /* No photography is available for this concept, so each project gets a
       deterministic joinery elevation drawn from its id. Same id, same
       drawing, every load. */

    function seedFrom(str) {
        let h = 2166136261;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return h >>> 0;
    }

    function rng(seed) {
        let a = seed;
        return function () {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            let x = Math.imul(a ^ (a >>> 15), 1 | a);
            x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
            return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
        };
    }

    function elevation(project) {
        const mat = materials[project.material] || materials.oak;
        const r = rng(seedFrom(project.id));
        const W = 1200, H = 800;
        const uid = 'g' + seedFrom(project.id).toString(36);
        const stroke = mat.line;
        const grainy = project.material === 'oak' || project.material === 'walnut';

        // Tonal overlays stand in for different sheet materials in one elevation.
        const tones = ['rgba(255,255,255,.10)', 'rgba(255,255,255,.04)', 'rgba(0,0,0,.10)',
                       'rgba(0,0,0,.19)', 'rgba(0,0,0,.05)', 'rgba(255,255,255,.16)'];

        const plinth = H - 54;
        let panels = '', detail = '';

        // Uneven vertical bays across the full width.
        const bays = [];
        let x = 0;
        while (x < W - 40) {
            const w = Math.min(150 + Math.round(r() * 230), W - x);
            bays.push([x, w]);
            x += w;
        }

        bays.forEach(function (b) {
            const bx = b[0], bw = b[1];

            // Each bay stacks 2-4 uneven panels over the full height.
            const cuts = [0];
            const n = 2 + Math.round(r() * 2);
            for (let i = 1; i < n; i++) cuts.push(Math.round((plinth / n) * i + (r() - .5) * 90));
            cuts.push(plinth);
            cuts.sort(function (a, c) { return a - c; });

            for (let i = 0; i < cuts.length - 1; i++) {
                const y = cuts[i], h = cuts[i + 1] - cuts[i];
                if (h < 24) continue;
                panels += '<rect x="' + bx + '" y="' + y + '" width="' + bw + '" height="' + h +
                    '" fill="' + tones[Math.floor(r() * tones.length)] + '" stroke="' + stroke + '" stroke-width="1.6"/>';

                const kind = r();
                const ix = bx + 14, iw = bw - 28;
                if (iw < 30) continue;

                if (kind < .22 && h > 130) {
                    // Open shelving.
                    const shelves = 2 + Math.round(r() * 3);
                    for (let s2 = 1; s2 <= shelves; s2++) {
                        const sy = (y + (h / (shelves + 1)) * s2).toFixed(1);
                        detail += '<line x1="' + ix + '" y1="' + sy + '" x2="' + (ix + iw) + '" y2="' + sy +
                            '" stroke="' + stroke + '" stroke-width="1.5" opacity=".85"/>';
                    }
                } else if (kind < .40) {
                    // Continuous grip reveal along the top edge of a door.
                    detail += '<line x1="' + ix + '" y1="' + (y + 16) + '" x2="' + (ix + iw) + '" y2="' + (y + 16) +
                        '" stroke="' + stroke + '" stroke-width="3.4"/>';
                } else if (kind < .56 && h > 90) {
                    // Vertical slat / louvre field.
                    const step = 16 + Math.round(r() * 14);
                    for (let sx = ix; sx < ix + iw; sx += step) {
                        detail += '<line x1="' + sx + '" y1="' + (y + 10) + '" x2="' + sx + '" y2="' + (y + h - 10) +
                            '" stroke="' + stroke + '" stroke-width="1.3" opacity=".7"/>';
                    }
                } else if (kind < .68 && h > 110) {
                    // Recessed niche.
                    detail += '<rect x="' + (ix + 8) + '" y="' + (y + 18) + '" width="' + (iw - 16) + '" height="' + (h - 36) +
                        '" fill="rgba(0,0,0,.20)" stroke="' + stroke + '" stroke-width="1.4"/>';
                } else if (kind < .76 && h > 70) {
                    // Perforated acoustic panel.
                    for (let py = y + 22; py < y + h - 18; py += 22) {
                        for (let px = ix + 12; px < ix + iw - 8; px += 22) {
                            detail += '<circle cx="' + px + '" cy="' + py + '" r="2.4" fill="' + stroke + '" opacity=".5"/>';
                        }
                    }
                }
            }
        });

        // Grain, denser on the timber materials.
        let grain = '';
        const grainCount = grainy ? 190 : 70;
        for (let i = 0; i < grainCount; i++) {
            const gx = (r() * W).toFixed(1);
            const y1 = (r() * H * .6).toFixed(1);
            const y2 = (Number(y1) + 130 + r() * 460).toFixed(1);
            grain += '<line x1="' + gx + '" y1="' + y1 + '" x2="' + gx + '" y2="' + y2 +
                '" stroke="' + stroke + '" stroke-width="1" opacity="' + (.05 + r() * .11).toFixed(3) + '"/>';
        }

        return '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' +
            escapeAttr(pick(project.title)) + '" focusable="false">' +
            '<defs>' +
            '<linearGradient id="' + uid + '" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0" stop-color="' + mat.a + '"/><stop offset="1" stop-color="' + mat.b + '"/>' +
            '</linearGradient>' +
            '<linearGradient id="' + uid + 'v" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0" stop-color="rgba(0,0,0,.26)"/><stop offset=".5" stop-color="rgba(0,0,0,0)"/><stop offset="1" stop-color="rgba(0,0,0,.30)"/>' +
            '</linearGradient>' +
            '</defs>' +
            '<rect class="field" width="' + W + '" height="' + H + '" fill="url(#' + uid + ')"/>' +
            panels + detail + grain +
            '<rect x="0" y="' + plinth + '" width="' + W + '" height="' + (H - plinth) + '" fill="rgba(0,0,0,.30)"/>' +
            '<line x1="0" y1="' + plinth + '" x2="' + W + '" y2="' + plinth + '" stroke="' + stroke + '" stroke-width="2"/>' +
            '<rect width="' + W + '" height="' + H + '" fill="url(#' + uid + 'v)"/>' +
            '</svg>';
    }

    function escapeAttr(s) {
        return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    /* ------------------------------------------------------------ i18n --- */

    function applyLang(next) {
        lang = next;
        try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val) el.textContent = val;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const val = t(el.getAttribute('data-i18n-aria'));
            if (val) el.setAttribute('aria-label', val);
        });
        const titleKey = document.querySelector('title[data-i18n]');
        if (titleKey) document.title = t(titleKey.getAttribute('data-i18n'));

        document.querySelectorAll('.lang button').forEach(function (b) {
            b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
        });

        render();
    }

    /* -------------------------------------------------------- rendering --- */

    function projectCard(p, plateClass, extraClass) {
        return '<a class="proj ' + (extraClass || '') + '" href="project.html?id=' + p.id + '">' +
            '<div class="plate ' + (plateClass || 'plate-4x3') + '">' + elevation(p) +
            '<span class="plate-tag">' + escapeAttr(p.year) + '</span></div>' +
            '<div class="proj-meta">' +
            '<span class="proj-title">' + escapeAttr(pick(p.title)) + '</span>' +
            '<span class="proj-sub">' + escapeAttr(p.location) + '</span>' +
            '</div></a>';
    }

    function renderFeatured() {
        const host = document.getElementById('works-grid');
        if (!host) return;
        const featured = projectsData.filter(function (p) { return p.featured; }).slice(0, 6);
        const slots = ['w-a', 'w-b', 'w-c', 'w-d', 'w-e', 'w-f'];
        const ratios = ['plate-21x9', 'plate-3x4', 'plate-1x1', 'plate-4x3', 'plate-4x3', 'plate-3x4'];
        host.innerHTML = featured.map(function (p, i) {
            return projectCard(p, ratios[i % ratios.length], slots[i % slots.length] + ' reveal');
        }).join('');
    }

    function renderCapabilities() {
        const host = document.getElementById('caps-list');
        if (!host) return;
        host.innerHTML = capabilities.map(function (c) {
            return '<div class="cap reveal"><span class="cap-no">' + c.no + '</span>' +
                '<div class="cap-body"><h3>' + escapeAttr(pick(c.title)) + '</h3>' +
                '<p>' + escapeAttr(pick(c.text)) + '</p></div></div>';
        }).join('');
    }

    function renderBrands() {
        const host = document.getElementById('brands-grid');
        if (!host) return;
        host.innerHTML = brands.map(function (b) {
            return '<article class="brand reveal">' +
                '<span class="mono" style="color:var(--oak)">' + escapeAttr(pick(b.tag)) + '</span>' +
                '<h3 class="brand-name">' + escapeAttr(pick(b.name)) + '</h3>' +
                '<p>' + escapeAttr(pick(b.text)) + '</p></article>';
        }).join('');
    }

    function renderVacancies() {
        const host = document.getElementById('vacancy-list');
        if (!host) return;
        host.innerHTML = vacancies.map(function (v) {
            return '<a class="vacancy reveal" href="#contact">' +
                '<div><h3>' + escapeAttr(pick(v.title)) + '</h3>' +
                '<div class="mono">' + escapeAttr(pick(v.meta)) + '</div></div>' +
                '<span aria-hidden="true" style="font-family:\'JetBrains Mono\',monospace;font-size:.8rem">&#8599;</span>' +
                '</a>';
        }).join('');
    }

    /* -------------------------------------------------- project index --- */

    let activeSector = null;

    function renderIndex() {
        const host = document.getElementById('index-grid');
        if (!host) return;

        // First run: honour ?sector= so footer/deep links land pre-filtered.
        let firstRun = false;
        if (activeSector === null) {
            firstRun = true;
            const wanted = new URLSearchParams(location.search).get('sector');
            activeSector = sectors.some(function (s) { return s.id === wanted; }) ? wanted : 'all';
        }

        const bar = document.getElementById('filter-bar');
        if (bar) {
            bar.innerHTML = sectors.map(function (s) {
                return '<button class="filter" type="button" data-sector="' + s.id + '" aria-pressed="' +
                    (s.id === activeSector) + '">' + escapeAttr(s[lang] || s.nl) + '</button>';
            }).join('');
            bar.querySelectorAll('.filter').forEach(function (b) {
                b.addEventListener('click', function () {
                    if (activeSector === b.dataset.sector) return;
                    activeSector = b.dataset.sector;
                    renderIndex();
                });
            });
        }

        const list = projectsData.filter(function (p) {
            return activeSector === 'all' || p.sector === activeSector;
        });

        const count = document.getElementById('index-count');
        if (count) count.textContent = list.length + ' ' + t('index.count');

        host.innerHTML = list.length
            ? list.map(function (p) { return projectCard(p, 'plate-4x3', 'reveal-item'); }).join('')
            : '<p class="body-copy">' + escapeAttr(t('index.empty')) + '</p>';

        animateIndex(firstRun);
    }

    // First paint reveals on scroll; a filter change restaggers immediately.
    function animateIndex(onScroll) {
        const items = document.querySelectorAll('#index-grid .reveal-item');
        if (!items.length || !window.gsap || reduced()) return;

        if (onScroll && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            items.forEach(function (el, i) {
                gsap.fromTo(el, { opacity: 0, y: 30 }, {
                    opacity: 1, y: 0, duration: .85, ease: 'power3.out',
                    delay: (i % 3) * .06,
                    scrollTrigger: { trigger: el, start: 'top 90%', once: true }
                });
            });
            return;
        }

        gsap.fromTo(items, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .7, stagger: .045, ease: 'power3.out' });
    }

    /* ------------------------------------------------- project detail --- */

    function renderDetail() {
        const host = document.getElementById('detail');
        if (!host) return;

        const id = new URLSearchParams(location.search).get('id');
        const idx = projectsData.findIndex(function (p) { return p.id === id; });

        if (idx === -1) {
            host.innerHTML = '<div class="shell band"><h1 class="h2">' + escapeAttr(t('detail.notfound')) + '</h1>' +
                '<p style="margin-top:2rem"><a class="btn" href="projecten.html">' + escapeAttr(t('detail.notfoundcta')) + '</a></p></div>';
            return;
        }

        const p = projectsData[idx];
        const next = projectsData[(idx + 1) % projectsData.length];
        document.title = pick(p.title) + ' — Smeulders Interieurgroep';

        const specs = (p.specs || []).map(function (s) {
            return '<li><span class="k">' + escapeAttr(pick(s.k)) + '</span><span>' + escapeAttr(pick(s.v)) + '</span></li>';
        }).join('');

        const body = (pick(p.body) || []).map(function (par) {
            return '<p>' + escapeAttr(par) + '</p>';
        }).join('');

        host.innerHTML =
            '<div class="shell" style="padding-top:8.5rem">' +
                '<a class="link-arrow" href="projecten.html">' +
                    '<svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true" style="transform:rotate(180deg)"><path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" stroke-width="1.2"/></svg>' +
                    escapeAttr(t('detail.back')) +
                '</a>' +
                '<header style="margin-top:2.6rem">' +
                    '<span class="mono" style="color:var(--oak-deep)">' + escapeAttr(p.location) + ' &middot; ' + escapeAttr(p.year) + '</span>' +
                    '<h1 class="display" style="margin-top:1rem">' + escapeAttr(pick(p.title)) + '</h1>' +
                    '<p class="lede" style="margin-top:1.8rem;max-width:52ch">' + escapeAttr(pick(p.intro)) + '</p>' +
                '</header>' +
            '</div>' +
            '<div class="shell" style="margin-top:clamp(2.5rem,6vw,4.5rem)">' +
                '<div class="plate plate-21x9 reveal">' + elevation(p) + '</div>' +
            '</div>' +
            '<div class="shell band split">' +
                '<div class="reveal"><h2 class="mono" style="color:var(--stone);margin-bottom:1.4rem">' + escapeAttr(t('detail.specs')) + '</h2>' +
                    '<ul class="spec-list">' + specs + '</ul></div>' +
                '<div class="body-copy reveal" style="color:var(--ink);font-size:1.06rem">' + body + '</div>' +
            '</div>' +
            '<div class="shell" style="padding-bottom:clamp(4rem,8vw,7rem)">' +
                '<div class="split" style="align-items:end">' +
                    '<div class="reveal"><span class="mono" style="color:var(--stone)">' + escapeAttr(t('detail.next')) + '</span>' +
                        '<h2 class="h2" style="margin-top:.8rem"><a href="project.html?id=' + next.id + '">' + escapeAttr(pick(next.title)) + '</a></h2></div>' +
                    '<a class="proj reveal" href="project.html?id=' + next.id + '"><div class="plate plate-21x9">' + elevation(next) + '</div></a>' +
                '</div>' +
            '</div>';
    }

    function render() {
        renderFeatured();
        renderCapabilities();
        renderBrands();
        renderVacancies();
        renderIndex();
        renderDetail();
        renderHeroPlate();
        mountReveals();
    }

    function renderHeroPlate() {
        const host = document.getElementById('hero-plate');
        if (!host) return;
        const feature = projectsData.find(function (p) { return p.id === 'psv-executive-floor'; }) || projectsData[0];
        host.innerHTML = elevation(feature);
    }

    /* ----------------------------------------------------------- chrome --- */

    function reduced() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function initNav() {
        const nav = document.querySelector('.nav');
        const burger = document.querySelector('.burger');
        const drawer = document.querySelector('.drawer');

        if (nav) {
            const onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 24); };
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        if (burger && drawer) {
            burger.addEventListener('click', function () {
                const open = drawer.classList.toggle('is-open');
                burger.setAttribute('aria-expanded', String(open));
                document.body.style.overflow = open ? 'hidden' : '';
            });
            drawer.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', function () {
                    drawer.classList.remove('is-open');
                    burger.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                });
            });
        }

        document.querySelectorAll('.lang button').forEach(function (b) {
            b.addEventListener('click', function () { applyLang(b.dataset.lang); });
        });
    }

    function initMarquee() {
        document.querySelectorAll('.marquee-track').forEach(function (track) {
            if (track.dataset.cloned) return;
            track.dataset.cloned = '1';
            const clone = track.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.parentNode.appendChild(clone);
        });
    }

    function initMagnetic() {
        if (reduced() || !window.matchMedia('(pointer: fine)').matches) return;
        document.querySelectorAll('[data-magnetic]').forEach(function (el) {
            el.addEventListener('pointermove', function (e) {
                const r = el.getBoundingClientRect();
                const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
                const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
                el.style.transform = 'translate(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px)';
            });
            el.addEventListener('pointerleave', function () { el.style.transform = ''; });
        });
    }

    /* ---------------------------------------------------------- motion --- */

    let revealsMounted = new WeakSet();

    function mountReveals() {
        if (!window.gsap) return;
        if (!window.ScrollTrigger) return;
        gsap.registerPlugin(ScrollTrigger);

        if (reduced()) {
            gsap.set('.reveal', { opacity: 1, y: 0 });
            return;
        }

        document.querySelectorAll('.reveal').forEach(function (el) {
            if (revealsMounted.has(el)) return;
            revealsMounted.add(el);
            gsap.fromTo(el,
                { opacity: 0, y: 34 },
                {
                    opacity: 1, y: 0, duration: .95, ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
                });
        });

        ScrollTrigger.refresh();
    }

    function initCounters() {
        if (!window.gsap || !window.ScrollTrigger) return;
        document.querySelectorAll('[data-count]').forEach(function (el) {
            const target = parseFloat(el.dataset.count);
            if (isNaN(target)) return;
            if (reduced()) { el.textContent = target.toLocaleString('nl-NL'); return; }
            const obj = { v: 0 };
            gsap.to(obj, {
                v: target, duration: 1.9, ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 90%', once: true },
                onUpdate: function () { el.textContent = Math.round(obj.v).toLocaleString('nl-NL'); }
            });
        });
    }

    function initHero() {
        if (!window.gsap) return;
        const loader = document.getElementById('loader');
        const tl = gsap.timeline();

        if (loader) {
            if (reduced()) {
                loader.remove();
            } else {
                tl.to('#loader .bar', { width: '100%', duration: .85, ease: 'power2.inOut' })
                  .to('#loader .mark', { yPercent: -110, duration: .55, ease: 'power3.in' }, '-=.15')
                  .to(loader, {
                      yPercent: -100, duration: .8, ease: 'power3.inOut',
                      onComplete: function () { loader.remove(); ScrollTrigger && ScrollTrigger.refresh(); }
                  }, '-=.2');
            }
        }

        const lines = document.querySelectorAll('[data-hero-line]');
        if (lines.length && !reduced()) {
            tl.fromTo(lines, { yPercent: 115 }, { yPercent: 0, duration: 1.05, stagger: .08, ease: 'power4.out' }, '-=.35')
              .fromTo('[data-hero-fade]', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .8, stagger: .09, ease: 'power3.out' }, '-=.6')
              .fromTo('#hero-plate', { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.3, ease: 'power3.out' }, '-=1');
        }
    }

    /* ------------------------------------------------------------ boot --- */

    function boot() {
        initNav();
        applyLang(lang);
        initMarquee();
        initMagnetic();

        if (!window.gsap) {
            document.documentElement.classList.add('no-gsap');
            return;
        }
        initHero();
        initCounters();
        mountReveals();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            // GSAP is loaded with defer; give it the same tick.
            window.setTimeout(boot, 0);
        });
    } else {
        boot();
    }

    // Safety net: if GSAP never arrives, make sure nothing stays invisible.
    window.setTimeout(function () {
        if (!window.gsap) document.documentElement.classList.add('no-gsap');
    }, 2500);
})();
