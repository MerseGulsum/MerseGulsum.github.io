import type gsapType from "gsap";

export function createCursorFollowLabel(
  gsap: typeof gsapType,
  container: HTMLElement,
  label: HTMLElement
) {
  return gsap.context(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const xTo = gsap.quickTo(label, "x", { duration: 0.32, ease: "power3.out" });
    const yTo = gsap.quickTo(label, "y", { duration: 0.32, ease: "power3.out" });
    const show = () => gsap.to(label, { autoAlpha: 1, duration: 0.16, ease: "power2.out" });
    const hide = () => gsap.to(label, { autoAlpha: 0, duration: 0.14, ease: "power2.out" });

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const rect = container.getBoundingClientRect();
      const offset = 16;
      const maxX = Math.max(0, rect.width - label.offsetWidth);
      const maxY = Math.max(0, rect.height - label.offsetHeight);
      const x = Math.min(maxX, Math.max(0, event.clientX - rect.left + offset));
      const y = Math.min(maxY, Math.max(0, event.clientY - rect.top + offset));

      xTo(x);
      yTo(y);
    };

    const enter = (event: PointerEvent) => {
      move(event);
      show();
    };

    container.addEventListener("pointerenter", enter);
    container.addEventListener("pointermove", move);
    container.addEventListener("pointerleave", hide);

    return () => {
      container.removeEventListener("pointerenter", enter);
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerleave", hide);
    };
  }, container);
}
