import { WasteItem, TeamMember, RoadmapPhase, CompetitorComparison, FAQItem } from '../types';

export const SAMPLE_WASTE_ITEMS: WasteItem[] = [
  {
    id: 'plastic-bottle',
    name: 'PET Plastic Water Bottle',
    category: 'Recyclable',
    streamName: 'Dry Waste (Blue Bin)',
    binColor: 'blue',
    confidence: 96,
    sampleDescription: 'Single-use polyethylene terephthalate (PET-1) beverage bottle.',
    recommendedAction: 'Empty contents, rinse lightly, flatten to save space, and place into the recyclable dry waste stream.',
    stepByStep: [
      'Pour out any leftover liquid completely.',
      'Rinse lightly with a small amount of water.',
      'Crush or flatten bottle body to optimize collection volume.',
      'Replace the screw cap or collect separately per municipal preference.',
      'Deposit in Blue Dry Waste bin or bundle for local scrap dealer.'
    ],
    recyclingTip: 'Keep recyclable materials clean and dry. Contamination from food residues can cause an entire batch of plastics to be rejected at recycling facilities.',
    materialComposition: 'PET #1 (Polyethylene Terephthalate)',
    environmentalBenefit: 'Saves up to 66% energy compared to producing new virgin plastic and prevents landfill degradation that takes 450+ years.',
    iconType: 'bottle'
  },
  {
    id: 'cardboard-box',
    name: 'Corrugated Cardboard Packaging',
    category: 'Recyclable',
    streamName: 'Dry Waste (Blue Bin)',
    binColor: 'blue',
    confidence: 94,
    sampleDescription: 'E-commerce shipping box made of layered kraft paperboard.',
    recommendedAction: 'Remove synthetic packaging tape and shipping labels if possible, flatten the box, and store in a moisture-free dry bin.',
    stepByStep: [
      'Peel off heavy plastic adhesive tape and bubble wrap inserts.',
      'Break down and flatten the box completely flat.',
      'Ensure the cardboard has no wet kitchen or food grease stains.',
      'Stack with dry paper/carton waste in your Dry Waste Blue Bin.'
    ],
    recyclingTip: 'Grease-soaked cardboard (like oily pizza boxes) cannot be recycled as paper—tear oily sections for compost and recycle only clean cardboard.',
    materialComposition: 'Corrugated Paperboard (Cellulose Fibre)',
    environmentalBenefit: 'Recycling 1 ton of cardboard saves approximately 17 trees, 7,000 gallons of water, and 4,000 kWh of electricity.',
    iconType: 'cardboard'
  },
  {
    id: 'organic-scraps',
    name: 'Fruit Peels & Vegetable Scraps',
    category: 'Organic / Compost',
    streamName: 'Wet Waste (Green Bin)',
    binColor: 'green',
    confidence: 98,
    sampleDescription: 'Biodegradable kitchen food waste including banana peel and vegetable trimmings.',
    recommendedAction: 'Collect in a ventilated green bin for home composting or municipal organic biogas collection.',
    stepByStep: [
      'Separate from any plastic wrappers, twist-ties, or produce stickers.',
      'Place in your Green Wet Waste bin or home vermicompost pit.',
      'Do not mix with plastic bags or non-biodegradable liners.'
    ],
    recyclingTip: 'Organic waste that decomposes in anaerobic landfills generates harmful methane gas. Composting turns it into nutrient-rich soil humus instead.',
    materialComposition: '100% Biodegradable Biomass',
    environmentalBenefit: 'Eliminates methane release and enriches soil microbiology without chemical fertilizers.',
    iconType: 'apple'
  },
  {
    id: 'aluminum-can',
    name: 'Aluminum Beverage Can',
    category: 'Recyclable',
    streamName: 'Dry Waste (Blue Bin)',
    binColor: 'blue',
    confidence: 95,
    sampleDescription: 'Carbonated drink aluminum container with stay-on pull tab.',
    recommendedAction: 'Rinse cleanly, drain thoroughly, and deposit with metals in dry recyclables.',
    stepByStep: [
      'Drain any liquid residues completely.',
      'Give a quick rinse with greywater.',
      'Keep the pull tab attached.',
      'Deposit in Blue Dry Waste bin or sell to scrap kabadiwala.'
    ],
    recyclingTip: 'Aluminum is 100% infinitely recyclable without quality degradation. A recycled aluminum can can be back on store shelves as a new can in 60 days.',
    materialComposition: 'Alloy 3004 Aluminum',
    environmentalBenefit: 'Recycling aluminum uses 95% less energy than extracting and refining bauxite ore.',
    iconType: 'can'
  },
  {
    id: 'electronic-cable',
    name: 'Obsolete USB Charging Cable',
    category: 'E-Waste',
    streamName: 'Domestic Hazardous / E-Waste (Red Bin)',
    binColor: 'red',
    confidence: 92,
    sampleDescription: 'Damaged copper wiring enclosed in PVC insulation with metal connectors.',
    recommendedAction: 'Do NOT throw into ordinary household garbage or wet waste. Segregate into designated e-waste drop-boxes or campus collection drives.',
    stepByStep: [
      'Coil neatly and place in a dry storage box for electronic waste.',
      'Never burn plastic insulation or dump in open drains.',
      'Hand over to certified e-waste recyclers or college e-waste collection bins.'
    ],
    recyclingTip: 'E-waste contains valuable copper and trace precious metals, but also toxic flame retardants and heavy metals that poison groundwater if landfilled.',
    materialComposition: 'Copper Wire + Polyvinyl Chloride (PVC) Sheath',
    environmentalBenefit: 'Prevents heavy metal leaching into soil and conserves virgin copper extraction.',
    iconType: 'cable'
  },
  {
    id: 'glass-bottle',
    name: 'Glass Beverage Container',
    category: 'Recyclable',
    streamName: 'Dry Waste (Blue Bin)',
    binColor: 'blue',
    confidence: 93,
    sampleDescription: 'Clean flint glass bottle with crown cap removed.',
    recommendedAction: 'Rinse out contents. Remove metal cap and recycle separately. Avoid breaking glass before collection.',
    stepByStep: [
      'Empty and rinse with clean water.',
      'Remove metal cap and place cap in metal recyclables.',
      'Keep glass bottle intact to safeguard sanitation workers from cuts.',
      'Deposit in Dry Waste Blue Bin or return to reuse deposit store.'
    ],
    recyclingTip: 'Glass can be melted and remolded indefinitely without degrading in purity or strength.',
    materialComposition: 'Silica, Soda Ash, and Limestone',
    environmentalBenefit: 'Every ton of glass recycled saves 1.2 tons of virgin raw materials.',
    iconType: 'glass'
  },
  {
    id: 'tetra-pak',
    name: 'Tetra Pak Milk / Juice Carton',
    category: 'Recyclable',
    streamName: 'Dry Waste (Blue Bin - Multi-layer)',
    binColor: 'blue',
    confidence: 89,
    sampleDescription: 'Aseptic composite packaging made of paperboard, polyethylene, and aluminum foil.',
    recommendedAction: 'Rinse thoroughly, flatten completely, and segregate with dedicated carton recyclables.',
    stepByStep: [
      'Unfold flaps at top and bottom to make flat.',
      'Rinse out milk or juice traces to prevent sour odors.',
      'Push straw inside the empty pack (or recycle cap with plastics).',
      'Flatten and dry before placing into Dry Waste.'
    ],
    recyclingTip: 'Tetra Paks are multi-layered materials. Specialized paper mills separate the 75% paper fibre for recycled notebooks and the PolyAl for durable roof sheets.',
    materialComposition: '75% Paperboard, 20% Polyethylene, 5% Aluminum Foil',
    environmentalBenefit: 'Keeps high-grade virgin pulp out of landfills and supplies material for recycled furniture and building panels.',
    iconType: 'tetra'
  },
  {
    id: 'dry-battery',
    name: 'Alkaline AA Household Battery',
    category: 'Hazardous',
    streamName: 'Domestic Hazardous (Red Bin)',
    binColor: 'red',
    confidence: 97,
    sampleDescription: 'Spent zinc-manganese dioxide cylindrical consumer battery.',
    recommendedAction: 'Tape terminal ends with clear tape to prevent short circuits. Store in a non-conductive plastic jar for hazardous waste collection.',
    stepByStep: [
      'Cover positive (+) and negative (-) terminals with transparent tape.',
      'Store in a child-safe, non-conductive container away from heat.',
      'Do not mix with dry recyclables or compost.',
      'Drop off at authorized electronics stores or municipal hazardous collection drives.'
    ],
    recyclingTip: 'Batteries contain corrosive potassium hydroxide and heavy metals. When crushed in standard garbage trucks, they can cause explosive fires.',
    materialComposition: 'Zinc, Manganese Dioxide, Steel Casing, Potassium Hydroxide',
    environmentalBenefit: 'Prevents heavy toxic chemicals from contaminating groundwater reservoirs and municipal soil.',
    iconType: 'battery'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Challa Purushotham',
    college: 'Pragati Engineering College',
    major: 'Artificial Intelligence',
    role: 'Founder, Product Development, AI/ML, Strategy & Market Research',
    skills: ['Python', 'AI/ML', 'Data Analysis', 'Programming', 'Problem Solving', 'Presenting'],
    bio: 'Leading the AI model architecture, computer vision pipelines, and venture roadmap. Passionate about applying machine learning to practical municipal and household sustainability challenges.',
    initials: 'CP'
  },
  {
    name: 'Gundumogula Teja Yashwanth',
    college: 'Pragati Engineering College',
    major: 'Computer Science & Engineering',
    role: 'Product Development, UI/UX Design, Testing & Technical Support',
    skills: ['Python', 'Web Development', 'UI/UX Design', 'Database Management', 'Testing', 'Communication'],
    bio: 'Directing the end-to-end user experience, front-end architecture, camera workflow responsiveness, and comprehensive system testing to ensure zero-friction waste identification.',
    initials: 'GY'
  },
  {
    name: 'Buddaraju Satwik Varma',
    college: 'Pragati Engineering College',
    major: 'Computer Science & Engineering',
    role: 'Marketing, Customer Research, Partnerships & Business Development',
    skills: ['Digital Marketing', 'Market Research', 'Social Media', 'Communication', 'Presenting', 'Sales'],
    bio: 'Driving ground customer interviews, institutional college outreach, student community engagement, and go-to-market distribution strategies across urban centers.',
    initials: 'BV'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: 'Months 1–3',
    timeline: 'Q1 Planned Milestones',
    goal: 'Build AI prototype and test with 50 users',
    team: '3 Core Founders',
    funds: '₹1.0 Lakh',
    resources: 'Laptops / Cloud Compute',
    status: 'In Progress',
    milestones: [
      'Interactive Figma digital app prototype completion',
      'Initial computer vision dataset compilation for top 15 household waste types',
      'Pilot testing with 50 early household and student participants',
      'Establish baseline classification accuracy and UI latency benchmarks'
    ]
  },
  {
    phase: 'Months 4–6',
    timeline: 'Q2 Planned Milestones',
    goal: 'Launch prototype and collect user feedback',
    team: '3 Founders + 1 Intern',
    funds: '₹1.5 Lakh',
    resources: 'Cloud Hosting / Test Smartphones',
    status: 'Planned',
    milestones: [
      'Deploy responsive web & hybrid smartphone prototype',
      'Expand dataset to 30+ multi-layer packaging and regional Indian waste items',
      'Incorporate early feedback: offline mode exploration and recycling stream guides',
      'Campus pilot trial at Pragati Engineering College'
    ]
  },
  {
    phase: 'Months 7–9',
    timeline: 'Q3 Planned Milestones',
    goal: 'Launch app and gain 500 users',
    team: '3 Founders + 2 Interns',
    funds: '₹2.0 Lakh',
    resources: 'Cloud Infrastructure / Laptops',
    status: 'Upcoming',
    milestones: [
      'Public beta release on Android / Web distribution',
      'Acquire first 500 active household and college subscriber users',
      'Roll out college campus dashboard for institutional waste tracking',
      'Iterative model retraining based on real user image submissions'
    ]
  },
  {
    phase: 'Months 10–12',
    timeline: 'Q4 Planned Milestones',
    goal: 'Reach 1,000 users and expand partnerships',
    team: '3 Founders + 3 Staff',
    funds: '₹2.5 Lakh',
    resources: 'Dedicated GPU Instances / Laptops',
    status: 'Upcoming',
    milestones: [
      'Scale to 1,000+ paid and institutional users across Andhra Pradesh',
      'Formalize partnership inquiries with 5+ educational institutions',
      'Prepare integration APIs for local municipal waste collection schedules',
      'Achieve target Year 1 revenue milestone'
    ]
  }
];

