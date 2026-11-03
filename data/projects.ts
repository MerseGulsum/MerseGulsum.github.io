import { aiExperimentCase } from "@/data/cases/aiExperiment";
import { mehirCase } from "@/data/cases/mehir";
import { proviaCase } from "@/data/cases/provia";
import type { Project } from "@/data/cases/types";
import { simpleCases } from "@/data/caseStudies";

export type { Project } from "@/data/cases/types";

export const projects: Project[] = [
  {
    slug: "provia-career",
    order: 2,
    index: "01",
    title: "Provia Career",
    subtitle: "AI Mock Interview Platform",
    year: "2026",
    role: "Product design, UX structure, interface direction",
    category: "AI · Career Platform",
    description:
      "An AI-powered mock interview platform where candidates practice real interview scenarios, get instant feedback and track their progress.",
    summary: "A career platform concept shaped around clarity, confidence and guided candidate journeys.",
    shortDescription:
      "Provia Career is a digital career platform designed to help people discover opportunities, understand professional paths and take clearer steps toward their goals. The product brings career exploration, guidance and application-related experiences together within a structured and accessible interface.",
    externalUrl: "https://proviacareer.com",
    isLive: true,
    coverImage: "/projects/provia-career/cover.svg",
    gallery: ["/projects/provia-career/screen-01.svg", "/projects/provia-career/screen-02.svg"],
    imageAlt: "Abstract career platform interface with profile cards and pathway modules.",
    visual: "career",
    skills: ["Figma", "Codex", "ChatGPT"],
    services: ["Mobile App Design", "UX & Product Strategy", "AI-Assisted Product Design"],
    heroColor: "#d9ff63",
    nextProject: "mehir-finance",
    caseStudy: proviaCase
  },
  {
    slug: "mehir-finance",
    order: 0,
    index: "02",
    title: "Mehir Finance",
    year: "2026",
    role: "UX design, visual hierarchy, interface system",
    category: "Fintech UX / Visual System",
    description:
      "A finance interface concept that balances premium restraint with legible money movement and decision support.",
    summary: "A financial product concept for understanding balances, activity and decisions at a glance.",
    shortDescription:
      "A finance experience focused on helping users understand and manage different assets through clearer account structures, accessible transaction flows and a refined visual system.",
    showcaseCategory: "Fintech UX / Mobile Product",
    externalUrl: "#",
    isLive: false,
    coverImage: "/projects/mehir-finance/cover.svg",
    gallery: ["/projects/mehir-finance/screen-01.svg", "/projects/mehir-finance/screen-02.svg"],
    imageAlt: "Dark finance dashboard placeholder with charts, account cards and transaction rhythm.",
    visual: "finance",
    skills: ["Figma", "Adobe Illustrator"],
    services: ["Web App Design", "UX & Product Strategy", "Design Systems"],
    heroColor: "#a2ffda",
    nextProject: "provia-career",
    caseStudy: mehirCase
  },
  {
    slug: "mecellem",
    order: 1,
    index: "02",
    title: "Mecellem",
    subtitle: "New Mind AI",
    year: "2022 – 2026",
    role: "AI workflow design, prototype strategy, product UX",
    category: "Enterprise AI · Legal Products",
    description:
      "A family of AI-powered legal products by New Mind AI.",
    summary: "An AI workflow concept that keeps exploration fast while preserving designer judgment and traceability.",
    shortDescription:
      "An experimental digital product exploring how AI-assisted workflows can support research, ideation, interface generation and faster product-design decisions.",
    showcaseCategory: "AI-Assisted Product Design",
    externalUrl: "#",
    isLive: false,
    coverImage: "/projects/ai-product-experiment/cover.svg",
    gallery: [
      "/projects/ai-product-experiment/screen-01.svg",
      "/projects/ai-product-experiment/screen-02.svg"
    ],
    imageAlt: "AI product interface placeholder with prompt panels, generated variants and evaluation notes.",
    visual: "ai",
    skills: ["Adobe XD", "Gemini", "ChatGPT"],
    services: ["AI-Assisted Product Design", "UX & Product Strategy", "Web App Design"],
    heroColor: "#f4efe7",
    nextProject: "kepenk-storefront-kits",
    caseStudy: aiExperimentCase
  },
  {
    slug: "kepenk-storefront-kits",
    order: 3,
    index: "03",
    title: "Kepenk Storefront Kits",
    subtitle: "Storefront Template Families",
    year: "2026",
    role: "Product Designer (Freelance)",
    category: "Design System · E-commerce",
    description:
      "Six storefront template families and the token-based design system behind them, for the Kepenk e-commerce platform.",
    summary: "Storefront template families built on one shared design system.",
    shortDescription:
      "Storefront template families and design system for Kepenk, an e-commerce platform where merchants launch their own online stores.",
    externalUrl: "#",
    isLive: false,
    coverImage: "",
    gallery: [],
    imageAlt: "Kepenk storefront template families.",
    visual: "commerce",
    skills: ["Figma", "Claude"],
    services: ["Design Systems", "Web App Design", "Mobile App Design"],
    heroColor: "#d9ff63",
    nextProject: "kepenk-merchant-panel"
  },
  {
    slug: "kepenk-merchant-panel",
    order: 4,
    index: "04",
    title: "Kepenk Merchant Panel",
    subtitle: "Merchant Admin Panel",
    year: "2026",
    role: "Product Designer (Freelance)",
    category: "B2B SaaS · Dashboard",
    description:
      "A redesign of the admin panel merchants use every day to run their store, built on a new, simpler component system.",
    summary: "A calmer, more consistent admin panel for store owners.",
    shortDescription:
      "Redesign of Kepenk's merchant admin panel with a new design system focused on clarity and speed.",
    externalUrl: "#",
    isLive: false,
    coverImage: "",
    gallery: [],
    imageAlt: "Kepenk merchant admin panel.",
    visual: "commerce",
    skills: ["Figma"],
    services: ["B2B SaaS Design", "Web App Design", "Design Systems"],
    heroColor: "#d9ff63",
    nextProject: "mclub-redesign"
  },
  {
    slug: "mclub-redesign",
    order: 5,
    index: "05",
    title: "Mclub",
    subtitle: "E-commerce UX Redesign",
    year: "2026",
    role: "UX Research, UX/UI Design, Design System",
    category: "UX Research · E-commerce",
    description:
      "A concept redesign of Missha Türkiye's official store, built on complaint data so shoppers can trust the price they see and always know where their order is.",
    summary: "Transparent pricing and clear order status for a beauty e-commerce store.",
    shortDescription:
      "Personal concept: UX research and redesign of mclub.com.tr, Missha Türkiye's official online store.",
    externalUrl: "#",
    isLive: false,
    coverImage: "/projects/case/mclub-hero.webp",
    gallery: [],
    imageAlt: "Mclub redesign on laptop and phone.",
    visual: "commerce",
    skills: ["Figma"],
    services: ["UX & Product Strategy", "Web App Design", "Design Systems"],
    heroColor: "#d9ff63",
    nextProject: "yacht-ops"
  },
  {
    slug: "yacht-ops",
    order: 6,
    index: "06",
    title: "Yacht Ops",
    subtitle: "Yacht Operations Assistant",
    year: "2026",
    role: "Product Designer",
    category: "Operations App · Maritime",
    description:
      "An operations app for small and mid-size yachts in Turkey: one shared boat log for captains, engineers, local technicians and owners.",
    summary: "One shared boat log for every job, receipt and service.",
    shortDescription: "Operations app for small and mid-size yachts in Turkey.",
    externalUrl: "#",
    isLive: false,
    coverImage: "/projects/case/yacht-overview.webp",
    gallery: [],
    imageAlt: "Yacht Ops on iPad.",
    visual: "commerce",
    skills: ["Figma"],
    services: ["Mobile App Design", "B2B SaaS Design", "UX & Product Strategy"],
    heroColor: "#d9ff63",
    nextProject: "provia-career"
  }
];

/**
 * Order on the Projects page. Projects not in this list are hidden there.
 * A project whose case study has no hero image yet (e.g. Kepenk Storefront Kits)
 * stays hidden until its visuals are added, then appears in its place automatically.
 */
export const projectsPageOrder = [
  "mecellem",
  "yacht-ops",
  "kepenk-merchant-panel",
  "provia-career",
  "kepenk-storefront-kits",
  "mclub-redesign"
];

export function projectsForProjectsPage() {
  return projectsPageOrder
    .map((slug) => getProject(slug))
    .filter((p): p is Project => Boolean(p))
    .filter((p) => Boolean(simpleCases[p.slug]?.hero.src));
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const project = getProject(slug);
  const next = project ? getProject(project.nextProject) : undefined;
  return next ?? projects[0];
}
