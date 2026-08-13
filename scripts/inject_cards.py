import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_cards = """
                <!-- 1. Bakers Bay Resort -->
                <div class="portfolio-card reveal" data-category="Owner's Representation" data-project="bakers-bay" style="cursor:pointer;">
                    <div class="portfolio-img-wrap">
                        <img src="projects/assets/miami-beach-cover.webp"
                            alt="Bakers Bay Resort" loading="lazy" decoding="async" />
                        <span class="portfolio-cat-badge">Owner's Representation</span>
                        <div class="portfolio-card-overlay">
                            <span class="portfolio-card-overlay-text">View Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                        </div>
                        <div class="portfolio-card-gold-line"></div>
                    </div>
                    <div class="portfolio-card-body">
                        <p class="portfolio-location">Bahamas</p>
                        <p class="portfolio-title">Bakers Bay Resort</p>
                        <p class="portfolio-subtitle">Luxury Resort Development</p>
                        <div class="portfolio-meta">
                            <span class="service-tag">Owner's Rep</span>
                            <span class="service-tag">Flagship</span>
                        </div>
                    </div>
                </div>

                <!-- 2. Yellowstone Club -->
                <div class="portfolio-card reveal" data-category="Owner's Representation" data-project="yellowstone-club" style="cursor:pointer;">
                    <div class="portfolio-img-wrap">
                        <img src="projects/assets/alpine-ranch-cover.webp"
                            alt="Yellowstone Club" loading="lazy" decoding="async" />
                        <span class="portfolio-cat-badge">Owner's Representation</span>
                        <div class="portfolio-card-overlay">
                            <span class="portfolio-card-overlay-text">View Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                        </div>
                        <div class="portfolio-card-gold-line"></div>
                    </div>
                    <div class="portfolio-card-body">
                        <p class="portfolio-location">Montana</p>
                        <p class="portfolio-title">Yellowstone Club</p>
                        <p class="portfolio-subtitle">Ultra-Luxury Alpine Community</p>
                        <div class="portfolio-meta">
                            <span class="service-tag">Owner's Rep</span>
                            <span class="service-tag">Flagship</span>
                        </div>
                    </div>
                </div>

                <!-- 3. Houston Oaks -->
                <div class="portfolio-card reveal" data-category="Owner's Representation" data-project="houston-oaks" style="cursor:pointer;">
                    <div class="portfolio-img-wrap">
                        <img src="projects/syracuse-cover.png"
                            alt="Houston Oaks" loading="lazy" decoding="async" />
                        <span class="portfolio-cat-badge">Owner's Representation</span>
                        <div class="portfolio-card-overlay">
                            <span class="portfolio-card-overlay-text">View Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                        </div>
                        <div class="portfolio-card-gold-line"></div>
                    </div>
                    <div class="portfolio-card-body">
                        <p class="portfolio-location">Texas</p>
                        <p class="portfolio-title">Houston Oaks</p>
                        <p class="portfolio-subtitle">Premium Country Club Estate</p>
                        <div class="portfolio-meta">
                            <span class="service-tag">Owner's Rep</span>
                            <span class="service-tag">Flagship</span>
                        </div>
                    </div>
                </div>

                <!-- 4. Mangrove Group Portfolio -->
                <div class="portfolio-card reveal" data-category="Owner's Representation" data-project="mangrove-group" style="cursor:pointer;">
                    <div class="portfolio-img-wrap">
                        <img src="projects/assets/miami-beach-1.webp"
                            alt="Mangrove Group Portfolio" loading="lazy" decoding="async" />
                        <span class="portfolio-cat-badge">Owner's Representation</span>
                        <div class="portfolio-card-overlay">
                            <span class="portfolio-card-overlay-text">View Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                        </div>
                        <div class="portfolio-card-gold-line"></div>
                    </div>
                    <div class="portfolio-card-body">
                        <p class="portfolio-location">Caribbean & Latin America</p>
                        <p class="portfolio-title">Mangrove Group Portfolio</p>
                        <p class="portfolio-subtitle">Luxury Development Portfolio</p>
                        <div class="portfolio-meta">
                            <span class="service-tag">Owner's Rep</span>
                            <span class="service-tag">Flagship</span>
                        </div>
                    </div>
                </div>

                <!-- 5. $125M Private Island Estate -->
                <div class="portfolio-card reveal" data-category="Owner's Representation" data-project="private-island" style="cursor:pointer;">
                    <div class="portfolio-img-wrap">
                        <img src="projects/assets/miami-beach-2.webp"
                            alt="$125M Private Island Estate" loading="lazy" decoding="async" />
                        <span class="portfolio-cat-badge">Owner's Representation</span>
                        <div class="portfolio-card-overlay">
                            <span class="portfolio-card-overlay-text">View Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3.5l4 3.5-4 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                        </div>
                        <div class="portfolio-card-gold-line"></div>
                    </div>
                    <div class="portfolio-card-body">
                        <p class="portfolio-location">Bahamas</p>
                        <p class="portfolio-title">$125M Private Island Estate</p>
                        <p class="portfolio-subtitle">Ultra-Luxury Private Island</p>
                        <div class="portfolio-meta">
                            <span class="service-tag">Owner's Rep</span>
                            <span class="service-tag">Flagship</span>
                        </div>
                    </div>
                </div>
"""

