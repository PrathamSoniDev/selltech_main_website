/**
 * SellTech — central content layer.
 * Swap any of these arrays with real production content; all sections
 * are driven from this file so editorial changes happen in one place.
 */

export type Service = {
  id: string;
  num: string;
  title: string;
  description: string;
  bullets: string[];
  feature?: boolean;
  icon:
    | "code"
    | "web"
    | "mobile"
    | "ai"
    | "saas"
    | "chain"
    | "game"
    | "design"
    | "marketing";
};

export const services: Service[] = [
  {
    id: "software",
    num: "01",
    title: "Software Development",
    description:
      "Custom Software Development Services in India for startups, enterprises, and growing businesses. We build scalable business applications, ERP systems, CRM solutions, automation platforms, and enterprise software tailored to your operational requirements.",
    bullets: [
      "Custom ERP & CRM Development",
      "Business Process Automation",
      "Enterprise Software Solutions",
    ],
    icon: "code",
  },
  {
    id: "web",
    num: "02",
    title: "Website Development",
    description:
      "Professional Website Development Company in Jaipur, India delivering responsive business websites, eCommerce stores, corporate portals, landing pages, and SEO-optimized web applications that generate leads and drive business growth.",
    bullets: [
      "Business Website Development",
      "eCommerce Website Solutions",
      "SEO Optimized Websites",
    ],
    icon: "web",
  },
  {
    id: "mobile",
    num: "03",
    title: "Mobile App Development",
    description:
      "Mobile App Development Services for Android, iOS, and Cross-Platform Applications. We build secure, scalable, and user-friendly mobile apps for startups, enterprises, healthcare, education, logistics, and fintech businesses.",
    bullets: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
    ],
    icon: "mobile",
  },
  {
    id: "ai",
    num: "04",
    title: "AI Solutions",
    description:
      "AI Development Company providing AI Automation, Chatbot Development, Machine Learning Solutions, Generative AI Applications, AI Agents, and Business Process Automation for modern businesses.",
    bullets: [
      "AI Chatbot Development",
      "AI Automation Solutions",
      "Machine Learning Applications",
    ],
    feature: true,
    icon: "ai",
  },
  {
    id: "saas",
    num: "05",
    title: "SaaS Development",
    description:
      "SaaS Development Company helping startups and enterprises build cloud-based software products, subscription platforms, B2B SaaS solutions, and scalable multi-tenant applications.",
    bullets: [
      "Stripe-grade billing",
      "SOC2-ready foundations",
      "Usage-based metering",
    ],
    icon: "saas",
  },
  {
    id: "blockchain",
    num: "06",
    title: "Blockchain Development",
    description:
      "Blockchain Development Services including Smart Contract Development, Web3 Applications, Crypto Wallets, NFT Platforms, Decentralized Applications (dApps), and Enterprise Blockchain Solutions.",
    bullets: [
      "EVM & Solana",
      "Audited Solidity",
      "Custodial / non-custodial flows",
    ],
    icon: "chain",
  },
  {
    id: "game",
    num: "07",
    title: "Game Development",
    description:
      "Real-time 3D experiences, hyper-casual hits and Web3 game economies built with Unity, Unreal & WebGL.",
    bullets: [
      "Unity · Unreal · Godot",
      "WebGL & React Three Fiber",
      "Live-ops & analytics",
    ],
    icon: "game",
  },
  {
    id: "design",
    num: "08",
    title: "UI / UX Design",
    description:
      "UI UX Design Agency creating intuitive digital experiences, modern interfaces, wireframes, prototypes, design systems, and conversion-focused user journeys.",
    bullets: [
      "Design systems & tokens",
      "Prototyping & usability",
      "Brand & motion language",
    ],
    icon: "design",
  },
  {
    id: "marketing",
    num: "09",
    title: "Digital Marketing",
    description:
      "Digital Marketing Services including SEO, Local SEO, Google Ads, Social Media Marketing, Content Marketing, Lead Generation, and Performance Marketing to accelerate business growth.",
    bullets: [
      "SEO & programmatic content",
      "Paid acquisition",
      "Lifecycle & CRM",
    ],
    icon: "marketing",
  },
];

