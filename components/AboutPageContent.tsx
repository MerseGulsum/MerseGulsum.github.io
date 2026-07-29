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
  "I’m Merse Gülsüm, a Product Designer and HMI Designer focused on crafting digital experiences that feel clear, purposeful and human. I believe great products are built by balancing thoughtful strategy, intuitive interactions and refined visual design. My work covers product strategy, UX, UI, design systems, automotive HMI and AI-assisted workflows, allowing me to approach every project from concept to execution. I enjoy solving complex problems, simplifying user journeys and designing interfaces that people can understand instantly while still delivering a distinctive and memorable visual identity. Every project is an opportunity to create products that are not only functional, but genuinely enjoyable to use.";

const aboutTags = ["//Product Design", "//Design Systems", "//AI Driven Design"];

const experiences = [
  {
    number: "01",
    company: "Provia",
    role: "Product & UX Lead",
    date: "2026 – Present",
    location: "Independent Product",
    description:
      "Leading the end-to-end design of an AI-powered interview coaching platform across mobile and web.",
    points: [
      "Designed the complete product architecture.",
      "Built the design system and component library.",
      "Created the STAR-based AI feedback experience.",
      "Managed the product roadmap and MVP development."
    ]
  },
  {
    number: "02",
    company: "New Mind AI",
    role: "UI/UX Designer",
    date: "Nov 2022 – Apr 2026",
    location: "Istanbul, Turkey",
    description:
      "Designed scalable SaaS products for legal technology platforms.",
    points: [
      "Designed interfaces for 10+ legal tech products.",
      "Collaborated closely with developers and product teams.",
      "Improved usability through iterative UX decisions.",
      "Designed AI-powered interfaces for Nmaistro and Mürşit."
    ]
  },
  {
    number: "03",
    company: "Team Knock Knock",
    role: "Graphic Design Intern",
    date: "Jun 2022 – Nov 2022",
    location: "Warsaw, Poland",
    description:
      "Worked remotely as part of the Erasmus+ internship program.",
    points: [
      "Designed social media assets.",
      "Created logo concepts.",
      "Managed design tasks independently.",
      "Improved visual communication through mentor feedback."
    ]
  }
];

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
      </div>
    </div>
  );
}
