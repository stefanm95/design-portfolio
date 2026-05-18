import FadeIn from "@/presentation/animation/FadeIn";
import Reveal from "@/presentation/animation/Reveal";

import Section from "@/design/layout/Section";

import Display from "@/design/typography/Display";
import Label from "@/design/typography/Label";
import Text from "@/design/typography/Text";

import RightSideVisual from "@/design/visuals/RightSideVisual";

import { heroContent } from "@/content/hero";

import { resolveLayoutRuntime } from "@/runtime/presentation/layout/resolvers/resolveLayoutRuntime";
import { dividersGradients, opacityClass, ui } from "@/theme";

export default function Hero() {
  const { meta, display, description, availability } = heroContent;

  //
  // LAYOUT RUNTIME
  //

  const layout = resolveLayoutRuntime();

  return (
    <Section id="hero" className={layout.hero.root}>
      {/* ENVIRONMENT */}
      <RightSideVisual />

      {/* HERO GRID */}
      <div className={layout.hero.grid}>
        {/* CONTENT */}
        <div className={layout.hero.content}>
          {/* TOP META */}
          <FadeIn>
            <div className={layout.hero.meta}>
              <div className={`h-px w-16 ${ui.dividers.subtle}`} />

              <Label>{meta.role}</Label>
            </div>
          </FadeIn>

          {/* DISPLAY TYPOGRAPHY */}
          <Reveal>
            <div className={layout.hero.display}>
              <div className={layout.hero.display}>
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
          <FadeIn>
            <div className={layout.hero.description}>
              {/* EDITORIAL MARKER */}
              <div className={layout.hero.marker}>
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
              <div className={layout.hero.copy}>
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
                    ${layout.hero.availability}

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
