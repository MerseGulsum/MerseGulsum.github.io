import { projects } from "@/data/projects";
import type { ProjectVisualKind } from "@/data/cases/types";

export type ProjectListingItem = {
  slug: string;
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
      "An AI-powered mock interview platform where candidates practice real interview scenarios, get instant feedback and track their progress."
  },
  "logistics-product": {
    category: "Experience Design",
    description:
      "A reserved space for a future case study focused on structure, clarity and high-quality interface storytelling."
  },
  "ai-product-experiment": {
    category: "Product Design",
    description:
      "An AI-powered legal intelligence platform that helps legal professionals search, organize and work with complex legal information."
  }
} satisfies Record<string, { category: string; description: string }>;

const listingSlugs = ["provia-career", "logistics-product", "ai-product-experiment"] as const;

export const projectListing: ProjectListingItem[] = listingSlugs.flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  const content = listingContent[slug];

  if (!project) return [];

  return {
    slug: project.slug,
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
