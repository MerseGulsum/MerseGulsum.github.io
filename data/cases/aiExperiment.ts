import type { CaseStudy } from "@/data/cases/types";

export const aiExperimentCase: CaseStudy = {
  duration: "4 weeks",
  overview:
    "This experiment studies how AI can support product design without flattening taste, critique or intent.",
  problem:
    "AI tools can generate volume quickly, but teams still need structure for comparing quality and rationale.",
  research:
    "Assumptions focus on prompt traceability, variant comparison and preserving human decision checkpoints.",
  approach:
    "The concept organizes prompts, outputs, critique notes and selected directions into one workflow.",
  keyScreens: ["Prompt workspace", "Variant comparison", "Decision notes"],
  interaction:
    "Panels move in a directional sequence from prompt to variant to critique to preserve process continuity.",
  outcome:
    "The concept treats AI as a structured collaborator, not a replacement for product thinking."
};
