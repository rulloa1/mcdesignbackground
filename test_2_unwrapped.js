
            'use strict';

        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
        // PROJECT DATA STRUCTURE
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
        const projectsData = {
            'miami-beach-condo': {
                id: 'miami-beach-condo',
                title: 'High Rise Luxe Condo',
                category: 'Residential Construction',
                location: 'S. Florida',
                subtitle: 'Oceanfront Luxury Renovation',
                coverImage: 'projects/assets/miami-beach-cover.webp',
                description: 'I transformed a dated oceanfront unit into a sophisticated luxury residence. Premium finishes, smart home integration, and meticulous structural oversight&mdash;all completed in 5 months. The result: a modern oceanfront estate with panoramic views and uncompromising quality.',
                duration: '5 months',
                sqft: '4,200 sqft',
                bedrooms: '4',
                baths: '4',
                role: ['Complete project management', 'Design coordination', 'Final quality assurance and delivery'],
                gallery: [
                    'projects/assets/miami-beach-cover.webp'
                ]
            },
            'high-alpine-ranch': {
                id: 'high-alpine-ranch',
                title: 'High Alpine Mtn.',
                category: 'Residential Construction',
                location: 'Montana',
                subtitle: 'Ranch Luxe Retreat',
                coverImage: 'projects/assets/alpine-ranch-cover.webp',
                description: 'I led this 24-month mountain retreat project through extreme conditions and challenging terrain. 2,300 square feet of luxury living with specialized engineering for alpine weather, premium finishes, and seamless landscape integration. The result: a high-performance retreat built to endure decades.',
                duration: '24 months',
                sqft: '2,300 sqft',
                bedrooms: '5',
                baths: '2',
                role: ['End-to-end project leadership', 'Site analysis', 'Structural engineering coordination', 'Specialized weather-adaptive construction'],
                gallery: [
                    'projects/assets/alpine-ranch-cover.webp',
                    'projects/assets/alpine-ranch-1.webp',
                    'projects/assets/alpine-ranch-2.webp'
                ]
            },
            'syracuse-house': {
                id: 'syracuse-house',
                title: 'Syracuse House',
                category: 'Design Build',
                location: 'N. Utah',
                subtitle: 'N. Utah Craftsman Estate',
                coverImage: 'projects/syracuse-cover.png',
                description: 'I delivered this 6,200 sq ft craftsman estate as a complete design-build project in 18 months. Blending timeless design principles with modern systems&mdash;custom millwork, natural stone, and integrated smart home technology. The result: a refined estate built to perform for generations.',
                duration: '18 months',
                sqft: '6,200 sqft',
                role: ['Complete design-build leadership', 'Aligning architectural vision', 'Flawless execution'],
                gallery: [
                    'projects/syracuse-cover.png'
                ]
            },
            'montana-condo': {
                id: 'montana-condo',
                title: 'Mtn. Mid-Rise Luxe',
                category: 'Residential Construction',
                location: 'Montana',
                subtitle: 'Condo',
                coverImage: 'projects/assets/montana-cover.webp',
                description: 'A mid-rise luxury condominium featuring 2,800 square feet of premium living space. Completed in 8 months, this project showcases modern architecture with high-end finishes and mountain views.',
                duration: '8 months',
                sqft: '2,800 sqft',
                role: ['Construction oversight', 'Quality management', 'Mid-rise residential development'],
                gallery: [
                    'projects/assets/montana-cover.webp'
                ]
            },
            'hospitality-pool': {
                id: 'hospitality-pool',
                title: 'Ultra Luxe Private Club',
                category: 'Hospitality',
                location: 'SE Texas',
                subtitle: 'Resort Pool',
                coverImage: 'projects/hospitality-pool-cover-v2.jpg',
                description: 'I engineered and executed an ultra-luxury resort pool complex&mdash;189,000 gallons of custom-designed waterscapes completed in 18 months. Advanced filtration systems, premium landscaping, and resort amenities&mdash;all operating flawlessly. A destination asset built to last.',
                duration: '18 months',
                gallons: '189,000 gal',
                role: ['Complete hospitality project leadership', 'Pool engineering', 'Amenity coordination', 'Luxury execution standards'],
                gallery: [
                    'projects/hospitality-pool-cover-v2.jpg'
                ]
            },
            'southcoast-remodel': {
                id: 'southcoast-remodel',
                title: 'South Coast Renovation',
                category: 'Design Build',
                location: 'California',
                subtitle: 'Coastal Estate Redesign',
                coverImage: 'projects/assets/southcoast-cover.webp',
                description: 'A comprehensive coastal estate renovation combining historic preservation with modern luxury. This 16-month design-build project respects the home\'s architectural heritage while introducing contemporary comforts.',
                duration: '16 months',
                role: ['Design-build coordination', 'Historic preservation', 'Luxury modernization'],
                gallery: [
                    'projects/assets/southcoast-cover.webp'
                ]
            },
            'carmel-valley-new': {
                id: 'carmel-valley-new',
                title: 'Carmel Valley New',
                category: 'Design Build',
                location: 'California',
                subtitle: 'Custom Residence',
                coverImage: 'projects/assets/carmel-valley-new-cover.webp',
                description: 'A custom-designed residence in prestigious Carmel Valley. This 20-month design-build project features luxury finishes, smart home integration, and seamless indoor-outdoor living spaces.',
                duration: '20 months',
                role: ['Complete design-build management', 'Land analysis', 'Final delivery'],
                gallery: [
                    'projects/assets/carmel-valley-new-cover.webp'
                ]
            },
            'north-florida-renovation': {
                id: 'north-florida-renovation',
                title: 'North Florida Renovation',
                category: 'Residential Construction',
                location: 'Florida',
                subtitle: 'Addition & Modernization',
                coverImage: 'projects/north-florida/NIMG_9178.jpg',
                description: 'A 10-month renovation and addition project modernizing a North Florida residence. Features include expanded living spaces, updated systems, and contemporary finishes.',
                duration: '10 months',
                role: ['Renovation management', 'Structural assessment', 'Addition design coordination', 'System upgrades'],
                gallery: [
                    'projects/north-florida/NIMG_9178.jpg'
                ]
            },
            'bahamas-abaco-development': {
                id: 'bahamas-abaco-development',
                title: 'Abaco Luxe Boat House',
                category: 'Residential Construction',
                location: 'Bahamas',
                subtitle: 'Island Estate',
                coverImage: 'projects/assets/abaco-luxe-boathouse-cover.webp',
                description: 'A luxury island boat house in the Bahamas featuring waterfront living at its finest. This project required specialized expertise in tropical construction and marine integration.',
                duration: 'Custom Timeline',
                role: ['Island development project management', 'Environmental compliance', 'Marine integration'],
                gallery: [
                    'projects/assets/abaco-luxe-boathouse-cover.webp'
                ]
            },
            'carmel-house-2': {
                id: 'carmel-house-2',
                title: 'Carmel Estate II',
                category: 'Residential Construction',
                location: 'California',
                subtitle: 'Luxury Residence',
                coverImage: 'projects/assets/carmel-2-cover.webp',
                description: 'A luxury residence in Carmel featuring contemporary design and premium finishes. This project showcases sophisticated architectural detailing and high-end construction quality.',
                duration: 'Custom Timeline',
                role: ['Construction management', 'Luxury residential development'],
                gallery: [
                    'projects/assets/carmel-2-cover.webp'
                ]
            },
            'bigsur-mountain-remodel': {
                id: 'bigsur-mountain-remodel',
                title: 'Big Sur Mountain Remodel',
                category: 'Civil',
                location: 'California',
                subtitle: 'Structural Enhancement',
                coverImage: 'projects/assets/bigsur-cover.webp',
                description: 'A specialized mountain remodeling project navigating Big Sur\'s challenging terrain and environmental regulations. This civil project required expert foundation work and structural engineering.',
                duration: 'Custom Timeline',
                role: ['Civil engineering', 'Foundation management', 'Mountain terrain adaptation'],
                gallery: [
                    'projects/assets/bigsur-cover.webp',
                    'projects/assets/bigsur-1.webp'
                ]
            },
            'carmel-knolls': {
                id: 'carmel-knolls',
                title: 'Carmel Knolls',
                category: 'Civil',
                location: 'California',
                subtitle: 'Development Project',
                coverImage: 'projects/carmel-knolls/001.10%20COVER.jpg',
                description: 'A civil development project in the Carmel Knolls area featuring site preparation, foundation work, and infrastructure development.',
                duration: 'Custom Timeline',
                role: ['Civil project coordination', 'Site analysis', 'Development management'],
                gallery: [
                    'projects/carmel-knolls/001.10%20COVER.jpg'
                ]
            },
            'coastal-restoration': {
                id: 'coastal-restoration',
                title: 'Coastal Restoration',
                category: 'Civil',
                location: 'California',
                subtitle: 'Environmental Preservation',
                coverImage: 'projects/coastal-restoration/001%20COVER.JPG',
                description: 'A specialized coastal restoration project addressing environmental preservation and structural integrity. This complex civil project required environmental compliance and precise engineering.',
                duration: 'Custom Timeline',
                role: ['Environmental project management', 'Coastal engineering oversight'],
                gallery: [
                    'projects/coastal-restoration/001%20COVER.JPG'
                ]
            },
            'bahamas-beachfront-estate': {
                id: 'bahamas-beachfront-estate',
                title: 'Bahamas Beachfront Estate',
                category: 'Residential Development',
                location: 'Bahamas',
                subtitle: 'Premier Island Development',
                coverImage: 'projects/assets/beachfront-1.webp',
                description: 'A premier beachfront estate development in the Bahamas featuring luxury residences with direct beach access. This major development project combined landscape design with structural excellence.',
                duration: 'Custom Timeline',
                role: ['Large-scale development project management', 'Master planning', 'Infrastructure coordination'],
                gallery: [
                    'projects/assets/beachfront-1.webp',
                    'projects/assets/beachfront-2.webp'
                ]
            },
            'development-civil': {
                id: 'development-civil',
                title: 'Development Civil Project',
                category: 'Residential Development',
                location: 'Multi-State',
                subtitle: 'Infrastructure Development',
                coverImage: 'projects/development-civil/development%20(1).jpg',
                description: 'A comprehensive civil development project handling infrastructure, site preparation, and master planning for residential development.',
                duration: 'Custom Timeline',
                role: ['Development and civil coordination', 'Multi-phase management'],
                gallery: [
                    'projects/development-civil/development%20(1).jpg'
                ]
            },
            'pacific-grove-design-build': {
                id: 'pacific-grove-design-build',
                title: 'Pacific Grove Design Build',
                category: 'Design Build',
                location: 'California',
                subtitle: 'Coastal Residence',
                coverImage: 'projects/pacific-grove/001%20COVER.JPG',
                description: 'A design-build project in Pacific Grove featuring coastal luxury with environmental sensitivity. This project balanced aesthetic design with structural resilience.',
                duration: 'Custom Timeline',
                role: ['Coastal design-build management', 'Concept development', 'Completion execution'],
                gallery: [
                    'projects/pacific-grove/001%20COVER.JPG'
                ]
            },
            'hillside-cleanup': {
                id: 'hillside-cleanup',
                title: 'Hillside Cleanup & Stabilization',
                category: 'Civil',
                location: 'California',
                subtitle: 'Site Remediation',
                coverImage: 'projects/hillside-cleanup/001%20COVER.jpg',
                description: 'A specialized civil project focusing on hillside remediation, stabilization, and environmental cleanup. This project required careful site assessment and engineering solutions.',
                duration: 'Custom Timeline',
                role: ['Civil engineering', 'Site remediation management'],
                gallery: [
                    'projects/hillside-cleanup/001%20COVER.jpg'
                ]
            },
            'laguna-grande-design-build': {
                id: 'laguna-grande-design-build',
                title: 'Laguna Grande Design Build',
                category: 'Design Build',
                location: 'California',
                subtitle: 'Luxury Estate',
                coverImage: 'projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_001_COVER.png',
                description: 'A luxury design-build estate in Laguna Grande featuring premium materials, sophisticated design, and high-end construction excellence.',
                duration: 'Custom Timeline',
                role: ['Full design-build management', 'Luxury estate development'],
                gallery: [
                    'projects/laguna-grande/6.0%20Laguna%20Grande%20Design%20Build_001_COVER.png'
                ]
            },
            'carmel-house-3': {
                id: 'carmel-house-3',
                title: 'Carmel Estate III',
                category: 'Residential Construction',
                location: 'California',
                subtitle: 'Premium Residence',
                coverImage: 'projects/assets/carmel-3-cover.webp',
                description: 'Another distinguished Carmel residence project showcasing premium construction quality and sophisticated architectural detailing.',
                duration: 'Custom Timeline',
                role: ['Construction management', 'Luxury residential property'],
                gallery: [
                    'projects/assets/carmel-3-cover.webp'
                ]
            }
        };

        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
        // MODAL MANAGEMENT
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
        let currentProjectId = null;
        let currentImageIndex = 0;

        function openProjectModal(projectId) {
            const project = projectsData[projectId];
            if (!project) return;
            const primaryVideo = project.gallery.find((item) => /\.mp4($|\?)/i.test(item));

            currentProjectId = projectId;
            currentImageIndex = 0;

            // Create modal HTML
            let modalHtml = `
                <div id="project-modal-overlay" class="project-modal-overlay">
                    <div class="project-modal-content">
                        <!-- Close Button -->
                        <button class="project-modal-close" aria-label="Close project details">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <!-- Hero Section -->
                        <div class="project-modal-hero">
                            <img src="${project.coverImage}" alt="${project.title}" class="project-modal-hero-img" />
                            <div class="project-modal-hero-overlay">
                                <div class="project-modal-hero-content">
                                    <p class="project-modal-category">${project.category}</p>
                                    <h1 class="project-modal-title">${project.title}</h1>
                                    <p class="project-modal-subtitle">${project.subtitle}</p>
                                    <p class="project-modal-location">${project.location}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Content Wrapper -->
                        <div class="project-modal-body">
                            <div class="project-modal-grid">
                                <!-- Main Content -->
                                <div class="project-modal-main">
                                    <h2 class="project-modal-section-title">Project Overview</h2>
                                    <p class="project-modal-description">${project.description}</p>

                                    ${project.role ? `
                                        <div class="project-modal-role-box">
                                            <h3 class="project-modal-role-title">My Role</h3>
                                            <ul class="project-modal-role-text role-list">
                                                ${Array.isArray(project.role) ? project.role.map(r => `<li>${r}</li>`).join('') : `<li>${project.role}</li>`}
                                            </ul>
                                        </div>
                                    ` : ''}
                                </div>

                                <!-- Sidebar Stats -->
                                <div class="project-modal-sidebar">
                                    <h3 class="project-modal-sidebar-title">Project Details</h3>
                                    <div class="project-modal-stats">
                                        ${project.duration ? `
                                            <div class="project-modal-stat">
                                                <svg class="project-modal-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <div>
                                                    <p class="project-modal-stat-label">Duration</p>
                                                    <p class="project-modal-stat-value">${project.duration}</p>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${project.sqft ? `
                                            <div class="project-modal-stat">
                                                <svg class="project-modal-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M21 21H3V3h18v18zm-6-6h-6v6h6v-6zm0-6h-6v6h6V9zm0-6h-6v6h6V3z"></path>
                                                </svg>
                                                <div>
                                                    <p class="project-modal-stat-label">Square Footage</p>
                                                    <p class="project-modal-stat-value">${project.sqft}</p>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${project.gallons ? `
                                            <div class="project-modal-stat">
                                                <svg class="project-modal-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                                </svg>
                                                <div>
                                                    <p class="project-modal-stat-label">Gallons</p>
                                                    <p class="project-modal-stat-value">${project.gallons}</p>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${project.bedrooms ? `
                                            <div class="project-modal-stat">
                                                <svg class="project-modal-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path>
                                                    <rect x="3" y="7" width="18" height="11"></rect>
                                                </svg>
                                                <div>
                                                    <p class="project-modal-stat-label">Bedrooms</p>
                                                    <p class="project-modal-stat-value">${project.bedrooms}</p>
                                                </div>
                                            </div>
                                        ` : ''}
                                        ${project.baths ? `
                                            <div class="project-modal-stat">
                                                <svg class="project-modal-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M4 9h16M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"></path>
                                                    <rect x="7" y="2" width="10" height="5" rx="1"></rect>
                                                </svg>
                                                <div>
                                                    <p class="project-modal-stat-label">Bathrooms</p>
                                                    <p class="project-modal-stat-value">${project.baths}</p>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                    ${primaryVideo ? `
                                        <div class="project-modal-video-callout">
                                            <p class="project-modal-video-label">Timelapse</p>
                                            <button class="project-modal-video-btn" type="button" data-video-src="${primaryVideo}">Play Timelapse Video</button>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>

                            <!-- Gallery Section -->
                            ${(() => {
                                const galleryImages = (window.GALLERIES && window.GALLERIES[projectId])
                                    ? window.GALLERIES[projectId].images
                                    : project.gallery;
                                return galleryImages.length > 0 ? `
                                <div class="project-modal-gallery-section">
                                    <h2 class="project-modal-section-title">Gallery</h2>
                                    <div class="project-modal-gallery">
                                        ${galleryImages.map((media, idx) => {
                                            const isVideo = /\.mp4($|\?)/i.test(media);
                                            if (isVideo) {
                                                return `
                                                    <video class="project-modal-gallery-img" data-index="${idx}" data-src="${media}" src="${media}" muted playsinline controls preload="metadata" poster="${project.coverImage}" aria-label="${project.title} video ${idx + 1}"></video>
                                                `;
                                            }
                                            return `<img src="${media}" alt="${project.title} image ${idx + 1}" class="project-modal-gallery-img" data-index="${idx}" data-src="${media}" loading="lazy" decoding="async" fetchpriority="low" />`;
                                        }).join('')}
                                    </div>
                                </div>
                                ` : '';
                            })()}
                        </div>
                    </div>
                </div>
            `;

            // Insert modal
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            // Prevent scroll
            document.body.style.overflow = 'hidden';

            // Add delegated modal event listeners
            const modal = document.getElementById('project-modal-overlay');
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.closest('.project-modal-close')) {
                    closeProjectModal();
                    return;
                }

                const videoBtn = e.target.closest('.project-modal-video-btn');
                if (videoBtn) {
                    const source = videoBtn.getAttribute('data-video-src');
                    if (source) openImageLightbox(source, 'video');
                    return;
                }

                const galleryMedia = e.target.closest('.project-modal-gallery-img');
                if (galleryMedia) {
                    const source = galleryMedia.getAttribute('data-src') || galleryMedia.currentSrc || galleryMedia.src;
                    const mediaType = /\.mp4($|\?)/i.test(source) ? 'video' : 'image';
                    openImageLightbox(source, mediaType);
                }
            });

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function closeProjectModal() {
            const modal = document.getElementById('project-modal-overlay');
            if (modal) {
                modal.style.opacity = '0';
                modal.style.pointerEvents = 'none';
                setTimeout(() => modal.remove(), 300);
            }
            document.body.style.overflow = '';
        }

        function openImageLightbox(mediaSrc, mediaType = 'image') {
            const mediaMarkup = mediaType === 'video'
                ? `<video src="${mediaSrc}" class="project-lightbox-img" controls autoplay playsinline></video>`
                : `<img src="${mediaSrc}" alt="Full size image" class="project-lightbox-img" />`;

            let lightboxHtml = `
                <div id="project-lightbox" class="project-lightbox">
                    <button class="project-lightbox-close" aria-label="Close lightbox">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    ${mediaMarkup}
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', lightboxHtml);

            const lightbox = document.getElementById('project-lightbox');
            const closeBtn = lightbox.querySelector('.project-lightbox-close');

            closeBtn.addEventListener('click', () => {
                lightbox.style.opacity = '0';
                setTimeout(() => lightbox.remove(), 300);
            });

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.opacity = '0';
                    setTimeout(() => lightbox.remove(), 300);
                }
            });
        }

        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
        // PORTFOLIO CARD CLICK HANDLERS
        //  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.portfolio-card, .selected-work');
            if (!card) return;

            const projectId = card.getAttribute('data-project');
            if (!projectId) return;

            e.preventDefault();
            openProjectModal(projectId);
        });

    