import Image from "next/image";
import { ProjectBackButton } from "@/components/ProjectBackButton";

const heroImage = "/projects/mecellem/mecellem-project.png";
const productImage = "/projects/mecellem/mecellem.png";

const principles = [
  {
    title: "Clarity",
    text: "Reducing visual complexity across information-dense legal interfaces."
  },
  {
    title: "Trust",
    text: "Helping users understand and verify AI-generated insights before taking action."
  },
  {
    title: "Efficiency",
    text: "Designing workflows that reduce repetitive tasks and accelerate decision making."
  },
  {
    title: "Scalability",
    text: "Creating reusable components and interaction patterns for future product growth."
  }
];

const highlights = [
  {
    title: "AI-assisted Search",
    text: "Search experiences were shaped to make complex legal information easier to surface and compare."
  },
  {
    title: "Information Architecture",
    text: "Legal workflows were organized around clear entry points, predictable hierarchy and focused next steps."
  },
  {
    title: "Legal Workflow Design",
    text: "Interaction patterns support professional review without hiding control behind automation."
  },
  {
    title: "Dashboard Experience",
    text: "Key actions and system feedback are presented in a focused workspace designed for repeat use."
  },
  {
    title: "Design System",
    text: "Reusable components create consistency across AI, search, dashboard and review flows."
  },
  {
    title: "Interaction Patterns",
    text: "States, controls and feedback loops were refined to make advanced AI interactions feel familiar."
  }
];

export function MecellemCaseStudy() {
  return (
    <article className="mecellem-case">
      <ProjectBackButton className="mecellem-case__back" />

      <header className="mecellem-hero" aria-labelledby="mecellem-title">
        <div className="mecellem-hero__copy">
          <p className="eyebrow">AI-powered Legal Intelligence</p>
          <h1 id="mecellem-title">Designing AI for Legal Work</h1>
          <div className="mecellem-copy-stack">
            <p>
              Mecellem is an AI-powered legal intelligence platform built to simplify how legal
              professionals discover, organize, and interact with complex legal information.
            </p>
            <p>
              As Product Designer, I collaborated with AI engineers and software developers to
              transform advanced AI capabilities into intuitive product experiences that feel
              reliable, transparent and effortless.
            </p>
          </div>
        </div>
        <figure className="mecellem-visual mecellem-visual--hero">
          <Image
            src={heroImage}
            alt="Mecellem legal intelligence product interface"
            width={1410}
            height={1200}
            priority
          />
        </figure>
      </header>

      <section className="mecellem-section mecellem-section--context" aria-labelledby="mecellem-context">
        <div className="mecellem-section__copy">
          <h2 id="mecellem-context">Product Context</h2>
          <div className="mecellem-copy-stack">
            <p>
              Legal professionals work across contracts, legislation, case law and institutional
              knowledge every day.
            </p>
            <p>
              Mecellem brings these fragmented resources together into a unified AI-assisted
              workspace where information becomes easier to discover, understand and act upon.
            </p>
            <p>
              Rather than replacing expertise, AI supports professionals by reducing complexity while
              keeping them fully in control.
            </p>
          </div>
        </div>
        <figure className="mecellem-visual mecellem-visual--wide">
          <Image
            src={heroImage}
            alt="Large Mecellem product workspace"
            width={1410}
            height={1200}
          />
        </figure>
      </section>

      <section className="mecellem-section mecellem-section--approach" aria-labelledby="mecellem-approach">
        <figure className="mecellem-visual mecellem-visual--compact">
          <Image
            src={productImage}
            alt="Mecellem product card preview"
            width={482}
            height={300}
          />
        </figure>
        <div className="mecellem-section__copy">
          <h2 id="mecellem-approach">Design Approach</h2>
          <div className="mecellem-copy-stack">
            <p>The objective wasn&apos;t simply to introduce AI into legal software.</p>
            <p>
              It was to make sophisticated technology feel natural inside everyday professional
              workflows.
            </p>
            <p>Every interaction was designed around three principles:</p>
            <ul className="mecellem-principle-list" aria-label="Design principles">
              <li>clarity</li>
              <li>trust</li>
              <li>efficiency</li>
            </ul>
            <p>
              Information hierarchy, interaction patterns and visual consistency were carefully
              refined to reduce cognitive load without sacrificing functionality.
            </p>
          </div>
        </div>
      </section>

      <section className="mecellem-principles" aria-label="Mecellem design principles">
        {principles.map((principle) => (
          <article className="mecellem-principle-card" key={principle.title}>
            <h2>{principle.title}</h2>
            <p>{principle.text}</p>
          </article>
        ))}
      </section>

      <section className="mecellem-highlights" aria-labelledby="mecellem-highlights">
        <div className="mecellem-highlights__header">
          <h2 id="mecellem-highlights">Selected Highlights</h2>
        </div>
        <div className="mecellem-highlight-grid">
          {highlights.map((highlight) => (
            <article className="mecellem-highlight" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mecellem-reflection" aria-labelledby="mecellem-reflection">
        <h2 id="mecellem-reflection">Reflection</h2>
        <div className="mecellem-copy-stack">
          <p>
            Working on Mecellem strengthened one belief that continues to shape my design process:
          </p>
          <p>Great AI products are not defined by how intelligent they are.</p>
          <p>They are defined by how naturally people can understand, trust and use them.</p>
        </div>
      </section>
    </article>
  );
}
