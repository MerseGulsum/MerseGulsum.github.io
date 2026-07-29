import type { CSSProperties } from "react";
import Image from "next/image";
import type { ProjectListingItem } from "@/data/projectListing";
import styles from "@/components/ProjectsShowcase.module.css";

export function ProjectEditorialVisual({ project }: { project: ProjectListingItem }) {
  const variantClass = styles[`visualArt_${project.visual}` as keyof typeof styles];

  return (
    <div
      className={`${styles.visualArt} ${variantClass ?? ""}`}
      style={{ "--project-accent": project.accent } as CSSProperties}
      aria-hidden="true"
      data-project-visual-art
    >
      {project.visual === "career" ? (
        <Image
          src="/projects/provia-career/provia-career-2.png"
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 820px"
          className={styles.visualImage}
        />
      ) : (
        <>
          <div className={styles.visualGrid} data-project-visual-grid />
          <div className={styles.visualPlate} />
          <div className={`${styles.visualPanel} ${styles.visualPanelPrimary}`} />
          <div className={`${styles.visualPanel} ${styles.visualPanelSecondary}`} />
          <div className={`${styles.visualPanel} ${styles.visualPanelTertiary}`} />
          <div className={`${styles.visualLine} ${styles.visualLineOne}`} />
          <div className={`${styles.visualLine} ${styles.visualLineTwo}`} />
          <div className={styles.visualIndex}>{project.index}</div>
        </>
      )}
    </div>
  );
}
