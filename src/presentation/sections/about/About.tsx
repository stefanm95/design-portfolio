// About.tsx

import { opacityClass } from "@/theme";

import Section from "@/design/layout/Section";

import { resolvePageLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolvePageLayoutRuntime";

import AboutHero from "./AboutHero";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutPrinciples from "./AboutPrinciples";
import AboutStack from "./AboutStack";

export default function About() {
  const layout = resolvePageLayoutRuntime();

  return (
    <Section
      id='about'
      className={`
        relative
        overflow-hidden

        ${layout.about.section}
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

          ${layout.about.stack}
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
