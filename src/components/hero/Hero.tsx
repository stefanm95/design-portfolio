import Section from "@/components/layout/Section";

import FadeIn from "@/components/motion/FadeIn";
import Reveal from "@/components/motion/Reveal";

import Display from "@/components/typography/Display";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import { cn } from "@/lib/utils";

import {
  atmosphericText,
  contentWidth,
  headingScale,
  metadataScale,
  spacingScale,
  surfaces,
} from "@/theme";

import RightSideVisual from "./RightSideVisual";

export default function Hero() {
  return (
    <Section className='relative flex min-h-screen items-center overflow-hidden'>
      {/* ENVIRONMENT */}
      <RightSideVisual />

      {/* HERO GRID */}
      <div
        className='
          hero-grid
          relative
          z-10
          grid
          w-full
          grid-cols-12
          items-center
        '
      >
        {/* CONTENT */}
        <div className='col-span-12 xl:col-span-9'>
          {/* TOP META */}
          <FadeIn>
            <div className='flex items-center gap-6'>
              <div className={surfaces.subtleLine} />

              <Label>Frontend Developer / Creative Engineer</Label>
            </div>
          </FadeIn>

          {/* DISPLAY TYPOGRAPHY */}
          <Reveal>
            <div className={spacingScale.heroDisplay}>
              <div className='space-y-1 md:-space-y-2'>
                <Display>Cinematic</Display>

                <Display
                  variant='secondary'
                  className={cn(
                    headingScale.heroSecondary,
                    `
                      ml-[8vw]

                      italic
                      font-normal

                      opacity-95
                    `,
                  )}
                >
                  Frontend
                </Display>

                <Display variant='tertiary' className={atmosphericText.glow}>
                  Experiences
                </Display>
              </div>
            </div>
          </Reveal>

          {/* DESCRIPTION BLOCK */}
          <FadeIn delay={0.35}>
            <div
              className={cn(
                spacingScale.heroDescription,
                `
                  flex
                  max-w-190
                  flex-col

                  md:flex-row
                  md:gap-6

                  lg:gap-10
                `,
              )}
            >
              {/* EDITORIAL MARKER */}
              <div className='relative hidden pt-4 md:block'>
                <div className={surfaces.editorialHorizontalLine} />

                <div
                  className={cn(
                    surfaces.editorialVerticalFade,
                    `
                      absolute
                      left-0
                      top-4
                    `,
                  )}
                />
              </div>

              {/* COPY */}
              <div className='space-y-7'>
                <Text
                  className={cn(
                    headingScale.narrative,
                    contentWidth.wideNarrative,
                    atmosphericText.narrative,
                  )}
                >
                  Crafting immersive frontend experiences through cinematic
                  motion, refined typography, and architectural digital systems.
                </Text>

                {/* BOTTOM META */}
                <div
                  className={cn(
                    metadataScale.subtle,
                    atmosphericText.metadata,
                    `
                      flex
                      flex-wrap
                      items-center

                      gap-3
                      md:gap-4
                      lg:gap-5
                    `,
                  )}
                >
                  <span>Based in Europe</span>

                  <div className={surfaces.subtleDivider} />

                  <span>Available for selected projects</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