export type Product = {
  id: string;
  num: string;
  badge: string;
  title: string;
  description: string;
  bullets?: string[];
  size?: "xl" | "default";
  accent?: boolean;
};

export const products: Product[] = [
  {
    id: "custom-software",
    num: "01",
    badge: "Flagship",
    size: "xl",
    title: "Custom Software Development Solutions",
    description:
      "Bespoke software engineered for your domain — finance, healthcare, logistics, supply, education. Built to outlive trends and absorb scale.",
    bullets: [
      "Domain-driven modelling",
      "Distributed back-ends",
      "Polyglot data layer",
      "SRE handover playbooks",
    ],
  },
  {
    id: "saas",
    num: "02",
    badge: "Product",
    title: "SaaS Platforms",
    description:
      "Multi-tenant SaaS with billing, RBAC, telemetry and a path to your first 1,000 paying accounts.",
  },
  {
    id: "ai-auto",
    num: "03",
    badge: "AI Native",
    accent: true,
    title: "AI Automation & Business Intelligence",
    description:
      "Agent workflows, AI copilots and back-office automation that replace 60–80% of manual ops effort.",
  },
  {
    id: "enterprise",
    num: "04",
    badge: "Enterprise",
    title: "ERP, CRM & Enterprise Solutions",
    description:
      "ERP, CRM and bespoke internal tooling that integrate with your existing identity, data and audit stack.",
  },
  {
    id: "mobile",
    num: "05",
    badge: "Native",
    title: "Android & iOS Mobile App Development",
    description:
      "iOS · Android · cross-platform apps with offline-first sync and store-grade polish.",
  },
  {
    id: "web",
    num: "06",
    badge: "Web",
    title: "Website Development Solutions",
    description:
      "High-traffic web platforms — marketplaces, communities, content systems and dashboards.",
  },
  {
    id: "mvp",
    num: "07",
    badge: "0 → 1",
    accent: true,
    title: "Startup MVP & SaaS Product Development",
    description:
      "From whiteboard to live product in 6–10 weeks. Investor-ready, instrumented, and built to iterate.",
  },
];

export type StackChip = {
  label: string;
  ring: 1 | 2 | 3 | 4;
  angle: number;
  variant: "cyan" | "violet" | "magenta" | "amber";
};

export const stackChips: StackChip[] = [
  { label: "React", ring: 1, angle: 0, variant: "cyan" },
  { label: "Next.js", ring: 1, angle: 90, variant: "cyan" },
  { label: "Flutter", ring: 1, angle: 180, variant: "cyan" },
  { label: "Three.js", ring: 1, angle: 270, variant: "cyan" },

  { label: "Node.js", ring: 2, angle: 30, variant: "violet" },
  { label: "Express", ring: 2, angle: 110, variant: "violet" },
  { label: "Go", ring: 2, angle: 200, variant: "violet" },
  { label: "Python", ring: 2, angle: 290, variant: "violet" },

  { label: "OpenAI", ring: 3, angle: 0, variant: "magenta" },
  { label: "Postgres", ring: 3, angle: 75, variant: "magenta" },
  { label: "MongoDB", ring: 3, angle: 150, variant: "magenta" },
  { label: "Firebase", ring: 3, angle: 225, variant: "magenta" },
  { label: "Redis", ring: 3, angle: 300, variant: "magenta" },

  { label: "AWS", ring: 4, angle: 45, variant: "amber" },
  { label: "Azure", ring: 4, angle: 135, variant: "amber" },
  { label: "Google Cloud", ring: 4, angle: 225, variant: "amber" },
  { label: "Vercel", ring: 4, angle: 315, variant: "amber" },
];

