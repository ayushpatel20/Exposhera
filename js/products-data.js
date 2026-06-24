/* ==========================================================================
   EXPOSHERA SECURITY & PPE - PRODUCTS DATABASE DATA SET
   ========================================================================== */

const PRODUCTS_DATA = [];

// 1. Generate 42 Reflective Safety Jacket Models (RN-01 to RN-42)
for (let i = 1; i <= 42; i++) {
    const code = `RN-${i.toString().padStart(2, '0')}`;
    // Varied features and parameters based on code to make catalog rich
    const gsmVal = i % 2 === 0 ? '120 GSM' : '150 GSM';
    const fabricType = i % 3 === 0 ? 'Lightweight Polyester Mesh' : (i % 3 === 1 ? 'Heavy Duty Solid Polyester' : 'Dual-Tone Polyester Knit');
    const tapeSize = i % 2 === 0 ? '2-inch Premium Glass Bead Tape' : '3-inch Dual-Band High-Intensity Microprismatic Tape';
    
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: `Reflective Safety Jacket ${code}`,
        category: 'jackets',
        image: 'images/products/' + code + '.png',
        description: `Premium grade high-visibility reflective safety jacket designed for operations in high-risk zones. Ensures maximum night visibility and complies with global safety standards. Features dual mic loops and accessory pockets.`,
        features: [
            'High-Intensity Retroreflective Silver Stripes',
            'Ultra-breathable quick-dry fabric core',
            'Strong front zipper / heavy duty Velcro closures',
            'Reinforced pen pockets, utility D-rings, and ID holders'
        ],
        specs: {
            'Fabric': fabricType,
            'Reflective Tape': tapeSize,
            'Weight/GSM': gsmVal,
            'Standard': 'EN ISO 20471 Class 2 Certified',
            'MOQ': '100 Pieces',
            'Durability': 'Up to 50 Industrial Wash Cycles'
        },
        apps: [
            'Construction Site Supervisors',
            'Municipal Road Repair Crews',
            'Traffic Control and Logistics Marshals',
            'Airfield Ground and Loading Personnel'
        ],
        colors: i % 2 === 0 ? ['Hi-Vis Orange', 'Neon Green'] : ['Hi-Vis Lime', 'Royal Blue / Neon Dual-Tone'],
        moq: '100 Pcs'
    });
}

// 2. Add Safety Gloves (13 Products)
const gloveTypes = [
    { name: 'Dotted Gloves', desc: 'Premium cotton knit gloves with anti-slip PVC dots on palms.', apps: ['General warehousing', 'Box handling', 'Light assembly'] },
    { name: 'Double Side Dotted Gloves', desc: 'Double-sided PVC dotted cotton gloves for double the durability.', apps: ['Material handling', 'Logistics operations', 'Package shipping'] },
    { name: 'Industrial Gloves', desc: 'Heavy-duty protection gloves for robust mechanical and tool handling.', apps: ['Metal fabrication', 'Tool operations', 'Maintenance'] },
    { name: 'Chemical Gloves', desc: 'Acid and solvent resistant neoprene/nitrile blended safety gloves.', apps: ['Chemical handling', 'Laboratory testing', 'Petrochemical refineries'] },
    { name: 'Tiger Gloves', desc: 'Extremely durable cut-resistant gloves with high-grip palm coatings.', apps: ['Glass handling', 'Blade operations', 'Sharp edge assembly'] },
    { name: 'Leather Gloves', desc: 'Premium split cowhide leather work gloves protecting against abrasions.', apps: ['Dry-land farming', 'Heavy machinery operation', 'General labor'] },
    { name: 'Chrome Leather Gloves', desc: 'Chrome-tanned heavy duty split leather gloves for extreme friction resistance.', apps: ['Rigging', 'Structural steel work', 'Loading operations'] },
    { name: 'Cotton Gloves', desc: 'Lightweight, breathable cotton canvas gloves for basic skin protection.', apps: ['Dust protection', 'Base lining in cold stores', 'Light handling'] },
    { name: 'Nitrile Gloves', desc: 'Disposable medical and chemical-grade latex-free nitrile examination gloves.', apps: ['Medical examinations', 'Electronics assembly', 'Food service handling'] },
    { name: 'PVC Gloves', desc: 'Fully liquid-proof red PVC coated gloves with cotton jersey liner.', apps: ['Oil handling', 'Sanitation sweeps', 'Commercial wet environments'] },
    { name: 'Rubber Gloves', desc: 'Premium natural rubber latex gloves with anti-slip texturing.', apps: ['Janitorial sweeps', 'Household chemical mixing', 'General cleaning'] },
    { name: 'Heat Resistant Gloves', desc: 'Aramid fiber and fiberglass lined gloves rated for high thermal exposures.', apps: ['Oven handling', 'Foundry inspections', 'Die casting operations'] },
    { name: 'Welding Gloves', desc: '14-inch heavy-duty split cowhide leather welding gauntlets with heat insulation.', apps: ['MIG/TIG Welding', 'High heat slag protection', 'Forge handling'] }
];

