"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { getProject } from "@/data/projects";
import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { createHorizontalProjects } from "@/lib/animations/horizontalProjects";

// Placeholder card until the project is ready
const yachtOps: Project = {
  slug: "yacht-ops",
  index: "",
  title: "Yacht Ops",
  year: "2026",
  role: "",
  category: "In progress",
  description: "A new project, coming soon.",
  summary: "",
  shortDescription: "",
  externalUrl: "#",
  isLive: false,
  coverImage: "",
  gallery: [],
  imageAlt: "Yacht Ops visual coming soon.",
  visual: "commerce",
  skills: [],
  services: [],
  heroColor: "#d9ff63",
  nextProject: "provia-career",
  comingSoon: true
};

const homeOrder = ["provia-career", "kepenk-merchant-panel", "mclub-redesign"];
const homeProjects = [...homeOrder.map((slug) => getProject(slug)).filter((p): p is Project => Boolean(p)), yachtOps].map(
  (project, i) => ({ ...project, index: String(i + 1).padStart(2, "0") })
);
const homeTotal = String(homeProjects.length).padStart(2, "0");

export function HorizontalProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || prefersReducedMotion()) return;

    const ctx = createHorizontalProjects(gsap, ScrollTrigger, section, track);
    return () => ctx.revert();
  }, []);

  return (
    <section className="selected-projects" ref={sectionRef} aria-labelledby="selected-projects-title">
      <div className="selected-projects__header">
        <p className="eyebrow">Selected Projects</p>
        <h2 id="selected-projects-title">Selected Projects</h2>
        <Link className="button-link" href="/projects">
          View All Projects
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="selected-projects__viewport">
        <div className="selected-projects__track" ref={trackRef}>
          {homeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} total={homeTotal} />
          ))}
        </div>
      </div>
    </section>
  );
}