export const processSteps = [
  {
    num: "01",
    title: "Discovery",
    body: "Stakeholder interviews, market & competitor mapping, technical due-diligence and a risk-ranked product brief.",
  },
  {
    num: "02",
    title: "Planning",
    body: "Roadmap, architecture decision records, team formation and a fixed-window delivery plan.",
  },
  {
    num: "03",
    title: "Design",
    body: "Information architecture, design system, motion language and pixel-perfect prototypes validated with real users.",
  },
  {
    num: "04",
    title: "Development",
    body: "Bi-weekly demoable increments, trunk-based delivery, automated tests, and instrumented from day one.",
  },
  {
    num: "05",
    title: "Testing",
    body: "Unit, integration, load and security testing — plus an internal red-team review before each major release.",
  },
  {
    num: "06",
    title: "Deployment",
    body: "Blue-green rollouts, observability, runbooks and a structured handover to your team or our SRE.",
  },
  {
    num: "07",
    title: "Growth",
    body: "Quarterly experimentation, performance & cost optimisation, AI augmentation and an evolving roadmap.",
  },
] as const;

export type CaseStudy = {
  id: string;
  num: string;
  vertical: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  bg: 1 | 2 | 3 | 4 | 5 | 6;
  hero?: boolean;
};

export const cases: CaseStudy[] = [
  {
    id: "northwind",
    num: "01",
    category: "SaaS Platform",
    vertical: "Fintech",
    title: "Northwind — programmable treasury for modern fintechs",
    description:
      "A multi-tenant treasury OS processing $1.2B annualised across 14 partner banks. Built for sub-200ms ledger writes and SOC2-ready from day one.",
    tags: ["Next.js", "Go", "Postgres", "Kafka", "AWS"],
    bg: 1,
    hero: true,
  },
  {
    id: "helio9",
    num: "02",
    category: "AI Copilot",
    vertical: "Legal",
    title: "Helio9 — an AI copilot for in-house counsel",
    description:
      "RAG over 4M private legal documents with sub-second retrieval, citation guards and lawyer-grade evaluation harness.",
    tags: ["OpenAI", "Python", "pgvector", "Vercel"],
    bg: 2,
  },
  {
    id: "lumen",
    num: "03",
    category: "Mobile",
    vertical: "Health",
    title: "Lumen — telemedicine, offline-first",
    description:
      "Flutter app serving 320k patients across India & SEA with offline records, encrypted sync and HL7 integration.",
    tags: ["Flutter", "Node.js", "MongoDB", "GCP"],
    bg: 3,
  },
  {
    id: "drift",
    num: "04",
    category: "Web3",
    vertical: "DeFi",
    title: "Drift — non-custodial lending on Base & Arbitrum",
    description:
      "Audited Solidity contracts, real-time risk dashboards and a React-Three-Fiber landing experience.",
    tags: ["Solidity", "Wagmi", "R3F", "Foundry"],
    bg: 4,
  },
  {
    id: "viridian",
    num: "05",
    category: "Game",
    vertical: "Hyper-Casual",
    title: "Viridian Run — 18M downloads, six markets",
    description:
      "WebGL + Unity hybrid, server-authoritative leaderboards, live-ops dashboard and an event scheduling engine.",
    tags: ["Unity", "WebGL", "Firebase", "BigQuery"],
    bg: 5,
  },
  {
    id: "meridian",
    num: "06",
    category: "Enterprise",
    vertical: "Logistics",
    title: "Meridian — port operations, re-platformed",
    description:
      "Replaced a 14-year-old SAP stack with a real-time event-driven platform — 34% throughput uplift in the first quarter.",
    tags: ["NestJS", "Kafka", "Postgres", "Azure"],
    bg: 6,
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Products shipped end-to-end" },
  { value: 42, suffix: "", label: "Senior engineers & designers" },
  { value: 9, suffix: "", label: "Active markets" },
  { value: 99.98, suffix: "%", label: "Production uptime average" },
  { value: 4.9, suffix: "★", label: "Client NPS" },
  { value: 68, suffix: "%", label: "Of new work from referrals" },
] as const;

export const valueProps = [
  {
    glyph: "◇",
    title: "Scalable Architecture",
    body: "Every system is designed to grow 10× before it has to be rewritten — and instrumented to prove it under load.",
  },
  {
    glyph: "✦",
    title: "AI Integration",
    body: "AI is woven into the product, not bolted on. RAG, agents, evals and guardrails — done properly.",
  },
  {
    glyph: "↗",
    title: "Fast Delivery",
    body: "Weekly demos. Two-week increments. A product in hand by week 8 — not month 8.",
  },
  {
    glyph: "◎",
    title: "Dedicated Support",
    body: "One Slack channel, one principal engineer, one product strategist. Always responsive, always senior.",
  },
  {
    glyph: "△",
    title: "Modern Tech Stack",
    body: "An opinionated, exit-ready stack curated from 120 builds — no exotic dependencies, no vendor lock-in.",
  },
  {
    glyph: "※",
    title: "Honest Engineering",
    body: "Senior engineers stay on the build through deployment. No outsourcing, no B-team, no surprises.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "SellTech delivered in eight weeks what two prior agencies failed to deliver in nine months. They are now the only engineering partner we trust with anything load-bearing.",
    name: "Anaya Nair",
    role: "Founder & CEO · Polaris AI",
    initials: "AN",
    gradient: "linear-gradient(135deg,#22D3EE,#8B5CF6)",
  },
  {
    quote:
      "Their AI team understood our retrieval problem better than the consultancies that pitched us at 4× the price. Quiet, sharp, ridiculously fast.",
    name: "Daniel Marchetti",
    role: "CTO · Helio9",
    initials: "DM",
    gradient: "linear-gradient(135deg,#8B5CF6,#E879F9)",
  },
  {
    quote:
      "We replaced a 14-year-old SAP deployment with their event-driven platform. Throughput is up 34% and the team finally enjoys shipping again.",
    name: "Rohit Subramanian",
    role: "VP Engineering · Meridian FI",
    initials: "RS",
    gradient: "linear-gradient(135deg,#00D4FF,#FFB547)",
  },
  {
    quote:
      "The most senior, most accountable engineering team we have worked with — and we have worked with most of the well-known names. The bar is meaningfully higher here.",
    name: "Elena Kowalski",
    role: "Chief Product Officer · Northwind",
    initials: "EK",
    gradient: "linear-gradient(135deg,#E879F9,#22D3EE)",
  },
] as const;

export const hubs = [
  { code: "MUM", city: "Mumbai, IN", x: 0.3, y: 0.6, hq: true },
  { code: "DEL", city: "Delhi, IN", x: 0.32, y: 0.5 },
  { code: "SFO", city: "San Francisco", x: 0.15, y: 0.42 },
  { code: "NYC", city: "New York", x: 0.25, y: 0.4 },
  { code: "LDN", city: "London", x: 0.46, y: 0.36 },
  { code: "DXB", city: "Dubai", x: 0.55, y: 0.56 },
  { code: "SGP", city: "Singapore", x: 0.74, y: 0.62 },
  { code: "TYO", city: "Tokyo", x: 0.84, y: 0.46 },
  { code: "SYD", city: "Sydney", x: 0.88, y: 0.78 },
] as const;

export const navLinks = [
  { href: "#services", label: "Software Development Services" },
  { href: "#products", label: "Business Solutions" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Projects & Case Studies" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const serviceOptions = [
  "Custom Software Development",
  "SaaS Platform",
  "AI Solutions",
  "Mobile App Development",
  "Website Development",
  "Blockchain Development",
  "Game Development",
  "UI / UX Design",
  "Digital Marketing",
  "IT Consulting",
] as const;
