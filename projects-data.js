const projectsData = [
    {
        id: 'bakers-bay',
        title: 'Bakers Bay Resort',
        subtitle: 'Luxury Resort Development',
        category: 'owners-representation',
        location: 'Bahamas',
        role: "Discovery Land Company Project's Rep",
        specs: 'Resort Portfolio',
        featured: true,
        coverImage: 'projects/assets/bakers-bay-cover.png',
        images: ['projects/assets/bakers-bay-cover.png', 'projects/assets/bakers-bay-1.webp', 'projects/assets/bakers-bay-2.webp']
    },
    {
        id: 'yellowstone-club',
        title: 'Yellowstone Club',
        subtitle: 'Ultra-Luxury Alpine Community',
        category: 'owners-representation',
        location: 'Montana',
        role: "Project Management: Final Finish of Main Lodge Addition & Completion of Private Condos",
        specs: '550,000 sqft • Final Finish of Main Lodge & 48 Private Condos',
        featured: true,
        coverImage: 'projects/assets/yellowstone-club-cover.png',
        images: ['projects/assets/yellowstone-club-cover.png', 'projects/assets/alpine-ranch-1.webp']
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
        coverImage: 'projects/assets/houston-oaks-cover.png',
        images: ['projects/assets/houston-oaks-cover.png', 'projects/assets/montana-4.webp']
    },
    {
        id: 'miami-beach',
        title: 'S. Florida High Rise Luxe Condo',
        subtitle: 'High Rise Luxe Condo',
        category: 'residential-construction',
        location: 'S. Florida',
        role: 'Contractor Identification/Contract Negotiation/Project Management, Owner Representation, Property Management, International Furniture/Material/Art Receiving, Vehicle/Management/Procurement/Shipping',
        specs: '4,200 sqft • 4 months • 4 bed · 4 bath',
        description: "Over 4 months, we transformed a 4,200 sq ft condominium into a beachfront sanctuary of modern design. Utilizing the existing beautiful stone floors as a foundation for color and design, warmth was added through bespoke elements — including custom scalloped wood paneling with quarter-round ends on the built-ins in the living room, adding soft finishes throughout. Italian marble, integrated smart home technology from a millwork company specializing exclusively in the world's top prestigious hotels and resorts, and crafted bespoke millwork culminate in a chef's kitchen equipped with professional-grade appliances. All work was performed at the beginning of 2021, during the height of the pandemic, and suffered no delays because of world events — on point, on schedule, and on budget.",
        featured: true,
        coverImage: 'projects/assets/miami-beach-cover-enhanced.png',
        images: Array.from({length: 47}, (_, i) => `projects/assets/miami-beach-${i + 1}.webp`)
    },
    {
        id: 'alpine-ranch',
        title: 'High Alpine Mtn. Ranch Luxe Retreat',
        subtitle: 'Ranch Luxe Retreat',
        category: 'residential-construction',
        location: 'Montana',
        role: 'Owner Representation, Design Oversight, Contractor Procurement, Contract Negotiation, Project Management, Property Management',
        specs: '2,300 sqft • 24 months • 2 bed · 2 bath',
        description: "Nestled in the high-alpine region of Montana, this 2,300 sq ft luxury ranch was brought to life over 24 months. The experience blended modern mountain architecture with rustic charm, using exposed timber and custom stone masonry to complement the panoramic landscape. The residence features high-volume vaulted ceilings and floor-to-ceiling windows that dissolve the boundary between the interior and the breathtaking mountain views. A mix of radiant floor heating and a custom forced-air system maximize all efficiencies. A gourmet kitchen with natural stone countertops and custom millwork throughout ensure that comfort and elegance are felt in every corner. This home was designed and built to a new standard above all others.",
        notes: 'Custom Bronze Windows/Doors Crafted in Italy. Mix of radiant floor heating and custom forced-air system for maximum efficiency.',
        featured: true,
        coverImage: 'projects/assets/alpine-ranch-cover-enhanced.png',
        images: [
            'projects/assets/alpine-ranch-cover-enhanced.png',
            'projects/assets/alpine-ranch-cover.webp',
            ...Array.from({length: 12}, (_, i) => `projects/assets/alpine-ranch-${i + 1}.webp`)
        ]
    },
    {
        id: 'hospitality-pool',
        title: 'Ultra Luxe Private Club Resort Pool',
        subtitle: 'Resort Pool',
        category: 'hospitality',
        location: 'SE Texas',
        role: 'Owner Representation, Daily Project Management, Co-Design of Many Elements, Property Management',
        specs: '189,000 Gallon • 18 months',
        description: 'We orchestrated the creation of an ultra-luxury private club amenity, a project that demanded the coordination of over 15 specialty trades. The centerpiece is a beautiful free-form pool with a swim-up bar, complemented by a 1,200 sq ft pool house with interior design inspired by 1950s New York smoking clubs. The project features imported travertine, custom stonework, and 10-foot high solid mahogany wood walls and doors. This 18-month project delivered a resort-style oasis complete with professional landscaping, fire pits, and an outdoor kitchen, setting a new standard for private club luxury.',
        featured: false,
        coverImage: 'projects/assets/hospitality-pool-cover.jpg',
        images: [
            'projects/assets/hospitality-pool-cover.jpg',
            'projects/assets/hospitality-pool-1.webp',
            ...Array.from({length: 30}, (_, i) => `projects/assets/pool-design-${i + 1}.webp`)
        ]
    },
    {
        id: 'north-florida',
        title: 'North Florida Renovation/Addition',
        subtitle: 'Residential Addition',
        category: 'residential-construction',
        location: 'N. Florida',
        role: 'Designer (Manager/Oversight of Architects/Int. Design by others), Project Management, Owner Representative, Craftsmen-Contractor/Contract Coordination, Property Management',
        specs: '3,600 + 1,200 sqft • 10 months',
        description: 'We revitalized this 3,600 sq ft home with a 1,200 sq ft addition over a 10-month period. Our comprehensive approach included a new roof, impact windows, and updated electrical and plumbing systems. The interior was completely refreshed, and our estate management services ensured a seamless coordination of all trades. The result is a home that is not only more spacious and modern but also fortified and meticulously detailed.',
        featured: false,
        coverImage: 'projects/assets/north-florida-cover.jpg',
        images: Array.from({length: 14}, (_, i) => `projects/assets/nfl-${String(i + 1).padStart(3, '0')}.webp`)
    },
    {
        id: 'southcoast',
        title: 'South Coast Renovation',
        subtitle: 'Complete Coastal Remodel',
        category: 'design-build',
        location: 'Big Sur, CA',
        role: 'Design (Structure & Int. Design), Builder, Project Manager, Owner Representative, Property Manager',
        specs: '3,800 sqft • 16 months',
        featured: true,
        coverImage: 'projects/assets/southcoast-cover-enhanced.png',
        images: [
            'projects/assets/southcoast-cover-enhanced.png',
            'projects/assets/southcoast-cover.webp',
            ...Array.from({length: 52}, (_, i) => `projects/assets/southcoast-${i + 2}.webp`)
        ]
    },
    {
        id: 'bigsur-civil',
        title: 'Coastal Mountain Residence',
        subtitle: 'Civil Site Work',
        category: 'civil',
        location: 'Big Sur, CA',
        role: 'Owner Representative, Designer, Builder, Project Manager, Permit Procurement',
        specs: '11 months • 3,000 cu yds earth moved • 320 ln ft retaining walls',
        description: "Over 11 months, we reshaped a 1.2-acre mountain site in Big Sur, a project that required both heavy machinery and a delicate touch. We moved over 3,000 cubic yards of earth, constructed 320 linear feet of retaining walls, and built a 900 sq ft custom garage and workshop. Our work focused on erosion control and drainage systems, all while preserving the property's stunning ocean views and protecting the natural landscape.",
        featured: false,
        coverImage: 'projects/assets/bigsur-civil-cover.png',
        images: [
            'projects/assets/bigsur-civil-cover.png',
            'projects/assets/bigsur-cover.webp',
            ...Array.from({length: 15}, (_, i) => `projects/assets/bigsur-${i + 1}.webp`)
        ]
    },
    {
        id: 'carmel-knolls',
        title: 'Carmel Knolls',
        subtitle: 'More Than Lipstick on an Old Lady!',
        category: 'residential-construction',
        location: 'Carmel, CA',
        role: 'Designer, Int. Designer, Builder, Project Manager, Permit Procurement',
        specs: '2,200 sqft • 1,400 sqft decking • 12 months',
        description: 'This was more than a remodel; it was a complete transformation. Over 12 months, we took a 2,200 sq ft house and revitalized it from the ground up. The project included a new roofline, foundation repairs, 18 energy-efficient windows, and 1,400 sq ft of new composite decking. We also undertook extensive site work, including 200 linear feet of retaining walls and a complete landscape renovation, proving that with the right vision, any property can be reborn.',
        featured: false,
        coverImage: 'projects/assets/carmel-knolls-cover.jpg',
        images: Array.from({length: 10}, (_, i) => `projects/assets/carmel-knolls-${i + 1}.webp`)
    },
    {
        id: 'development-civil',
        title: 'Development Civil',
        subtitle: 'Project Management Development / Civil Engineering',
        category: 'civil',
        location: 'SE Texas',
        role: 'Civil Engineering Contractor/Builder',
        specs: '45 Acres • 120+ Home Sites • 36 months',
        description: 'Over 36 months, we executed a 45-acre master-planned residential development, laying the groundwork for a new community. This comprehensive project included infrastructure for over 120 home sites, 3.2 miles of roads, and complete utility installation. We also created 2 miles of walking trails and community amenities, all while adhering to environmental compliance measures and coordinating with multiple municipal agencies. This project was about more than construction; it was about building a neighborhood.',
        featured: false,
        coverImage: 'projects/assets/development-civil-cover.jpg',
        images: [
            'projects/assets/development-civil-cover.jpg',
            'projects/assets/development-cover.webp',
            'projects/assets/development-site.webp',
            'projects/assets/development-entrance-2.webp',
            ...Array.from({length: 10}, (_, i) => `projects/assets/development-${i + 1}.webp`)
        ]
    },
    {
        id: 'pacific-grove',
        title: 'New Residential Construction In Historic Neighborhood',
        subtitle: 'In Historic Neighborhood',
        category: 'design-build',
        location: 'Central Coast, CA',
        role: "Owner's Rep, Designer, Builder",
        specs: '2,600 sqft • 14 months',
        description: 'Building a new 2,600 sq ft home in a historic neighborhood required a delicate balance of tradition and modernity. Over 14 months, our design-build team navigated historic district guidelines to create a home that respects its context while offering contemporary comforts. The exterior features period-appropriate details like cedar shingle siding and covered porches, while the interior boasts an open floor plan and energy-efficient systems. This project is a bridge between past and present.',
        featured: false,
        coverImage: 'projects/assets/pacific-grove-cover.jpg',
        images: Array.from({length: 10}, (_, i) => `projects/assets/pg-${i + 1}.webp`)
    },
    {
        id: 'laguna-grande',
        title: 'Laguna Grande',
        subtitle: 'Spanish Revival Commercial',
        category: 'design-build',
        location: 'Seaside, CA',
        role: "Owner's Representative, Designer, Builder, Permit Procurement",
        specs: '12,000 sqft • 22 months',
        description: 'We brought the timeless beauty of Spanish Colonial Revival architecture to a new 12,000 sq ft commercial complex. This 22-month design-build project features authentic details like hand-formed clay roof tiles, custom ironwork, and arched colonnades. We balanced traditional aesthetics with the demands of modern commercial spaces, creating a complex that is both beautiful and functional, a landmark in its coastal location.',
        featured: false,
        coverImage: 'projects/assets/laguna-grande-2.webp',
        images: Array.from({length: 2}, (_, i) => `projects/assets/laguna-grande-${i + 1}.webp`)
    },
    {
        id: 'abaco-boathouse',
        title: 'Abaco Luxe Boat House',
        subtitle: 'Construction',
        category: 'residential-construction',
        location: 'Abaco, Bahamas',
        role: 'Project Manager in a Foreign Country for US Owners',
        specs: '1,800 sqft • 6 months',
        description: 'On the pristine shores of the Abaco Islands, we constructed an 1,800 sq ft luxury boat house in just six months. Built to withstand the Caribbean climate, this waterfront structure features hurricane-resistant construction and premium marine-grade finishes. Custom mahogany millwork and covered dock access provide a touch of elegance, creating a functional and beautiful gateway to the open water.',
        featured: false,
        coverImage: 'projects/assets/abaco-boathouse-cover.png',
        images: [
            'projects/assets/abaco-boathouse-cover.png',
            'projects/assets/abaco-luxe-boathouse-cover.webp',
            'projects/assets/abaco-luxe-boathouse-1.webp'
        ]
    },
    {
        id: 'coastal-restoration',
        title: 'Coastal Restoration',
        subtitle: 'Erosion Repair',
        category: 'civil',
        location: 'Monterey Peninsula, CA',
        role: 'Civil Engineering Contractor, Builder, Permit Procurement (Emergency Construction Permit to save the residence)',
        specs: '9 months • 2,500 cu yds earth moved • 180 ln ft retaining walls',
        description: 'Faced with a dramatically eroded coastal property, we undertook a nine-month restoration project to preserve this spectacular oceanfront site. We moved over 2,500 cubic yards of material, installed 180 linear feet of engineered retaining walls, and performed comprehensive foundation work. This project was a battle against the elements, a successful effort to stabilize and restore a piece of the California coastline for generations to come.',
        featured: false,
        coverImage: 'projects/assets/coastal-restoration-cover.jpg',
        images: Array.from({length: 15}, (_, i) => `projects/assets/coastal-restoration-${i + 1}.webp`)
    },
    {
        id: 'beachfront-estate',
        title: 'Beachfront Estate Abaco',
        subtitle: 'Residence',
        category: 'residential-construction',
        location: 'Abaco, Bahamas',
        role: 'Project Manager in Foreign Country for US Owners',
        specs: '6,800 sqft • 2.5 Acres • 180 ft beach frontage',
        description: 'We developed a 2.5-acre beachfront estate, creating a 6,800 sq ft main residence that embodies luxury Caribbean living. This premier property features 180 feet of private beach frontage and is fortified with Category 5 hurricane-resistant construction. The estate is a self-sufficient oasis, with an infinity pool, guest cottage, dock facilities, solar power backup, and rainwater collection systems. This is more than a home; it is a legacy property on the shores of the Atlantic.',
        featured: false,
        coverImage: 'projects/assets/beachfront-cover.webp',
        images: Array.from({length: 7}, (_, i) => `projects/assets/beachfront-${i + 1}.webp`)
    },
    {
        id: 'montana-condo',
        title: 'Mtn. Mid-Rise Luxe Condo',
        subtitle: 'Condo',
        category: 'residential-construction',
        location: 'Montana',
        role: 'Owner Representation, Project Management, Property Management',
        specs: '2,800 sqft • 8 months • New Build',
        description: 'In just eight months, this new 2,800 sq ft condo was completed as a sophisticated mountain retreat. The new build focused on creating a sanctuary of modern comfort, featuring spa-inspired bathrooms with heated floors and contemporary finishes throughout. The palette centers on Calacatta marble, warm wood accents, and refined brass fixtures — with fine marbles installed as full slabs for floor-to-ceiling wall finishes. The result is a space that perfectly balances modern living with the tranquility of a mountain setting.',
        featured: false,
        coverImage: 'projects/assets/montana-condo-cover.png',
        images: Array.from({length: 11}, (_, i) => `projects/assets/montana-${i + 1}.webp`)
    },
    {
        id: 'carmel-valley-new',
        title: 'Carmel Forest to Ocean View',
        subtitle: 'Custom Addition',
        category: 'residential-construction',
        location: 'Carmel By the Sea, CA',
        role: 'Designer, Builder, Project Manager',
        specs: '4,800 sqft • 20 months',
        description: 'This project is a celebration of its stunning location — a coastal home that harmonizes with the natural beauty of the Carmel coastline. Our focus was on refined craftsmanship and thoughtful design, creating a space that feels both luxurious and deeply connected to its environment. The result is a home that is more than a structure; it is a serene retreat.',
        featured: false,
        coverImage: 'projects/assets/carmel-valley-new-cover.png',
        images: [
            'projects/assets/carmel-valley-new-cover.png',
            'projects/assets/carmel-valley-new-2.webp',
            ...Array.from({length: 4}, (_, i) => `projects/assets/carmel-valley-new-${i + 1}.webp`)
        ]
    },
    {
        id: 'syracuse',
        title: 'Syracuse House',
        subtitle: 'N. Utah Craftsman Estate',
        category: 'design-build',
        location: 'N. Utah',
        role: 'Owner Representation, Project Management, Property Management',
        specs: '6,200 sqft • 18 months',
        description: "This 6,200 sq ft craftsman-style estate is a testament to our integrated design-build approach. Over 18 months, we orchestrated the creation of not just a home, but a complete two-acre landscape. The project's exterior is defined by over 400 tons of decorative stone, professional hardscaping, and dramatic low-voltage evening lighting. The design embraced drought-tolerant native plantings and elegant water features, creating a seamless transition between the built and natural environments. The separate 6-car garage and workshop built for antique restoration, and the two-horse stall barn with storage, rounded out this perfect home, estate, and equestrian property.",
        featured: false,
        coverImage: 'projects/assets/syracuse-cover.webp',
        images: [
            'projects/assets/syracuse-cover.webp',
            ...Array.from({length: 46}, (_, i) => `projects/assets/syracuse-${i + 1}.webp`)
        ]
    },
    {
        id: 'carmel-remodel-23',
        title: 'Carmel Remodel 2023',
        subtitle: 'Modern Coastal Update',
        category: 'residential-construction',
        location: 'Carmel, CA',
        role: 'Owner Rep & Construction Manager',
        specs: 'Modern Coastal Update',
        featured: false,
        coverImage: 'projects/assets/carmel-remodel-23-cover.webp',
        images: Array.from({length: 5}, (_, i) => `projects/assets/carmel-3-${i + 1}.webp`)
    },
    {
        id: 'hillside-restoration',
        title: 'Hillside Restoration & Environmental Cleanup',
        subtitle: 'Environmental Restoration',
        category: 'civil',
        location: 'Carmel, CA',
        role: 'Civil Engineering Contractor/Builder, Permit Procurement',
        specs: '4 months • 1.5 Acres • 80 Tons debris removed',
        description: "In just four months, we executed a critical environmental cleanup on a 1.5-acre hillside. We removed over 80 tons of debris, including abandoned vehicles and construction waste. We implemented erosion control measures, restored the native plant life with over 200 new specimens, and improved drainage systems. This project was about more than just cleaning up; it was about healing a piece of the natural landscape.",
        featured: false,
        coverImage: 'projects/assets/hillside-restoration-cover.jpg',
        images: ['projects/assets/hillside-restoration-cover.jpg']
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
