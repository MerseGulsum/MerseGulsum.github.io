import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Footer } from "@/components/Footer";
import { SimpleCaseStudy } from "@/components/SimpleCaseStudy";
import { simpleCases } from "@/data/caseStudies";
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
      {simpleCases[project.slug] ? (
        <SimpleCaseStudy study={simpleCases[project.slug]} />
      ) : (
        <CaseStudyLayout project={project} />
      )}
      <Footer />
    </>
  );
}
