"use client";

import Lenis from "lenis";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { NavigationContext } from "./NavigationContext";

import { navigationSections } from "./navigation.config";

type Props = {
  children: React.ReactNode;
};

export default function NavigationProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  const [activeSection, setActiveSection] = useState("hero");

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,

      smoothWheel: true,

      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ({ progress }) => {
      setScrollProgress(progress);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },

      {
        threshold: 0.35,
      },
    );

    navigationSections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);

    if (!target || !lenisRef.current) return;

    lenisRef.current.scrollTo(target, {
      duration: 1.6,
    });
  }, []);

  const value = useMemo(
    () => ({
      sections: navigationSections,

      activeSection,

      setActiveSection,

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