# Insert new_cards right before the first portfolio-card
first_card_idx = content.find('<div class="portfolio-card')
if first_card_idx != -1:
    content = content[:first_card_idx] + new_cards + content[first_card_idx:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Also update projects-data.js
with open('projects-data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

new_js = """
    {
        id: 'bakers-bay',
        title: 'Bakers Bay Resort',
        subtitle: 'Luxury Resort Development',
        category: 'owners-representation',
        location: 'Bahamas',
        role: "Chief Projects Officer & Owner's Rep",
        specs: 'Resort Portfolio',
        featured: true,
        coverImage: 'projects/assets/miami-beach-cover.webp',
        images: ['projects/assets/miami-beach-cover.webp']
    },
    {
        id: 'yellowstone-club',
        title: 'Yellowstone Club',
        subtitle: 'Ultra-Luxury Alpine Community',
        category: 'owners-representation',
        location: 'Montana',
        role: "Chief Projects Officer & Owner's Rep",
        specs: 'Alpine Community',
        featured: true,
        coverImage: 'projects/assets/alpine-ranch-cover.webp',
        images: ['projects/assets/alpine-ranch-cover.webp']
    },
    {
        id: 'houston-oaks',
        title: 'Houston Oaks',
        subtitle: 'Premium Country Club Estate',
        category: 'owners-representation',
        location: 'Texas',
        role: "Chief Projects Officer & Owner's Rep",
        specs: 'Country Club Portfolio',
        featured: true,
        coverImage: 'projects/syracuse-cover.png',
        images: ['projects/syracuse-cover.png']
    },
    {
        id: 'mangrove-group',
        title: 'Mangrove Group Portfolio',
        subtitle: 'Luxury Development Portfolio',
        category: 'owners-representation',
        location: 'Caribbean & Latin America',
        role: "Chief Projects Officer & Owner's Rep",
        specs: 'International Portfolio',
        featured: true,
        coverImage: 'projects/assets/miami-beach-1.webp',
        images: ['projects/assets/miami-beach-1.webp']
    },
    {
        id: 'private-island',
        title: '$125M Private Island Estate',
        subtitle: 'Ultra-Luxury Private Island',
        category: 'owners-representation',
        location: 'Bahamas',
        role: "Chief Projects Officer & Owner's Rep",
        specs: '$125M Estate',
        featured: true,
        coverImage: 'projects/assets/miami-beach-2.webp',
        images: ['projects/assets/miami-beach-2.webp']
    },
"""

js_idx = js_content.find('const projectsData = [')
if js_idx != -1:
    insert_pos = js_idx + len('const projectsData = [')
    js_content = js_content[:insert_pos] + new_js + js_content[insert_pos:]

with open('projects-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
