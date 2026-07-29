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
          <p>
            Have a project, collaboration or idea in mind? Share a few details and I’ll get
            back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </section>
      <Footer hideSocial />
    </>
  );
}
