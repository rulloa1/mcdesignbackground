// NOTE: Owner's Rep projects reuse other project images as placeholders
// until dedicated photography is available.
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
        coverImage: 'projects/assets/bakers-bay-1.webp',
        images: ['projects/assets/bakers-bay-1.webp', 'projects/assets/bakers-bay-2.webp']
    },
    {
        id: 'yellowstone-club',
        title: 'Yellowstone Club',
        subtitle: 'Ultra-Luxury Alpine Community',
        category: 'owners-representation',
        location: 'Montana',
        role: "Project Management: Final Finish of Main Lodge Addition & Completion of Private Condos' Rep",
        specs: '550,000 sqft • Final Finish of Main Lodge & 48 Private Condos',
        featured: true,
        coverImage: 'projects/assets/alpine-ranch-1.webp',
        images: ['projects/assets/alpine-ranch-1.webp']
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
        coverImage: 'projects/assets/montana-4.webp',
        images: ['projects/assets/montana-4.webp']
    },
    {
        id: 'miami-beach',
        title: 'S. Florida High Rise Luxe Condo',
        subtitle: 'Oceanfront Luxury Renovation',
        category: 'residential-construction',
        location: 'Miami Beach, FL',
        role: 'Contractor Identification/Contract Negotiation/Project Management, Owner Representation, Property Management, International Furniture/Material/Art Receiving, Vehicle/Management/Procurement/Shipping',
        specs: '4,200 sqft • 5 months • 4 bed · 4 bath',
        description: "Over a 5 month time, the newest Smart-Home Technologies were obtained and installed, with most components not even available to the public, in this Country, yet. Custom scalloped Solid Wood Paneling, made from some very special and rare South American wood. Hand-picked craftsman, world-class millworkers, and some extremely talented craftsmen who installed hand-applied specialty wall finishes, all worked in perfect harmony, to deliver this one of a kind ocean-side, high-rise residence, on time, on budget, and with every aspect of this remodel being on point. The delivery was flawless and made-ready for a world renown Interior Designer, who had nothing but praise for the fit and finish, throughout. All of this was accomplished at the height of a tragic world events, when everywhere else, the world had come to a screeching halt. Our hand-picked, old-world style craftsman, and modern technologists seamlessly went about their work, without faltering. The rare wood was sourced from another millwork company with a tragic cancelled order during this tragic time period. Going the extra many, many miles to Source the wood material, and then stepping in to purchase the lot, allowed for many jobs to be saved. Some of the Solid wood panels were even bent, into 1/4-rounds, using old-world wood bending techniques, to form the beautiful ends of the custom built-ins, in the Living Room. The residence was transformed from all white, to warm and beautiful. On Budget, On Schedule, and Perfectly On Point, thanks to a harmonious and incredible group of hand-picked craftsmen!",
        featured: true,
        coverImage: 'projects/assets/miami-beach-27.webp',
        images: Array.from({length: 47}, (_, i) => `projects/assets/miami-beach-${i + 1}.webp`)
    },
    {
        id: 'alpine-ranch',
        title: 'High Alpine Mtn. Ranch Luxe Retreat',
        subtitle: 'Mountain Ranch Estate',
        category: 'residential-construction',
        location: 'Montana',
        role: 'Owner Representation, Design Oversight, Contractor Procurement, Contract Negotiation, Project Management, Property Management',
        specs: '2,300 sqft • 24 months • 2 bed · 2 bath',
        notes: 'Custom Bronze Windows/Doors Crafted in Italy. Mix of Radiant floor heating and custom forced air system for maximum efficiency.',
        featured: true,
        coverImage: 'projects/assets/alpine-ranch-2.webp',
        images: [
            'projects/assets/alpine-ranch-cover.webp',
            ...Array.from({length: 12}, (_, i) => `projects/assets/alpine-ranch-${i + 1}.webp`)
        ]
    },
    {
        id: 'hospitality-pool',
        title: 'Ultra Luxe Private Club Resort Pool',
        subtitle: 'Resort Pool Construction',
        category: 'hospitality',
        location: 'SE Texas',
        role: 'Owner Representation, Daily Project Management, Co-Design of Many Elements, Property Management',
        specs: '189,000 Gallon • 18 months',
        description: 'Coordination of over 15 specialty trades. Centerpiece is a beautiful free-form pool with a swim-up bar, 1,200 sq ft pool house, and 10 foot high solid mahogany wood walls and doors. Interior design inspired by 1950s New York smoking clubs.',
        featured: false,
        coverImage: 'projects/assets/pool-design-36.webp',
        images: [
            'projects/assets/pool-design-36.webp',
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
        description: 'Revitalized this 3,600 sq ft home with a 1,200 sq ft addition. Comprehensive approach included new roof, impact windows, updated electrical and plumbing systems. Interior completely refreshed with estate management services ensuring seamless coordination of all trades. Result is a home that is more spacious, modern, fortified, and meticulously detailed.',
        featured: false,
        coverImage: 'projects/assets/nfl-001-cover.webp',
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
        coverImage: 'projects/assets/southcoast-52.webp',
        images: [
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
        role: 'Civil Engineering Lead & Site Manager',
        specs: '11 months',
        featured: false,
        coverImage: 'projects/assets/bigsur-3.webp',
        images: [
            'projects/assets/bigsur-cover.webp',
            ...Array.from({length: 15}, (_, i) => `projects/assets/bigsur-${i + 1}.webp`)
        ]
    },
    {
        id: 'carmel-knolls',
        title: 'Carmel Knolls',
        subtitle: 'Custom Estate',
        category: 'residential-construction',
        location: 'Carmel, CA',
        role: 'Construction Management',
        specs: 'Custom Estate',
        featured: false,
        coverImage: 'projects/assets/carmel-knolls-8.webp',
        images: Array.from({length: 10}, (_, i) => `projects/assets/carmel-knolls-${i + 1}.webp`)
    },
    {
        id: 'development-civil',
        title: 'Development Civil',
        subtitle: 'Site Infrastructure',
        category: 'civil',
        location: 'Various Locations',
        role: 'Civil Engineering Lead',
        specs: '45 Acres • 103 Home Sites • 36 months',
        featured: false,
        coverImage: 'projects/assets/development-3.webp',
        images: [
            'projects/assets/development-cover.webp',
            'projects/assets/development-site.webp',
            'projects/assets/development-entrance-2.webp',
            ...Array.from({length: 10}, (_, i) => `projects/assets/development-${i + 1}.webp`)
        ]
    },
    {
        id: 'pacific-grove',
        title: 'Pacific Grove Historic Neighborhood',
        subtitle: 'Historic Custom Home',
        category: 'residential-construction',
        location: 'Pacific Grove, CA',
        role: 'Designer (Structure & Int. Design), Project Management, Owner Representative, Builder',
        specs: 'Historic Custom Home',
        featured: false,
        coverImage: 'projects/assets/pg-4-after.webp',
        images: Array.from({length: 10}, (_, i) => `projects/assets/pg-${i + 1}.webp`)
    },
    {
        id: 'laguna-grande',
        title: 'Laguna Grande',
        subtitle: 'Site Development',
        category: 'civil',
        location: 'Monterey, CA',
        role: 'Civil Engineering Construction, Design (Structure), Builder, Project Manager, Owner\'s Representative',
        specs: 'Site Development • 14 months',
        description: 'Brought timeless beauty of Spanish Colonial Revival architecture to a new 12,000 sq ft commercial complex. Features authentic details like hand-formed clay roof tiles, custom ironwork, and arched colonnades. Although modern stucco is used, it was carefully applied so corners and edges are softened to look like original hand-applied plaster for authenticity.',
        featured: false,
        coverImage: 'projects/assets/laguna-grande-2.webp',
        images: Array.from({length: 2}, (_, i) => `projects/assets/laguna-grande-${i + 1}.webp`)
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
        id: 'coastal-restoration',
        title: 'Coastal Restoration',
        subtitle: 'Environmental Protection',
        category: 'civil',
        location: 'California Coast',
        role: 'Lead Project Manager & Civil Specialist',
        specs: 'Coastal Restoration',
        featured: false,
        coverImage: 'projects/assets/coastal-restoration-13.webp',
        images: Array.from({length: 15}, (_, i) => `projects/assets/coastal-restoration-${i + 1}.webp`)
    },
    {
        id: 'beachfront-estate',
        title: 'Beachfront Estate Abaco',
        subtitle: 'Luxury Waterfront Estate',
        category: 'residential-construction',
        location: 'Abaco, Bahamas',
        role: 'Owner Representative & Construction Manager',
        specs: 'Luxury Waterfront Estate',
        featured: false,
        coverImage: 'projects/assets/beachfront-3.webp',
        images: Array.from({length: 7}, (_, i) => `projects/assets/beachfront-${i + 1}.webp`)
    },
    {
        id: 'montana-condo',
        title: 'Mtn. Mid-Rise Luxe Condo',
        subtitle: 'Mountain Luxury Condo',
        category: 'residential-construction',
        location: 'Montana',
        role: 'Owner Representation, Project Management, Property Management',
        specs: '2,800 sqft • 8 months • New Build',
        notes: 'Selections feature Calacatta marble and warm walnut with special hand-applied wall/ceiling finishes.',
        featured: false,
        coverImage: 'projects/assets/montana-7.webp',
        images: Array.from({length: 11}, (_, i) => `projects/assets/montana-${i + 1}.webp`)
    },
    {
        id: 'carmel-valley-new',
        title: 'Carmel Valley New Construction',
        subtitle: 'Custom Residence',
        category: 'design-build',
        location: 'Carmel Valley, CA',
        role: 'Designer (Structure), Builder, Project Manager, Civil Engineering Contractor',
        specs: '4,800 sqft • 20 months',
        featured: false,
        coverImage: 'projects/assets/carmel-valley-new-2.webp',
        images: Array.from({length: 4}, (_, i) => `projects/assets/carmel-valley-new-${i + 1}.webp`)
    },
    {
        id: 'syracuse',
        title: 'Syracuse House',
        subtitle: 'Custom Design-Build',
        category: 'design-build',
        location: 'Syracuse, UT',
        role: 'Designer (Structure & Int. Design), Builder, Project Manager',
        specs: 'Custom Design-Build',
        featured: false,
        coverImage: 'projects/assets/syracuse-12.webp',
        images: [
            'projects/assets/syracuse-cover.webp',
            ...Array.from({length: 51}, (_, i) => `projects/assets/syracuse-${i + 1}.webp`)
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
        coverImage: 'projects/assets/carmel-3-8.webp',
        images: Array.from({length: 5}, (_, i) => `projects/assets/carmel-3-${i + 1}.webp`)
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
