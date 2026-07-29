"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createAboutReveal } from "@/lib/animations/services";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = createAboutReveal(gsap, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section about-section" ref={ref} aria-labelledby="about-title">
      <div className="section-inner about-section__inner">
        <p className="eyebrow">About Me</p>
        <h2 id="about-title">About Me</h2>
        <p className="about-copy">I’m Merse Gülsüm, a Product Designer and HMI Designer focused on crafting digital experiences that feel clear, purposeful and human. I believe great products are built by balancing thoughtful strategy, intuitive interactions and refined visual design. My work covers product strategy, UX, UI, design systems, automotive HMI and AI-assisted workflows, allowing me to approach every project from concept to execution. I enjoy solving complex problems, simplifying user journeys and designing interfaces that people can understand instantly while still delivering a distinctive and memorable visual identity. Every project is an opportunity to create products that are not only functional, but genuinely enjoyable to use.</p>
      </div>
    </section>
  );
}
