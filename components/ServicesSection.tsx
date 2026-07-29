"use client";

import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createServicesReveal } from "@/lib/animations/services";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const [openService, setOpenService] = useState<string | null>(null);

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
            <article
              className={`service-row${openService === service.number ? " is-open" : ""}`}
              key={service.number}
            >
              <button
                className="service-row__trigger"
                type="button"
                aria-expanded={openService === service.number}
                aria-controls={`service-details-${service.number}`}
                onClick={() =>
                  setOpenService((current) => (current === service.number ? null : service.number))
                }
              >
                <span className="service-row__number">{service.number}</span>
                <span className="service-row__title">{service.title}</span>
                <p>{service.description}</p>
                <span className="service-row__icon" aria-hidden="true">
                  {openService === service.number ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className="service-row__details"
                id={`service-details-${service.number}`}
                role="region"
                aria-label={`${service.title} details`}
              >
                <div className="service-row__details-inner">
                  <p>{service.details}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
