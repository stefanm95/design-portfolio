import Lenis from "lenis";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { motionPresets } from "@/theme";
import { ExperienceContext } from "./ExperienceContext";

type Props = {
  children: React.ReactNode;
};

export default function ExperienceProvider({ children }: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [activeSection, setActiveSection] = useState("hero");

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const smooth = motionPresets.smoothScroll;

    const lenis = new Lenis({
      lerp: smooth.lerp,

      smoothWheel: true,

      wheelMultiplier: smooth.wheelMultiplier,

      touchMultiplier: smooth.touchMultiplier,
    });

    lenisRef.current = lenis;

    const handleScroll = ({
      scroll,
      limit,
    }: {
      scroll: number;
      limit: number;
    }) => {
      setScrollProgress(scroll / limit);
    };

    lenis.on("scroll", handleScroll);

    let frameId: number;

    function raf(time: number) {
      lenis.raf(time);

      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);

      lenis.off("scroll", handleScroll);

      lenis.destroy();
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (!element || !lenisRef.current) return;

    lenisRef.current.scrollTo(element, {
      offset: -40,
      duration: 1.4,
    });
  }, []);

  const value = useMemo(
    () => ({
      scrollProgress,

      activeSection,

      setActiveSection,

      scrollToSection,
    }),
    [scrollProgress, activeSection, scrollToSection],
  );

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}
