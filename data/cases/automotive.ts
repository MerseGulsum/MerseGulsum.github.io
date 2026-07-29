import type { CaseStudy } from "@/data/cases/types";

export const automotiveCase: CaseStudy = {
  duration: "8 weeks",
  overview:
    "The HMI concept focuses on how visual hierarchy and motion can support safe in-vehicle comprehension.",
  problem:
    "Vehicle interfaces need to communicate state changes quickly without unnecessary distraction.",
  research:
    "Assumptions focus on glance duration, contrast needs, mode recognition and minimal interaction depth.",
  approach:
    "The design uses large status zones, quiet supporting metadata and spatially consistent transitions.",
  keyScreens: ["Cluster overview", "Navigation state", "Mode transition"],
  interaction:
    "Motion is short, directional and tied to system state so it reinforces orientation rather than decoration.",
  outcome: "The concept frames HMI as a calm, glanceable system with a strong hierarchy."
};