gloveTypes.forEach((glv, idx) => {
    const code = `GLV-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: glv.name,
        category: 'gloves',
        image: 'images/products/' + code + '.png',
        description: `${glv.desc} Offers consistent comfort, high breathability, and reliable palm-side barrier shielding matching industrial specifications.`,
        features: [
            'Ergonomically contoured fit to reduce muscle fatigue',
            'Superior abrasion, puncture, and tear resistance',
            'Textured surface pattern for firm wet/dry gripping',
            'Standard elastic cuffs to seal out dust and debris'
        ],
        specs: {
            'Material': glv.name.includes('Leather') ? 'Premium Cowhide Split Leather' : (glv.name.includes('Nitrile') ? 'Latex-free Nitrile Nitrosamine-Safe' : 'Premium Cotton & PVC Blend'),
            'Standards Compliance': 'EN 388 mechanical risk and EN 420 standards compliant',
            'MOQ': '500 Pairs',
            'Size Range': 'Medium / Large / Extra Large'
        },
        apps: glv.apps,
        colors: ['Industrial Gray', 'High-Vis Yellow', 'Safety Red'],
        moq: '500 Pairs'
    });
});

// 3. Add Safety Shoes (12 Products)
const shoeTypes = [
    { name: 'PVC Rexin Shoes', desc: 'Water-resistant synthetic leather construction safety shoes.' },
    { name: 'PVC High Ankle Shoes', desc: 'High-ankle support boots with steel mid-soles for construction zones.' },
    { name: 'Leather PVC Shoes', desc: 'Genuine leather upper shoes with durable injected PVC soles.' },
    { name: 'Leather PU Shoes', desc: 'Premium split leather work shoes with dual-density lightweight PU soles.' },
    { name: 'Ladies Safety Shoes', desc: 'Lightweight safety shoes tailored for female corporate engineers.' },
    { name: 'PVC Gumboots', desc: '100% waterproof heavy-duty PVC gumboots with steel toe safety.' },
    { name: 'Rubber Gumboots', desc: 'Extremely flexible vulcanized natural rubber gumboots for agricultural mud.' },
    { name: 'Industrial Safety Boots', desc: 'Heavy duty safety boots offering structural support and puncture guards.' },
    { name: 'Steel Toe Safety Shoes', desc: '200J steel toe impact protection utility shoes with anti-static soles.' },
    { name: 'Anti Slip Shoes', desc: 'SRC certified slip-resistant safety shoes for wet commercial kitchens.' },
    { name: 'Oil Resistant Shoes', desc: 'Hydrocarbon-resistant rubber outsoles designed for mechanical garages.' },
    { name: 'Electrical Safety Shoes', desc: 'Insulated shockproof safety boots rated for high-voltage industrial zones.' }
];

shoeTypes.forEach((sh, idx) => {
    const code = `SHS-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: sh.name,
        category: 'shoes',
        image: 'images/products/' + code + '.png',
        description: `${sh.desc} Built to withstand severe floor friction, heavy object drops, and structural punctures. Features sweat-absorbing linings and heel shock absorption cushioning.`,
        features: [
            'Hardened 200 Joules steel toe cap impact shields',
            'Puncture resistant steel plate mid-soles (1100N protection)',
            'Oil-resistant, acid-resistant, and anti-static outsoles',
            'Cushioned dual-density insoles for standing comfort'
        ],
        specs: {
            'Upper Material': sh.name.includes('PVC') ? 'Premium Water-Resistant PVC' : 'Top Grain Buff Leather',
            'Sole Injected': sh.name.includes('PU') ? 'Dual-Density PU Sole' : 'Vulcanized Slip-Resistant Rubber/PVC',
            'Standards': 'IS 15298 and EN ISO 20345 Compliant',
            'MOQ': '50 Pairs'
        },
        apps: [
            'Structural Engineering and Construction Sites',
            'Automotive and Assembly Workshops',
            'Oil Rig Inspections and Chemical Facilities',
            'Logistics Hubs and Cargo Loading Docks'
        ],
        colors: ['Matte Black', 'Dark Brown', 'Hi-Vis Striped Accent'],
        moq: '50 Pairs'
    });
});

