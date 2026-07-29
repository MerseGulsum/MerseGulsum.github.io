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
        <p className="about-copy">I&apos;m Merse Gülsüm, a Product Designer and HMI Designer focused on building intuitive digital products. I combine product strategy, UX/UI, design systems and AI-assisted workflows to create experiences that are clear, functional and visually distinctive. My goal is to transform complex ideas into products people genuinely enjoy using.</p>
      </div>
    </section>
  );
}
