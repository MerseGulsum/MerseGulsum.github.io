import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ProviaCareerCaseStudy } from "./ProviaCareerCaseStudy";

export const metadata: Metadata = {
  title: "Provia Career Case Study",
  description:
    "A product design case study for Provia Career, an AI-powered interview coaching platform for web and mobile."
};

export default function ProviaCareerPage() {
  return (
    <>
      <ProviaCareerCaseStudy />
      <Footer />
    </>
  );
}
