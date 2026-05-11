"use client";

import { useNavigation, useNavigationSections } from "@/runtime/navigation";

import ImmersiveNavigationItem from "./ImmersiveNavigationItem";

import ImmersiveNavigationProgress from "./ImmersiveNavigationProgress";

export default function ImmersiveNavigation() {
  const { activeSection, scrollToSection } = useNavigation();

  const sections = useNavigationSections();

  return (
    <div
      className='
        fixed
        bottom-10
        left-1/2
        z-[140]

        -translate-x-1/2
      '
    >
      <div
        className='
          relative

          flex
          items-center
          gap-5

          rounded-full

          border
          border-white/[0.06]

          bg-white/[0.03]

          px-5
          py-4

          backdrop-blur-2xl
        '
      >
        <ImmersiveNavigationProgress />

        {sections.map((item) => (
          <ImmersiveNavigationItem
            key={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
