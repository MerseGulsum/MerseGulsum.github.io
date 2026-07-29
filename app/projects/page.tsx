import { Footer } from "@/components/Footer";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { projectListing } from "@/data/projectListing";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsShowcase projects={projectListing} />
      <Footer />
    </>
  );
}
