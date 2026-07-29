import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section contact-cta" aria-labelledby="contact-cta-title">
      <div className="section-inner contact-cta__inner">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-cta-title">Let’s build something thoughtful.</h2>
        <p>
          For digital products, mobile experiences, HMI systems or collaborative product work,
          I’d love to hear what you’re shaping.
        </p>
        <Link className="button-link" href="/contact">
          Contact Me
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