// 4. Add Safety Helmets (8 Products)
const helmetTypes = [
    { name: 'Labour Helmet', desc: 'Classic lightweight HDPE safety helmet designed for manual site laborers.' },
    { name: 'Ratchet Helmet', desc: 'Adjustable suspension shell with smooth ratchet dial fitment.' },
    { name: 'Torch Helmet', desc: 'Tactical safety helmet with integrated headlamp/torch mounting brackets.' },
    { name: 'Industrial Helmet', desc: 'Heavy impact ABS plastic safety helmet with 6-point textile suspension.' },
    { name: 'Construction Helmet', desc: 'Sturdy site helmet with drip rain gutters and earmuff attachment slots.' },
    { name: 'Electrical Helmet', desc: 'Unventilated electrical insulation helmet rated for high-voltage work.' },
    { name: 'Mining Helmet', desc: 'Reinforced mining safety helmet with mining cap lamp bracket and cable loop.' },
    { name: 'Ventilated Helmet', desc: 'Breathable safety helmet with slide vents to regulate internal airflow.' }
];

helmetTypes.forEach((hlm, idx) => {
    const code = `HLM-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: hlm.name,
        category: 'helmets',
        image: 'images/products/' + code + '.png',
        description: `${hlm.desc} Engineered for maximum lateral crush resistance and vertical drop protection in tough operational zones. Includes sweatbands and adjustable chin straps.`,
        features: [
            'Heavy shell molded from high-impact ABS / HDPE material',
            'Shock absorbing inner crown structure',
            'Universal side accessory slots for ear defenders and visors',
            'Fully adjustable chin-strap with quick-release locks'
        ],
        specs: {
            'Shell Material': hlm.name.includes('Industrial') ? 'High-Impact ABS Polymer' : 'High-Density Polyethylene (HDPE)',
            'Suspension System': '6-Point textile suspension with sweatband pads',
            'Volt Protection': hlm.name.includes('Electrical') ? 'Rated up to 20,000 Volts (Class E)' : 'Basic Static Protection',
            'Certification': 'IS 2925 and EN 397 Standard Certified',
            'MOQ': '100 Pcs'
        },
        apps: [
            'Commercial Building Construction Sites',
            'Heavy Metal Fabrication Yards',
            'Underground Mining and Tunnel Excavations',
            'Electrical Line and Transformer Grid Maintenance'
        ],
        colors: ['Signal Yellow', 'Classic White', 'Safety Orange', 'Vibrant Blue'],
        moq: '100 Pcs'
    });
});

// 5. Add Fall Protection (7 Products)
const fallTypes = [
    { name: 'Safety Harness', desc: 'Standard single-point industrial safety fall protection harness.' },
    { name: 'Full Body Harness', desc: 'Premium multi-point rescue and suspension full-body harness.' },
    { name: 'Double Lanyard', desc: 'Shock absorbing double webbing lanyard with large scaffolding hooks.' },
    { name: 'Shock Absorbing Lanyard', desc: 'Polyester webbing lanyard with tear-web energy absorber pack.' },
    { name: 'Elastic Belt', desc: 'Ergonomic lumbar support positioning belt with side D-rings.' },
    { name: 'Life Safety Jacket', desc: 'Inflatable high-visibility marine life jacket with integrated safety belt.' },
    { name: 'Cross Safety Jacket', desc: 'Cross-back safety webbing vest designed for fast work-position rigging.' }
];

fallTypes.forEach((fl, idx) => {
    const code = `FAL-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: fl.name,
        category: 'fall',
        image: 'images/products/' + code + '.png',
        description: `${fl.desc} Offers reliable fall arrest and suspension support. Features heavy-duty alloy steel buckles and durable polyester webbing thread structures.`,
        features: [
            'Made from 44mm high-tensile polyester safety webbing',
            'Dorsal fall-arrest D-rings and chest anchoring loops',
            'Fully adjustable shoulder, chest, and thigh straps',
            'Integrated fall indicator threads for inspection audits'
        ],
        specs: {
            'Webbing Material': 'High-Tensile Virgin Polyester (breaking strength >22kN)',
            'Metal Componentry': 'Alloy Steel Zinc-Plated D-rings and buckles',
            'Standards': 'IS 3521 and EN 361 Fall Arrest Standards Compliant',
            'Max User Weight': '140 Kg (including tool packs)'
        },
        apps: [
            'High-rise Building Window Cleaners',
            'Scaffolding Erector Crews',
            'Telecommunication Tower Maintenance Technicians',
            'Bridge Riggers and Overhead Crane Operators'
        ],
        colors: ['Vibrant Green / Black Dual-Tone', 'Safety Orange'],
        moq: '25 Pcs'
    });
});

