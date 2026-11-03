export type CaseImage = {
  /** Leave empty to show a reserved "coming soon" area */
  src?: string;
  /** Label shown inside the reserved area */
  placeholder?: string;
  alt: string;
  width: number;
  height: number;
  /** Optional caption under the image: module name and a short description */
  caption?: { title: string; text?: string };
  /** "full" spans the whole row, "half" sits next to another half image */
  size?: "full" | "half";
};

export type SimpleCase = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  meta: { label: string; value: string }[];
  liveUrl?: string;
  hero: CaseImage;
  overview: string[];
  problem: { intro: string; points: string[] };
  solution: { intro: string; points: string[] };
  contributions?: string[];
  outcome?: string[];
  /** Atmosphere photo shown full width after the overview */
  moodAfterOverview?: CaseImage;
  /** Atmosphere photos shown side by side before the designs */
  moodBeforeDesigns?: CaseImage[];
  gallery: CaseImage[];
  next: { slug: string; href: string; title: string };
};

export const simpleCases: Record<string, SimpleCase> = {
  "provia-career": {
    slug: "provia-career",
    title: "Provia Career",
    category: "AI · Career Platform",
    tagline: "An AI-powered mock interview platform for web and mobile.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Web & Mobile" },
      { label: "Tools", value: "Figma, Photoshop, Claude, ChatGPT" }
    ],
    liveUrl: "https://proviacareer.com",
    hero: {
      src: "/projects/case/provia-hero.webp",
      alt: "Provia Career app on an iPhone floating above a glowing platform.",
      width: 2400,
      height: 1642
    },
    overview: [
      "Provia helps people practice job interviews through text, voice and video interview modes, then shows them exactly what to improve.",
      "The goal was to turn the uncertainty, lack of confidence and feedback gap people feel before interviews into a structured, repeatable practice experience."
    ],
    problem: {
      intro: "Most candidates prepare alone and walk into interviews without knowing how they actually come across.",
      points: [
        "Existing practice tools lack structured evaluation and realistic conversation.",
        "Feedback is generic, with no actionable performance insights.",
        "Users can't see their progress over time.",
        "Interviews are rarely personalized to role, seniority or goals."
      ]
    },
    solution: {
      intro: "A practice loop built around realistic sessions, specific feedback and visible progress.",
      points: [
        "A structured interview framework with adaptive AI follow-up questions.",
        "Category-based feedback on clarity, communication and confidence.",
        "Progress tracking with session scores, trends and interview history.",
        "Personalized interviews based on role, level, type and career goals."
      ]
    },
    contributions: [
      "Problem definition and qualitative user research",
      "Personas and end-to-end user journey",
      "Interview flow and AI feedback system",
      "Progress dashboard and performance metrics",
      "UI design for web and mobile"
    ],
    gallery: [
      {
        src: "/projects/case/provia-laptop.webp",
        alt: "Provia transcript and feedback screen on a laptop, with session score and improvement charts.",
        width: 2400,
        height: 1808
      },
      {
        src: "/projects/case/provia-feedback.webp",
        alt: "Provia mobile interview feedback screen with overall score and performance trend.",
        width: 2400,
        height: 1694
      },
      {
        src: "/projects/case/provia-composition.webp",
        alt: "Provia screens shown together on laptop and phone mockups.",
        width: 1928,
        height: 2400
      }
    ],
    next: { slug: "mecellem", href: "/projects/mecellem", title: "Mecellem" }
  },

  "mecellem": {
    slug: "mecellem",
    title: "Mecellem",
    category: "Enterprise AI · Legal Products",
    tagline: "A family of AI-powered legal products by New Mind AI.",
    meta: [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Company", value: "New Mind AI" },
      { label: "Year", value: "2022 – 2026" },
      { label: "Platforms", value: "Web, mobile, tablet" }
    ],
    hero: {
      src: "/projects/case/mecellem-hero.webp",
      alt: "Mecellem dashboard and planning screens on two laptops.",
      width: 2400,
      height: 1714
    },
    overview: [
      "Mecellem was a family of AI-powered legal products, each built for a different part of legal work: case law, legislation, litigation, contracts, transactions and document drafting.",
      "I joined after Mecellem's launch and designed the screens and UX flows of these products, working closely with business analysts, AI engineers and developers. Toward the end of my time there, the company decided to offer these products as MCP-based services."
    ],
    problem: {
      intro: "Legal work is complex, multi-step and high-stakes, and each product covered a different process with its own users, data and steps.",
      points: [
        "Processes such as a lawsuit, from petition to ruling, involve many steps, people and documents.",
        "Dense legal content creates high cognitive load.",
        "AI output is hard to trust unless users can check it.",
        "An error or a missed step in a legal process has real consequences."
      ]
    },
    solution: {
      intro: "Clear interfaces that follow the same logic across every product.",
      points: [
        "Complex processes broken into clear, trackable stages.",
        "Dense information organized with a strong visual hierarchy.",
        "AI insights users can understand and verify before they act.",
        "Shared components and patterns, so separate products feel like one family."
      ]
    },
    contributions: [
      "Malumat (case law): Designed how court decisions and precedents are searched, filtered and compared.",
      "Mevzuat (legislation & compliance): Designed how laws, regulations and obligations are tracked.",
      "Muhakemat (litigation): Designed case workflows from petition to ruling, with stages, deadlines and documents.",
      "Mukavele (contracts): Designed the contract lifecycle: obligations, milestones and risks.",
      "Muamelat (transactions): Designed complex deals as stages, actors and approval flows.",
      "Müellif (document generation): Designed the flow from instruction to a first draft based on templates.",
      "Turned requirements into user flows, wireframes and prototypes with business analysts and developers.",
      "Ran heuristic evaluations to catch usability issues before development.",
      "Built reusable components and interaction patterns shared across products."
    ],
    gallery: [
      {
        src: "/projects/mecellem/gallery/mecellem-11.webp",
        alt: "Mecellem contract analysis interface on a laptop.",
        width: 1000,
        height: 852,
        size: "half"
      },
      {
        src: "/projects/mecellem/gallery/mecellem-12.webp",
        alt: "Mecellem document management interface on a laptop.",
        width: 1000,
        height: 852,
        size: "half"
      }
    ],
    next: { slug: "kepenk-storefront-kits", href: "/projects/kepenk-storefront-kits", title: "Kepenk Storefront Kits" }
  },

  "kepenk-storefront-kits": {
    slug: "kepenk-storefront-kits",
    title: "Kepenk Storefront Kits",
    category: "Design System · E-commerce",
    tagline: "Storefront template families and the design system behind them, for an e-commerce platform.",
    meta: [
      { label: "Role", value: "Product Designer (Freelance)" },
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Web & Mobile" },
      { label: "Tools", value: "Figma, Claude" }
    ],
    hero: { placeholder: "Cover visual", alt: "Kepenk storefront template families.", width: 1600, height: 1000 },
    overview: [
      "Kepenk is an e-commerce platform where merchants launch their own online store. I designed six new storefront template families and the token-based design system they are built on.",
      "Merchants pick a template, a color palette, a corner radius and light or dark mode, and a complete website is generated automatically."
    ],
    problem: {
      intro: "Merchants want a professional, on-brand store without hiring a designer or building every page by hand.",
      points: [
        "Existing templates were inconsistent and hard to adapt to different brands.",
        "Every customization risked breaking layout and spacing.",
        "Pages had to work in full-width and centered layouts, on desktop and mobile."
      ]
    },
    solution: {
      intro: "Six template families built on one shared, token-based design system.",
      points: [
        "Template families such as Modern, Minimal, Technical and Soft, each with multiple combinations.",
        "A single token-bound palette and a 4–8–12–16 radius system.",
        "A consistent grid and margin system that adapts to page width.",
        "Mobile designed alongside every page."
      ]
    },
    contributions: [
      "Design foundations: color, typography, radius and grid",
      "Reusable modules like top bar, navigation and product cards",
      "Six storefront template families",
      "Theme options: palette, radius, light and dark",
      "Responsive desktop and mobile layouts"
    ],
    gallery: [
      { placeholder: "Template families overview", alt: "Kepenk template families overview.", width: 1600, height: 1000 },
      { placeholder: "Design system foundations", alt: "Kepenk design system foundations.", width: 1600, height: 1200, size: "half" },
      { placeholder: "Mobile pages", alt: "Kepenk storefront mobile pages.", width: 1600, height: 1200, size: "half" }
    ],
    next: { slug: "kepenk-merchant-panel", href: "/projects/kepenk-merchant-panel", title: "Kepenk Merchant Panel" }
  },

  "kepenk-merchant-panel": {
    slug: "kepenk-merchant-panel",
    title: "Kepenk Merchant Panel",
    category: "B2B SaaS · E-commerce",
    tagline: "The admin panel merchants use to set up and run their online store on Kepenk, redesigned from scratch on a new component system.",
    meta: [
      { label: "Role", value: "Product Designer (Freelance)" },
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Web App" },
      { label: "Tools", value: "Figma" }
    ],
    hero: {
      src: "/projects/case/panel-dashboard.webp",
      alt: "Kepenk merchant panel overview dashboard with store setup checklist.",
      width: 2000,
      height: 1400
    },
    overview: [
      "Kepenk is an e-commerce platform, similar to ikas, where merchants set up and run their own online store without writing code. The merchant panel is where all of that happens: setting up the store, adding products, designing the storefront, managing orders and running marketing.",
      "I'm redesigning the panel from scratch, page by page, with a new component system focused on clarity and speed."
    ],
    problem: {
      intro: "Setting up a store and running it every day took more effort than it should.",
      points: [
        "New merchants didn't know where to start or what was missing before launch.",
        "Adding products one by one was slow, especially for merchants already selling on other marketplaces.",
        "Product visuals and campaign content needed separate tools outside the panel.",
        "Navigation had grown complex, and components looked and behaved differently from page to page."
      ]
    },
    solution: {
      intro: "One calm, consistent panel that guides merchants from setup to daily work.",
      points: [
        "Guided setup: A checklist on the dashboard shows what's left before the store goes live.",
        "Fast product onboarding: Import products from Excel, Trendyol or other platforms from a single drawer.",
        "AI Studio: Generate product photos, videos, banners and social posts inside the panel and add them straight to products.",
        "Visual storefront editing: A homepage layout editor with ready-made banner variants.",
        "Marketing in the same place: Email campaigns with a clear delivery funnel report.",
        "One component system: Inline accordion sidebar, borderless cards, filled primary actions, readable status chips and a strict 4-point grid. Every page includes empty, loading and similar states."
      ]
    },
    contributions: [
      "Information architecture and sidebar navigation",
      "Dashboard with store setup checklist and key metrics",
      "Product onboarding and import flow",
      "AI Studio for product visuals and marketing content",
      "Storefront layout editor",
      "Email campaign reporting",
      "Component library and interaction states: empty, loading, toasts"
    ],
    gallery: [
      {
        src: "/projects/case/panel-ai-studio.webp",
        alt: "AI Assistant studio for generating product photos, videos, banners and social posts.",
        width: 2000,
        height: 1400
      },
      {
        src: "/projects/case/panel-ai-detail.webp",
        alt: "AI-generated product photo detail with add to product images action.",
        width: 2000,
        height: 1400,
        size: "half"
      },
      {
        src: "/projects/case/panel-homepage-editor.webp",
        alt: "Homepage layout editor with banner design variants.",
        width: 2000,
        height: 1400,
        size: "half"
      },
      {
        src: "/projects/case/panel-onboarding.webp",
        alt: "First product drawer with import options from Excel, Trendyol or other platforms.",
        width: 2000,
        height: 1400,
        size: "half"
      },
      {
        src: "/projects/case/panel-email-campaign.webp",
        alt: "Email campaign report with delivery funnel and sent email preview.",
        width: 2000,
        height: 1333,
        size: "half"
      }
    ],
    next: { slug: "mclub-redesign", href: "/projects/mclub-redesign", title: "Mclub" }
  },

  "mclub-redesign": {
    slug: "mclub-redesign",
    title: "Mclub",
    category: "UX Research · E-commerce",
    tagline: "A concept UX redesign of mclub.com.tr, Missha Türkiye's official online store.",
    meta: [
      { label: "Role", value: "UX Research, UX/UI Design, Design System" },
      { label: "Type", value: "Personal concept · 2026" },
      { label: "Platform", value: "Desktop & Mobile Web" },
      { label: "Tools", value: "Figma" }
    ],
    hero: {
      src: "/projects/case/mclub-hero.webp",
      alt: "Mclub redesigned home page on a laptop and a phone.",
      width: 2400,
      height: 1669
    },
    overview: [
      "Finding products on Mclub wasn't the problem. Shoppers couldn't trust the price they saw or know what was happening with their order.",
      "I analysed complaint data and the site itself to define the problems, then redesigned the shopping and post-purchase flow so users can see what is happening at every step."
    ],
    problem: {
      intro: "I analysed 48 Mclub and 530 Missha complaints on Şikayetvar alongside a heuristic review. Most came from pricing, orders, returns and support, not the products, and only 20% of Mclub complaints had been answered.",
      points: [
        "Price and campaign mismatch: banner discounts didn't reach the cart, and cart and checkout showed different totals.",
        "Post-purchase uncertainty: payments taken with no visible order, hidden cancel windows, refunds stuck in the wallet.",
        "No reachable support, and no way to see the status of a request.",
        "Weak trust signals: near-perfect ratings, missing negative reviews, no expiry date or stock info.",
        "Interface friction: a faded Add to Cart button, a cookie banner without a reject option, no guest checkout, small tap targets on mobile."
      ]
    },
    solution: {
      intro: "Five principles: pay the price you see, every state has a name and a next step, prove trust, one primary action per screen, help starts where the problem happens.",
      points: [
        "Transparent pricing: net campaign price on cards and product pages, a campaign progress bar and price-change alerts in the cart, and checkout locked to the cart total.",
        "Status-based order tracking with a timeline, remaining cancel time and one-tap cancel.",
        "A returns and wallet hub showing where and when money arrives, plus Club Points with their TL value and expiry.",
        "In-context support tied to each order, with request number, status and expected reply time.",
        "Honest reviews and product info: rating distribution, verified buyers, a negative-review filter, expiry date, stock and delivery date.",
        "Frictionless mobile web: 44px tap targets, sticky Add to Cart and Checkout with the net total, guest checkout and a mini cart."
      ]
    },
    contributions: [
      "Secondary user research and thematic analysis of complaint data",
      "Heuristic evaluation based on Nielsen's principles (13 issues, rated by severity)",
      "User journey map and three proto-personas",
      "Prioritized design opportunities with measurable success criteria",
      "Design system: color, typography, spacing and radius tokens with status colors",
      "30+ desktop and mobile screens, from home to checkout, order tracking, returns, reviews and support"
    ],
    gallery: [
      {
        src: "/projects/case/mclub-home.webp",
        alt: "Mclub best sellers and skin-type categories on desktop, mobile menu on phone.",
        width: 2400,
        height: 1550
      },
      {
        src: "/projects/case/mclub-product.webp",
        alt: "Mclub product detail page with net campaign price, expiry date and stock info.",
        width: 2400,
        height: 1550,
        size: "half"
      },
      {
        src: "/projects/case/mclub-cart.webp",
        alt: "Mclub cart with applied campaign and price-change alert.",
        width: 2400,
        height: 1669,
        size: "half"
      },
      {
        src: "/projects/case/mclub-checkout.webp",
        alt: "Mclub delivery and payment step with guest checkout and locked order summary.",
        width: 2400,
        height: 1669
      }
    ],
    next: { slug: "yacht-ops", href: "/projects/yacht-ops", title: "Yacht Ops" }
  },

  "yacht-ops": {
    slug: "yacht-ops",
    title: "Yacht Ops",
    category: "Yacht Operations Assistant",
    tagline: "An operations app for small and mid-size yachts in Turkey.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Platforms", value: "iPad, iPhone, web links" },
      { label: "Year", value: "2026" },
      { label: "Status", value: "Concept, field validation ongoing" }
    ],
    hero: {
      src: "/projects/case/yacht-overview.webp",
      alt: "Yacht Ops vessel overview on iPad with documents and equipment.",
      width: 2400,
      height: 1601
    },
    overview: [
      "Yacht Ops is an operations app for small and mid-size yachts in Turkey.",
      "It brings captains, engineers, local technicians and owners into one shared boat log, so every job, receipt and service is tracked in one place and the boat keeps its own history."
    ],
    moodAfterOverview: {
      src: "/projects/case/yacht-mood-sea.webp",
      alt: "View from a yacht bow over calm sea.",
      width: 2400,
      height: 1346
    },
    problem: {
      intro: "On small yachts, day-to-day operations run on WhatsApp groups, paper receipts and the captain's memory.",
      points: [
        "When something breaks, the captain calls a technician, photos get lost in chats and invoices are hard to find at the end of the month.",
        "When the crew changes, the boat's history (which part was replaced, which technician can be trusted, how a fault was fixed last time) leaves with the person who knew it.",
        "The owner only sees a total at the end of the month, not what the money was spent on.",
        "Most existing tools are English-only and built for superyachts or marinas. None is designed for a Turkish captain of a 24 m motor yacht who works with local technicians on WhatsApp."
      ]
    },
    solution: {
      intro: "Yacht Ops turns every issue into a job and keeps everything connected to the boat.",
      points: [
        "Technicians join from a link. A job is sent on WhatsApp; the technician accepts it, adds photos, parts and the invoice from a simple Turkish page, without installing an app or creating an account.",
        "Receipts fill themselves. The crew snaps a receipt, the amount, date and supplier are read from the photo, and anything over the owner's limit is sent for approval automatically.",
        "Maintenance without paper. Engineers run daily rounds, log engine hours and sign services with a PIN, from a phone, even offline.",
        "The boat keeps the memory. Every job, service and part is saved to the vessel, so the next engineer gets a ready-made handover instead of a phone call.",
        "Owners see everything, without an account. They approve spend and read a clear monthly report in Turkish from a private link."
      ]
    },
    outcome: [
      "A concept designed for three people on three devices: the captain on iPad, the crew on phone, and technicians and owners on web links.",
      "The next step is validating it with captains and technicians in Göcek and Bodrum."
    ],
    moodBeforeDesigns: [
      {
        src: "/projects/case/yacht-mood-hull.webp",
        alt: "Palm shadow on a yacht hull at sunset.",
        width: 2400,
        height: 1600
      },
      {
        src: "/projects/case/yacht-mood-bow.webp",
        alt: "Palm shadow on a yacht bow in a bay.",
        width: 2400,
        height: 1600
      }
    ],
    gallery: [
      {
        src: "/projects/case/yacht-dashboard.webp",
        alt: "Captain dashboard on iPad and daily engine-room round on iPhone.",
        width: 2400,
        height: 1601
      },
      {
        src: "/projects/case/yacht-offline.webp",
        alt: "Offline edit conflict on a job, choosing which version to keep.",
        width: 2400,
        height: 1600,
        size: "half"
      },
      {
        src: "/projects/case/yacht-handover.webp",
        alt: "Handover package for the incoming engineer.",
        width: 2400,
        height: 1600,
        size: "half"
      },
      {
        src: "/projects/case/yacht-technician.webp",
        alt: "Technician web link in Turkish: accept the job and report the work done.",
        width: 2400,
        height: 1600
      }
    ],
    next: { slug: "provia-career", href: "/projects/provia-career", title: "Provia Career" }
  }
};
