// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "For Brands", href: "/for-brands" },
  { label: "For Retailers", href: "/for-retailers" },
  { label: "For Distributors", href: "/for-distributors" },
  { label: "For International Buyers", href: "/for-international-buyers" },
  { label: "Technology", href: "/technology" },
] as const

// ─── Homepage ─────────────────────────────────────────────────────────────────

export const HERO = {
  badge: "Next-Generation Distributor",
  headline: "A New Kind of\nBrand Distributor.",
  headlineAccent: "Brand Distributor.",
  subheadline:
    "Not a reseller. Not a 3PL. A vertically integrated operator that owns the entire path from your dock to the consumer's doorstep — across every major US digital retail channel.",
  cta: {
    primary: "Get in Touch",
    secondary: "Explore Platform",
  },
} as const

export const AUDIENCE_CTAS = [
  { label: "I'm a Brand", href: "/for-brands" },
  { label: "I'm a Retailer", href: "/for-retailers" },
  { label: "I'm a Distributor", href: "/for-distributors" },
  { label: "I'm an International Buyer", href: "/for-international-buyers" },
] as const

export const METRICS = [
  { value: "340K+",    numericValue: 340,  suffix: "K+", decimals: 0, label: "SKUs ready to order" },
  { value: "33K sqft", numericValue: 33,   suffix: "K",  decimals: 0, label: "sq ft owned warehouse" },
  { value: "10+",      numericValue: 10,   suffix: "+",  decimals: 0, label: "channels operated in-house" },
  { value: "1.97M",    numericValue: 1.97, suffix: "M",  decimals: 2, label: "sq ft distribution reach" },
  { value: "4.32M",    numericValue: 4.32, suffix: "M",  decimals: 2, label: "products in live catalog" },
  { value: "4",        numericValue: 4,    suffix: "",   decimals: 0, label: "AI agents in production" },
] as const


export const PILLARS = [
  {
    icon: "store",
    title: "Brand E-Commerce Operator",
    headline: "Owned team. Every platform.",
    description:
      "Full in-house team running listings, ads, content, pricing, and analytics across Amazon, Walmart, eBay, Temu, Shein, TikTok Shop, Shopify DTC, and 14+ wholesale distributors — never outsourced.",
  },
  {
    icon: "warehouse",
    title: "Owned Logistics Backbone",
    headline: "33K sqft owned. 1.97M sqft extended.",
    description:
      "SSB-owned warehousing in DE/NJ/NY plus a 1.97M sqft extended distribution network across NJ, Los Angeles, and Atlanta.",
  },
  {
    icon: "shield",
    title: "Brand Control Technology",
    headline: "MAP enforcement. Real-time. Always on.",
    description:
      "Real-time MAP enforcement, unauthorized seller detection, and listing integrity monitoring — protecting brand equity across every channel.",
  },
] as const

// ─── For Brands ───────────────────────────────────────────────────────────────

export const BRANDS_HERO = {
  badge: "For Brands",
  headline: "Not a Reseller. Not a 3PL.",
  headlineAccent: "A Vertically Integrated Brand Operator.",
  subheadline:
    "SSB combines the operational muscle of a national distributor with the digital intelligence of a modern e-commerce operator. One partner. Every channel. Full accountability.",
} as const

export const BRAND_SERVICES = [
  {
    icon: "shopping-cart",
    title: "US Full-Channel E-commerce",
    description:
      "Amazon 1P+3P, Walmart, TikTok Shop, Shopify DTC, eBay, Temu, Shein, and 14+ wholesale distributors — all operated in-house.",
  },
  {
    icon: "store-front",
    title: "Store-in-Store Retail",
    description:
      "We go to the stores. SSB proactively places your products inside established retail stores through our store-in-store partnerships.",
  },
  {
    icon: "globe",
    title: "China Market via JD.com",
    description:
      "Sell to 700M+ Chinese consumers. No China entity required. No marketing spend. No inventory risk. SSB handles everything.",
  },
  {
    icon: "archive",
    title: "Silent Liquidation",
    description:
      "Clear inventory quietly. Protect your brand. Discreet overseas liquidation that moves surplus stock without disrupting your primary channels.",
  },
  {
    icon: "tag",
    title: "Supermarket & Duty-Free",
    description:
      "Established relationships with supermarket chains and duty-free retail operators. From warehouse to shelf — at scale.",
  },
  {
    icon: "shield-check",
    title: "Brand Protection",
    description:
      "MAP enforcement, grey market monitoring, Amazon Transparency Program enrollment, and IP enforcement at the platform level.",
  },
] as const

