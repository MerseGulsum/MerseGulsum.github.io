import { AboutPageContent } from "@/components/AboutPageContent";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <Footer hideSocial />
    </>
  );
}
