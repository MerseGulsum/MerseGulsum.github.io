export type CaseImage = {
  /** Leave empty to show a reserved "coming soon" area */
  src?: string;
  /** Label shown inside the reserved area */
  placeholder?: string;
  alt: string;
  width: number;
  height: number;
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
  contributions: string[];
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
    next: { slug: "ai-product-experiment", href: "/projects/ai-product-experiment", title: "Mecellem" }
  },

  "ai-product-experiment": {
    slug: "ai-product-experiment",
    title: "Mecellem",
    category: "AI · Legal Platform",
    tagline: "An AI-powered legal intelligence platform by New Mind AI.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Company", value: "New Mind AI" },
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Web App" }
    ],
    hero: {
      src: "/projects/case/mecellem-hero.webp",
      alt: "Mecellem dashboard and planning screens on two laptops.",
      width: 2400,
      height: 1714
    },
    overview: [
      "Mecellem simplifies how legal professionals discover, organize and work with complex legal information.",
      "I worked with AI engineers and developers to turn advanced AI capabilities into product experiences that feel reliable, transparent and effortless."
    ],
    problem: {
      intro: "Legal professionals work across contracts, legislation, case law and internal knowledge every day, spread over different tools.",
      points: [
        "Information-dense interfaces create high cognitive load.",
        "AI-generated insights are hard to trust without a way to verify them.",
        "Repetitive tasks slow down everyday decisions."
      ]
    },
    solution: {
      intro: "A unified, AI-assisted workspace designed around three principles: clarity, trust and efficiency.",
      points: [
        "Search that reaches relevant information without overwhelming users.",
        "AI insights users can understand and verify before acting.",
        "Simplified workflows that keep the detail and control legal work needs."
      ]
    },
    contributions: [
      "Search experience for complex legal data",
      "Information architecture for dense legal content",
      "Workflow and task flow simplification",
      "Dashboards with clear visual hierarchy",
      "Reusable components and interaction patterns"
    ],
    gallery: [
      {
        src: "/projects/case/mecellem-main.webp",
        alt: "Mecellem home screen on a laptop.",
        width: 2400,
        height: 2400,
        size: "full"
      },
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
      { label: "Tools", value: "Figma" }
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
    category: "B2B SaaS · Dashboard",
    tagline: "A simpler admin panel for merchants running their online store on Kepenk.",
    meta: [
      { label: "Role", value: "Product Designer (Freelance)" },
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Web App" },
      { label: "Tools", value: "Figma" }
    ],
    hero: { placeholder: "Cover visual", alt: "Kepenk merchant admin panel.", width: 1600, height: 1000 },
    overview: [
      "The merchant panel is where store owners manage orders, products and their storefront every day. I am redesigning it from scratch, with a new design system focused on clarity and speed.",
      "The work moves page by page, starting with navigation and the dashboard."
    ],
    problem: {
      intro: "Merchants spend hours in the panel, but everyday tasks took more effort than they should.",
      points: [
        "Navigation and screens had grown complex over time.",
        "Components looked and behaved differently from page to page.",
        "Common tasks took too many steps."
      ]
    },
    solution: {
      intro: "A calmer, consistent panel built on its own component system.",
      points: [
        "A clear sidebar with inline accordion groups.",
        "Borderless cards, filled primary actions and readable status chips.",
        "A strict 4-point system for spacing, sizing and radius.",
        "Every page designed with empty, loading and similar states."
      ]
    },
    contributions: [
      "Information architecture and sidebar navigation",
      "Dashboard and key store metrics",
      "Orders, tables and list patterns",
      "A new component library for the panel",
      "Interaction states: hover, empty, loading and toasts"
    ],
    gallery: [
      { placeholder: "Dashboard", alt: "Kepenk merchant panel dashboard.", width: 1600, height: 1000 },
      { placeholder: "Orders table", alt: "Kepenk orders table.", width: 1600, height: 1200, size: "half" },
      { placeholder: "Component library", alt: "Kepenk panel component library.", width: 1600, height: 1200, size: "half" }
    ],
    next: { slug: "provia-career", href: "/projects/provia-career", title: "Provia Career" }
  }
};
