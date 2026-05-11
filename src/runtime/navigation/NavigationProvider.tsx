"use client";

import Lenis from "lenis";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { NavigationContext } from "./NavigationContext";

import { navigationConfig, navigationSections } from "./navigation.config";

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
    function updateActiveSection() {
      const viewportCenter = window.innerHeight * 0.42;

      const sections = navigationSections
        .map((section) => {
          const element = document.getElementById(section.id);

          if (!element) {
            return null;
          }

          const rect = element.getBoundingClientRect();

          const distance = Math.abs(rect.top - viewportCenter);

          return {
            id: section.id,

            distance,

            rect,
          };
        })
        .filter(
          (
            section,
          ): section is {
            id: string;
            distance: number;
            rect: DOMRect;
          } => section !== null,
        )
        .sort((a, b) => a.distance - b.distance);

      if (sections[0]) {
        setActiveSection(sections[0].id);
      }
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
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
