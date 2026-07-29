import { AboutSection } from "@/components/AboutSection";
import { CharacterHero } from "@/components/CharacterHero";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { HorizontalProjects } from "@/components/HorizontalProjects";
import { ServicesSection } from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <CharacterHero />
      <AboutSection />
      <HorizontalProjects />
      <ServicesSection />
      <ContactCTA />
      <Footer hideSocial />
    </>
  );
}
