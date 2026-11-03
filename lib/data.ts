export const BRAND = "Red Carpet Real Estate";
export const PROJECT = "DAMAC Islands 2";
export const BROCHURE = "/damac-islands-2-brochure.pdf";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
export const WHATSAPP_MESSAGE = "Hi, I'd like to register my interest in DAMAC Islands 2.";

export function whatsappHref(): string {
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : "#lead";
}

export const navItems = [
  ["offers", "Offers"],
  ["overview", "Overview"],
  ["location", "Location"],
  ["gallery", "Gallery"],
  ["homes", "Homes"],
  ["eco-living", "Eco Living"],
  ["amenities", "Amenities"],
  ["faq", "FAQ"],
] as const;

export const unitOptions = [
  "Not sure, advise me",
  "Luxury Villa (6 BR + maid)",
  "Twin Villa (5 BR + maid)",
  "Townhouse (5 BR + maid)",
  "Townhouse (4 BR)",
];
export const timelineOptions = ["Immediately", "1–3 months", "Just exploring"];

export const summaryItems: [string, string][] = [
  ["Developer", "DAMAC Properties"],
  ["Property type", "Villas & townhouses"],
  ["Home types", "Luxury villa, twin villa, townhouse"],
  ["Size", "2,186 – 6,276 sq.ft"],
  ["Bedrooms", "4 – 6 BR"],
  ["Island clusters", "8 themed clusters"],
  ["Amenities", "45+ world-class"],
  ["Pricing & plan", "On request"],
];

export const stats: [number, string, string][] = [
  [45, "+", "World-class amenities"],
  [8, "", "Island clusters"],
  [5, "", "Pillars of eco-living"],
  [3, "", "Villa & townhouse types"],
];

export const islands = ["Bahamas", "Barbados", "Bermuda", "Maui", "Mauritius", "Tahiti", "Antigua", "Cuba"];

export type GalleryItem = { key: string; cat: "Exterior" | "Interiors" | "Amenities"; alt: string };
export const gallery: GalleryItem[] = [
  { key: "ext1", cat: "Exterior", alt: "Luxury villa with private garage and landscaped frontage" },
  { key: "am1", cat: "Amenities", alt: "Tranquil Lake & Eco Park with kayaks and floating gardens" },
  { key: "int1", cat: "Interiors", alt: "Family living room with marble feature wall" },
  { key: "ext2", cat: "Exterior", alt: "Luxury villa with private pool and roof terrace" },
  { key: "am3", cat: "Amenities", alt: "Whispering Waterfall and Opal Yoga Deck" },
  { key: "int2", cat: "Interiors", alt: "Master bedroom with floor-to-ceiling glazing" },
  { key: "ext4", cat: "Exterior", alt: "Twin villa with shared island setting" },
  { key: "am2", cat: "Amenities", alt: "Botanic Garden under the climate dome" },
  { key: "int3", cat: "Interiors", alt: "Master bathroom with freestanding bath" },
  { key: "ext6", cat: "Exterior", alt: "Townhouses with private gardens and roof terraces" },
  { key: "am9", cat: "Amenities", alt: "Eco Lodge Hospitality with organic pools" },
  { key: "int4", cat: "Interiors", alt: "Open-plan living and dining" },
  { key: "ext5", cat: "Exterior", alt: "Twin villa garden terrace" },
  { key: "am6", cat: "Amenities", alt: "Nature’s Journey waterway" },
  { key: "int5", cat: "Interiors", alt: "Fitted kitchen with natural wood finish" },
  { key: "ext7", cat: "Exterior", alt: "Townhouse row facing the green" },
  { key: "am7", cat: "Amenities", alt: "Sky Woods canopy walk and treehouse park" },
  { key: "int6", cat: "Interiors", alt: "Bedroom with garden views" },
  { key: "ext3", cat: "Exterior", alt: "Villa facade detail" },
  { key: "am8", cat: "Amenities", alt: "Eco Hub Outdoor Clubhouse and natural lagoon" },
  { key: "ext8", cat: "Exterior", alt: "Villa with pool at dusk" },
  { key: "am5", cat: "Amenities", alt: "Eco Performance Grounds" },
  { key: "am4", cat: "Amenities", alt: "Solar Link Park with solar charging stations" },
  { key: "am10", cat: "Amenities", alt: "The Cultural Square and Food Market" },
];
export const galleryCats = ["All", "Exterior", "Interiors", "Amenities"] as const;
export const GALLERY_LIMIT = 8;

export type Home = { name: string; code: string; sqft: string; sqm: string; page: number; option: string };
export const homes: Home[] = [
  { name: "Luxury Villa", code: "DS-V45 · 6 BR + maid", sqft: "6,276 sq.ft", sqm: "583.09 sq.m", page: 73, option: "Luxury Villa (6 BR + maid)" },
  { name: "Twin Villa", code: "DSTW · 5 BR + maid", sqft: "3,492 sq.ft", sqm: "324.44 sq.m", page: 75, option: "Twin Villa (5 BR + maid)" },
  { name: "Townhouse · End unit", code: "DSTH-E · 5 BR + maid", sqft: "3,158 sq.ft", sqm: "293.41 sq.m", page: 77, option: "Townhouse (5 BR + maid)" },
  { name: "Townhouse · Mid unit", code: "DSTH-M2 · 5 BR + maid", sqft: "2,829 sq.ft", sqm: "262.85 sq.m", page: 79, option: "Townhouse (5 BR + maid)" },
  { name: "Townhouse · Mid unit", code: "DSTH-M1 · 4 BR", sqft: "2,186 sq.ft", sqm: "203.04 sq.m", page: 78, option: "Townhouse (4 BR)" },
];

