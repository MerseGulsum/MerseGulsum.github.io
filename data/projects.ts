import { aiExperimentCase } from "@/data/cases/aiExperiment";
import { mehirCase } from "@/data/cases/mehir";
import { proviaCase } from "@/data/cases/provia";
import type { Project } from "@/data/cases/types";

export type { Project } from "@/data/cases/types";

export const projects: Project[] = [
  {
    slug: "provia-career",
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
    slug: "ai-product-experiment",
    index: "02",
    title: "Mecellem",
    subtitle: "New Mind AI",
    year: "2026",
    role: "AI workflow design, prototype strategy, product UX",
    category: "AI · Legal Platform",
    description:
      "An AI-powered legal intelligence platform that helps legal professionals search, organize and work with complex legal information.",
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
    skills: ["Figma"],
    services: ["Design Systems", "Web App Design", "Mobile App Design"],
    heroColor: "#d9ff63",
    nextProject: "kepenk-merchant-panel"
  },
  {
    slug: "kepenk-merchant-panel",
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
    nextProject: "provia-career"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const project = getProject(slug);
  const next = project ? getProject(project.nextProject) : undefined;
  return next ?? projects[0];
}
