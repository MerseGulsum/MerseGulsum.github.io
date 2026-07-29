import type gsapType from "gsap";

export function createHeroEntrance(
  gsap: typeof gsapType,
  scope: HTMLElement,
  character: HTMLElement,
  onComplete: () => void
) {
  return gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete
    });

    tl.from(".hero-meta > *", { y: 22, opacity: 0, duration: 0.72, stagger: 0.06 })
      .from(".hero-title__mask span", { yPercent: 112, duration: 0.92, stagger: 0.06 }, "-=0.34")
      .from(character, { y: 82, scale: 0.92, opacity: 0, duration: 1.05 }, "-=0.66")
      .from(".hero-social .social-link", { x: 24, opacity: 0, duration: 0.55, stagger: 0.07 }, "-=0.46");
  }, scope);
}

export function createCharacterIdle(gsap: typeof gsapType, scope: HTMLElement, character: HTMLElement) {
  return gsap.context(() => {
    gsap.to(character, {
      y: -8,
      rotation: 0.35,
      duration: 3.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, scope);
}
