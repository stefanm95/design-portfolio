import { opacityClass } from "@/theme";

import Section from "@/design/layout/Section";

import { sectionSpacing } from "@/runtime/presentation/composition";

import AboutHero from "./AboutHero";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutPrinciples from "./AboutPrinciples";
import AboutStack from "./AboutStack";

export default function About() {
  return (
    <Section
      id="about"
      className={`
        relative
        overflow-hidden

        ${sectionSpacing.about.root}
      `}
    >
      {/* ATMOSPHERIC BLOOM */}
      <div
        className={`
          pointer-events-none
          absolute
          right-[-10%]
          top-[20%]

          h-[38vw]
          w-[38vw]

          rounded-full
          blur-sm

          ${opacityClass.subtle}
        `}
        style={{
          background:
            "radial-gradient(circle, rgba(103,80,255,0.22), transparent 72%)",
        }}
      />

      <div
        className={`
          relative
          z-10

          ${sectionSpacing.about.stack}
        `}
      >
        <AboutHero />

        <AboutPhilosophy />

        <AboutPrinciples />

        <AboutStack />
      </div>
    </Section>
  );
}
