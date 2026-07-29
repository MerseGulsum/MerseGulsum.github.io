import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ToolMark } from "@/components/ToolMark";

export function ProjectCard({ project }: { project: Project }) {
  const isProvia = project.slug === "provia-career";
  const isMecellem = project.slug === "ai-product-experiment";
  const title = project.title;
  const subtitle = isMecellem ? "New Mind AI" : undefined;
  const tools = isMecellem ? ["Adobe XD", "Gemini", "ChatGPT"] : project.skills;
  const projectHref = project.slug === "logistics-product" ? "/projects/last-mile-delivery-app" : `/projects/${project.slug}`;

  return (
    <article className="project-card">
      <div className="project-card__meta">
        <span>{project.index}</span>
        <span>{project.category}</span>
      </div>
      <div className="project-card__heading">
        <h3>{title}</h3>
        {subtitle && <span className="project-card__subtitle">{subtitle}</span>}
      </div>
      <ProjectVisual project={project} useCoverImage displayTitle={title} />
      <p>{project.description}</p>
      <div className="project-card__footer">
        <span>{project.year}</span>
        <div className="project-card__tools" aria-label={`Tools used for ${title}`}>
          {tools.map((tool) => (
            <ToolMark key={tool} name={tool} />
          ))}
        </div>
      </div>
      <div className="project-card__actions">
        {isProvia ? (
          <>
            <a
              className="button-link project-card__cta"
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <Link className="button-link project-card__cta" href="/projects/provia-career">
              View Project
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </>
        ) : (
          <Link className="button-link project-card__cta" href={projectHref}>
            View Project
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
