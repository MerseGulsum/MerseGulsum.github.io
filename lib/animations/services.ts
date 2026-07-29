import type gsapType from "gsap";

export function createServicesReveal(
  gsap: typeof gsapType,
  section: HTMLElement,
  rowSelector = ".service-row"
) {
  return gsap.context(() => {
    gsap.from(rowSelector, {
      y: 32,
      opacity: 0,
      duration: 0.62,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 65%"
      }
    });
  }, section);
}

export function createExperienceReveal(gsap: typeof gsapType, section: HTMLElement) {
  return createServicesReveal(gsap, section, ".about-page__experience-item");
}

export function createAboutReveal(gsap: typeof gsapType, section: HTMLElement) {
  return gsap.context(() => {
    gsap.from(".about-copy", {
      y: 32,
      opacity: 0,
      duration: 0.72,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 68%"
      }
    });
  }, section);
}
