"use client";

import Lenis from "lenis";
import { useEffect, useMemo, useState } from "react";

import CinematicNavigationItem from "./CinematicNavigationItem";
import CinematicNavigationProgress from "./CinematicNavigationProgress";

import { cinematicNavigationItems } from "./cinematicNavigation.config";

export default function CinematicNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () =>
      cinematicNavigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      })),
    [],
  );

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

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (!target) return;

    const lenis = new Lenis();

    lenis.scrollTo(target, {
      duration: 1.6,
    });
  };

  return (
    <div
      className='
        fixed
        right-10
        top-1/2
        z-[120]

        hidden
        -translate-y-1/2

        xl:flex
      '
    >
      <div className='relative flex flex-col gap-8 pr-10'>
        <CinematicNavigationProgress />

        {cinematicNavigationItems.map((item, index) => (
          <CinematicNavigationItem
            key={item.id}
            index={index}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