// 6. Add Road Safety Products (14 Products)
const roadTypes = [
    { name: 'Traffic Cone', desc: 'Highly flexible fluorescent orange PVC cones with reflective sleeves.' },
    { name: 'Road Barrier', desc: 'Water-fillable interlocking plastic road dividers for traffic control.' },
    { name: 'PVC Chain', desc: 'Highly visible lightweight plastic chains for temporary queue barricades.' },
    { name: 'Road Stud', desc: 'Heavy-duty aluminum cat-eyes studs with high-intensity glass reflectors.' },
    { name: 'Speed Breaker', desc: 'Modular heavy-duty rubber speed bumps with yellow safety markers.' },
    { name: 'Convex Mirror', desc: 'Impact resistant polycarbonate convex blind spot security mirrors.' },
    { name: 'Q Manager', desc: 'Stainless steel retractable belt queue barriers for lobby control.' },
    { name: 'Spring Post', desc: 'Highly resilient PU delineator posts that rebound after vehicle hits.' },
    { name: 'Floor Marking Tape', desc: 'Self-adhesive heavy-duty floor caution marking tape for floor zones.' },
    { name: 'Retro Reflective Tape', desc: 'Premium microprismatic reflective tape for industrial vehicles.' },
    { name: 'Caution Tape', desc: 'Non-adhesive printed polyethylene warning barricade barricade tape.' },
    { name: 'Solar Blinker', desc: 'Energy-independent flashing solar traffic blinkers with LED lights.' },
    { name: 'Warning Light', desc: 'Flashing hazard caution beacon warning lights with photocell sensors.' },
    { name: 'Wet Floor Sign', desc: 'Highly visible yellow A-frame warning caution wet floor signboards.' }
];

