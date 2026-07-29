import type gsapType from "gsap";

export function createMouseFollow(
  gsap: typeof gsapType,
  container: HTMLElement,
  target: HTMLElement
) {
  const ctx = gsap.context(() => {
    const xTo = gsap.quickTo(target, "x", { duration: 0.72, ease: "power3.out" });
    const yTo = gsap.quickTo(target, "y", { duration: 0.72, ease: "power3.out" });
    const rotateTo = gsap.quickTo(target, "rotation", { duration: 0.82, ease: "power3.out" });

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = container.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      const ny = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));

      xTo(nx * 18);
      yTo(ny * 11);
      rotateTo(nx * 1.2);
    };

    const leave = () => {
      xTo(0);
      yTo(0);
      rotateTo(0);
    };

    container.addEventListener("pointermove", move);
    container.addEventListener("pointerleave", leave);

    return () => {
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerleave", leave);
    };
  }, container);

  return ctx;
}
