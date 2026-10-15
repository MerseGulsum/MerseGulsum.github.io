"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { simpleCases } from "@/data/caseStudies";
import { ToolMark } from "@/components/ToolMark";
import styles from "./ProjectsList.module.css";

export function ProjectsList({ projects }: { projects: Project[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const total = String(projects.length).padStart(2, "0");

  // Fade each project in as it scrolls into view
  useEffect(() => {
    const rows = listRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!rows || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    rows.forEach((row) => {
      row.classList.add(styles.hidden);
      observer.observe(row);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ol className={styles.list} ref={listRef}>
      {projects.map((project, i) => {
        const index = String(i + 1).padStart(2, "0");
        const caseHref = `/projects/${project.slug}`;
        const image = simpleCases[project.slug]?.hero;

        return (
          <li key={project.slug} className={styles.row} data-reveal>
            <Link href={caseHref} className={styles.visual} aria-label={`${project.title} case study`}>
              {image?.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 900px) 100vw, 720px"
                  className={styles.image}
                />
              ) : (
                <div className="visual-slot">
                  <span>Visual coming soon</span>
                </div>
              )}
            </Link>

            <div className={styles.copy}>
              <div className={styles.topline}>
                <span className={styles.index}>
                  {index} <span>/ {total}</span>
                </span>
                <span className={styles.category}>{project.category}</span>
              </div>

              <h2 className={styles.title}>
                <Link href={caseHref}>{project.title}</Link>
              </h2>
              {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}

              <p className={styles.description}>{project.description}</p>

              <div className={styles.details}>
                <span>{project.year}</span>
                <div className={styles.tools} aria-label={`Tools used for ${project.title}`}>
                  {project.skills.map((tool) => (
                    <ToolMark key={tool} name={tool} />
                  ))}
                </div>
              </div>

              <div className={styles.actions}>
                <Link className="button-link" href={caseHref}>
                  Case Study
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
                {project.isLive && (
                  <a className="button-link" href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                    Live Site
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
