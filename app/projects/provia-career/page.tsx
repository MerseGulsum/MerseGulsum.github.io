import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SimpleCaseStudy } from "@/components/SimpleCaseStudy";
import { simpleCases } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Provia Career",
  description: "Provia Career, an AI-powered mock interview platform for web and mobile. Problem, solution and designs."
};

export default function ProviaCareerPage() {
  return (
    <>
      <SimpleCaseStudy study={simpleCases["provia-career"]} />
      <Footer />
    </>
  );
}
