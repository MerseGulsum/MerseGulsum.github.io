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
        <p className="about-copy">I&apos;m Merse Gülsüm, a Product Designer with 4 years of experience designing digital products. I spent 3.5 years at New Mind AI, designing web, mobile and tablet interfaces for 10+ AI-powered legal products, including the Mecellem product family. Today I&apos;m building Provia, an AI interview practice platform I designed and launched end to end, and designing the merchant panel and design system for Kepenk. I enjoy turning complex workflows into products people can actually use.</p>
      </div>
    </section>
  );
}
