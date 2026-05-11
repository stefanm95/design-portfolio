"use client";

import { useNavigation } from "@/runtime/navigation";

import CinematicNavigationItem from "./CinematicNavigationItem";

import CinematicNavigationProgress from "./CinematicNavigationProgress";

export default function CinematicNavigation() {
  const { sections, activeSection, scrollToSection } = useNavigation();

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

        {sections.map((item, index) => (
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
