export type CaseStudy = {
  duration: string;
  overview: string;
  problem: string;
  research: string;
  approach: string;
  keyScreens: string[];
  interaction: string;
  outcome: string;
};

export type ProjectVisualKind = "career" | "finance" | "logistics" | "ai";

export type Project = {
  slug: string;
  index: string;
  title: string;
  year: string;
  role: string;
  category: string;
  description: string;
  summary: string;
  shortDescription: string;
  showcaseCategory?: string;
  externalUrl: string;
  isLive: boolean;
  coverImage: string;
  gallery: string[];
  imageAlt: string;
  visual: ProjectVisualKind;
  skills: string[];
  services: string[];
  heroColor: string;
  nextProject: string;
  caseStudy: CaseStudy;
};
