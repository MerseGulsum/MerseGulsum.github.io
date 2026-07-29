import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Footer } from "@/components/Footer";
import { MecellemCaseStudy } from "@/components/MecellemCaseStudy";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  return {
    title: project ? project.title : "Project"
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {project.slug === "ai-product-experiment" ? (
        <MecellemCaseStudy />
      ) : (
        <CaseStudyLayout project={project} />
      )}
      <Footer />
    </>
  );
}
