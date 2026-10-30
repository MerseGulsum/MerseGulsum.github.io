import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ToolMark } from "@/components/ToolMark";

export function ProjectCard({ project, total }: { project: Project; total?: string }) {
  const { title, subtitle } = project;
  const caseHref = `/projects/${project.slug}`;
  const soon = Boolean(project.comingSoon);

  const visual = <ProjectVisual project={project} useCoverImage displayTitle={title} />;

  return (
    <article className={`project-card${soon ? " project-card--soon" : ""}`}>
      {soon ? (
        <div className="project-card__visual">{visual}</div>
      ) : (
        <Link href={caseHref} className="project-card__visual" aria-label={`${title} case study`}>
          {visual}
        </Link>
      )}

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__index">
            {project.index}
            {total && <span> / {total}</span>}
          </span>
          <span>{project.category}</span>
        </div>

        <div className="project-card__heading">
          <h3>{soon ? title : <Link href={caseHref}>{title}</Link>}</h3>
          {subtitle && <span className="project-card__subtitle">{subtitle}</span>}
        </div>

        <p>{project.description}</p>

        {!soon && (
          <div className="project-card__footer">
            <span>{project.year}</span>
            <div className="project-card__tools" aria-label={`Tools used for ${title}`}>
              {project.skills.map((tool) => (
                <ToolMark key={tool} name={tool} />
              ))}
            </div>
          </div>
        )}

        <div className="project-card__actions">
          {soon ? (
            <span className="button-link project-card__cta project-card__cta--soon" aria-disabled="true">
              Coming soon
            </span>
          ) : (
            <>
              <Link className="button-link project-card__cta" href={caseHref}>
                Case Study
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              {project.isLive && (
                <a
                  className="button-link project-card__cta"
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
