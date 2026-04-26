// Complete project database for Michael Chandler portfolio
// NOTE: Owner's Rep projects reuse other project images as placeholders
// until dedicated photography is available.
const projectsData = [
    {
        id: 'bakers-bay',
        title: 'Bakers Bay Resort',
        subtitle: 'Luxury Resort Development',
        category: 'owners-representation',
        location: 'Bahamas',
        role: 'Discovery Land Company Project's Rep",
        specs: 'Resort Portfolio',
        featured: true,
        coverImage: 'projects/assets/bakers-bay-1.webp',
        images: ['projects/assets/bakers-bay-1.webp', 'projects/assets/bakers-bay-2.webp']
    },
    {
        id: 'yellowstone-club',
        title: 'Yellowstone Club',
        subtitle: 'Ultra-Luxury Alpine Community',
        category: 'owners-representation',
        location: 'Montana',
        role: 'Project Management: Final Finish of Main Lodge Addition & Completion of 48 Private Condos's Rep",
        specs: '550,000 sqft • Incl. Underground Parking, Retail/Rest/Spa, 3 Floors of Private Condos',
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
        role: 'Concept Design & Feasibility Study for Land Development, Utilities & Logistics's Rep",
        specs: '$125M Estate',
        featured: true,
        coverImage: 'projects/assets/miami-beach-2.webp',
        images: ['projects/assets/miami-beach-2.webp']
    },

    {
        id: 'miami-beach',
        title: 'S. Florida High Rise Luxe Condo',
        subtitle: 'Oceanfront Luxury Renovation',
        category: 'residential-construction',
        location: 'Miami Beach, FL',
        role: 'Design (Co-Design Structure/Int. Design by others), Project Management, Owner Representative, Craftsmen-Contractor Coordination, Property Management',
        specs: '4,200 sqft • 5 months • 4 bed · 4 bath',
        featured: true,
        coverImage: 'projects/assets/miami-beach-cover.webp',
        images: Array.from({length: 47}, (_, i) => `projects/assets/miami-beach-${i + 1}.webp`)
    },
    {
        id: 'alpine-ranch',
        title: 'High Alpine Mtn. Ranch Luxe Retreat',
        subtitle: 'Mountain Ranch Estate',
        category: 'residential-construction',
        location: 'Montana',
        role: 'Design-Build Lead & Construction Manager',
        specs: '2,300 sqft • 24 months • 5 bed · 2 bath',
        featured: true,
        coverImage: 'projects/assets/alpine-ranch-cover.webp',
        images: Array.from({length: 12}, (_, i) => `projects/assets/alpine-ranch-${i + 1}.webp`)
    },
    {
        id: 'syracuse',
        title: 'Syracuse House',
        subtitle: 'N. Utah Craftsman Estate',
        category: 'design-build',
        location: 'Syracuse, UT',
        role: 'Design-Build Executive & General Contractor',
        specs: '6,200 sqft • 18 months',
        featured: false,
        coverImage: 'projects/syracuse-cover.png',
        images: Array.from({length: 46}, (_, i) => `projects/assets/syracuse-${i + 1}.webp`)
    },
    {
        id: 'montana-condo',
        title: 'Mtn. Mid-Rise Luxe Condo',
        subtitle: 'Mountain Luxury Condo',
        category: 'residential-construction',
        location: 'Montana',
        role: 'General Contractor',
        specs: '2,800 sqft • 8 months',
        featured: false,
        coverImage: 'projects/assets/montana-cover.webp',
        images: [
            'projects/assets/montana-cover.webp',
            ...Array.from({length: 10}, (_, i) => `projects/assets/montana-${i + 1}.webp`),
            'projects/assets/montana-11.jpg'
        ]
    },
    {
        id: 'hospitality-pool',
        title: 'Ultra Luxe Private Club Resort Pool',
        subtitle: 'Resort Pool Construction',
        category: 'hospitality',
        location: 'SE Texas',
        role: 'Construction Manager & Civil Engineering Lead',
        specs: '189,000 gal • 18 months',
        featured: false,
        coverImage: 'projects/hospitality-pool-cover-v2.jpg',
        images: [
            'projects/hospitality-pool-cover-v2.jpg',
            'projects/assets/hospitality-pool-1.webp',
            'projects/assets/pool-design-1.png',
            'projects/assets/pool-design-2.png',
            'projects/assets/pool-design-3.png',
            'projects/assets/pool-design-4.png',
            'projects/assets/pool-design-5.png',
            'projects/assets/pool-design-6.png',
            'projects/assets/pool-design-9.png',
            ...Array.from({length: 28}, (_, i) => `projects/assets/pool-design-${i + 10}.webp`)
        ]
    },
    {
        id: 'southcoast',
        title: 'South Coast Renovation',
        subtitle: 'Complete Coastal Remodel',
        category: 'design-build',
        location: 'Big Sur, CA',
        role: 'Design (Structure & Int. Design), Builder, Project Manager, Owner Representative',
        specs: '3,800 sqft • 16 months',
        featured: false,
        coverImage: 'projects/assets/southcoast-cover.webp',
        images: [
            'projects/assets/southcoast-cover.webp',
            ...Array.from({length: 52}, (_, i) => `projects/assets/southcoast-${i + 2}.webp`)
        ]
    },
    {
        id: 'carmel-valley-new',
        title: 'Carmel Valley New Construction',
        subtitle: 'Custom Residence',
        category: 'design-build',
        location: 'Carmel Valley, CA',
        role: 'Designer (Structure), Builder',
        specs: '4,800 sqft • 20 months',
        featured: false,
        coverImage: 'projects/assets/carmel-valley-new-cover.webp',
        images: Array.from({length: 4}, (_, i) => `projects/assets/carmel-valley-new-${i + 1}.webp`)
    },
    {
        id: 'north-florida',
        title: 'North Florida Renovation/Addition',
        subtitle: 'Residential Addition',
        category: 'residential-construction',
        location: 'N. Florida',
        role: 'Designer (Oversight of Architects/Int. Design by others), Project Management, Owner Representative, Craftsmen-Contractor Coordination, Property Management',
        specs: '3,600 + 1,200 sqft • 10 months',
        featured: false,
        coverImage: 'projects/north-florida/NIMG_9178.jpg',
        images: [
            'projects/north-florida/NIMG_9178.jpg',
            'projects/assets/nfl-001-cover.webp',
            ...Array.from({length: 12}, (_, i) => `projects/assets/nfl-${String(i + 2).padStart(3, '0')}.webp`)
        ]
    },
    {
        id: 'abaco-boathouse',
        title: 'Abaco Luxe Boat House',
        subtitle: 'Waterfront Construction',
        category: 'residential-construction',
        location: 'Abaco, Bahamas',
        role: 'Project Manager (Foreign Country Project for US Owners)',
        specs: '1,800 sqft • 6 months',
        featured: false,
        coverImage: 'projects/assets/abaco-luxe-boathouse-cover.webp',
        images: [
            'projects/assets/abaco-luxe-boathouse-cover.webp',
            'projects/assets/abaco-luxe-boathouse-1.webp'
        ]
    },
    {
        id: 'carmel-forest',
        title: 'Carmel Forest to Ocean View',
        subtitle: 'Custom Addition',
        category: 'residential-construction',
        location: 'Carmel By the Sea, CA',
        role: 'General Contractor',
        specs: 'Custom Addition',
        featured: false,
        coverImage: 'projects/assets/carmel-2-cover.webp',
        images: Array.from({length: 5}, (_, i) => `projects/assets/carmel-2-${i + 1}.webp`)
    },
    {
        id: 'bigsur-civil',
        title: 'Coastal Mountain Residence',
        subtitle: 'Civil Site Work',
        category: 'civil',
        location: 'Big Sur, CA',
        role: 'Civil Engineering Lead & Site Manager',
        specs: '11 months',
        featured: false,
        coverImage: 'projects/assets/bigsur-cover.webp',
        images: Array.from({length: 15}, (_, i) => `projects/assets/bigsur-${i + 1}.webp`)
    },
    {
        id: 'carmel-knolls',
        title: 'Carmel Knolls',
        subtitle: 'More Than Lipstick on an Old Lady!',
        category: 'civil',
        location: 'Carmel, CA',
        role: 'General Contractor & Restoration Specialist',
        specs: '2,200 sqft • 12 months',
        featured: false,
        coverImage: 'projects/carmel-knolls/001.10 COVER.jpg',
        images: Array.from({length: 25}, (_, i) => `projects/assets/carmel-knolls-${i + 1}.webp`)
    },
    {
        id: 'coastal-restoration',
        title: 'Coastal Restoration',
        subtitle: 'Erosion Repair',
        category: 'civil',
        location: 'Monterey Peninsula, CA',
        role: 'Civil Engineering Lead & Environmental Restoration Manager',
        specs: '9 months',
        featured: false,
        coverImage: 'projects/coastal-restoration/001 COVER.JPG',
        images: Array.from({length: 15}, (_, i) => `projects/assets/coastal-restoration-${i + 1}.webp`)
    },
    {
        id: 'beachfront-estate',
        title: 'Beachfront Estate',
        subtitle: 'Luxury Residence',
        category: 'residential-development',
        location: 'Abaco, Bahamas',
        role: 'Development Manager & General Contractor',
        specs: '6,800 sqft • 2.5 Acres',
        featured: false,
        coverImage: 'projects/assets/beachfront-1.webp',
        images: Array.from({length: 7}, (_, i) => `projects/assets/beachfront-${i + 1}.webp`)
    },
    {
        id: 'development-civil',
        title: 'Development Civil',
        subtitle: 'Large Scale Construction',
        category: 'residential-development',
        location: 'SE Texas',
        role: 'Project Management, Development/Civil Engineering',
        specs: '45 Acres • 10.3 months • 120 Home Sites',
        featured: false,
        coverImage: 'projects/development-civil/development (1).jpg',
        images: [
            'projects/development-civil/development (1).jpg',
            ...Array.from({length: 10}, (_, i) => `projects/assets/development-civil-${i + 1}.webp`)
        ]
    },
    {
        id: 'pacific-grove',
        title: 'New Residential Construction',
        subtitle: 'In Historic Neighborhood',
        category: 'design-build',
        location: 'Central Coast, CA',
        role: 'Designer (Structure & Int. Design), Project Management, Owner Representative',
        specs: '2,600 sqft • 14 months',
        featured: false,
        coverImage: 'projects/pacific-grove/001 COVER.JPG',
        images: [
            'projects/pacific-grove/001 COVER.JPG',
            'projects/assets/pg-cover.webp',
            ...Array.from({length: 10}, (_, i) => `projects/assets/pg-${i + 1}.webp`)
        ]
    },
    {
        id: 'hillside-cleanup',
        title: 'Hillside Restoration & Environmental Cleanup',
        subtitle: 'Environmental Cleanup',
        category: 'civil',
        location: 'Carmel, CA',
        role: 'Civil Engineering Contractor/Builder, Permit Procurement',
        specs: '4 months',
        featured: false,
        coverImage: 'projects/hillside-cleanup/001 COVER.jpg',
        images: Array.from({length: 15}, (_, i) => `projects/assets/hillside-cleanup-${i + 1}.webp`)
    },
    {
        id: 'laguna-grande',
        title: 'Laguna Grande',
        subtitle: 'Spanish Revival Commercial',
        category: 'design-build',
        location: 'Seaside, CA',
        role: 'Civil Engineering Construction, Design (Structure), Builder, Project Manager, Owner's Representative',
        specs: '12,000 sqft • 14 months',
        featured: false,
        coverImage: 'projects/laguna-grande/6.0 Laguna Grande Design Build_001_COVER.png',
        images: [
            'projects/laguna-grande/6.0 Laguna Grande Design Build_001_COVER.png',
            'projects/assets/laguna-grande-cover.webp',
            ...Array.from({length: 6}, (_, i) => `projects/assets/laguna-grande-${i + 1}.webp`)
        ]
    },
    {
        id: 'carmel-remodel-23',
        title: 'Carmel House Remodel No.23',
        subtitle: 'Complete Renovation',
        category: 'residential-construction',
        location: 'Carmel By the Sea, CA',
        role: 'General Contractor & Renovation Specialist',
        specs: 'Complete Renovation',
        featured: false,
        coverImage: 'projects/assets/carmel-3-cover.webp',
        images: Array.from({length: 25}, (_, i) => `projects/assets/carmel-3-${i + 1}.webp`)
    }
];