roadTypes.forEach((rd, idx) => {
    const code = `ROD-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: rd.name,
        category: 'road',
        image: 'images/products/' + code + '.png',
        description: `${rd.desc} Specially designed to regulate traffic control, restrict restricted zones, and warn pedestrians in industrial, commercial, and roadway sites.`,
        features: [
            'Fluorescent pigments and reflective bands for maximum visibility',
            'UV-stabilized weather-resistant material blends',
            'Heavy stable base anchors to resist strong wind currents',
            'Impact resilience to absorb light vehicular crashes'
        ],
        specs: {
            'Material': rd.name.includes('Barrier') || rd.name.includes('Cone') ? 'UV-Stabilized Linear Polyethylene / Flexible PVC' : 'Recycled Vulcanized Rubber',
            'Reflector Bands': 'High-intensity microprismatic reflective sheets',
            'Weather Proofing': 'Tested under extreme heat and sub-zero temperatures',
            'MOQ': '50 Pcs'
        },
        apps: [
            'Municipal Road Works and Highway Diversions',
            'Industrial Factory Floor Layout Delineations',
            'Corporate Office Parking Lot Operations',
            'Commercial Plaza Entrance Lane Controls'
        ],
        colors: ['Fluor Orange', 'Yellow / Black Delineations', 'Caution Red'],
        moq: '50 Pcs'
    });
});

// 7. Add Welding Safety Equipment (12 Products)
const weldTypes = [
    { name: 'Welding Helmet', desc: 'Auto-darkening liquid crystal solar-powered welding visor shields.' },
    { name: 'Face Shield', desc: 'Clear impact-resistant polycarbonate grinding splash face shields.' },
    { name: 'Leather Apron', desc: 'Genuine split cowhide leather welding aprons protecting from sparks.' },
    { name: 'PVC Apron', desc: 'Acid, grease, and fluid resistant heavy-duty PVC chemical aprons.' },
    { name: 'Hand Sleeve', desc: 'Insulative heavy split leather welding hand arm sleeve protectors.' },
    { name: 'Leg Guard', desc: 'Adjustable heavy leather welding spats leg and ankle guards.' },
    { name: 'Shoulder Pad', desc: 'Genuine leather padding designed to cushion tool and pipe carrying.' },
    { name: 'Welding Glass', desc: 'Dark green shade welding filter lens replacements for goggles.' },
    { name: 'Welding Cable', desc: 'Highly flexible rubber-jacketed copper core welding machine cables.' },
    { name: 'Electrode Holder', desc: 'Heavy duty insulated brass electrode welding holder clamps.' },
    { name: 'Gas Hose Pipe', desc: 'High pressure dual-line oxy-acetylene red/blue gas rubber hoses.' },
    { name: 'Fiber Hand Screen', desc: 'Hand-held vulcanized fiber welding screens with dark lens slots.' }
];

weldTypes.forEach((wd, idx) => {
    const code = `WLD-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: wd.name,
        category: 'welding',
        image: 'images/products/' + code + '.png',
        description: `${wd.desc} Engineered to guard personnel from intense spark spatter, UV/IR arc radiation, high-voltage currents, and heat scaling.`,
        features: [
            'Made from premium flame-retardant split cowhide leather',
            'Reinforced Kevlar stitching for seams to prevent thread tears',
            'Fully adjustable suspenders and hook-and-loop straps',
            'Thermal insulation layering to shield skin from heat transfer'
        ],
        specs: {
            'Shield Material': wd.name.includes('Apron') || wd.name.includes('Sleeve') ? 'Premium Buff Split Leather' : 'High impact thermoplastic',
            'Stitching Threads': 'Premium 3-ply Kevlar flame-resistant stitching',
            'Certifications': 'EN 175 and EN 11611 welding safety compliant',
            'MOQ': '100 Pcs'
        },
        apps: [
            'Heavy Metal Fabrication Workshops',
            'Automotive Chassis Welding Lines',
            'Structural Bridge Girder Joints',
            'General Maintenance Piping Operations'
        ],
        colors: ['Amber / Charcoal Gray', 'Golden Yellow Cowhide'],
        moq: '100 Pcs'
    });
});
