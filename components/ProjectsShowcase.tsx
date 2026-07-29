"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type MouseEvent, useLayoutEffect, useRef } from "react";
import { ProjectEditorialVisual } from "@/components/ProjectEditorialVisual";
import type { ProjectListingItem } from "@/data/projectListing";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import styles from "@/components/ProjectsShowcase.module.css";

export function ProjectsShowcase({ projects }: { projects: ProjectListingItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const sections = gsap.utils.toArray<HTMLElement>("[data-project-section]");

        sections.forEach((section, index) => {
          const visualMask = section.querySelector("[data-project-visual-mask]");
          const visualArt = section.querySelector("[data-project-visual-art]");
          const visualGrid = section.querySelector("[data-project-visual-grid]");
          const number = section.querySelector("[data-project-number]");
          const category = section.querySelector("[data-project-category]");
          const title = section.querySelector("[data-project-title]");
          const description = section.querySelector("[data-project-description]");
          const cta = section.querySelector("[data-project-button]");

          gsap.set(visualMask, {
            clipPath: index % 2 === 0 ? "inset(0 22% 0 0)" : "inset(0 0 0 22%)",
            scale: 0.96,
            yPercent: 7
          });
          gsap.set(visualArt, { scale: 1.13, yPercent: 6 });
          gsap.set(visualGrid, { yPercent: 12 });
          gsap.set([number, category, title, description, cta], { yPercent: 112 });

          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              end: "center 43%",
              scrub: 1.05
            }
          });

          reveal
            .to(
              visualMask,
              {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                yPercent: 0,
                duration: 0.68,
                ease: "power3.out"
              },
              0
            )
            .to(visualArt, { scale: 1, yPercent: 0, duration: 0.78, ease: "power3.out" }, 0.02)
            .to(number, { yPercent: 0, duration: 0.36, ease: "power3.out" }, 0.28)
            .to(category, { yPercent: 0, duration: 0.28, ease: "power3.out" }, 0.36)
            .to(title, { yPercent: 0, duration: 0.44, ease: "power3.out" }, 0.43)
            .to(description, { yPercent: 0, duration: 0.36, ease: "power3.out" }, 0.57)
            .to(cta, { yPercent: 0, duration: 0.28, ease: "power3.out" }, 0.7);

          gsap.to(visualArt, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1
            }
          });

          gsap.to(visualGrid, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4
            }
          });

          gsap.to(section, {
            autoAlpha: 0.62,
            scale: 0.992,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "70% center",
              end: "bottom top",
              scrub: 1
            }
          });
        });
      });

      mm.add("(max-width: 899px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-project-section]").forEach((section) => {
          const visualMask = section.querySelector("[data-project-visual-mask]");
          const copy = section.querySelectorAll(
            "[data-project-number], [data-project-category], [data-project-title], [data-project-description], [data-project-button]"
          );

          gsap.from(visualMask, {
            clipPath: "inset(0 18% 0 0)",
            y: 28,
            scale: 0.98,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 76%"
            }
          });

          gsap.from(copy, {
            yPercent: 105,
            duration: 0.58,
            stagger: 0.075,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%"
            }
          });
        });
      });

      return () => mm.revert();
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  function handleTemporaryProjectClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
  }

  return (
    <section className={styles.showcase} ref={rootRef} aria-label="Projects">
      {projects.map((project) => (
        <article className={styles.project} key={`${project.index}-${project.title}`} data-project-section>
          <div className={styles.visual}>
            <div className={styles.visualMask} data-project-visual-mask>
              <ProjectEditorialVisual project={project} />
            </div>
          </div>

          <div className={styles.copy}>
            <div className={styles.numberClip}>
              <span className={styles.number} data-project-number aria-label={`Project ${project.index}`}>
                {project.index}
              </span>
            </div>
            <div className={styles.categoryClip}>
              <span className={styles.category} data-project-category>
                {project.category}
              </span>
            </div>
            <div className={styles.titleClip}>
              <h2 className={styles.title} data-project-title>
                {project.title}
              </h2>
            </div>
            <div className={styles.descriptionClip}>
              <p className={styles.description} data-project-description>
                {project.description}
              </p>
            </div>
            {project.isLive ? (
              <div className={styles.buttonClip}>
                {project.title === "Provia Career" ? (
                  <div className={styles.buttonRow} data-project-button>
                    <a
                      className={`button-link ${styles.button}`}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} in a new tab`}
                    >
                      Visit Project
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <Link
                      className={`button-link ${styles.button}`}
                      href="/projects/provia-career"
                      aria-label="View Provia Career case study"
                    >
                      View Project
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                ) : (
                  <a
                    className={`button-link ${styles.button}`}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} in a new tab`}
                    data-project-button
                  >
                    Visit Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            ) : (
              <div className={styles.buttonClip}>
                {project.slug === "ai-product-experiment" ? (
                  <Link
                    className={`button-link ${styles.button} ${styles.buttonTemporary}`}
                    href="/projects/ai-product-experiment"
                    data-project-button
                  >
                    View Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                ) : (
                  <a
                    className={`button-link ${styles.button} ${styles.buttonTemporary}`}
                    href="#"
                    onClick={handleTemporaryProjectClick}
                    aria-disabled="true"
                    data-project-button
                  >
                    View Project
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
