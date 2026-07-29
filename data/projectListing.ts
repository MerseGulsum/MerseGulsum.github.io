import { projects } from "@/data/projects";
import type { ProjectVisualKind } from "@/data/cases/types";

export type ProjectListingItem = {
  index: string;
  title: string;
  category: string;
  description: string;
  href: string;
  isLive: boolean;
  visual: ProjectVisualKind;
  accent: string;
};

const listingContent = {
  "provia-career": {
    category: "Product Design",
    description:
      "Provia Career is a digital platform designed to simplify career discovery, professional growth and job exploration through an intuitive, accessible and thoughtfully crafted user experience."
  },
  "logistics-product": {
    category: "Experience Design",
    description:
      "A reserved space for a future case study focused on structure, clarity and high-quality interface storytelling."
  },
  "automotive-hmi-concept": {
    category: "Interface Design",
    description:
      "A reserved space for an upcoming interface concept with measured spacing, minimal copy and a dominant visual field."
  },
  "ai-product-experiment": {
    category: "Product Strategy",
    description:
      "A reserved space for a future product story built around focused hierarchy, motion restraint and premium presentation."
  }
} satisfies Record<string, { category: string; description: string }>;

const listingSlugs = ["provia-career", "logistics-product", "automotive-hmi-concept", "ai-product-experiment"] as const;

export const projectListing: ProjectListingItem[] = listingSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  const content = listingContent[slug];

  if (!project) return [];

  return {
    index: project.index,
    title: project.title,
    category: content.category,
    description: content.description,
    href: project.externalUrl,
    isLive: project.isLive,
    visual: project.visual,
    accent: project.heroColor
  };
});
