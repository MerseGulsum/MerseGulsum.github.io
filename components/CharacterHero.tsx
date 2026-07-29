"use client";

import Image from "next/image";
import Link from "next/link";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { createCursorFollowLabel } from "@/lib/animations/cursorFollowLabel";
import { createCharacterIdle, createHeroEntrance } from "@/lib/animations/hero";
import { createMouseFollow } from "@/lib/animations/mouseFollow";

export function CharacterHero() {
  const heroRef = useRef<HTMLElement>(null);
  const characterRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [activePointer, setActivePointer] = useState(false);
  const [entranceComplete, setEntranceComplete] = useState(false);

  const handleAvatarKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key !== " ") return;

    event.preventDefault();
    event.currentTarget.click();
  };

  useEffect(() => {
    const hero = heroRef.current;
    const character = characterRef.current;
    if (!hero || !character || prefersReducedMotion()) {
      setActivePointer(false);
      return;
    }

    const ctx = createHeroEntrance(gsap, hero, character, () => {
      setEntranceComplete(true);
      setActivePointer(window.matchMedia("(pointer: fine)").matches);
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const character = characterRef.current;
    if (!hero || !character || !activePointer || prefersReducedMotion()) return;

    const ctx = createMouseFollow(gsap, hero, character);
    return () => ctx.revert();
  }, [activePointer]);

  useEffect(() => {
    const hero = heroRef.current;
    const character = characterRef.current;
    if (!hero || !character || prefersReducedMotion() || activePointer || !entranceComplete) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!coarse) return;

    const ctx = createCharacterIdle(gsap, hero, character);
    return () => ctx.revert();
  }, [activePointer, entranceComplete]);

  useEffect(() => {
    const character = characterRef.current;
    const label = labelRef.current;
    if (!character || !label) return;

    const ctx = createCursorFollowLabel(gsap, character, label);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="home-hero-title">
      <div className="hero-meta" aria-label="Professional focus">
        <span className="hero-meta__index">Selected work / 2026</span>
        <p>PRODUCT DESIGNER</p>
        <p>HMI | UX | AI</p>
        <p>Building thoughtful products.</p>
      </div>

      <div className="hero-social">
        <SocialLinks includeInstagram />
      </div>

      <div className="hero-center">
        <h1 id="home-hero-title" className="hero-title" aria-label="Hi, I'm Merse.">
          <span className="hero-title__mask">
            <span>Hi, I&apos;m Merse.</span>
          </span>
        </h1>
        <Link
          className="character-wrap"
          ref={characterRef}
          href="/contact"
          aria-label="Go to contact page"
          onKeyDown={handleAvatarKeyDown}
        >
          <Image
            src="/character/merse-character.png"
            alt="Illustrated character portrait of Merse Gülsüm"
            width={2048}
            height={2048}
            priority
            sizes="(max-width: 767px) 76vw, 42vw"
            className="character-image"
          />
          <span className="avatar-contact-label" ref={labelRef}>
            Click to contact me
          </span>
        </Link>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span />
        <p>Scroll</p>
      </div>
    </section>
  );
}
