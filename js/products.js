/**
 * HIDIN 3D - Product Catalogue Data
 * Comprehensive collection across all 12 official categories.
 * Features realistic 3D-printing visuals, layer specs, and customisation details.
 * Note: Never contains prices or stock amounts (strictly showcase & WhatsApp enquiry).
 */

const CATEGORIES = [
  {
    id: "articulated-dragons-flexi",
    name: "Articulated Dragons and Flexi Toys",
    shortName: "Dragons & Flexi Toys",
    icon: "sparkles",
    count: 3,
    description: "Satisfying print-in-place articulated creatures with fluid movement and crystal detailing."
  },
  {
    id: "figurines-collectibles",
    name: "Figurines and Collectibles",
    shortName: "Figurines & Collectibles",
    icon: "user",
    count: 2,
    description: "Detailed character sculpts, geometric art pieces, and gaming collectibles."
  },
  {
    id: "personalised-gifts",
    name: "Personalised Gifts",
    shortName: "Personalised Gifts",
    icon: "gift",
    count: 2,
    description: "Bespoke lithophanes, custom commemorative plaques, and thoughtful 3D keepsakes."
  },
  {
    id: "keychains-name-tags",
    name: "Custom Keychains and Name Tags",
    shortName: "Keychains & Name Tags",
    icon: "tag",
    count: 2,
    description: "Dual-color embossed keychains, Spotify code tags, and personalized bag charms."
  },
  {
    id: "home-decor-vases",
    name: "Home Decor and Decorative Vases",
    shortName: "Home Decor & Vases",
    icon: "home",
    count: 2,
    description: "Parametric Voronoi vases, ambient lunar lamps, and geometric centerpieces."
  },
  {
    id: "desk-accessories",
    name: "Desk Accessories and Organisers",
    shortName: "Desk Organisers",
    icon: "layout-grid",
    count: 2,
    description: "Hexagonal desk tidy stations, modular magnetic cable guides, and headphone stands."
  },
  {
    id: "phone-tech-accessories",
    name: "Phone Stands and Tech Accessories",
    shortName: "Phone & Tech Stands",
    icon: "smartphone",
    count: 2,
    description: "Ergonomic viewing angles, MagSafe dock docks, and compact folding tablet mounts."
  },
  {
    id: "mini-planters",
    name: "Mini Planters",
    shortName: "Mini Planters",
    icon: "flower-2",
    count: 2,
    description: "Low-poly geometric succulent pots with built-in drainage systems."
  },
  {
    id: "miniatures-models",
    name: "Miniatures and Models",
    shortName: "Miniatures & Models",
    icon: "box",
    count: 2,
    description: "High-resolution resin prints for tabletop gaming, architecture, and dioramas."
  },
  {
    id: "cosplay-props",
    name: "Cosplay Props",
    shortName: "Cosplay Props",
    icon: "shield",
    count: 2,
    description: "Lightweight, wearable sci-fi helmets, cyberpunk masks, and display armors."
  },
  {
    id: "functional-parts",
    name: "Functional Parts and Components",
    shortName: "Functional Parts",
    icon: "cpu",
    count: 2,
    description: "Heavy-duty replacement brackets, engineering gears, and custom enclosures in PETG."
  },
  {
    id: "custom-3d-printing",
    name: "Custom 3D Printing",
    shortName: "Custom 3D Printing",
    icon: "wand-2",
    count: 1,
    description: "Have your own 3D model (STL/OBJ) or idea? We bring bespoke concepts to reality."
  }
];

