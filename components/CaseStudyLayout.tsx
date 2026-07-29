import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getNextProject } from "@/data/projects";
import { ProjectBackButton } from "@/components/ProjectBackButton";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ToolMark } from "@/components/ToolMark";

export function CaseStudyLayout({ project }: { project: Project }) {
  const next = getNextProject(project.slug);
  const sections = [
    ["Overview", project.caseStudy.overview],
    ["Problem", project.caseStudy.problem],
    ["Research or assumptions", project.caseStudy.research],
    ["Design approach", project.caseStudy.approach],
    ["Interaction or motion", project.caseStudy.interaction],
    ["Outcome", project.caseStudy.outcome]
  ];

  return (
    <article className="case-study">
      <ProjectBackButton className="case-study__back" />

      <header className="case-hero">
        <div className="case-hero__copy">
          <p className="eyebrow">{project.index} / Case Study</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-hero__meta" aria-label="Project metadata">
            <span>{project.year}</span>
            <span>{project.category}</span>
          </div>
          <div className="case-hero__tools" aria-label={`Tools used for ${project.title}`}>
            {project.skills.map((tool) => (
              <ToolMark key={tool} name={tool} />
            ))}
          </div>
        </div>
        <ProjectVisual project={project} large />
      </header>

      <section className="case-facts" aria-label="Project facts">
        <div>
          <span>Role</span>
          <strong>{project.role}</strong>
        </div>
        <div>
          <span>Duration</span>
          <strong>{project.caseStudy.duration}</strong>
        </div>
        <div>
          <span>Tools</span>
          <strong>{project.skills.join(", ")}</strong>
        </div>
      </section>

      <div className="case-body">
        {sections.map(([label, text]) => (
          <section className="case-section" key={label}>
            <p className="eyebrow">{label}</p>
            <p>{text}</p>
          </section>
        ))}

        <section className="case-section case-section--screens">
          <p className="eyebrow">Key screens</p>
          <div className="screen-list">
            {project.caseStudy.keyScreens.map((screen, index) => (
              <div key={screen}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{screen}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <nav className="next-project" aria-label="Next project">
        <span>Next Project</span>
        <Link href={`/projects/${next.slug}`}>
          {next.title}
          <ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
