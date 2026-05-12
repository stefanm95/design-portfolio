import FadeIn from "@/presentation/animation/FadeIn";
import Reveal from "@/presentation/animation/Reveal";

import Display from "@/design/typography/Display";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";
import { dividersGradients, opacityClass, ui } from "@/theme";

import { heroContent } from "@/content/hero";
import Section from "@/design/layout/Section";
import RightSideVisual from "@/design/visuals/RightSideVisual";

export default function Hero() {
  const { meta, display, description, availability } = heroContent;

  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-start overflow-hidden"
    >
      {/* ENVIRONMENT */}
      <RightSideVisual />

      {/* HERO GRID */}
      <div
        className="
          hero-grid
          relative z-10

          grid w-full
          grid-cols-12
          items-center
        "
      >
        {/* CONTENT */}
        <div className="col-span-12 xl:col-span-9">
          {/* TOP META */}
          <FadeIn>
            <div className="flex items-center gap-6">
              <div className={`h-px w-16 ${ui.dividers.subtle}`} />

              <Label>{meta.role}</Label>
            </div>
          </FadeIn>

          {/* DISPLAY TYPOGRAPHY */}
          <Reveal>
            <div className="mt-10">
              <div className="space-y-0 md:-space-y-6 xl:-space-y-10">
                <Display>{display.primary}</Display>

                <Display
                  variant="secondary"
                  className="
                    ml-[8vw]

                    text-[4.8rem]
                    md:text-[7.4rem]
                    xl:text-[9.2rem]

                    italic
                    font-normal

                    opacity-95
                  "
                >
                  {display.secondary}
                </Display>

                <Display variant="tertiary" className={opacityClass.dominant}>
                  {display.tertiary}
                </Display>
              </div>
            </div>
          </Reveal>

          {/* DESCRIPTION BLOCK */}
          <FadeIn delay={0.35}>
            <div className="mt-16 md:mt-18 lg:mt-20 flex flex-col md:flex-row max-w-190 md:gap-6 lg:gap-10">
              {/* EDITORIAL MARKER */}
              <div className="relative pt-4 hidden md:block">
                <div className={`h-px w-20 ${ui.dividers.subtle}`} />

                <div
                  className={`
                    absolute
                    left-0
                    top-4

                    h-20
                    w-px

                    ${dividersGradients.verticalLeadIn}
                  `}
                />
              </div>

              {/* COPY */}
              <div className="space-y-7">
                <Text
                  className={`
                    max-w-145

                    text-[15px]
                    md:text-[16px]
                    lg:text-[17px]

                    leading-[1.9]
                    tracking-[0.01em]

                    ${ui.text.narrative}
                  `}
                >
                  {description}
                </Text>

                {/* BOTTOM META */}
                <div
                  className={`
                    flex flex-wrap
                    items-center
                    gap-3
                    md:gap-4
                    lg:gap-5

                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    ${ui.text.metadata}
                  `}
                >
                  <span>{availability.location}</span>

                  <div className={`h-px w-8 ${ui.dividers.subtle}`} />

                  <span>{availability.status}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
