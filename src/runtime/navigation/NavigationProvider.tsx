"use client";

import Lenis from "lenis";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { NavigationContext } from "./NavigationContext";

import { navigationConfig } from "./navigation.config";

type Props = {
  children: React.ReactNode;
};

export default function NavigationProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  const [activeSection, setActiveSection] = useState("hero");

  const [scrollProgress, setScrollProgress] = useState(0);

  /*
   |--------------------------------------------------------------------------
   | LENIS
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.065,

      smoothWheel: true,

      wheelMultiplier: 0.8,

      touchMultiplier: 1.2,
    });

    lenisRef.current = lenis;

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);

      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    lenis.on("scroll", ({ progress }) => {
      setScrollProgress(progress);
    });

    return () => {
      cancelAnimationFrame(frameId);

      lenis.destroy();
    };
  }, []);

  /*
   |--------------------------------------------------------------------------
   | ACTIVE SECTION DETECTION
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },

      {
        threshold: navigationConfig.sectionThreshold,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /*
   |--------------------------------------------------------------------------
   | SCROLL TO SECTION
   |--------------------------------------------------------------------------
   */

  const scrollToSection = useCallback(
    (id: string) => {
      const target = document.getElementById(id);

      if (!target || !lenisRef.current) {
        return;
      }

      lenisRef.current.scrollTo(target, {
        duration: navigationConfig.scrollDuration,

        offset: navigationConfig.scrollOffset,

        lerp: 0.08,
      });
    },

    [],
  );

  /*
   |--------------------------------------------------------------------------
   | CONTEXT
   |--------------------------------------------------------------------------
   */

  const value = useMemo(
    () => ({
      activeSection,

      scrollProgress,

      scrollToSection,
    }),

    [activeSection, scrollProgress, scrollToSection],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
