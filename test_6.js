
        (() => {
            'use strict';
        /*  "= "=  Gallery data  "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "=  */
        const BASE = 'projects/assets/';

        window.GALLERIES = window.GALLERIES || {};
        const GALLERIES = window.GALLERIES;
        GALLERIES['miami-beach-condo'] = {
            title: 'S. Florida High Rise Luxe Condo',
            images: [
                BASE + 'miami-beach-cover.webp',
                ...Array.from({length:47}, (_,i) => BASE + 'miami-beach-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['high-alpine-ranch'] = {
            title: 'High Alpine Mtn. Ranch Luxe Retreat',
            images: [
                BASE + 'alpine-ranch-cover.webp',
                ...Array.from({length:12}, (_,i) => BASE + 'alpine-ranch-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['syracuse-house'] = {
            title: 'Syracuse House — N. Utah Craftsman Estate',
            images: [
                BASE + 'syracuse-cover.webp',
                ...Array.from({length:46}, (_,i) => BASE + 'syracuse-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['montana-condo'] = {
            title: 'Mtn. Mid-Rise Luxe Condo',
            images: [
                BASE + 'montana-cover.webp',
                ...Array.from({length:10}, (_,i) => BASE + 'montana-' + (i+1) + '.webp'),
                BASE + 'montana-11.jpg'
            ]
        };
        GALLERIES['hospitality-pool'] = {
            title: 'Ultra Luxe Private Club Resort Pool',
            images: [
                BASE + 'pool-design-cover.webp',
                BASE + 'pool-design-1.png',
                BASE + 'pool-design-2.png',
                BASE + 'pool-design-3.png',
                BASE + 'pool-design-4.png',
                BASE + 'pool-design-5.png',
                BASE + 'pool-design-6.png',
                BASE + 'pool-design-9.png',
                ...Array.from({length:28}, (_,i) => BASE + 'pool-design-' + (i+10) + '.webp'),
                BASE + 'hospitality-pool-1.webp'
            ]
        };
        GALLERIES['southcoast-remodel'] = {
            title: 'South Coast Renovation',
            images: [
                BASE + 'southcoast-cover.webp',
                ...Array.from({length:52}, (_,i) => BASE + 'southcoast-' + (i+2) + '.webp')
            ]
        };
        GALLERIES['carmel-valley-new'] = {
            title: 'Carmel Valley New Custom Residence',
            images: [
                BASE + 'carmel-valley-new-cover.webp',
                ...Array.from({length:4}, (_,i) => BASE + 'carmel-valley-new-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['north-florida-renovation'] = {
            title: 'North Florida Renovation & Addition',
            images: [
                BASE + 'north-florida-cover.webp',
                ...Array.from({length:14}, (_,i) => BASE + 'north-florida-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['bahamas-abaco-development'] = {
            title: 'Abaco Luxe Boat House',
            images: [
                BASE + 'abaco-luxe-boathouse-cover.webp',
                BASE + 'abaco-luxe-boathouse-1.webp'
            ]
        };
        GALLERIES['carmel-house-2'] = {
            title: 'Carmel Forest to Ocean View Custom Addition',
            images: [
                BASE + 'carmel-2-cover.webp',
                ...Array.from({length:5}, (_,i) => BASE + 'carmel-2-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['bigsur-mountain-remodel'] = {
            title: 'Coastal Mountain Residence — Civil Site Work',
            images: [
                BASE + 'bigsur-cover.webp',
                ...Array.from({length:15}, (_,i) => BASE + 'bigsur-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['carmel-knolls'] = {
            title: 'Carmel Knolls Remodel',
            images: [
                BASE + 'carmel-knolls-cover.webp',
                ...Array.from({length:25}, (_,i) => BASE + 'carmel-knolls-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['coastal-restoration'] = {
            title: 'Coastal Restoration — Erosion Repair',
            images: [
                BASE + 'coastal-restoration-cover.webp',
                ...Array.from({length:15}, (_,i) => BASE + 'coastal-restoration-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['bahamas-beachfront-estate'] = {
            title: 'Beachfront Estate Residence',
            images: Array.from({length:7}, (_,i) => BASE + 'beachfront-' + (i+1) + '.webp')
        };
        GALLERIES['development-civil'] = {
            title: 'Development Civil Construction',
            images: [
                BASE + 'civil-cover.webp',
                ...Array.from({length:21}, (_,i) => BASE + 'civil-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['pacific-grove-design-build'] = {
            title: 'New Residential Construction In Historic Neighborhood',
            images: [
                BASE + 'pg-cover.webp',
                ...Array.from({length:10}, (_,i) => BASE + 'pg-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['hillside-cleanup'] = {
            title: 'Hillside Restoration — Environmental Cleanup',
            images: [
                BASE + 'hillside-cleanup-cover.webp',
                ...Array.from({length:15}, (_,i) => BASE + 'hillside-cleanup-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['laguna-grande-design-build'] = {
            title: 'Laguna Grande — Spanish Revival Commercial',
            images: [
                BASE + 'laguna-grande-cover.webp',
                ...Array.from({length:6}, (_,i) => BASE + 'laguna-grande-' + (i+1) + '.webp')
            ]
        };
        GALLERIES['carmel-house-3'] = {
            title: 'Carmel House Remodel No.23',
            images: [
                BASE + 'carmel-3-cover.webp',
                ...Array.from({length:25}, (_,i) => BASE + 'carmel-3-' + (i+1) + '.webp')
            ]
        };

        /*  "= "=  State  "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "=  */
        let currentImages = [];
        let currentIndex  = 0;
        // Reuse single preload image instead of creating new ones
        const preloadImg  = new Image();
        const nextPreload = new Image();
        let pendingImageSrc = '';
        let imageLoadTimeoutId = null;
        let thumbObserver = null;
        const listeners   = []; // Track for cleanup

        /*  "= "=  Elements  "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "=  */
        const lb       = document.getElementById('lightbox');
        const lbImg    = document.getElementById('lb-img');
        const lbVideo  = document.getElementById('lb-video');
        const lbTitle  = document.getElementById('lb-title');
        const lbCtr    = document.getElementById('lb-counter');
        const lbThumbs = document.getElementById('lb-thumbs');
        const lbClose  = document.getElementById('lb-close');
        const lbPrev   = document.getElementById('lb-prev');
        const lbNext   = document.getElementById('lb-next');

        function isVideoSrc(src) {
            return /\.mp4($|\?)/i.test(src);
        }

        // Helper: attach and track listeners
        function on(el, event, handler, options = {}) {
            el.addEventListener(event, handler, options);
            listeners.push({ el, event, handler, options });
        }

        /*  "= "=  Open / close  "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "=  */
        let lastActiveTrigger = null; // Store trigger element for focus restoration

        function openLightbox(projectId) {
            const data = GALLERIES[projectId];
            if (!data) return;
            // Store the element that triggered the lightbox (for focus restoration)
            lastActiveTrigger = document.activeElement;
            currentImages = data.images;
            currentIndex  = 0;
            lbTitle.textContent = data.title;
            buildThumbs();
            showImage(0);
            lb.classList.add('open');
            document.body.style.overflow = 'hidden';
            lb.focus(); // Focus lightbox for keyboard navigation
        }

        function closeLightbox() {
            lb.classList.remove('open');
            document.body.style.overflow = '';
            lbImg.classList.remove('loaded');
            lbVideo.classList.remove('loaded');
            pendingImageSrc = '';
            if (imageLoadTimeoutId) {
                clearTimeout(imageLoadTimeoutId);
                imageLoadTimeoutId = null;
            }
            if (thumbObserver) {
                thumbObserver.disconnect();
            }
            lbImg.src = '';
            lbVideo.pause();
            lbVideo.removeAttribute('src');
            lbVideo.load();
            // Restore focus to the trigger element
            if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
                lastActiveTrigger.focus();
            }
        }

        /*  "= "=  Image display (optimized with single preload image)  "= "= "= "= "= "= "=  */
        function showImage(idx) {
            idx = (idx + currentImages.length) % currentImages.length;
            currentIndex = idx;
            lbCtr.textContent = ' \u2014 ' + (idx + 1) + ' / ' + currentImages.length;

            lbImg.classList.remove('loaded');
            lbVideo.classList.remove('loaded');
            const src = currentImages[idx];
            if (isVideoSrc(src)) {
                lbImg.style.display = 'none';
                lbVideo.style.display = 'block';
                lbVideo.src = src;
                lbVideo.load();
                lbVideo.classList.add('loaded');
                if (nextPreload) nextPreload.src = '';
            } else {
                lbVideo.pause();
                lbVideo.style.display = 'none';
                lbVideo.removeAttribute('src');
                lbImg.style.display = 'block';
                lbImg.alt = lbTitle.textContent + ' \u2014 image ' + (idx + 1);
                pendingImageSrc = src;

                if (imageLoadTimeoutId) {
                    clearTimeout(imageLoadTimeoutId);
                    imageLoadTimeoutId = null;
                }

                // Use single preload image, reuse it for loading check
                const handleLoad = () => {
                    if (pendingImageSrc !== src) return;
                    clearTimeout(imageLoadTimeoutId);
                    lbImg.src = src;
                    lbImg.classList.add('loaded');
                };
                const handleError = () => {
                    if (pendingImageSrc !== src) return;
                    clearTimeout(imageLoadTimeoutId);
                    // Gracefully handle load failure; display broken image rather than blocking
                    // console.warn(`Failed to load image: ${src}`);
                    lbImg.src = src; // Show broken image rather than nothing
                    lbImg.classList.add('loaded');
                };

                // Timeout safety for slow/failed loads
                imageLoadTimeoutId = setTimeout(() => {
                    if (pendingImageSrc !== src) return;
                    lbImg.src = src;
                    lbImg.classList.add('loaded');
                }, 3000);

                preloadImg.onload = handleLoad;
                preloadImg.onerror = handleError;
                preloadImg.src = src;

                // Preload next image (reusing single object)
                const nextSrc = currentImages[(idx + 1) % currentImages.length];
                nextPreload.src = '';
                if (!isVideoSrc(nextSrc)) {
                    nextPreload.src = nextSrc;
                }
            }

            // Sync thumbs
            const thumbEls = lbThumbs.querySelectorAll('.lb-thumb');
            thumbEls.forEach((t, i) => {
                t.classList.toggle('active', i === idx);
            });
            // Scroll active thumb into view
            if (thumbEls[idx]) {
                thumbEls[idx].scrollIntoView({block:'nearest', inline:'center', behavior:'smooth'});
            }
        }

        function navigate(dir) {
            showImage(currentIndex + dir);
        }

        /*  "= "=  Thumbnails  "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "=  */
        function buildThumbs() {
            lbThumbs.innerHTML = '';
            if (thumbObserver) {
                thumbObserver.disconnect();
            }
            if ('IntersectionObserver' in window) {
                thumbObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        const thumb = entry.target;
                        const src = thumb.getAttribute('data-src');
                        if (src && !thumb.getAttribute('src')) {
                            thumb.setAttribute('src', src);
                        }
                        observer.unobserve(thumb);
                    });
                }, { root: lbThumbs, rootMargin: '80px' });
            }

            currentImages.forEach((src, i) => {
                const thumb = isVideoSrc(src)
                    ? document.createElement('video')
                    : document.createElement('img');

                thumb.className = 'lb-thumb';
                thumb.setAttribute('data-src', src);

                if (isVideoSrc(src)) {
                    thumb.muted = true;
                    thumb.playsInline = true;
                    thumb.preload = 'none';
                    thumb.setAttribute('aria-label', 'Video thumbnail ' + (i + 1));
                } else {
                    thumb.alt = 'Thumbnail ' + (i + 1);
                    thumb.loading = 'lazy';
                    thumb.decoding = 'async';
                }

                thumb.addEventListener('click', () => showImage(i));
                lbThumbs.appendChild(thumb);

                if (i < 8 || !thumbObserver) {
                    thumb.setAttribute('src', src);
                } else {
                    thumbObserver.observe(thumb);
                }
            });
        }

        /*  "= "=  Event listeners  "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "= "=  */
        // Card clicks (delegated to avoid per-card listeners)
        on(document, 'click', (e) => {
            const card = e.target.closest('.portfolio-card[data-project]');
            if (!card) return;
            // The project modal handler marks matching clicks as handled.
            // Respect that to avoid opening two overlays at once.
            if (e.defaultPrevented) return;
            openLightbox(card.dataset.project);
        });

        on(lbClose, 'click', closeLightbox);
        on(lbPrev, 'click', (e) => { e.stopPropagation(); navigate(-1); });
        on(lbNext, 'click', (e) => { e.stopPropagation(); navigate(1); });

        // Click overlay to close (but not image itself)
        on(lb, 'click', (e) => {
            if (e.target === lb || e.target === document.getElementById('lb-img-wrap')) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        const handleKeydown = (e) => {
            if (!lb.classList.contains('open')) return;
            if (e.key === 'ArrowLeft')  navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'Escape')     closeLightbox();
        };
        on(document, 'keydown', handleKeydown);

        // Touch / swipe support
        let touchStartX = 0;
        on(lb, 'touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        }, { passive: true });
        on(lb, 'touchend', (e) => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1);
        }, { passive: true });

        // Cleanup function for SPA navigation
        window.lightboxCleanup = () => {
            listeners.forEach(({ el, event, handler, options }) => {
                el.removeEventListener(event, handler, options);
            });
            listeners.length = 0;
        };
    })();
    