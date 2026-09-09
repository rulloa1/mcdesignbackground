/* ==========================================================================
   Smeulders Interieurgroep — shared data layer
   Consumed by index.html, projecten.html and project.html via <script src>.
   Mirrors the repo's projects-data.js pattern: one array, no build step.
   Every user-facing string carries an nl and en variant.
   ========================================================================== */

/* Material fields used by the procedural plate artwork (see app.js).
   Each entry is a pair of stops plus a line colour for the elevation. */
const materials = {
    oak:      { a: '#C9A277', b: '#8E6236', line: 'rgba(28,20,10,.42)' },
    walnut:   { a: '#7A5438', b: '#3C2718', line: 'rgba(255,246,235,.30)' },
    terrazzo: { a: '#E4DED2', b: '#BDB4A3', line: 'rgba(30,28,22,.34)' },
    linen:    { a: '#EFE9DC', b: '#CFC5B2', line: 'rgba(30,28,22,.30)' },
    moss:     { a: '#5B6A52', b: '#2E382A', line: 'rgba(240,244,236,.30)' },
    ink:      { a: '#33322A', b: '#16150F', line: 'rgba(244,241,234,.26)' },
    brass:    { a: '#C7A05C', b: '#7E5F27', line: 'rgba(24,18,6,.40)' },
    stone:    { a: '#CFCABE', b: '#9A9488', line: 'rgba(28,26,20,.32)' },
    clay:     { a: '#C98A6B', b: '#8A4E31', line: 'rgba(30,18,12,.38)' },
    felt:     { a: '#8E8FA0', b: '#4A4B5C', line: 'rgba(244,244,250,.28)' }
};

