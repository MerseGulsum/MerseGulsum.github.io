import type gsapType from "gsap";

export function createMarquee(gsap: typeof gsapType, root: HTMLElement) {
  const ctx = gsap.context(() => {
    const track = root.querySelector(".tools-marquee__track");
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 28,
      repeat: -1,
      ease: "none"
    });

    const slow = () => tween.timeScale(0.32);
    const normal = () => tween.timeScale(1);

    root.addEventListener("mouseenter", slow);
    root.addEventListener("mouseleave", normal);
    root.addEventListener("focusin", slow);
    root.addEventListener("focusout", normal);

    return () => {
      root.removeEventListener("mouseenter", slow);
      root.removeEventListener("mouseleave", normal);
      root.removeEventListener("focusin", slow);
      root.removeEventListener("focusout", normal);
      tween.kill();
    };
  }, root);

  return ctx;
}
