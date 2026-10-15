import { Footer } from "@/components/Footer";
import { ProjectsList } from "@/components/ProjectsList";
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
          <p className={styles.eyebrow}>Selected work · 2026</p>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.intro}>
            Design systems, B2B SaaS and AI products, from problem definition to final interface.
          </p>
        </header>

        <ProjectsList projects={listed} />
      </main>
      <Footer />
    </>
  );
}
