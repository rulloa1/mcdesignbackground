
        (() => {
            'use strict';
            const hamburger = document.getElementById('nav-hamburger');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileLinks = mobileNav.querySelectorAll('a');
            const listeners = [];

            function closeMenu() {
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('open');
                document.body.style.overflow = '';
            }

            const toggleMenu = () => {
                const isOpen = mobileNav.classList.toggle('open');
                hamburger.classList.toggle('open', isOpen);
                hamburger.setAttribute('aria-expanded', String(isOpen));
                document.body.style.overflow = isOpen ? 'hidden' : '';
            };

            hamburger.addEventListener('click', toggleMenu);
            listeners.push({ el: hamburger, event: 'click', handler: toggleMenu });

            mobileLinks.forEach(l => {
                l.addEventListener('click', closeMenu);
                listeners.push({ el: l, event: 'click', handler: closeMenu });
            });

            // Cleanup function
            window.mobileNavCleanup = () => {
                listeners.forEach(({ el, event, handler }) => {
                    el.removeEventListener(event, handler);
                });
                listeners.length = 0;
            };
        })();
    