"use client";

import { Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { services } from "@/data/services";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createServicesReveal } from "@/lib/animations/services";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = createServicesReveal(gsap, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section services-section" ref={ref} aria-labelledby="services-title">
      <div className="section-inner">
        <div className="services-section__header">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Services</h2>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-row__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Plus className="service-row__icon" size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