export const COMPETITORS: CompetitorComparison[] = [
  {
    name: 'Recykal',
    type: 'Indirect',
    strength: 'Strong nationwide recycling ecosystem & material marketplace',
    limitation: 'Focuses primarily on large B2B enterprises, industrial waste, and bulk aggregators',
    differentiator: 'AI Waste Recognition directly serves everyday households and college students with instant smartphone camera guidance.'
  },
  {
    name: 'Wasteless',
    type: 'Direct',
    strength: 'Clean algorithmic food waste sorting concepts',
    limitation: 'Limited integration with local Indian municipal segregation bins and domestic waste habits',
    differentiator: 'Tailored specifically for Indian waste streams (Wet green, Dry blue, Domestic hazardous red) with local context.'
  },
  {
    name: 'TrashBot',
    type: 'Direct',
    strength: 'Robotic automated bin with embedded computer vision hardware',
    limitation: 'High capital expenditure; expensive hardware unfeasible for individual households',
    differentiator: 'Zero extra hardware required; runs directly on the smartphone camera users already own.'
  },
  {
    name: 'Recycle Coach',
    type: 'Direct',
    strength: 'Comprehensive municipal calendar and disposal knowledge base',
    limitation: 'Relies on manual text search with limited real-time AI computer vision image classification',
    differentiator: 'Immediate visual recognition: simply point the camera at any item rather than typing search queries.'
  },
  {
    name: 'AI Waste Recognition',
    type: 'Direct',
    strength: 'Instant smartphone camera AI identification + hyper-local disposal instructions',
    limitation: 'Early-stage prototype scaling its dataset across diverse packaging formats',
    differentiator: 'Affordable (₹500/year B2C, ₹10k campus SaaS), intuitive for all ages, built around Indian waste realities.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What is AI Waste Recognition?',
    answer: 'AI Waste Recognition is an AI-powered digital solution that allows users to identify waste items using their smartphone camera. It instantly categorizes items into recyclable, organic, hazardous, or general waste and provides simple, actionable instructions on whether the item should be recycled, reused, composted, or disposed of properly.'
  },
  {
    category: 'Technology',
    question: 'How does the AI identify waste?',
    answer: 'The system uses computer vision and deep learning image recognition algorithms (planned stack: Python, TensorFlow/PyTorch, OpenCV) trained on packaging types, materials, shapes, and textures. When a photo is taken, the model classifies the item, assesses confidence, and references a local disposal knowledge engine.'
  },
  {
    category: 'Usage',
    question: 'Can I scan waste using my phone?',
    answer: 'Yes! The entire experience is engineered specifically for smartphone convenience. You open the application, aim your camera at any waste item or upload a photo, and receive guidance in under two seconds without typing or searching manual databases.'
  },
  {
    category: 'Usage',
    question: 'What types of waste can it identify?',
    answer: 'The system is built to identify common domestic and campus waste streams: plastics (bottles, containers, poly-wraps), paper and corrugated cardboard, organic food scraps, metals and aluminum cans, glass, multi-layer cartons (such as Tetra Paks), and domestic e-waste/cables.'
  },
  {
    category: 'General',
    question: 'Does the app tell me how to recycle?',
    answer: 'Yes. Beyond just identifying the material, it provides practical preparation steps—such as rinsing food residues, flattening boxes, removing caps, or keeping materials dry—as well as educational recycling tips to prevent bin contamination.'
  },
  {
    category: 'General',
    question: 'Who is the product for?',
    answer: 'Our primary customer is urban and semi-urban households (adults aged 25–50) who want to segregate waste correctly at home but lack clear guidance. Secondary customers include schools, colleges, and institutions seeking to instill sustainable habits and clean campus waste streams.'
  },
  {
    category: 'Institutions',
    question: 'Is it available for colleges?',
    answer: 'Yes, we are actively piloting with colleges! We offer an institutional SaaS tier (₹10,000/year per college) that includes campus student awareness campaigns, segregation tracking, and educational materials tailored to campus mess halls, labs, and hostels.'
  },
  {
    category: 'Institutions',
    question: 'How can colleges partner with us?',
    answer: 'Colleges can reach out through our website contact section or partner inquiry form. We collaborate with student green clubs, NSS/environmental chapters, and campus administration to run pilots, workshop sessions, and early access programs.'
  }
];

export const PRIMARY_PERSONA = {
  name: 'K. Suresh',
  age: 35,
  location: 'Visakhapatnam, Andhra Pradesh',
  occupation: 'Working Professional / Private Company Employee',
  education: 'Graduate',
  techComfort: 'Comfortable with smartphones, mobile applications, and UPI/digital payments',
  interests: ['Terrace Gardening', 'Fitness & Walking', 'Family Activities', 'Environmental Awareness'],
  shoppingHabits: 'Mix of online shopping (Amazon, Flipkart) and local neighborhood markets',
  socialPlatforms: ['WhatsApp', 'YouTube', 'Instagram'],
  infoSources: ['Online News Feeds', 'YouTube Channels', 'Regional & National News Apps'],
  keyQuote: '“I want to segregate our family waste properly, but every brand uses different plastics and packaging. If I could just take a photo with my phone and know the right bin in 2 seconds, we would do it every day.”'
};
