"use client";

import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createCursorFollowLabel } from "@/lib/animations/cursorFollowLabel";
import { createCharacterIdle, createHeroEntrance } from "@/lib/animations/hero";
import { createMouseFollow } from "@/lib/animations/mouseFollow";
import { createExperienceReveal } from "@/lib/animations/services";

const aboutText =
  "I'm Merse Gülsüm, a Product Designer with 3+ years of experience in legal tech and AI products. At New Mind AI, I designed web, mobile and tablet interfaces for 10+ legal technology products. I designed and launched Provia, an AI interview practice platform, end to end, and I'm building the merchant panel and design system for Kepenk. I enjoy turning messy workflows into products people can actually use.";

const aboutTags = ["//Product Design", "//Design Systems", "//B2B SaaS", "//AI Products"];

const experiences = [
  {
    number: "01",
    company: "Provia",
    role: "Founder & Product Designer",
    date: "2026 – Present",
    location: "Remote",
    description: "AI-powered interview coach, designed end to end from concept to launch at proviacareer.com.",
    points: [
      "Designed the full experience for text, voice and video interview practice.",
      "Designed a feedback experience that reviews each answer with the STAR method.",
      "Prepared all screens and states in Figma and worked closely with the developer.",
      "Planned the product roadmap and set feature priorities."
    ]
  },
  {
    number: "02",
    company: "Kepenk",
    role: "Product Designer (Freelance)",
    date: "2026 – Present",
    location: "Remote",
    description: "E-commerce platform where merchants launch and run their own online stores.",
    points: [
      "Designing the merchant admin panel end to end to simplify store management.",
      "Created UI kits with six storefront template families.",
      "Built a token-based design system with reusable desktop and mobile components.",
      "Working with the developer who turns the designs into live storefronts."
    ]
  },
  {
    number: "03",
    company: "New Mind AI",
    role: "UI/UX Designer",
    date: "Nov 2022 – Apr 2026",
    location: "Istanbul, Turkey",
    description: "Designed web, mobile and tablet interfaces for legal technology products.",
    points: [
      "Designed screens for 10+ legal tech products.",
      "Worked with business analysts and developers to simplify complex legal workflows.",
      "Ran heuristic evaluations to find usability issues before development.",
      "Redesigned key screens of Mürşit and designed data-heavy components for Nmaistro."
    ]
  },
  {
    number: "04",
    company: "Team Knock Knock",
    role: "Graphic Design Intern",
    date: "Jun 2022 – Nov 2022",
    location: "Warsaw, Poland",
    description: "Remote Erasmus+ internship.",
    points: ["Designed Instagram posts and logo concepts in line with each brand's voice."]
  }
];

const education = {
  school: "Eskişehir Technical University",
  degree: "Graphic Design",
  date: "2020 – 2024",
  location: "Eskişehir, Turkey",
  description: "Relevant coursework: User Experience Design, Visual Communication, Design Studio, Computer Aided Design."
};

export function AboutPageContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const [activePointer, setActivePointer] = useState(false);
  const [entranceComplete, setEntranceComplete] = useState(false);

  const handleAvatarKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== " ") return;

    event.preventDefault();
    event.currentTarget.click();
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-about-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: "power3.out"
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const section = experienceRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = createExperienceReveal(gsap, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const avatar = avatarRef.current;
    if (!hero || !avatar || prefersReducedMotion()) {
      setActivePointer(false);
      return;
    }

    const ctx = createHeroEntrance(gsap, hero, avatar, () => {
      setEntranceComplete(true);
      setActivePointer(window.matchMedia("(pointer: fine)").matches);
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const avatar = avatarRef.current;
    if (!hero || !avatar || !activePointer || prefersReducedMotion()) return;

    const ctx = createMouseFollow(gsap, hero, avatar);
    return () => ctx.revert();
  }, [activePointer]);

  useEffect(() => {
    const hero = heroRef.current;
    const avatar = avatarRef.current;
    if (!hero || !avatar || prefersReducedMotion() || activePointer || !entranceComplete) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!coarse) return;

    const ctx = createCharacterIdle(gsap, hero, avatar);
    return () => ctx.revert();
  }, [activePointer, entranceComplete]);

  useEffect(() => {
    const avatar = avatarRef.current;
    const label = labelRef.current;
    if (!avatar || !label) return;

    const ctx = createCursorFollowLabel(gsap, avatar, label);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={rootRef}>
      <div className="section-inner about-page__inner">
        <section className="about-page__hero" ref={heroRef} aria-labelledby="about-page-title">
          <div className="about-page__copy">
            <p className="eyebrow" data-about-reveal>
              ABOUT ME
            </p>
            <h1 id="about-page-title" data-about-reveal>
              About Me
            </h1>
            <p data-about-reveal>{aboutText}</p>
            <div className="about-page__tags" aria-label="Design focus areas">
              {aboutTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <Link
            className="about-page__image"
            ref={avatarRef}
            href="/contact"
            aria-label="Go to contact page"
            onKeyDown={handleAvatarKeyDown}
          >
            <Image
              src="/character/merse-character.png"
              alt="Illustrated character portrait of Merse Gülsüm"
              width={2048}
              height={2048}
              sizes="(max-width: 899px) 82vw, 46vw"
              priority
            />
            <span className="avatar-contact-label" ref={labelRef}>
              Click to contact me
            </span>
          </Link>
        </section>

        <section className="about-page__experience" ref={experienceRef} aria-labelledby="experience-title">
          <h2 id="experience-title" data-about-reveal>
            EXPERIENCE
          </h2>
          <div className="about-page__experience-list">
            {experiences.map((experience) => (
              <article className="about-page__experience-item" key={experience.company}>
                <span className="about-page__experience-number">{experience.number}</span>
                <div className="about-page__experience-main">
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
                <div className="about-page__experience-meta">
                  <span>{experience.date}</span>
                  <span>{experience.location}</span>
                </div>
                <div className="about-page__experience-description">
                  <p>{experience.description}</p>
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-page__experience" aria-labelledby="education-title">
          <h2 id="education-title">EDUCATION</h2>
          <div className="about-page__experience-list">
            <article className="about-page__experience-item">
              <span className="about-page__experience-number">01</span>
              <div className="about-page__experience-main">
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
              </div>
              <div className="about-page__experience-meta">
                <span>{education.date}</span>
                <span>{education.location}</span>
              </div>
              <div className="about-page__experience-description">
                <p>{education.description}</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
