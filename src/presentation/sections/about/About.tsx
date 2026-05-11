import Section from "@/components/layout/Section";
import { opacityClass } from "@/theme";

import AboutHero from "./AboutHero";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutPrinciples from "./AboutPrinciples";
import AboutStack from "./AboutStack";

export default function About() {
  return (
    <Section className='relative overflow-hidden md:py-40 lg:py-48 xl:py-56'>
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

      <div className='relative z-10 space-y-28 md:space-y-32 lg:space-y-40 xl:space-y-56'>
        <AboutHero />

        <AboutPhilosophy />

        <AboutPrinciples />

        <AboutStack />
      </div>
    </Section>
  );
}
