"use client";

import { useNavigation, useNavigationSections } from "@/runtime/navigation";

import ImmersiveNavigationItem from "./ImmersiveNavigationItem";

export default function ImmersiveNavigation() {
  const { activeSection, scrollToSection } = useNavigation();

  const sections = useNavigationSections();

  return (
    <div
      className="
        fixed
        bottom-10
        left-1/2
        z-140

        -translate-x-1/2
      "
    >
      <nav
        className="
          relative

          flex
          items-center
          gap-6
        "
      >
        {/* AMBIENT BASELINE */}
        <div
          className="
            absolute
            bottom-[-10px]
            left-0

            h-px
            w-full

            bg-white/[0.06]
          "
        />

        {sections.map((item, index) => (
          <ImmersiveNavigationItem
            key={item.id}
            label={item.label}
            index={index}
            isActive={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </nav>
    </div>
  );
}
