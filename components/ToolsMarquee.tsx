"use client";

import { useEffect, useRef } from "react";
import { tools } from "@/data/tools";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createMarquee } from "@/lib/animations/marquee";
import { ToolIcon } from "@/components/ToolIcon";

export function ToolsMarquee() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const ctx = createMarquee(gsap, root);
    return () => ctx.revert();
  }, []);

  const row = [...tools, ...tools];

  return (
    <section className="tools-marquee" ref={ref} aria-label="Tools Merse uses">
      <p className="tools-marquee__label">Tools</p>
      <div className="tools-marquee__track">
        {row.map((tool, index) => (
          <div className="tools-marquee__item" key={`${tool.name}-${index}`} aria-label={tool.name}>
            <ToolIcon tool={tool} />
            <strong>{tool.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