// x/y are percentages of the brochure location map (993 x 702).
export type Place = { name: string; min: number; x: number; y: number };
export const places: Place[] = [
  { name: "Sports City, Motor City, DAMAC Hills", min: 15, x: 46.5, y: 77.9 },
  { name: "Expo 2020 Venue", min: 20, x: 38.8, y: 96.0 },
  { name: "Al Maktoum International Airport", min: 23, x: 80.0, y: 97.5 },
  { name: "Dubai Investment Park", min: 25, x: 34.7, y: 92.0 },
  { name: "Burj Area", min: 25, x: 57.2, y: 14.0 },
  { name: "Burj Al Arab", min: 35, x: 33.7, y: 29.0 },
  { name: "Dubai International Airport", min: 40, x: 76.0, y: 4.5 },
];
export const SITE_POINT = { x: 61.9, y: 76.9 };

export const pillars: [string, string, string][] = [
  ["01", "Nature-based", "Tranquil Lake & Eco Park, Botanic Garden, Whispering Waterfall and Solar Link Park: zen gardens, a butterfly nest, mystic falls and e-scooter lanes."],
  ["02", "Wellness", "Island Vida Wellness, Eco Performance Grounds and a Hydrotherapy Zone with a healing spa, biodynamic training and salt-water pools."],
  ["03", "Adventure", "Nature’s Journey, Explorers Eco Land and Sky Woods Adventure: wooden kayaks, hanging bridges, a canopy walk and a zipline park."],
  ["04", "Social", "Eco Smart Co-Working, indoor and outdoor Eco Hub clubhouses, an Eco Lodge and Nature’s Venture dining, from breakfast in the tent to BBQ in the cave."],
  ["05", "Cultural", "The Garden of Insight with a museum library and study garden, and The Cultural Square with a climate dome, performance stage and food market."],
];

export const amenities = [
  "Zen Garden", "Verdant Waters", "Horizon Trail", "Hidden Restaurant", "Butterflies Nest", "Bird Watching", "Orchard Field",
  "Mystic Falls", "Opal Yoga Deck", "Solar Charging Station", "Solar Park", "E-scooter Bikes & Lanes", "Eco-friendly Gym",
  "Healing Spa", "Healing Herb Garden", "Healing Crystals", "Biodynamic Training", "Sports Field", "Salt-water Pools",
  "Herbal Tea Bar", "Aroma Therapy", "BBQ in the Cave", "Treehouse Park", "Canopy Walk", "Zipline Park", "Wild Park",
  "Observation Decks", "Eco-Education", "Wooden Kayaks", "Hanging Bridges", "Floating Gardens", "Breakfast in the Tent",
  "AI-integrated Business Pods", "Trading Garden", "Natural Swimming Lagoon", "Outdoor Recreation", "Indoor Leisure",
  "Relaxation Zones", "Fitness & Wellness Centre", "Organic Pools", "Farm to Table Dining", "Museum Library",
  "Art & Sculptures", "Study Garden", "Climate Dome", "Performance Stage", "Food Market",
];

export const faqs: [string, string][] = [
  ["What is DAMAC Islands 2?", "DAMAC Islands 2 is an island-inspired master community by DAMAC Properties in Dubai, the sequel to the sold-out DAMAC Islands. It offers luxury villas, twin villas and townhouses across eight island-themed clusters, with 45+ world-class amenities."],
  ["Who is the developer?", "DAMAC Properties, a UAE developer active since 2002 with 7 master plan communities and 49,000+ units delivered (as of Q2 2025, per the developer’s brochure)."],
  ["What types of homes are available?", "Luxury villas (DS-V45, 6 BR + maid), twin villas (DSTW, 5 BR + maid) and townhouses: DSTH-E (5 BR end unit + maid), DSTH-M2 (5 BR mid unit + maid) and DSTH-M1 (4 BR mid unit)."],
  ["How big are the homes?", "Saleable areas range from 2,186 sq.ft (203.04 sq.m) for the 4 BR townhouse to 6,276 sq.ft (583.09 sq.m) for the 6 BR luxury villa."],
  ["What are the eight island clusters?", "Bahamas, Barbados, Bermuda, Maui, Mauritius, Tahiti, Antigua and Cuba. Each one brings the spirit of an island escape into the community."],
  ["How far is DAMAC Islands 2 from key places?", "Roughly 15 minutes to Sports City, Motor City and DAMAC Hills, 20 minutes to the Expo 2020 venue, 23 minutes to Al Maktoum International Airport, 25 minutes to Dubai Investment Park and the Burj area, 35 minutes to Burj Al Arab and 40 minutes to Dubai International Airport."],
  ["What are the prices and payment plan?", "Prices and payment plans are released by DAMAC and can change by release. Register your interest and a Red Carpet specialist will send you the latest availability, prices and payment plan."],
  ["What finishes are used inside?", "The brochure shows porcelain slab flooring, brushed brass metalwork, walnut wood veneer and marble countertops. Finishes and furniture are illustrative and may change based on availability."],
  ["Can I get a UAE Golden Visa by buying here?", "Property investors who buy a home worth AED 2 million or more can apply for the UAE 10-year Golden Visa for themselves and their family, subject to government eligibility and approval. A Red Carpet specialist will guide you through the process."],
  ["Is the DLD registration fee waived?", "The Dubai Land Department (DLD) registration fee is normally 4% of the property price. A DLD fee waiver is offered on selected units, subject to developer terms and availability. Register your interest and we will confirm what applies to your home."],
  ["How do I register my interest?", "Fill in the form at the top of this page or message us on WhatsApp. A Red Carpet Real Estate specialist will call you back with floor plans and live availability."],
];
