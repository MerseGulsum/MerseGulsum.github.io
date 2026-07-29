import type gsapType from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

export function createHorizontalProjects(
  gsap: typeof gsapType,
  ScrollTrigger: typeof ScrollTriggerType,
  section: HTMLElement,
  track: HTMLElement
) {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      const distance = Math.max(0, track.scrollWidth - window.innerWidth + 96);
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.8}`,
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 28,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%"
        }
      });

      gsap.to(".project-card .project-visual__panel--side", {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.8}`,
          scrub: 1
        }
      });
    });

    mm.add("(max-width: 899px)", () => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 18,
        duration: 0.45,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%"
        }
      });
    });

    return () => mm.revert();
  }, section);

  return ctx;
}
