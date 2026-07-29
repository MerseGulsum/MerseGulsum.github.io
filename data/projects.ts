import { aiExperimentCase } from "@/data/cases/aiExperiment";
import { logisticsCase } from "@/data/cases/logistics";
import { mehirCase } from "@/data/cases/mehir";
import { proviaCase } from "@/data/cases/provia";
import type { Project } from "@/data/cases/types";

export type { Project } from "@/data/cases/types";

export const projects: Project[] = [
  {
    slug: "provia-career",
    index: "01",
    title: "Provia Career",
    year: "2026",
    role: "Product design, UX structure, interface direction",
    category: "Product Design / Career Platform",
    description:
      "A focused career experience that helps candidates understand roles, paths and next steps with less friction.",
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
    nextProject: "logistics-product",
    caseStudy: mehirCase
  },
  {
    slug: "logistics-product",
    index: "02",
    title: "Logistics Product",
    year: "2026",
    role: "Product strategy, workflow UX, interface design",
    category: "Operations UX / Web App",
    description:
      "A logistics workflow concept for tracking exceptions, shipment status and operational decisions.",
    summary: "An operations product concept that turns complex logistics signals into clear workflow priorities.",
    shortDescription:
      "A logistics management concept designed to simplify shipment tracking, operational visibility and exception handling for teams working across complex delivery processes.",
    showcaseCategory: "Operations UX / Web Application",
    externalUrl: "#",
    isLive: false,
    coverImage: "/projects/logistics-product/cover.svg",
    gallery: ["/projects/logistics-product/screen-01.svg", "/projects/logistics-product/screen-02.svg"],
    imageAlt: "Logistics interface placeholder with route lines, shipment cards and status panels.",
    visual: "logistics",
    skills: ["Figma", "FigJam", "Codex"],
    services: ["Web App Design", "UX & Product Strategy", "Design Systems"],
    heroColor: "#ff8b5f",
    nextProject: "ai-product-experiment",
    caseStudy: logisticsCase
  },
  {
    slug: "ai-product-experiment",
    index: "03",
    title: "Mecellem",
    year: "2026",
    role: "AI workflow design, prototype strategy, product UX",
    category: "AI UX / Prototype",
    description:
      "An AI-assisted product workflow for exploring, comparing and refining interface ideas with human control.",
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
    skills: ["Figma", "Gemini", "ChatGPT", "Codex"],
    services: ["AI-Assisted Product Design", "UX & Product Strategy", "Web App Design"],
    heroColor: "#f4efe7",
    nextProject: "provia-career",
    caseStudy: aiExperimentCase
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