const projectsData = [
    {
        id: 'unilever-air',
        client: 'Unilever',
        title: { nl: 'Unilever AIR Offices', en: 'Unilever AIR Offices' },
        location: 'Rotterdam',
        sector: 'kantoor',
        year: '2024',
        architect: 'Unilever Workplace Team',
        scope: { nl: 'Ontwerp-engineering, productie, montage', en: 'Design engineering, production, installation' },
        material: 'oak',
        featured: true,
        intro: {
            nl: 'Duidelijke afspraken, korte lijnen en een team dat verantwoordelijkheid neemt. Zo realiseerden wij het interieur van Unilever AIR.',
            en: 'Clear agreements, short lines of communication, and a team that takes ownership. That is how we delivered the interior for Unilever AIR.'
        },
        body: {
            nl: [
                'Een hoofdkantoor dat als ontmoetingsplek moet werken vraagt om interieur dat meebeweegt met de dag. Werkplekken die ’s ochtends geconcentreerd zijn en ’s middags open. Wanden die verplaatsen zonder dat er iets gesloopt wordt.',
                'Het maatwerk is opgebouwd uit gedemonteerbare modules met een gedocumenteerde materialenpaspoort-registratie, zodat elk paneel later terug de keten in kan.'
            ],
            en: [
                'A head office that has to work as a meeting place needs an interior that moves with the day. Workstations that are focused in the morning and open in the afternoon. Walls that relocate without anything being demolished.',
                'The joinery is built from demountable modules with a documented material passport, so every panel can re-enter the chain later.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'Unilever' },
            { k: { nl: 'Locatie', en: 'Location' }, v: 'Rotterdam' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Kantoor — hoofdkantoor', en: 'Office — head office' } },
            { k: { nl: 'Werkzaamheden', en: 'Works' }, v: { nl: 'Maatwerk interieurbouw, pantry’s, akoestische wanden', en: 'Custom joinery, pantries, acoustic walls' } }
        ]
    },
    {
        id: 'dla-piper',
        client: 'DLA Piper',
        title: { nl: 'DLA Piper', en: 'DLA Piper' },
        location: 'Amsterdam',
        sector: 'kantoor',
        year: '2024',
        architect: '—',
        scope: { nl: 'Maatwerk interieurbouw', en: 'Custom interior construction' },
        material: 'walnut',
        featured: true,
        intro: {
            nl: 'Duidelijke afspraken, korte lijnen en een team dat verantwoordelijkheid neemt. Zo realiseerden wij het interieur voor DLA Piper in Amsterdam.',
            en: 'Clear agreements, direct communication, and a team that takes ownership. That is how we delivered the interior for DLA Piper in Amsterdam.'
        },
        body: {
            nl: [
                'Een advocatenkantoor vraagt om twee dingen tegelijk: representatie aan de voorkant en absolute discretie daarachter. Het interieur lost dat op met massief houten lamellenwanden die zicht filteren zonder licht te blokkeren.',
                'De receptiebalie en de vergaderwanden zijn in één houtnerf doorgezet — een detail dat alleen lukt wanneer productie en montage in dezelfde hand liggen.'
            ],
            en: [
                'A law firm asks for two things at once: representation at the front and absolute discretion behind it. The interior resolves that with solid timber louvre walls that filter sightlines without blocking light.',
                'The reception desk and the meeting room walls run through a single grain match — a detail that only works when production and installation sit in the same hands.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'DLA Piper' },
            { k: { nl: 'Locatie', en: 'Location' }, v: 'Amsterdam' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Kantoor — zakelijke dienstverlening', en: 'Office — professional services' } },
            { k: { nl: 'Werkzaamheden', en: 'Works' }, v: { nl: 'Receptie, vergadercentrum, lamellenwanden', en: 'Reception, meeting centre, louvre walls' } }
        ]
    },
    {
        id: 'psv-executive-floor',
        client: 'PSV',
        title: { nl: 'PSV Executive Floor', en: 'PSV Executive Floor' },
        location: 'Philips Stadion, Eindhoven',
        sector: 'hospitality',
        year: '2023',
        architect: 'Studio Hans Kuijten',
        scope: { nl: 'Maatwerk interieurbouw, bars, lounges', en: 'Custom joinery, bars, lounges' },
        material: 'brass',
        featured: true,
        intro: {
            nl: 'Een businessverdieping die op wedstrijddagen duizenden gasten verwerkt en doordeweeks als vergaderomgeving functioneert.',
            en: 'A business floor that handles thousands of guests on match days and works as a meeting environment during the week.'
        },
        body: {
            nl: [
                'Interieurarchitect Studio Hans Kuijten tekende een verdieping waarin clubhistorie en zakelijke gastvrijheid elkaar niet in de weg zitten. Wij vertaalden dat naar maatwerk dat tegen stadiongebruik bestand is.',
                'Alle bars, balies en wandbekledingen zijn in de eigen fabriek in Nuenen geproduceerd en in de krappe weken tussen twee thuiswedstrijden gemonteerd.'
            ],
            en: [
                'Interior architect Studio Hans Kuijten drew a floor where club history and business hospitality stay out of each other’s way. We translated that into joinery that survives stadium use.',
                'All bars, counters and wall linings were produced in our own factory in Nuenen and installed in the narrow weeks between two home matches.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'PSV' },
            { k: { nl: 'Interieurarchitect', en: 'Interior architect' }, v: 'Studio Hans Kuijten' },
            { k: { nl: 'Locatie', en: 'Location' }, v: { nl: 'Philips Stadion, Eindhoven', en: 'Philips Stadion, Eindhoven' } },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Hospitality — business seats', en: 'Hospitality — business seats' } }
        ]
    },
    {
        id: 'raad-van-state',
        client: 'Raad van State',
        title: { nl: 'Raad van State', en: 'Council of State' },
        location: 'Den Haag',
        sector: 'publiek',
        year: '2023',
        architect: '—',
        scope: { nl: 'Maatwerk interieur, zaalbetimmering', en: 'Custom interior, chamber panelling' },
        material: 'ink',
        featured: true,
        intro: {
            nl: 'Maatwerk interieur voor het hoogste bestuursrechtelijke college van Nederland, waar het interieur zelf gezag moet uitstralen.',
            en: 'Custom interior work for the highest administrative court in the Netherlands, where the interior itself has to carry authority.'
        },
        body: {
            nl: [
                'Rijksmonumentaal vastgoed stelt eisen die zich slecht verhouden tot standaardmaten. Elke betimmering is ingemeten op de bestaande situatie en droog gemonteerd, zodat het monument zelf onaangetast blijft.',
                'Akoestiek was leidend: de zaalwanden combineren massieve fineerdelen met geperforeerde absorptiepanelen die vanuit de zaal onzichtbaar zijn.'
            ],
            en: [
                'Listed state property sets requirements that sit badly with standard dimensions. Every piece of panelling was measured against the existing situation and dry-mounted, so the monument itself stays untouched.',
                'Acoustics led the design: the chamber walls combine solid veneer sections with perforated absorption panels that are invisible from the floor.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: { nl: 'Raad van State', en: 'Council of State' } },
            { k: { nl: 'Locatie', en: 'Location' }, v: { nl: 'Den Haag', en: 'The Hague' } },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Publiek — rijksmonument', en: 'Public — listed monument' } },
            { k: { nl: 'Werkzaamheden', en: 'Works' }, v: { nl: 'Zaalbetimmering, akoestische wanden, meubilair', en: 'Chamber panelling, acoustic walls, furniture' } }
        ]
    },
    {
        id: 'skins',
        client: 'Skins',
        title: { nl: 'Skins', en: 'Skins' },
        location: 'Amsterdam',
        sector: 'retail',
        year: '2024',
        architect: '—',
        scope: { nl: 'Winkelinrichting, presentatiemeubels', en: 'Store fit-out, display furniture' },
        material: 'terrazzo',
        featured: true,
        intro: {
            nl: 'Skins is hét high-end retaillabel dat internationale nichemerken in parfums, skincare, make-up en lifestyleproducten samenbrengt.',
            en: 'Skins is the high-end retail label bringing together international niche brands in perfume, skincare, make-up and lifestyle products.'
        },
        body: {
            nl: [
                'Nichemerken verkopen zichzelf niet vanaf een plank. De inrichting werkt met verwisselbare presentatiecassettes, zodat een merkwissel een middag kost in plaats van een verbouwing.',
                'Terrazzo, geborsteld messing en mat gelakt MDF vormen een neutrale drager waar de verpakkingen het kleuraccent mogen leveren.'
            ],
            en: [
                'Niche brands do not sell themselves off a shelf. The fit-out works with interchangeable display cassettes, so a brand swap takes an afternoon instead of a renovation.',
                'Terrazzo, brushed brass and matt lacquered MDF form a neutral carrier where the packaging is allowed to supply the colour.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'Skins' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Retail — beauty', en: 'Retail — beauty' } },
            { k: { nl: 'Werkzaamheden', en: 'Works' }, v: { nl: 'Wandsystemen, toonbanken, presentatiecassettes', en: 'Wall systems, counters, display cassettes' } }
        ]
    },
    {
        id: 'oger',
        client: 'Ogér',
        title: { nl: 'Ogér', en: 'Ogér' },
        location: 'Nederland',
        sector: 'retail',
        year: '2024',
        architect: '—',
        scope: { nl: 'Winkelinrichting, shop-in-shop', en: 'Store fit-out, shop-in-shop' },
        material: 'walnut',
        featured: true,
        intro: {
            nl: 'Met comfortabele lounges, royale presentatiezones en exclusieve shop-in-shopconcepten biedt de winkel ruimte voor een persoonlijke en ontspannen winkelbeleving.',
            en: 'With comfortable lounges, generous presentation zones and exclusive shop-in-shop concepts, the store makes room for a personal and relaxed shopping experience.'
        },
        body: {
            nl: [
                'Herenmode op dit niveau is een gesprek, geen transactie. De plattegrond is daarom opgebouwd rond zitplekken in plaats van rekken.',
                'De pasruimtes zijn als losstaande volumes uitgevoerd, met een eigen materialisering die het contrast met de winkelvloer bewust opzoekt.'
            ],
            en: [
                'Menswear at this level is a conversation, not a transaction. The floor plan is therefore built around seating rather than rails.',
                'The fitting rooms are executed as freestanding volumes, with their own materiality that deliberately contrasts with the shop floor.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'Ogér' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Retail — herenmode', en: 'Retail — menswear' } },
            { k: { nl: 'Werkzaamheden', en: 'Works' }, v: { nl: 'Lounges, presentatiezones, pasruimtes', en: 'Lounges, presentation zones, fitting rooms' } }
        ]
    },
    {
        id: 'aalberts-industries',
        client: 'Aalberts',
        title: { nl: 'Aalberts Industries', en: 'Aalberts Industries' },
        location: 'Utrecht',
        sector: 'kantoor',
        year: '2023',
        architect: '—',
        scope: { nl: 'Kantoorinterieur, receptie', en: 'Office interior, reception' },
        material: 'stone',
        featured: false,
        intro: {
            nl: 'Aalberts is een wereldwijde speler in hoogwaardige industriële producten en processen, met ruim 16.000 medewerkers in meer dan dertig landen.',
            en: 'Aalberts is a global player in high-end industrial products and processes, with over 16,000 employees in more than thirty countries.'
        },
        body: {
            nl: [
                'Een technisch concern wil geen interieur dat zich mooier voordoet dan het is. Constructie is hier zichtbaar gelaten: verbindingen, bevestigingen en materiaalovergangen zijn onderdeel van het beeld.',
                'Staal, steenachtige composieten en licht eiken vormen een palet dat industrie zegt zonder tot loods te vervallen.'
            ],
            en: [
                'A technical group does not want an interior that pretends to be more than it is. Construction is left visible here: joints, fixings and material transitions are part of the image.',
                'Steel, stone-like composites and pale oak form a palette that says industry without descending into warehouse.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'Aalberts' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Kantoor — industrie', en: 'Office — industrial' } },
            { k: { nl: 'Werkzaamheden', en: 'Works' }, v: { nl: 'Receptie, vergaderruimtes, pantry’s', en: 'Reception, meeting rooms, pantries' } }
        ]
    },
    {
        id: 'taylor-wessing',
        client: 'Taylor Wessing',
        title: { nl: 'Taylor Wessing', en: 'Taylor Wessing' },
        location: 'Eindhoven',
        sector: 'kantoor',
        year: '2023',
        architect: '—',
        scope: { nl: 'Maatwerk interieurbouw', en: 'Custom interior construction' },
        material: 'linen',
        featured: false,
        intro: {
            nl: 'Een compact kantoor waarin elke vierkante meter twee functies moet dragen zonder dat het krap voelt.',
            en: 'A compact office in which every square metre has to carry two functions without feeling tight.'
        },
        body: {
            nl: [
                'Kastwanden nemen hier de rol van scheidingswand over. Achter dezelfde fineerlijn zitten archief, garderobe en techniek weggewerkt.',
                'Door één doorlopende horizontale maatvoering aan te houden oogt de verdieping breder dan zij is.'
            ],
            en: [
                'Storage walls take over the role of partitions here. Archive, cloakroom and services are tucked away behind the same veneer line.',
                'By holding one continuous horizontal dimension, the floor reads wider than it is.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'Taylor Wessing' },
            { k: { nl: 'Locatie', en: 'Location' }, v: 'Eindhoven' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Kantoor — zakelijke dienstverlening', en: 'Office — professional services' } }
        ]
    },
    {
        id: 'pink-gellac',
        client: 'Pink Gellac',
        title: { nl: 'Pink Gellac', en: 'Pink Gellac' },
        location: 'Hilversum',
        sector: 'retail',
        year: '2025',
        architect: '—',
        scope: { nl: 'Kantoor- en merkinterieur', en: 'Office and brand interior' },
        material: 'clay',
        featured: false,
        intro: {
            nl: 'Pink Gellac, opgericht in 2013 en gevestigd in Hilversum, is een toonaangevend premium nagellakmerk in de Benelux.',
            en: 'Pink Gellac, founded in 2013 and based in Hilversum, is a leading premium nail polish brand in the Benelux.'
        },
        body: {
            nl: [
                'Een merk met een uitgesproken kleurenpalet vraagt om een interieur dat die kleur draagt zonder erin te verdrinken. De achtergrond is bewust rustig gehouden.',
                'Studio, kantoor en showroom lopen in elkaar over — het interieur moest zowel op camera als op een gewone dinsdag werken.'
            ],
            en: [
                'A brand with an outspoken colour palette needs an interior that carries the colour without drowning in it. The background is deliberately kept quiet.',
                'Studio, office and showroom flow into one another — the interior had to work both on camera and on an ordinary Tuesday.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'Pink Gellac' },
            { k: { nl: 'Locatie', en: 'Location' }, v: 'Hilversum' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Merkinterieur — studio en kantoor', en: 'Brand interior — studio and office' } }
        ]
    },
    {
        id: 'pure-resort-warth',
        client: 'PURE Resort',
        title: { nl: 'PURE Resort Warth', en: 'PURE Resort Warth' },
        location: 'Warth, Oostenrijk',
        sector: 'hospitality',
        year: '2023',
        architect: '—',
        scope: { nl: 'Hotelkamers, lobby, wellness', en: 'Hotel rooms, lobby, wellness' },
        material: 'moss',
        featured: false,
        intro: {
            nl: 'Geproduceerd in Nuenen, gemonteerd op 1.500 meter hoogte in de Vorarlbergse Alpen.',
            en: 'Produced in Nuenen, installed at 1,500 metres in the Vorarlberg Alps.'
        },
        body: {
            nl: [
                'Prefab is bij een alpien project geen voorkeur maar een voorwaarde. Complete kamerwanden inclusief techniek verlieten de fabriek gereed voor montage.',
                'De logistiek is vanaf het ontwerp meegenomen: elk element past door het trappenhuis en op de vrachtwagens die de bergweg aankunnen.'
            ],
            en: [
                'On an alpine project, prefabrication is not a preference but a condition. Complete room walls including services left the factory ready for installation.',
                'Logistics were designed in from the start: every element fits through the stairwell and onto the trucks that can handle the mountain road.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'PURE Resort' },
            { k: { nl: 'Locatie', en: 'Location' }, v: { nl: 'Warth, Oostenrijk', en: 'Warth, Austria' } },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Hospitality — resort', en: 'Hospitality — resort' } }
        ]
    },
    {
        id: 'l-founders-of-loyalty',
        client: 'L Founders of Loyalty',
        title: { nl: 'L Founders of Loyalty', en: 'L Founders of Loyalty' },
        location: 'Amsterdam',
        sector: 'kantoor',
        year: '2024',
        architect: '—',
        scope: { nl: 'Kantoorinterieur', en: 'Office interior' },
        material: 'felt',
        featured: false,
        intro: {
            nl: 'Een bureau dat van loyaliteit zijn vak maakt, wilde een kantoor dat mensen laat blijven in plaats van passeren.',
            en: 'An agency that made loyalty its profession wanted an office that makes people stay rather than pass through.'
        },
        body: {
            nl: [
                'Het zwaartepunt ligt niet bij de werkplekken maar bij de plekken ertussen: een lange tafel, nissen met vilt en een keuken die groot genoeg is om in te blijven hangen.',
                'Vilt, hout en zacht gepoedercoat staal dempen zowel geluid als toon.'
            ],
            en: [
                'The centre of gravity sits not with the workstations but with the places in between: a long table, felt-lined alcoves and a kitchen big enough to linger in.',
                'Felt, timber and soft powder-coated steel dampen both sound and tone.'
            ]
        },
        specs: [
            { k: { nl: 'Opdrachtgever', en: 'Client' }, v: 'L Founders of Loyalty' },
            { k: { nl: 'Locatie', en: 'Location' }, v: 'Amsterdam' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Kantoor — creatief bureau', en: 'Office — creative agency' } }
        ]
    },
    {
        id: 'qyuubs-flexwoningen',
        client: 'QYUUBS',
        title: { nl: 'QYUUBS flexibele huisvesting', en: 'QYUUBS flexible housing' },
        location: 'Nederland',
        sector: 'modulair',
        year: '2025',
        architect: '—',
        scope: { nl: 'Modulaire units, seriematige productie', en: 'Modular units, series production' },
        material: 'oak',
        featured: false,
        intro: {
            nl: 'Tijdelijke huisvesting die niet tijdelijk oogt — verplaatsbaar, herbruikbaar en in serie geproduceerd.',
            en: 'Temporary housing that does not look temporary — relocatable, reusable and produced in series.'
        },
        body: {
            nl: [
                'QYUUBS is ontstaan uit de vraag wat er gebeurt als je interieurbouwlogica op woningbouw loslaat: strakke toleranties, fabrieksmatige afwerking en een eindproduct dat je weer uit elkaar kunt halen.',
                'De units worden compleet afgebouwd geleverd en kunnen na hun eerste standplaats zonder waardeverlies verhuizen.'
            ],
            en: [
                'QYUUBS grew out of the question of what happens when you apply interior-construction logic to housing: tight tolerances, factory finishing, and an end product you can take apart again.',
                'Units are delivered fully fitted out and can move on from their first site without loss of value.'
            ]
        },
        specs: [
            { k: { nl: 'Merk', en: 'Brand' }, v: 'QYUUBS' },
            { k: { nl: 'Typologie', en: 'Typology' }, v: { nl: 'Modulair — flexibele huisvesting', en: 'Modular — flexible housing' } }
        ]
    }
];

/* Sector filter labels for the project index. */
const sectors = [
    { id: 'all',        nl: 'Alle projecten', en: 'All projects' },
    { id: 'kantoor',    nl: 'Kantoor',        en: 'Office' },
    { id: 'retail',     nl: 'Retail',         en: 'Retail' },
    { id: 'hospitality',nl: 'Hospitality',    en: 'Hospitality' },
    { id: 'publiek',    nl: 'Publiek',        en: 'Public' },
    { id: 'modulair',   nl: 'Modulair',       en: 'Modular' }
];

/* Group brands. */
const brands = [
    {
        name: 'QYUUBS',
        tag: { nl: 'Flexibele huisvesting', en: 'Flexible housing' },
        text: {
            nl: 'Verplaatsbare, seriematig geproduceerde woonunits voor situaties waarin permanent bouwen geen antwoord is.',
            en: 'Relocatable, series-produced living units for situations where permanent construction is not the answer.'
        }
    },
    {
        name: 'Saniskill',
        tag: { nl: 'Modulaire badkamers', en: 'Modular bathrooms' },
        text: {
            nl: 'Complete prefab badkamers, in de fabriek afgebouwd en getest, op de bouwplaats in uren in plaats van weken geplaatst.',
            en: 'Complete prefab bathrooms, finished and tested in the factory, placed on site in hours rather than weeks.'
        }
    },
    {
        name: 'Amfia',
        tag: { nl: 'Apotheekinrichting', en: 'Pharmacy fit-out' },
        text: {
            nl: 'Inrichtingsconcepten voor apotheken waarin logistiek, privacy en zichtbaarheid van zorg samenkomen.',
            en: 'Fit-out concepts for pharmacies in which logistics, privacy and the visibility of care come together.'
        }
    },
    {
        name: { nl: 'Smeulders Interieurbouw', en: 'Smeulders Interieurbouw' },
        tag: { nl: 'Maatwerk projecten', en: 'Bespoke projects' },
        text: {
            nl: 'De projectorganisatie waar het allemaal begon: eenmalig maatwerk voor kantoren, retail, hospitality en publieke gebouwen.',
            en: 'The project organisation where it all began: one-off bespoke work for offices, retail, hospitality and public buildings.'
        }
    }
];

/* Capabilities — the chain we keep in one hand. */
const capabilities = [
    {
        no: '01',
        title: { nl: 'Ontwerp & engineering', en: 'Design & engineering' },
        text: {
            nl: 'Wij vertalen het ontwerp van de interieurarchitect naar produceerbaar maatwerk. Detaillering, materiaalkeuze, toleranties en montagevolgorde liggen vast voordat er een plaat wordt gezaagd.',
            en: 'We translate the interior architect’s design into something that can actually be produced. Detailing, material choice, tolerances and installation sequence are fixed before a single sheet is cut.'
        }
    },
    {
        no: '02',
        title: { nl: 'Prototyping', en: 'Prototyping' },
        text: {
            nl: 'Twijfel los je niet op in een vergadering maar in de werkplaats. Een 1:1 proefopstelling laat zien hoe een detail zich in het echt gedraagt — in licht, in gebruik, in de hand.',
            en: 'Doubt is not resolved in a meeting but in the workshop. A 1:1 mock-up shows how a detail actually behaves — in light, in use, in the hand.'
        }
    },
    {
        no: '03',
        title: { nl: 'Productie in eigen huis', en: 'In-house production' },
        text: {
            nl: 'Machinale bewerking, fineerwerk, lakstraat en assemblage staan onder één dak in Nuenen. Dat maakt de doorlooptijd voorspelbaar en de kwaliteit controleerbaar.',
            en: 'Machining, veneer work, spray line and assembly sit under one roof in Nuenen. That makes lead times predictable and quality verifiable.'
        }
    },
    {
        no: '04',
        title: { nl: 'Montage', en: 'Installation' },
        text: {
            nl: 'Eigen montageploegen, in Nederland en daarbuiten. Zij kennen het werk uit de fabriek en lossen op de bouwplaats op wat een tekening niet kan voorzien.',
            en: 'Our own installation crews, in the Netherlands and beyond. They know the work from the factory and solve on site what a drawing cannot foresee.'
        }
    },
    {
        no: '05',
        title: { nl: 'Onderhoud & hergebruik', en: 'Maintenance & reuse' },
        text: {
            nl: 'Een interieur is niet af bij oplevering. Wij houden bij wat waar zit, zodat onderdelen later gerepareerd, verplaatst of teruggenomen kunnen worden.',
            en: 'An interior is not finished at handover. We keep track of what sits where, so parts can later be repaired, relocated or taken back.'
        }
    }
];

/* Interface copy. Keys are referenced from HTML via data-i18n. */
const dict = {
    nl: {
        'meta.title': 'Smeulders Interieurgroep — Maatwerk interieurbouw',
        'nav.projects': 'Projecten',
        'nav.about': 'Over Smeulders',
        'nav.sustain': 'Duurzaamheid',
        'nav.careers': 'Werken bij',
        'nav.contact': 'Contact',
        'nav.group': 'De Groep',

        'hero.eyebrow': 'Interieurbouw sinds 1966 — Nuenen',
        'hero.line1': 'Goed ontworpen.',
        'hero.line2': 'Goed gemaakt.',
        'hero.lede': 'Hoogwaardige, duurzame maatwerk interieurbouw. Van ontwerp en prototype tot productie en montage — in eigen huis, in één hand.',
        'hero.cta': 'Bekijk projecten',
        'hero.cta2': 'Over Smeulders',
        'hero.scroll': 'Scroll',
        'hero.caption': 'Werkplaats — Collse Heide, Nuenen',

        'intro.eyebrow': 'Wie wij zijn',
        'intro.title': 'Zestig jaar tussen tekening en oplevering',
        'intro.p1': 'Smeulders Interieurgroep is bijna zestig jaar een begrip in maatwerk interieurbouw. Ruim driehonderd mensen realiseren dagelijks innovatieve, duurzame en hoogwaardige interieurs voor bedrijven, organisaties en particulieren.',
        'intro.p2': 'Wij zijn geen leverancier die een pakket aflevert. Wij zitten aan tafel bij de interieurarchitect, tekenen het detail uit, bouwen het proefstuk, produceren in Nuenen en monteren met eigen ploegen. Die keten in één hand houden is geen bedrijfsmodel maar een kwaliteitsafspraak.',
        'intro.pull': '„Goed ontworpen en goed uitvoerbaar zijn niet hetzelfde. Ons vak zit in het verschil.”',
        'intro.cta': 'Lees ons verhaal',

        'stat.years': 'Jaar vakmanschap',
        'stat.people': 'Collega’s',
        'stat.roof': 'Onder één dak in Nuenen',
        'stat.brands': 'Merken in de groep',
        'stat.roofval': 'Fabriek',

        'works.eyebrow': 'Projecten',
        'works.title': 'Werk dat blijft staan',
        'works.lede': 'Kantoren, retail, hospitality en publieke gebouwen. Verschillende opdrachtgevers, dezelfde manier van werken.',
        'works.all': 'Alle projecten',
        'works.read': 'Lees meer over dit project',

        'caps.eyebrow': 'Werkwijze',
        'caps.title': 'De hele keten, in één hand',
        'caps.lede': 'Waar anderen overdragen, houden wij vast. Elke schakel hieronder zit binnen hetzelfde bedrijf — dat scheelt aannames, en aannames zijn duur.',

        'sustain.eyebrow': 'Duurzaamheid',
        'sustain.title': 'Een interieur is grondstof, geen afval',
        'sustain.quote': 'De meeste interieurs worden ontworpen voor één gebruikscyclus. Wanneer de organisatie, gebruiker of functie verandert, wordt vaak een groot deel vervangen.',
        'sustain.p1': 'Dat is de gewoonte die wij willen doorbreken. Als kennispartner in circulaire interieurbouw ontwerpen wij voor demontage: verbindingen die los kunnen, materialen die te scheiden zijn, en een registratie van wat er waar verwerkt is.',
        'sustain.p2': 'Zo blijft een interieur na de eerste gebruiker nog steeds waarde. Niet als gebaar, maar als rekensom die klopt.',
        'sustain.step1': 'Ontwerpen voor demontage',
        'sustain.step1t': 'Schroefverbindingen in plaats van lijm. Elementen die zonder beschadiging uit elkaar gaan.',
        'sustain.step2': 'Materialenpaspoort',
        'sustain.step2t': 'Vastgelegd welk materiaal waar zit, zodat hergebruik later geen zoektocht is.',
        'sustain.step3': 'Retour en revisie',
        'sustain.step3t': 'Elementen komen terug naar Nuenen, worden gereviseerd en gaan opnieuw het project in.',
        'sustain.step4': 'Tweede gebruikscyclus',
        'sustain.step4t': 'Hetzelfde maatwerk, een nieuwe locatie, zonder dat er nieuwe grondstof aan te pas komt.',
        'sustain.cta': 'Meer over circulair interieur',

        'group.eyebrow': 'De Groep',
        'group.title': 'Vier merken, één fabriek',
        'group.lede': 'Naast het projectmaatwerk ontwikkelden wij merken voor vraagstukken die om herhaalbaarheid vragen: flexibele huisvesting, modulaire badkamers en apotheekinrichting.',

        'careers.eyebrow': 'Werken bij',
        'careers.title': 'Talent past niet in een functiebeschrijving',
        'careers.p1': 'Daarom kijken we niet alleen naar wat je vandaag doet, maar ook naar wat je morgen kunt bijdragen. Bij ons werken interieurbouwers, tekenaars, projectleiders, lakspuiters, planners en applicatiebeheerders — vaak jarenlang.',
        'careers.open': 'Open vacatures',
        'careers.cta': 'Alle vacatures',
        'careers.spontaneous': 'Staat jouw functie er niet bij? Stuur een open sollicitatie.',

        'contact.eyebrow': 'Contact',
        'contact.title': 'Loop eens binnen in Nuenen',
        'contact.lede': 'De beste manier om te beoordelen of wij bij uw project passen, is de fabriek zien draaien. U bent welkom.',
        'contact.address': 'Adres',
        'contact.phone': 'Telefoon',
        'contact.mail': 'E-mail',
        'contact.cta': 'Plan een bezoek',

        'foot.tag': 'Hoogwaardige, duurzame interieurbouw. Goed ontworpen, goed uitvoerbaar.',
        'foot.nav': 'Navigatie',
        'foot.group': 'De Groep',
        'foot.rights': '© 2026 Smeulders Interieurgroep',
        'foot.concept': 'Concept-herontwerp — geen officiële uiting van Smeulders Interieurgroep',

        'index.title': 'Projecten',
        'index.lede': 'Een selectie uit het werk. Filter op sector om sneller te vinden wat op uw eigen opgave lijkt.',
        'index.empty': 'Geen projecten in deze sector.',
        'index.count': 'projecten',

        'detail.back': 'Alle projecten',
        'detail.next': 'Volgend project',
        'detail.specs': 'Projectgegevens',
        'detail.notfound': 'Dit project bestaat niet (meer).',
        'detail.notfoundcta': 'Terug naar projecten'
    },
    en: {
        'meta.title': 'Smeulders Interieurgroep — Bespoke interior construction',
        'nav.projects': 'Projects',
        'nav.about': 'About Smeulders',
        'nav.sustain': 'Sustainability',
        'nav.careers': 'Careers',
        'nav.contact': 'Contact',
        'nav.group': 'The Group',

        'hero.eyebrow': 'Interior construction since 1966 — Nuenen',
        'hero.line1': 'Well designed.',
        'hero.line2': 'Well made.',
        'hero.lede': 'High-quality, sustainable bespoke interior construction. From design and prototype through production and installation — in-house, in one pair of hands.',
        'hero.cta': 'View projects',
        'hero.cta2': 'About Smeulders',
        'hero.scroll': 'Scroll',
        'hero.caption': 'Workshop — Collse Heide, Nuenen',

        'intro.eyebrow': 'Who we are',
        'intro.title': 'Sixty years between drawing and handover',
        'intro.p1': 'Smeulders Interieurgroep has been a name in bespoke interior construction for almost sixty years. More than three hundred people deliver innovative, sustainable and high-quality interiors for companies, organisations and private clients every day.',
        'intro.p2': 'We are not a supplier who drops off a package. We sit at the table with the interior architect, draw out the detail, build the mock-up, produce in Nuenen and install with our own crews. Keeping that chain in one pair of hands is not a business model but a quality agreement.',
        'intro.pull': '“Well designed and well executable are not the same thing. Our craft lives in the difference.”',
        'intro.cta': 'Read our story',

        'stat.years': 'Years of craft',
        'stat.people': 'Colleagues',
        'stat.roof': 'Under one roof in Nuenen',
        'stat.brands': 'Brands in the group',
        'stat.roofval': 'Factory',

        'works.eyebrow': 'Projects',
        'works.title': 'Work that stays standing',
        'works.lede': 'Offices, retail, hospitality and public buildings. Different clients, the same way of working.',
        'works.all': 'All projects',
        'works.read': 'Read more about this project',

        'caps.eyebrow': 'How we work',
        'caps.title': 'The whole chain, in one pair of hands',
        'caps.lede': 'Where others hand over, we hold on. Every link below sits inside the same company — that saves assumptions, and assumptions are expensive.',

        'sustain.eyebrow': 'Sustainability',
        'sustain.title': 'An interior is raw material, not waste',
        'sustain.quote': 'Most interiors are designed for a single use cycle. When the organisation, the user or the function changes, a large part is usually replaced.',
        'sustain.p1': 'That is the habit we want to break. As a knowledge partner in circular interior construction we design for disassembly: connections that come apart, materials that can be separated, and a record of what was fitted where.',
        'sustain.p2': 'That way an interior still holds value after its first user. Not as a gesture, but as a calculation that adds up.',
        'sustain.step1': 'Design for disassembly',
        'sustain.step1t': 'Screwed connections instead of glue. Elements that come apart without damage.',
        'sustain.step2': 'Material passport',
        'sustain.step2t': 'A record of which material sits where, so reuse is not a search party later on.',
        'sustain.step3': 'Return and refurbish',
        'sustain.step3t': 'Elements come back to Nuenen, are refurbished, and go into a project again.',
        'sustain.step4': 'Second use cycle',
        'sustain.step4t': 'The same joinery, a new location, without new raw material being involved.',
        'sustain.cta': 'More on circular interiors',

        'group.eyebrow': 'The Group',
        'group.title': 'Four brands, one factory',
        'group.lede': 'Alongside bespoke project work we developed brands for questions that call for repeatability: flexible housing, modular bathrooms and pharmacy fit-out.',

        'careers.eyebrow': 'Careers',
        'careers.title': 'Talent does not fit in a job description',
        'careers.p1': 'So we look not only at what you do today, but also at what you could contribute tomorrow. Interior builders, draughtspeople, project managers, sprayers, planners and application managers work here — often for years.',
        'careers.open': 'Open positions',
        'careers.cta': 'All vacancies',
        'careers.spontaneous': 'Your role not listed? Send us an open application.',

        'contact.eyebrow': 'Contact',
        'contact.title': 'Come and see Nuenen for yourself',
        'contact.lede': 'The best way to judge whether we suit your project is to watch the factory run. You are welcome.',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.mail': 'Email',
        'contact.cta': 'Arrange a visit',

        'foot.tag': 'High-quality, sustainable interior construction. Well designed, well executable.',
        'foot.nav': 'Navigation',
        'foot.group': 'The Group',
        'foot.rights': '© 2026 Smeulders Interieurgroep',
        'foot.concept': 'Concept redesign — not an official communication of Smeulders Interieurgroep',

        'index.title': 'Projects',
        'index.lede': 'A selection of the work. Filter by sector to find something closer to your own brief.',
        'index.empty': 'No projects in this sector.',
        'index.count': 'projects',

        'detail.back': 'All projects',
        'detail.next': 'Next project',
        'detail.specs': 'Project data',
        'detail.notfound': 'This project does not exist (any more).',
        'detail.notfoundcta': 'Back to projects'
    }
};

const vacancies = [
    { title: { nl: 'Interieurbouwer', en: 'Interior builder' }, meta: { nl: 'Nuenen · Fulltime · Productie', en: 'Nuenen · Full-time · Production' } },
    { title: { nl: 'Applicatiebeheerder', en: 'Application manager' }, meta: { nl: 'Nuenen · Fulltime · IT', en: 'Nuenen · Full-time · IT' } },
    { title: { nl: 'Werkvoorbereider', en: 'Work planner' }, meta: { nl: 'Nuenen · Fulltime · Engineering', en: 'Nuenen · Full-time · Engineering' } },
    { title: { nl: 'Projectleider interieurbouw', en: 'Project manager, interiors' }, meta: { nl: 'Nuenen · Fulltime · Projecten', en: 'Nuenen · Full-time · Projects' } }
];
