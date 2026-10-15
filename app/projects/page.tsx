import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./ProjectsPage.module.css";

export const metadata = {
  title: "Projects"
};

const listed = projects.filter((project) => project.slug !== "mehir-finance");

export default function ProjectsPage() {
  return (
    <>
      <main className={styles.page}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Projects · {String(listed.length).padStart(2, "0")}</p>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.intro}>
            Design systems, B2B SaaS and AI products, from problem definition to final interface.
          </p>
        </header>

        <div className={styles.grid}>
          {listed.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
