import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-page">
        <div className="contact-page__intro">
          <p className="eyebrow">Contact</p>
          <h1>
            Let’s build something
            <br />
            thoughtful together.
          </h1>
          <p>Open to full-time Product Designer roles in Istanbul or Ankara.</p>
          <p className="contact-page__email">
            <a href="mailto:gulsumkocan.123@gmail.com">gulsumkocan.123@gmail.com</a>
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer hideSocial />
    </>
  );
}
