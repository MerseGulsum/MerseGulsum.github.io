import type gsapType from "gsap";

export function createNavigationEntrance(gsap: typeof gsapType, nav: HTMLElement) {
  return gsap.context(() => {
    gsap.fromTo(
      nav,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", delay: 0.08 }
    );
  }, nav);
}
