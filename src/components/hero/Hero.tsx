import Section from "@/components/layout/Section";

import FadeIn from "@/components/motion/FadeIn";
import Reveal from "@/components/motion/Reveal";

import Display from "@/components/typography/Display";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import { dividersGradients, opacityClass, ui } from "@/theme";

import RightSideVisual from "../shared/RightSideVisual";

export default function Hero() {
  return (
    <Section className='relative flex min-h-screen items-center overflow-hidden'>
      {/* ENVIRONMENT */}
      <RightSideVisual />

      {/* HERO GRID */}
      <div
        className='
          hero-grid
          relative z-10

          grid w-full
          grid-cols-12
          items-center
        '
      >
        {/* CONTENT */}
        <div className='col-span-12 xl:col-span-9'>
          {/* TOP META */}
          <FadeIn>
            <div className='flex items-center gap-6'>
              <div className={`h-px w-16 ${ui.dividers.subtle}`} />

              <Label>Frontend Developer / Creative Engineer</Label>
            </div>
          </FadeIn>

          {/* DISPLAY TYPOGRAPHY */}
          <Reveal>
            <div className='mt-16'>
              <div className='space-y-1 md:-space-y-2'>
                <Display>Cinematic</Display>

                <Display
                  variant='secondary'
                  className='
                    ml-[8vw]

                    text-[4.8rem]
                    md:text-[7.4rem]
                    xl:text-[9.2rem]

                    italic
                    font-normal

                    opacity-95
                  '
                >
                  Frontend
                </Display>

                <Display variant='tertiary' className={opacityClass.dominant}>
                  Experiences
                </Display>
              </div>
            </div>
          </Reveal>

          {/* DESCRIPTION BLOCK */}
          <FadeIn delay={0.35}>
            <div className='mt-16 md:mt-20 lg:mt-24 flex flex-col md:flex-row max-w-190 md:gap-6 lg:gap-10'>
              {/* EDITORIAL MARKER */}
              <div className='relative pt-4 hidden md:block'>
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
              <div className='space-y-7'>
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
                  Crafting immersive frontend experiences through cinematic
                  motion, refined typography, and architectural digital systems.
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
                  <span>Based in Europe</span>

                  <div className={`h-px w-8 ${ui.dividers.subtle}`} />

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