export const BRAND_PROTECTION_STATS = [
  { value: "24/7", label: "Listing & Price Crawl" },
  { value: "<48h", label: "Avg Takedown SLA" },
  { value: "100%", label: "Authorized Channel Trace" },
  { value: "0", label: "Cross-Border Grey Market" },
] as const

// ─── Technology ───────────────────────────────────────────────────────────────

export const TECH_HERO = {
  badge: "4 In Production · 3 In Development",
  headline: "Our Team Runs on AI.",
  subheadline:
    "SSB operates with a small, high-efficiency team — because every operation runs on proprietary AI agents. From product discovery to price monitoring to order fulfillment, our AI handles the heavy lifting.",
} as const

export const TECH_METRICS = [
  { value: "4",     numericValue: 4,    suffix: "",  decimals: 0, label: "AI Agents in Production" },
  { value: "4.32M", numericValue: 4.32, suffix: "M", decimals: 2, label: "Products in Database" },
  { value: "753K",  numericValue: 753,  suffix: "K", decimals: 0, label: "B2B Catalog SKUs" },
  { value: "28K",   numericValue: 28,   suffix: "K", decimals: 0, label: "Brands Tracked" },
] as const

export const AI_AGENTS = [
  {
    name: "Shopping Agent",
    category: "Product Discovery",
    tagline: "The core of SSB's platform.",
    description:
      "Natural-language product search across 5M+ SKUs. Normalizes supplier ordering rules and generates unified purchase orders.",
    bullets: [
      "Describe what you need — not supplier SKU codes",
      "Automatic MOQ and pricing calculation",
      "Consolidated POs across multiple suppliers",
    ],
  },
  {
    name: "claim.ai",
    category: "Brand Protection",
    tagline: "Real-time MAP enforcement.",
    description:
      "24/7 price monitoring across 20+ marketplaces. MAP violation alerts in minutes, not days.",
    bullets: [
      "Buy Box price crawl across all major platforms",
      "MAP violation alerts with screenshot evidence",
      "Listing hijack monitoring and takedown coordination",
    ],
  },
  {
    name: "panner.ai",
    category: "Procurement Intelligence",
    tagline: "Cross-platform price-gap discovery.",
    description:
      "Finds profitable arbitrage opportunities across US marketplaces. Real-time margin calculation including fees and shipping.",
    bullets: [
      "Real-time price comparison across 20+ platforms",
      "Margin calculation including fees and returns",
      "Sub-second arbitrage window detection",
    ],
  },
  {
    name: "refinery.ai",
    category: "Listing Optimization",
    tagline: "AI-driven listing refinement at scale.",
    description:
      "8-dimension listing audit and improvement engine. Rufus AEO optimization — making sure Amazon's AI recommends your brand.",
    bullets: [
      "11-dimension listing audit and scoring",
      "Rufus AEO — optimizing for Amazon's AI assistant",
      "Applied to 30+ CPG brands including Hyland's and Hello Bello",
    ],
  },
  {
    name: "Agent 05",
    category: "Coming Soon",
    tagline: "Details to be announced.",
    description: "This agent is part of SSB's 7-agent operations engine. Full details coming soon.",
    bullets: ["— Placeholder —"],
    placeholder: true,
  },
  {
    name: "Agent 06",
    category: "Coming Soon",
    tagline: "Details to be announced.",
    description: "This agent is part of SSB's 7-agent operations engine. Full details coming soon.",
    bullets: ["— Placeholder —"],
    placeholder: true,
  },
  {
    name: "Agent 07",
    category: "Coming Soon",
    tagline: "Details to be announced.",
    description: "This agent is part of SSB's 7-agent operations engine. Full details coming soon.",
    bullets: ["— Placeholder —"],
    placeholder: true,
  },
] as const
