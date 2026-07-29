"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    const update = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    const raf = requestAnimationFrame(update);
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return children;
}
