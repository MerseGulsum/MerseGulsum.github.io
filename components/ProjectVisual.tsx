import type { CSSProperties } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectVisual({
  project,
  large = false,
  useCoverImage = false,
  displayTitle
}: {
  project: Project;
  large?: boolean;
  useCoverImage?: boolean;
  displayTitle?: string;
}) {
  const coverImageBySlug: Partial<Record<Project["slug"], string>> = {
    "provia-career": "/projects/provia-career/provia-cover.png",
    "logistics-product": "/projects/logistics-product/kargo-home.png"
  };
  const coverImage = useCoverImage ? coverImageBySlug[project.slug] : undefined;
  const title = displayTitle ?? project.title;

  return (
    <div
      className={`project-visual project-visual--${project.visual}${large ? " project-visual--large" : ""}`}
      style={{ "--project-hero-color": project.heroColor } as CSSProperties}
      role="img"
      aria-label={project.imageAlt}
    >
      {coverImage ? (
        <Image
          src={coverImage}
          alt=""
          fill
          sizes="(max-width: 899px) 78vw, 540px"
          className="project-visual__cover-image"
        />
      ) : (
        <>
          <div className="project-visual__grid" />
          <div className="project-visual__orb project-visual__orb--one" />
          <div className="project-visual__orb project-visual__orb--two" />
          <div className="project-visual__panel project-visual__panel--main" />
          <div className="project-visual__panel project-visual__panel--side" />
          <div className="project-visual__line project-visual__line--one" />
          <div className="project-visual__line project-visual__line--two" />
          <div className="project-visual__caption">
            <span>{project.index}</span>
            <strong>{title}</strong>
          </div>
        </>
      )}
    </div>
  );
}