const PRODUCTS = [
  // 1. Articulated Dragons and Flexi Toys
  {
    id: "crystal-dragon-01",
    name: "Imperial Crystal Articulated Dragon",
    category: "Articulated Dragons and Flexi Toys",
    categoryId: "articulated-dragons-flexi",
    badge: "Bestseller",
    printSpec: "Print-In-Place • 0.12mm Layers",
    shortDescription: "60cm print-in-place dragon with sharp crystal spines and hyper-fluid interlocking joints.",
    fullDescription: "Our signature showpiece! Printed as a single continuous piece directly on our textured PEI bed. Each joint is engineered with 0.3mm tolerance so it moves completely fluidly straight off the printer with no assembly. The dual-color silk filament creates an iridescent shimmer as it flexes in your hands.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    materials: ["Silk Dual-Color PLA", "Tricolor Silk PLA", "Glow-in-the-Dark Green", "Obsidian Matte PLA"],
    colors: ["Purple / Cyan Dual-Tone", "Gold / Crimson Silk", "Emerald Silk", "Shadow Black"],
    sizes: ["Standard (45cm)", "Imperial Giant (65cm)", "Pocket Baby (25cm)"],
    customizable: true,
    customOptions: ["Scale size", "Silk colorway blend", "Optional egg cradle container"],
    features: [
      "Zero assembly needed: fully interlocking joints printed in-place",
      "Silky high-gloss finish that shimmers under ambient lighting",
      "Reinforced segment pins for durable flex play and display"
    ]
  },
  {
    id: "flexi-void-octopus",
    name: "Flexi Void Octopus",
    category: "Articulated Dragons and Flexi Toys",
    categoryId: "articulated-dragons-flexi",
    badge: "Desk Fidget",
    printSpec: "Print-In-Place • Silk Finish",
    shortDescription: "Multi-jointed tentacles with natural wave-like curling movement and suction-cup details.",
    fullDescription: "A fan favourite for desk setups and stress relief. The Flexi Void Octopus features 8 multi-articulated tentacles printed with interlocking ball-and-socket links that drape naturally over your hand or monitor. Printed with zero support material for seamless tactile joints.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85",
    materials: ["Silk PLA", "Matte Pastel PLA", "Flexible TPU"],
    colors: ["Cyber Cyan", "Electric Violet", "Dual Tone Blue/Purple", "Matte Coral"],
    sizes: ["Compact (12cm spread)", "Standard (18cm spread)", "Giant (25cm spread)"],
    customizable: true,
    customOptions: ["Tentacle span", "Colorway", "Magnetic head base option"],
    features: [
      "Realistic fluid tentacle movement",
      "Textured suction cup bottoms with micro-layer detailing",
      "Comfortable palm-filling desk companion"
    ]
  },
  {
    id: "flexi-rex-dino",
    name: "Articulated Cyber T-Rex",
    category: "Articulated Dragons and Flexi Toys",
    categoryId: "articulated-dragons-flexi",
    badge: "Poseable",
    printSpec: "Tough PLA • Snap-Jaw",
    shortDescription: "Playful poseable dinosaur with snap-jaw action and articulated vertebrae spine.",
    fullDescription: "A durable prehistoric friend printed with robust hinge tolerances. Stands freely on two feet and features a snap-action jaw and wagging tail segments that kids and adults adore. Printed in high-impact biodegradable PLA.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Impact Tough PLA", "Silk Chameleon PLA"],
    colors: ["Neon Green", "Cyberpunk Cyan", "Volcano Orange", "Stealth Charcoal"],
    sizes: ["Small (14cm)", "Standard (20cm)", "Jumbo (30cm)"],
    customizable: true,
    customOptions: ["Custom engraved name on belly", "Color selection"],
    features: [
      "Stands independently on any flat surface",
      "Movable snap jaw and tail vertebrae",
      "Eco-friendly, non-toxic bio-based PLA"
    ]
  },

  // 2. Figurines and Collectibles
  {
    id: "cyber-samurai-figure",
    name: "Cyber Samurai Collector Figurine",
    category: "Figurines and Collectibles",
    categoryId: "figurines-collectibles",
    badge: "Art Piece",
    printSpec: "12K SLA Resin • 25µm Layers",
    shortDescription: "Ultra-fine sculpted cyberpunk warrior with dual katanas and high-tech battle armor.",
    fullDescription: "Crafted for enthusiasts of futuristic aesthetics. Printed on our industrial 12K photopolymer resin printer down to 0.025mm layer height, eliminating visible layer lines. Features exoskeleton cabling, faceted armor plates, and weighted pedestal.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Detail UV Resin", "Matte Silk PLA"],
    colors: ["Primed Grey (Painter's Ready)", "Obsidian Black & Neon Purple", "Metallic Chrome Silver"],
    sizes: ["1:10 Scale (18cm)", "1:6 Scale (28cm)"],
    customizable: true,
    customOptions: ["Hand-primed for painting", "Customized display base with engraved name"],
    features: [
      "Micro-detail 0.025mm layer precision in cured photopolymer resin",
      "Includes weighted hexagonal pedestal",
      "Detachable katana blades"
    ]
  },
  {
    id: "geometric-low-poly-fox",
    name: "Geometric Low-Poly Spirit Fox",
    category: "Figurines and Collectibles",
    categoryId: "figurines-collectibles",
    badge: "Modern Art",
    printSpec: "Faceted FDM • Silk Lustre",
    shortDescription: "Faceted low-poly geometry catching shadows and light from every angle.",
    fullDescription: "A modern sculptural piece that elevates any bookshelf, coffee table, or designer workstation. The clean polygonal facets catch ambient light and create dramatic geometric shadows. Finished with a subtle weighted base.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=85",
    materials: ["Silk PLA", "Matte Marble PLA", "Wood-Infused Filament"],
    colors: ["Brushed Rose Gold", "Electric Cyan", "Matte Carrara Marble", "Midnight Violet"],
    sizes: ["Medium (15cm tall)", "Statement Large (24cm tall)"],
    customizable: true,
    customOptions: ["Custom filament finish", "Faceted scale"],
    features: [
      "Sharp, clean vertex geometry",
      "Matte or reflective silk finishes",
      "Subtle felt pads underneath to protect table surfaces"
    ]
  },

  // 3. Personalised Gifts
  {
    id: "custom-lithophane-lamp",
    name: "Custom 3D Lithophane Night Lamp",
    category: "Personalised Gifts",
    categoryId: "personalised-gifts",
    badge: "Personalised",
    printSpec: "Micro-Thickness 3D Relief",
    shortDescription: "Your personal photo transformed into a translucent 3D relief sculpture that lights up.",
    fullDescription: "Turn cherished memories into 3D light. Using 100% density layer thickness variations, we slice your photo so thinner areas let light pass through bright while thicker areas create shadows. In daylight it looks like modern marble relief; flip the LED switch and your photo comes alive in glowing monochrome detail.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=85",
    materials: ["Warm Ivory Optical PLA", "Solid Beechwood Stand"],
    colors: ["Warm White Light", "Cool Daylight", "RGB Multi-Color Remote"],
    sizes: ["Curved Panoramic (15x10cm)", "Cylindrical 360 Lamp (18cm tall)"],
    customizable: true,
    customOptions: ["Send your own photo (portrait, pets, family, couple)", "Custom engraved text on wood base"],
    features: [
      "High-contrast micro-density 3D mapping",
      "Includes USB-powered touch LED base with dimming",
      "Packaged in premium gift-ready presentation box"
    ]
  },
  {
    id: "personalised-desk-nameplate",
    name: "Dual-Color Executive Desk Nameplate",
    category: "Personalised Gifts",
    categoryId: "personalised-gifts",
    badge: "Bespoke Name",
    printSpec: "Dual-Filament Extrusion",
    shortDescription: "Custom 3D nameplate with raised contrasting letters and modern geometric bevel.",
    fullDescription: "A sharp addition to any home office or corporate workstation. Featuring crisp dual-color extrusion with zero bleed between your name/title and the premium matte textured backdrop.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    materials: ["Tough Matte PLA", "Carbon Fiber Composite Face"],
    colors: ["Matte Black with Electric Cyan Text", "Navy with Gold Lettering", "White with Royal Purple"],
    sizes: ["Desktop (20x6cm)", "Executive Wide (26x8cm)"],
    customizable: true,
    customOptions: ["Your Name & Job Title", "Optional company logo embossed", "Font style choice"],
    features: [
      "Laser-sharp typographic edges with multi-material printing",
      "Weighted anti-slip silicone footing",
      "Custom font matching available"
    ]
  },

  // 4. Custom Keychains and Name Tags
  {
    id: "spotify-soundwave-tag",
    name: "Interactive Spotify Code & Song Tag",
    category: "Custom Keychains and Name Tags",
    categoryId: "keychains-name-tags",
    badge: "Scannable",
    printSpec: "Dual-Color PETG • Scannable",
    shortDescription: "Scannable Spotify URI bar code on one side and your favourite album title or initials on back.",
    fullDescription: "Carry your favourite soundtrack wherever you go! Open the Spotify app search camera, scan the 3D-embossed code, and your special song plays instantly. The code is permanently printed in high-contrast contrasting filament so it will never scratch off or fade.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Durability PETG", "Silk PLA"],
    colors: ["Matte Black & Bright White", "Purple & Neon Cyan", "Emerald & Gold"],
    sizes: ["Slim (7 x 1.8 cm)"],
    customizable: true,
    customOptions: ["Song Title & Artist URI Link", "Reverse side custom text or date"],
    features: [
      "100% scannable by Spotify app camera",
      "Stainless steel split keyring included",
      "Scratch-resistant solid layered construction"
    ]
  },
  {
    id: "hex-monogram-keychain",
    name: "Geometric Monogram Bag Charm & Keychain",
    category: "Custom Keychains and Name Tags",
    categoryId: "keychains-name-tags",
    badge: "Custom Initial",
    printSpec: "Reinforced Honeycomb Mesh",
    shortDescription: "Faceted honeycomb hexagon frame framing your custom bold 3D initial.",
    fullDescription: "A stylish everyday accessory for keys, backpacks, or gym luggage. Features a lightweight yet virtually indestructible honeycomb perimeter with a suspended floating letterform.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
    materials: ["Industrial PETG", "Silk PLA"],
    colors: ["Electric Purple & Cyan", "Carbon Grey & Fire Red", "Gold Silk & Black"],
    sizes: ["Diameter: 4.5 cm"],
    customizable: true,
    customOptions: ["Any letter A-Z or 2-letter monogram", "Phone number on back for pet tag use"],
    features: [
      "Ultra-lightweight (under 12 grams)",
      "High strength PETG will not bend in pockets",
      "Double-sided chamfered aesthetic"
    ]
  },

  // 5. Home Decor and Decorative Vases
  {
    id: "spiral-voronoi-vase",
    name: "Spiral Voronoi Parametric Vase",
    category: "Home Decor and Decorative Vases",
    categoryId: "home-decor-vases",
    badge: "Architectural",
    printSpec: "Vase-Mode Spiral Extrusion",
    shortDescription: "Organic cellular mesh vase designed using parametric mathematical algorithms.",
    fullDescription: "An arresting statement piece for dried flowers or standalone display. The complex cellular geometry creates fascinating shadows when struck by sunlight or interior accent spotlights. Printed using continuous spiralize outer contour mode for a seamless organic flow.",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=900&q=85",
    materials: ["Silk Dual-Color PLA", "Matte Terracotta PLA"],
    colors: ["Silk Nebula (Purple/Cyan Shift)", "Matte Desert Sand", "Satin Pearl White", "Matte Slate"],
    sizes: ["Tabletop (20cm)", "Grande Statement (30cm)"],
    customizable: true,
    customOptions: ["Waterproof insert cylinder option", "Scale and colorway"],
    features: [
      "Algorithmic Voronoi lattice structure",
      "Dual-color filament shifts color as you walk past",
      "Weighted base for stability with tall botanicals"
    ]
  },
  {
    id: "lunar-moon-lamp",
    name: "Textured Lunar Surface Moon Lamp",
    category: "Home Decor and Decorative Vases",
    categoryId: "home-decor-vases",
    badge: "Ambient Light",
    printSpec: "Topographical Elevation Map",
    shortDescription: "Accurately textured replica of NASA lunar topography with soothing ambient lighting.",
    fullDescription: "Derived from actual NASA elevation data, the craters and mare plains of the moon are rendered in 3D relief. Emits a soft, calming celestial glow that turns any bedroom or living space into a dreamy sanctuary.",
    image: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Diffusion PLA", "Geometric 3-Piece Wood Stand"],
    colors: ["Warm Moonlight (3000K)", "Cool Moonlight (6000K)", "Dual Touch Dimming"],
    sizes: ["15cm Sphere", "20cm Sphere"],
    customizable: true,
    customOptions: ["Custom quote or anniversary date embedded on south pole", "Rechargeable battery or USB"],
    features: [
      "Real NASA crater topographical mapping",
      "Seamless hidden charging port",
      "Touch sensor switch with dimmable brightness"
    ]
  },

  // 6. Desk Accessories and Organisers
  {
    id: "cyber-headphone-stand",
    name: "Cyberpunk Hex-Grip Headphone Stand",
    category: "Desk Accessories and Organisers",
    categoryId: "desk-accessories",
    badge: "Gamer Setup",
    printSpec: "Infill-Weighted • 0.2mm Tough PLA",
    shortDescription: "Futuristic angled pedestal with headband contouring and integrated cable wrap.",
    fullDescription: "Designed for gamers, producers, and tech enthusiasts. The curved cradle matches the natural arc of premium headphone bands (Sennheiser, Sony, Bose, Apple Max) preventing headband cushion dents. Printed with heavy internal gyroid infill for solid desk stability.",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Density Tough PLA", "Carbon-Infill Base"],
    colors: ["Matte Obsidian & Neon Cyan", "Stealth Grey & Electric Purple", "All Black Matte"],
    sizes: ["Height: 26cm (Universal Headphone Fit)"],
    customizable: true,
    customOptions: ["Gamer tag or studio name embossed on front", "Under-base weights"],
    features: [
      "Wide ergonomic cradle preserves headband padding",
      "Integrated cable wrap channel on rear spine",
      "Non-slip silicone rubber feet"
    ]
  },
  {
    id: "magnetic-cable-tidy",
    name: "Modular Magnetic Cable Hub & Organizer",
    category: "Desk Accessories and Organisers",
    categoryId: "desk-accessories",
    badge: "Clean Desk",
    printSpec: "Embedded Magnet Pockets",
    shortDescription: "Snap-together magnetic channels that keep charging cables locked and organized.",
    fullDescription: "Eliminate cable clutter forever! Modular interlocking bases hold snap-on cable collars securely with neodymium magnets embedded during the print pause process. Grab your cable when needed, drop it back, and it clicks magnetically into place.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=85",
    materials: ["Matte PLA", "Neodymium Magnets (Embedded)"],
    colors: ["Matte Charcoal", "Pure White", "Cyber Cyan"],
    sizes: ["3-Cable Dock", "5-Cable Dock", "Expansion Pack"],
    customizable: true,
    customOptions: ["Cable collar diameter (USB-C, Lightning, Braided HDMI)", "Base capacity"],
    features: [
      "Strong N52 neodymium magnetic locking",
      "Micro-suction reusable nano-adhesive base (leaves no residue)",
      "Accommodates slim and thick braided cables"
    ]
  },

  // 7. Phone Stands and Tech Accessories
  {
    id: "ergonomic-phone-dock",
    name: "Ergonomic Angle-Adjust Phone & Tablet Stand",
    category: "Phone Stands and Tech Accessories",
    categoryId: "phone-tech-accessories",
    badge: "Desk Essential",
    printSpec: "Truss Structure • PETG Tough",
    shortDescription: "Sleek dual-orientation stand with charging passthrough and camera clearance.",
    fullDescription: "Engineered for optimal video calls, streaming, and desktop interaction. Holds smartphones in both portrait and landscape orientation without obscuring screen edges, with a generous cable passthrough for continuous charging.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Impact PETG", "Silk PLA"],
    colors: ["Electric Purple", "Cyber Cyan", "Matte Granite", "Stealth Black"],
    sizes: ["Phone Edition (11cm)", "Tablet / iPad Edition (16cm)"],
    customizable: true,
    customOptions: ["Custom monogram / company logo on faceplate", "MagSafe ring recess"],
    features: [
      "Optimal 65-degree ergonomic viewing angle",
      "Generous cut-out accommodates heavy protective cases",
      "Reinforced unibody truss structure"
    ]
  },
  {
    id: "magsafe-cyber-dock",
    name: "Cybernetic Apple MagSafe Desktop Puck Dock",
    category: "Phone Stands and Tech Accessories",
    categoryId: "phone-tech-accessories",
    badge: "StandBy Ready",
    printSpec: "Friction-Fit Toleranced",
    shortDescription: "Heavy base converting your standard MagSafe puck into an upright floating wireless charging station.",
    fullDescription: "Press-fit your Apple MagSafe charger into this precision-toleranced angled pedestal. The stand holds your iPhone securely in StandBy mode while you sleep or work, making it the ultimate bedside or desk clock.",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85",
    materials: ["Matte PLA", "Weighted Metal Infill"],
    colors: ["Matte Black", "Ghost White", "Electric Neon Cyan"],
    sizes: ["Height: 12cm"],
    customizable: true,
    customOptions: ["Color accent rings", "Logo engraving"],
    features: [
      "Snug press-fit channel for genuine MagSafe cord",
      "Weighted base allows easy one-handed phone detachment",
      "Perfect angle for iOS StandBy Mode widgets"
    ]
  },

  // 8. Mini Planters
  {
    id: "poly-geometric-planter",
    name: "Low-Poly Diamond Succulent Planter",
    category: "Mini Planters",
    categoryId: "mini-planters",
    badge: "Eco Modern",
    printSpec: "Watertight Perimeter Walls",
    shortDescription: "Faceted geometric planter pot with internal drainage reservoir tray.",
    fullDescription: "Breathe green life into your workstation. Designed specifically for succulents, cacti, and small air plants. Includes an internal drainage shelf and matching geometric drainage saucer to prevent root rot. Printed with 4-layer perimeters for leak-free watering.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85",
    materials: ["Eco Bio-PLA", "Wood Fiber Composite"],
    colors: ["Electric Cyan", "Lavender Violet", "Matte Terracotta", "White Marble"],
    sizes: ["Small (7cm diameter)", "Medium (10cm diameter)", "Trio Set"],
    customizable: true,
    customOptions: ["With or without drainage holes", "Matching saucer color"],
    features: [
      "Integrated water-catchment saucer",
      "Watertight internal wall coating",
      "Breathable root environment"
    ]
  },
  {
    id: "creature-creeper-planter",
    name: "Cute Creature Monster Succulent Planter",
    category: "Mini Planters",
    categoryId: "mini-planters",
    badge: "Cute & Quirky",
    printSpec: "Dual-Extrusion PLA",
    shortDescription: "Adorable four-legged creature pot that turns your plant into whimsical leafy hair.",
    fullDescription: "Inject personality into your shelves! Plant your favourite echeveria or trailing succulent in this smiling creature's back. As your plant grows, the creature gets wild green hair. Smooth rounded curves printed with 0.16mm layer height.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=900&q=85",
    materials: ["Matte Pastel PLA"],
    colors: ["Mint Green", "Soft Lilac", "Pastel Sky Cyan", "Chalk White"],
    sizes: ["Compact (8.5cm long)", "Big Buddy (14cm long)"],
    customizable: true,
    customOptions: ["Hand-detailed eyes", "Custom plant nameplate collar"],
    features: [
      "Hidden drainage holes under rear paws",
      "Friendly rounded desktop design",
      "Guaranteed conversation starter"
    ]
  },

  // 9. Miniatures and Models
  {
    id: "tabletop-wyrm-mini",
    name: "Ultra-Detail Tabletop Ancient Wyrm Miniature",
    category: "Miniatures and Models",
    categoryId: "miniatures-models",
    badge: "12K Resin Detail",
    printSpec: "25-Micron SLA • Cured & Washed",
    shortDescription: "Precision 12K resin printed tabletop dragon with individual scale textures and tattered wings.",
    fullDescription: "For D&D dungeon masters, Warhammer collectors, and tabletop painters. Printed with our top-tier resin printers down to 25-micron layer resolution. No visible layer lines, crisp teeth, claw ridges, and skin folds.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd74335a?auto=format&fit=crop&w=900&q=85",
    materials: ["Tough Sculpting UV Resin", "Anti-Impact Resin Blend"],
    colors: ["Smooth Neutral Grey (Cured & Washed)", "Unpainted Zenithal Highlighted"],
    sizes: ["32mm Heroic Scale", "75mm Collector Scale", "Gargantuan 150mm Boss"],
    customizable: true,
    customOptions: ["Pre-supported or cleaned", "Custom scenic base included"],
    features: [
      "Flawless 12K detail with zero layer stepping",
      "Ultrasonically cleaned and UV cured",
      "Micro-textured base ready for static grass and paint"
    ]
  },
  {
    id: "sci-fi-interceptor-model",
    name: "Architectural Sci-Fi Interceptor Spacecraft",
    category: "Miniatures and Models",
    categoryId: "miniatures-models",
    badge: "Collector Model",
    printSpec: "Multi-Part Assembly • Resin & PLA",
    shortDescription: "Multi-part sci-fi fighter ship model with landing gear and acrylic display stand.",
    fullDescription: "Designed for sci-fi enthusiasts. Features panel lines, dual thruster vents, cockpit glass, and sensor arrays. Comes with an angled display armature that presents the ship in mid-flight bank.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
    materials: ["Precision Matte PLA", "Clear Translucent Resin"],
    colors: ["Battleship Grey & Neon Cyan", "Stealth Matte Black & Purple", "Retro White & Orange"],
    sizes: ["Length: 22cm (Wing span 18cm)"],
    customizable: true,
    customOptions: ["Callsign and fleet registration decals", "LED thruster glow mod"],
    features: [
      "Includes aerodynamic transparent flight stand",
      "Detailed cockpit and engine heat shields",
      "Modular landing skids"
    ]
  },

  // 10. Cosplay Props
  {
    id: "cyber-oni-mask",
    name: "Cyber-Oni Illuminated Samurai Mask",
    category: "Cosplay Props",
    categoryId: "cosplay-props",
    badge: "Cosplay Prop",
    printSpec: "Wearable Scale • Reinforced Walls",
    shortDescription: "Wearable futuristic Oni mask with aggressive fangs, aerodynamic vents, and strap slots.",
    fullDescription: "Turn heads at any convention or photoshoot. Inspired by neo-Tokyo cyberpunk aesthetics, this mask blends traditional Oni demon motifs with sharp mecha angles. Includes internal padding mounting points and rear head-strap eyelets.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=85",
    materials: ["Tough Impact-Resistant PLA", "PETG Reinforcement"],
    colors: ["Cyber Black & Electric Neon Cyan Accents", "Gloss White & Demon Red", "Carbon Purple"],
    sizes: ["Custom Head Measurement (S, M, L)"],
    customizable: true,
    customOptions: ["Sized to your face width", "Optional EL wire neon channel", "Custom horn configuration"],
    features: [
      "Lightweight ergonomic face curve",
      "Integrated breathable mouth filtration vents",
      "Adjustable 4-point elastic harness ready"
    ]
  },
  {
    id: "mando-vambrace-arm",
    name: "Sci-Fi Bounty Hunter Vambrace Gauntlets (Pair)",
    category: "Cosplay Props",
    categoryId: "cosplay-props",
    badge: "Armor Set",
    printSpec: "Life-Size 1:1 Cosplay",
    shortDescription: "Detailed pair of forearm gauntlets with dart launcher channels and keypad housing.",
    fullDescription: "Built for authentic sci-fi armor builds. Ergonomically shaped to fit human forearms with hidden rear hinge pins and magnetic snap closures. Lightweight enough for all-day convention wear.",
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=900&q=85",
    materials: ["High-Impact PETG", "Matte Carbon-Look PLA"],
    colors: ["Raw Primer Grey (Ready to Paint)", "Weathered Beskar Silver", "Tactical Matte Black"],
    sizes: ["Scaled to your wrist & forearm circumference"],
    customizable: true,
    customOptions: ["Forearm sizing customization", "Optional LED keypad acrylic insert"],
    features: [
      "Smooth interior contouring for comfortable wear",
      "Built-in hinge and magnetic clasp locks",
      "Compatible with costume flight suits"
    ]
  },

  // 11. Functional Parts and Components
  {
    id: "drone-motor-guard",
    name: "Carbon-Infused Drone Arm & Motor Mount Kit",
    category: "Functional Parts and Components",
    categoryId: "functional-parts",
    badge: "Engineering",
    printSpec: "Carbon-Fiber PETG • High Infill",
    shortDescription: "High-temperature PETG replacement crash guards and vibration dampening mounts.",
    fullDescription: "Engineered for FPV pilots and RC enthusiasts. Absorbs high-speed impact force to protect expensive brushless motors. Printed in chemically resistant PETG with solid infill in critical stress corridors.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=900&q=85",
    materials: ["Carbon-Fiber PETG", "Polycarbonate Blend", "Flexible 95A TPU"],
    colors: ["Industrial Black", "High-Vis Neon Cyan", "Safety Orange"],
    sizes: ["3-inch, 5-inch, or Custom Frame specs"],
    customizable: true,
    customOptions: ["Custom motor bolt pattern (9mm, 12mm, 16mm)", "Camera tilt angle"],
    features: [
      "High impact resistance with vibration dampening",
      "UV & weather proof for outdoor flight",
      "Reinforced brass heat-set threaded inserts"
    ]
  },
  {
    id: "custom-gear-bracket",
    name: "Heavy-Duty Replacement Gear & Bracket Assembly",
    category: "Functional Parts and Components",
    categoryId: "functional-parts",
    badge: "Replacement Part",
    printSpec: "High-Load Involute Teeth • PETG",
    shortDescription: "Custom replacement gears, machinery brackets, and discontinued appliance parts.",
    fullDescription: "Don't throw away a valuable appliance or tool just because a small plastic gear stripped! Send us your broken component or dimensions; we reverse engineer the tooth profile and print a reinforced replacement in engineering-grade filament.",
    image: "https://images.unsplash.com/photo-1715059250871-08786b8a884a?auto=format&fit=crop&w=900&q=85",
    materials: ["Nylon (PA12)", "PETG", "Polycarbonate"],
    colors: ["Industrial Black", "Natural White", "Technical Grey"],
    sizes: ["Precision scaled down to 0.1mm tolerance"],
    customizable: true,
    customOptions: ["Tooth count, pitch, shaft bore diameter, keyway slot"],
    features: [
      "Toleranced for smooth mechanical meshing",
      "High wear resistance and chemical stability",
      "Rapid turnaround for urgent machine repairs"
    ]
  },

  // 12. Custom 3D Printing
  {
    id: "bespoke-custom-print",
    name: "Bespoke Custom 3D Print Request",
    category: "Custom 3D Printing",
    categoryId: "custom-3d-printing",
    badge: "Custom CAD / STL",
    printSpec: "Multi-Material Lab • 0.05-0.3mm",
    shortDescription: "Have an STL, CAD file, sketch, or creative vision? We bring your unique idea to life.",
    fullDescription: "From industrial prototypes to one-off personalized wedding gifts, cosplay components, and inventions. Whether you have an existing 3D file from Thingiverse/Printables, an engineered CAD step file, or just an idea sketched on paper, we guide you through material selection, print optimization, and rapid delivery.",
    image: "https://images.unsplash.com/photo-1742971366169-6efb57949d56?auto=format&fit=crop&w=900&q=85",
    materials: ["Silk Dual-Color PLA", "Tough PETG", "High-Definition 12K Resin", "Flexible TPU", "Wood Infill"],
    colors: ["Over 25+ colors and finishes available in-house"],
    sizes: ["From 5mm micro-prints up to 400mm single-piece builds"],
    customizable: true,
    customOptions: ["File slicing & mesh repair", "Custom multi-color printing", "Post-processing & finishing"],
    features: [
      "Free 3D file feasibility & printability check",
      "Expert advice on best material for your specific use-case",
      "Direct one-on-one consultation on WhatsApp"
    ]
  }
];

// Helper to get products by category
function getProductsByCategory(catId) {
  if (!catId || catId === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.categoryId === catId);
}

// Global expose
window.CATEGORIES = CATEGORIES;
window.PRODUCTS = PRODUCTS;
window.getProductsByCategory = getProductsByCategory;
