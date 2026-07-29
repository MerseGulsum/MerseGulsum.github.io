"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
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

const scrollGalleryImages = [
  {
    src: "/projects/mecellem/scroll-stack/mecellem-scroll-01.png",
    alt: "Mecellem Muamelat interface screenshot."
  },
  {
    src: "/projects/mecellem/scroll-stack/mecellem-scroll-02.png",
    alt: "Mecellem Mürşit interface screenshot."
  },
  {
    src: "/projects/mecellem/scroll-stack/mecellem-scroll-03.png",
    alt: "Mecellem Muamelat product interface screenshot."
  },
  {
    src: "/projects/mecellem/scroll-stack/mecellem-scroll-04.png",
    alt: "Mecellem TTM interface screenshot."
  },
  {
    src: "/projects/mecellem/scroll-stack/mecellem-scroll-05.png",
    alt: "Mecellem HR interface screenshot."
  },
  {
    src: "/projects/mecellem/scroll-stack/mecellem-scroll-06.png",
    alt: "Mecellem Mukavele interface screenshot."
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

function MecellemScrollGallery() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const wheelDeltaRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const touchDeltaRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const isCompleteRef = useRef(false);
  const gestureBlockedRef = useRef(false);
  const lockedScrollYRef = useRef<number | null>(null);
  const originalHtmlOverflowRef = useRef<string | null>(null);
  const originalBodyOverflowRef = useRef<string | null>(null);
  const cooldownUntilRef = useRef(0);
  const scrollLockFrameRef = useRef<number | null>(null);
  const releaseTimerRef = useRef<number | null>(null);
  const cooldownTimerRef = useRef<number | null>(null);
  const gestureQuietTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const transitionDuration = 800;
    const cooldownDuration = 200;
    const gestureQuietDuration = 220;
    const wheelThreshold = 100;
    const touchThreshold = 64;
    const blockingListenerOptions = {
      passive: false,
      capture: true
    } as AddEventListenerOptions;

    const isSectionActive = () => {
      if (!sectionRef.current) return false;

      const rect = sectionRef.current.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.72 && rect.bottom >= window.innerHeight * 0.28;
    };

    const releaseScrollLock = () => {
      lockedScrollYRef.current = null;

      if (originalHtmlOverflowRef.current !== null) {
        document.documentElement.style.overflow = originalHtmlOverflowRef.current;
        originalHtmlOverflowRef.current = null;
      }

      if (originalBodyOverflowRef.current !== null) {
        document.body.style.overflow = originalBodyOverflowRef.current;
        originalBodyOverflowRef.current = null;
      }

      if (scrollLockFrameRef.current) {
        window.cancelAnimationFrame(scrollLockFrameRef.current);
        scrollLockFrameRef.current = null;
      }
    };

    const lockPageScroll = () => {
      if (lockedScrollYRef.current === null) {
        lockedScrollYRef.current = window.scrollY;
      }

      if (originalHtmlOverflowRef.current === null) {
        originalHtmlOverflowRef.current = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
      }

      if (originalBodyOverflowRef.current === null) {
        originalBodyOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      }
    };

    const holdScrollPosition = () => {
      if (lockedScrollYRef.current === null || isCompleteRef.current) return;

      window.scrollTo({ top: lockedScrollYRef.current, behavior: "instant" });

      if (scrollLockFrameRef.current) {
        window.cancelAnimationFrame(scrollLockFrameRef.current);
      }

      scrollLockFrameRef.current = window.requestAnimationFrame(() => {
        if (lockedScrollYRef.current !== null && !isCompleteRef.current) {
          window.scrollTo({ top: lockedScrollYRef.current, behavior: "instant" });
        }

        scrollLockFrameRef.current = null;
      });
    };

    const scheduleGestureRelease = () => {
      if (gestureQuietTimerRef.current) {
        window.clearTimeout(gestureQuietTimerRef.current);
      }

      gestureQuietTimerRef.current = window.setTimeout(() => {
        if (!isAnimatingRef.current && Date.now() >= cooldownUntilRef.current) {
          gestureBlockedRef.current = false;
          wheelDeltaRef.current = 0;
          touchDeltaRef.current = 0;
        }
      }, gestureQuietDuration);
    };

    const unlockAfterTransition = () => {
      if (releaseTimerRef.current) {
        window.clearTimeout(releaseTimerRef.current);
      }

      releaseTimerRef.current = window.setTimeout(() => {
        isAnimatingRef.current = false;
        cooldownUntilRef.current = Date.now() + cooldownDuration;

        if (activeIndexRef.current === scrollGalleryImages.length - 1) {
          isCompleteRef.current = true;
          releaseScrollLock();
        }

        cooldownTimerRef.current = window.setTimeout(() => {
          wheelDeltaRef.current = 0;
          touchDeltaRef.current = 0;
          scheduleGestureRelease();
        }, cooldownDuration);
      }, transitionDuration);
    };

    const advanceSequence = () => {
      if (isAnimatingRef.current || isCompleteRef.current) return;
      if (Date.now() < cooldownUntilRef.current) return;

      const nextIndex = activeIndexRef.current + 1;
      if (nextIndex >= scrollGalleryImages.length) {
        isCompleteRef.current = true;
        return;
      }

      isAnimatingRef.current = true;
      gestureBlockedRef.current = true;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      unlockAfterTransition();
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0) {
        wheelDeltaRef.current = 0;
        releaseScrollLock();
        return;
      }

      if (isCompleteRef.current || !isSectionActive()) return;

      lockPageScroll();
      event.preventDefault();
      event.stopImmediatePropagation();
      holdScrollPosition();

      if (
        gestureBlockedRef.current ||
        isAnimatingRef.current ||
        Date.now() < cooldownUntilRef.current
      ) {
        scheduleGestureRelease();
        return;
      }

      wheelDeltaRef.current += event.deltaY;

      if (wheelDeltaRef.current >= wheelThreshold) {
        wheelDeltaRef.current = 0;
        advanceSequence();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
      touchDeltaRef.current = 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartYRef.current === null) return;

      const currentY = event.touches[0]?.clientY ?? touchStartYRef.current;
      const deltaY = touchStartYRef.current - currentY;

      if (deltaY <= 0) {
        touchDeltaRef.current = 0;
        releaseScrollLock();
        return;
      }

      if (isCompleteRef.current || !isSectionActive()) return;

      lockPageScroll();
      event.preventDefault();
      event.stopImmediatePropagation();
      holdScrollPosition();

      if (
        gestureBlockedRef.current ||
        isAnimatingRef.current ||
        Date.now() < cooldownUntilRef.current
      ) {
        return;
      }

      touchDeltaRef.current += deltaY;
      touchStartYRef.current = currentY;

      if (touchDeltaRef.current >= touchThreshold) {
        touchDeltaRef.current = 0;
        advanceSequence();
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
      touchDeltaRef.current = 0;
      scheduleGestureRelease();
    };

    const handleLockedScroll = () => {
      if (
        lockedScrollYRef.current === null ||
        isCompleteRef.current ||
        window.scrollY <= lockedScrollYRef.current
      ) {
        return;
      }

      holdScrollPosition();
    };

    window.addEventListener("wheel", handleWheel, blockingListenerOptions);
    window.addEventListener("scroll", handleLockedScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, blockingListenerOptions);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      window.removeEventListener("scroll", handleLockedScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove, { capture: true });
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);

      if (releaseTimerRef.current) {
        window.clearTimeout(releaseTimerRef.current);
      }

      if (cooldownTimerRef.current) {
        window.clearTimeout(cooldownTimerRef.current);
      }

      if (gestureQuietTimerRef.current) {
        window.clearTimeout(gestureQuietTimerRef.current);
      }

      if (scrollLockFrameRef.current) {
        window.cancelAnimationFrame(scrollLockFrameRef.current);
      }

      releaseScrollLock();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      className="mecellem-scroll-sequence"
      aria-label="Mecellem product screenshots"
      ref={sectionRef}
    >
      <div className="mecellem-scroll-sequence__viewport">
        {scrollGalleryImages.map((image, index) => (
          <MecellemSequenceCard
            activeIndex={activeIndex}
            image={image}
            index={index}
            key={image.src}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </section>
  );
}

function MecellemSequenceCard({
  activeIndex,
  image,
  index,
  prefersReducedMotion
}: {
  activeIndex: number;
  image: (typeof scrollGalleryImages)[number];
  index: number;
  prefersReducedMotion: boolean | null;
}) {
  const y =
    index < activeIndex
      ? "-105%"
      : index === activeIndex
        ? "0%"
        : "105%";

  return (
    <motion.figure
      className="mecellem-scroll-sequence__card"
      animate={{ y: prefersReducedMotion ? (index === 0 ? "0%" : "105%") : y }}
      initial={false}
      style={{ zIndex: index + 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={4098}
        height={2304}
        loading={index === 0 ? "eager" : "lazy"}
        sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc(100vw - 80px), min(1180px, calc(100vw - 200px))"
      />
    </motion.figure>
  );
}

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
            {section.title === "Design Principles" && <MecellemScrollGallery />}
          </div>
        ))}
      </div>
    </article>
  );
}
