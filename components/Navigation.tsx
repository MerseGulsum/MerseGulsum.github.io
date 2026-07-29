"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createNavigationEntrance } from "@/lib/animations/pageTransitions";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current || prefersReducedMotion()) return;
    const ctx = createNavigationEntrance(gsap, navRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <header className="site-header" ref={navRef}>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="site-nav__link"
              aria-current={active ? "page" : undefined}
            >
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
