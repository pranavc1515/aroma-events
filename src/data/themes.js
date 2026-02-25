/**
 * themes.js — All decoration themes for Aroma Events
 * Images reference files from the /images/ folder in the public directory.
 */

export const themes = [
    {
        id: "romantic-rose",
        title: "Romantic Rose Birthday Setup",
        category: "birthday",
        price: "₹12,999",
        image: "/images/1.jpeg",
        description:
            "Transform your celebration into a dreamy rose-filled paradise. Our Romantic Rose setup features cascading balloon arches in blush and ivory, a stunning LED name board, and an exquisitely draped cake table adorned with fresh rose petals and candles.",
        includes: [
            "Balloon Arch (Blush & Ivory)",
            "LED Name Board (Customized)",
            "Cake Table Decor",
            "Rose Petal Pathway",
            "Fairy Light Curtain",
            "Floral Centerpieces (3 tables)",
        ],
        popular: true,
    },
    {
        id: "golden-glam",
        title: "Golden Glam Birthday Extravaganza",
        category: "birthday",
        price: "₹18,499",
        image: "/images/2.jpeg",
        description:
            "Add a touch of opulence to your birthday celebration with our Golden Glam package. Featuring gold balloon pillars, sequin backdrops, and shimmering table setups, this luxurious theme is perfect for milestone birthdays.",
        includes: [
            "Gold & Black Balloon Pillars (pair)",
            "Sequin Backdrop (6x8 ft)",
            "Personalized LED Number Board",
            "Glam Table Setup",
            "Gold Foil Curtain",
            "Balloon Bouquets (5 pieces)",
        ],
        popular: true,
    },
    {
        id: "princess-fairy",
        title: "Princess Fairy Tale Party",
        category: "birthday",
        price: "₹14,999",
        image: "/images/3.jpeg",
        description:
            "Make your little one's birthday absolutely magical with our Princess Fairy Tale setup. Pastel pinks, lavenders, and glittery accents create a whimsical wonderland fit for royalty.",
        includes: [
            "Princess Throne Chair",
            "Pastel Balloon Cloud",
            "Glitter Crown Backdrop",
            "Fairy Light Canopy",
            "Character Cutouts (2)",
            "Themed Table Covers & Decorations",
        ],
        popular: false,
    },
    {
        id: "elegant-white-wedding",
        title: "Elegant White Wedding Ceremony",
        category: "wedding",
        price: "₹45,999",
        image: "/images/4.jpeg",
        description:
            "A timeless, classic wedding setup that exudes grace and sophistication. Pure white florals, chiffon draping, and soft candlelight create an atmosphere of eternal romance for your most precious day.",
        includes: [
            "Floral Mandap / Arch Setup",
            "Aisle Floral Arrangements",
            "Reception Table Centerpieces (10 tables)",
            "Chiffon Draping & Canopy",
            "Entrance Floral Gate",
            "Bridal Path Décor",
            "Candle Arrangements",
        ],
        popular: true,
    },
    {
        id: "royal-garden-wedding",
        title: "Royal Garden Wedding",
        category: "wedding",
        price: "₹58,999",
        image: "/images/5.jpeg",
        description:
            "Step into a lush royal garden with our enchanting outdoor-inspired wedding theme. Think abundant greenery, cascading florals, vintage lanterns, and rich jewel tones for a truly regal celebration.",
        includes: [
            "Floral Arch with Greenery",
            "Hanging Floral Installations",
            "Vintage Lantern Aisle Décor",
            "Rustic Wooden Signage",
            "Head Table Garland Setup",
            "Floral Photo Booth Backdrop",
            "Garden Table Centerpieces (15 tables)",
        ],
        popular: false,
    },
    {
        id: "pastel-cloud-babyshower",
        title: "Pastel Cloud Baby Shower",
        category: "babyshower",
        price: "₹9,999",
        image: "/images/6.jpeg",
        description:
            "Celebrate the arrival of your little cloud with our dreamy pastel setup. Soft blues, creamy whites, and baby pinks come together with fluffy cloud balloons and star-shaped accents for an adorable baby shower.",
        includes: [
            "Cloud Balloon Ceiling Installation",
            "Star & Moon Backdrop",
            "Dessert Table Decor",
            "Guest Table Arrangements (5 tables)",
            "Baby Name Reveal Board",
            "Photo Props Set",
        ],
        popular: true,
    },
    {
        id: "safari-adventure-babyshower",
        title: "Safari Adventure Baby Shower",
        category: "babyshower",
        price: "₹11,499",
        image: "/images/7.jpeg",
        description:
            "Welcome your little adventurer with a wild and fun Safari-themed baby shower! Featuring jungle animals, tropical greenery, and warm earthy tones that create a playful and vibrant celebration atmosphere.",
        includes: [
            "Jungle Animal Balloon Garland",
            "Safari Backdrop with Greenery",
            "Themed Dessert & Cake Table",
            "Animal Print Table Covers",
            "Wooden Name Cut-out",
            "Take-Home Favor Setup",
        ],
        popular: false,
    },
    {
        id: "midnight-glam-birthday",
        title: "Midnight Glam Birthday Night",
        category: "birthday",
        price: "₹22,999",
        image: "/images/8.jpeg",
        description:
            "Experience birthday luxury like never before with our Midnight Glam setup. Deep navy, black, and gold create a sophisticated after-dark celebration. Ideal for adults and milestone celebrations.",
        includes: [
            "Black & Gold Balloon Arch",
            "Neon Sign (Customized Text)",
            "Mirror Ball Table Centerpieces",
            "Velvet Backdrop",
            "Luxury Bar Cart Decoration",
            "Confetti Cannon Setup",
            "Personalized Photo Wall",
        ],
        popular: true,
    },
];

/**
 * Get all unique categories from themes
 */
export const getCategories = () => {
    const cats = ["all", ...new Set(themes.map((t) => t.category))];
    return cats;
};

/**
 * Get a single theme by id
 */
export const getThemeById = (id) => themes.find((t) => t.id === id);

/**
 * Get themes filtered by category
 */
export const getThemesByCategory = (category) => {
    if (category === "all") return themes;
    return themes.filter((t) => t.category === category);
};
