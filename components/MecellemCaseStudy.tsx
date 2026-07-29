"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

const galleryItems = [
  {
    src: "/projects/mecellem/gallery/mecellem-11.png",
    label: "Contract Analysis",
    alt: "Mecellem contract analysis interface displayed on a laptop."
  },
  {
    src: "/projects/mecellem/gallery/mecellem-12.png",
    label: "Operational Overview",
    alt: "Mecellem operational monitoring dashboard displayed on a laptop."
  },
  {
    src: "/projects/mecellem/gallery/mecellem-13.png",
    label: "Document Management",
    alt: "Mecellem contract and document management interface displayed on a laptop."
  },
  {
    src: "/projects/mecellem/gallery/mecellem-ana.png",
    label: "Task Management",
    alt: "Mecellem task management interface displayed on a laptop."
  }
];

const editorialSections = [
  {
    eyebrow: "Overview",
    title: "Designing AI for Legal Work",
    body: [
      "Mecellem is an AI-powered legal intelligence platform built to simplify how legal professionals discover, organize, and interact with complex legal information.",
      "As Product Designer, I collaborated with AI engineers and software developers to transform advanced AI capabilities into intuitive product experiences that feel reliable, transparent and effortless."
    ]
  },
  {
    title: "Product Context",
    body: [
      "Legal professionals work across contracts, legislation, case law and institutional knowledge every day.",
      "Mecellem brings these fragmented resources together into a unified AI-assisted workspace where information becomes easier to discover, understand and act upon.",
      "Rather than replacing expertise, AI supports professionals by reducing complexity while keeping them fully in control."
    ]
  },
  {
    title: "Design Approach",
    body: [
      "The objective was not simply to introduce AI into legal software.",
      "It was to make sophisticated technology feel natural inside everyday professional workflows.",
      "Every interaction was designed around three principles: clarity, trust and efficiency.",
      "Information hierarchy, interaction patterns and visual consistency were carefully refined to reduce cognitive load without sacrificing functionality."
    ]
  },
  {
    title: "Design Principles",
    items: [
      {
        title: "Clarity",
        body: "Reducing visual complexity across information-dense legal interfaces."
      },
      {
        title: "Trust",
        body: "Helping users understand and verify AI-generated insights before taking action."
      },
      {
        title: "Efficiency",
        body: "Designing workflows that reduce repetitive tasks and accelerate decision-making."
      },
      {
        title: "Scalability",
        body: "Creating reusable components and interaction patterns for future product growth."
      }
    ]
  },
  {
    title: "Selected Highlights",
    items: [
      {
        title: "AI-assisted Search",
        body: "Designing search experiences that help legal professionals reach relevant information without being overwhelmed by complex data."
      },
      {
        title: "Information Architecture",
        body: "Organizing dense legal content into structures that are easier to navigate, understand and manage."
      },
      {
        title: "Legal Workflow Design",
        body: "Simplifying professional workflows while preserving the detail and control required in legal work."
      },
      {
        title: "Dashboard Experience",
        body: "Creating clear visual hierarchies that help users monitor information and identify important actions quickly."
      },
      {
        title: "Design System",
        body: "Building reusable components and patterns that maintain consistency across the platform."
      },
      {
        title: "Interaction Patterns",
        body: "Designing predictable interactions that make advanced product capabilities easier to learn and use."
      }
    ]
  },
  {
    title: "Reflection",
    body: [
      "Working on Mecellem strengthened one belief that continues to shape my design process:",
      "Great AI products are not defined by how intelligent they are.",
      "They are defined by how naturally people can understand, trust and use them."
    ]
  }
];

export function MecellemCaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activatePrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryItems.length - 1 : current - 1));
  };

  const activateNext = () => {
    setActiveIndex((current) => (current === galleryItems.length - 1 ? 0 : current + 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      activatePrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      activateNext();
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;

    cardRefs.current[activeIndex]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "nearest",
      inline: "start"
    });
  }, [activeIndex]);

  return (
    <article className="mecellem-case">
      <section
        className="mecellem-showcase"
        aria-labelledby="mecellem-showcase-title"
        onKeyDown={handleKeyDown}
      >
        <div className="mecellem-showcase__header">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h1 id="mecellem-showcase-title">Mecellem</h1>
          </div>
          <div className="mecellem-showcase__controls" aria-label="Mecellem showcase controls">
            <span className="mecellem-showcase__index">
              {String(activeIndex + 1).padStart(2, "0")} — {String(galleryItems.length).padStart(2, "0")}
            </span>
            <button type="button" aria-label="Show previous Mecellem image" onClick={activatePrevious}>
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Show next Mecellem image" onClick={activateNext}>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mecellem-showcase__track" aria-label="Mecellem image showcase">
          {galleryItems.map((item, index) => (
            <button
              className={`mecellem-showcase__card${activeIndex === index ? " is-active" : ""}`}
              type="button"
              key={item.src}
              aria-label={`Show ${item.label}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
            >
              <Image src={item.src} alt={item.alt} width={1000} height={852} />
              <span className="mecellem-showcase__overlay" aria-hidden="true" />
              <span className="mecellem-showcase__label">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="mecellem-editorial-flow">
        {editorialSections.map((section) => (
          <div className="mecellem-editorial-group" key={section.title}>
            <section className="mecellem-editorial-section">
              {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
              <div className="mecellem-editorial-content">
                <h2>{section.title}</h2>
                {section.body && (
                  <div className="mecellem-editorial-copy">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.items && (
                  <div className="mecellem-editorial-list">
                    {section.items.map((item) => (
                      <div className="mecellem-editorial-item" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
            {section.title === "Design Principles" && (
              <div className="mecellem-inline-showcase">
                <div className="mecellem-inline-showcase__item">
                  <Image
                    src="/projects/mecellem/ara-mecellem-2.png"
                    alt="Mecellem product interface showcase."
                    width={7000}
                    height={5000}
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc((70vw - 16px) / 2), 25vw"
                  />
                </div>
                <div className="mecellem-inline-showcase__item">
                  <Image
                    src="/projects/mecellem/mecellem-ana-3.png"
                    alt="Mecellem product interface showcase."
                    width={6000}
                    height={4000}
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc((70vw - 16px) / 2), 25vw"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
