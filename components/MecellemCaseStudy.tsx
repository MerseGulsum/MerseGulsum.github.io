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
    src: "/projects/mecellem/gallery/mecellem-14.png",
    label: "Task Management",
    alt: "Mecellem task management interface displayed on a laptop."
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
            <h1 id="mecellem-showcase-title">Inside Mecellem</h1>
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
    </article>
  );
}
