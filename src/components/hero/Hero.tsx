import Section from "@/components/layout/Section";

import FadeIn from "@/components/motion/FadeIn";
import Reveal from "@/components/motion/Reveal";

import Display from "@/components/typography/Display";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

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
              <div className='h-px w-16 bg-white/10' />

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

                <Display variant='tertiary' className='opacity-[0.92]'>
                  Experiences
                </Display>
              </div>
            </div>
          </Reveal>

          {/* DESCRIPTION BLOCK */}
          <FadeIn delay={0.35}>
            <div className='mt-24 flex max-w-190 gap-10'>
              {/* EDITORIAL MARKER */}
              <div className='relative pt-4'>
                <div className='h-px w-20 bg-white/12' />

                <div
                  className='
                    absolute
                    left-0
                    top-4

                    h-20
                    w-px

                    bg-linear-to-b
                    from-white/10
                    to-transparent
                  '
                />
              </div>

              {/* COPY */}
              <div className='space-y-7'>
                <Text
                  className='
                    max-w-145

                    text-[15px]
                    md:text-[17px]

                    leading-[1.9]
                    tracking-[0.01em]

                    text-white/44
                  '
                >
                  Crafting immersive frontend experiences through cinematic
                  motion, refined typography, and architectural digital systems.
                </Text>

                {/* BOTTOM META */}
                <div
                  className='
                    flex flex-wrap
                    items-center
                    gap-5

                    text-[11px]
                    uppercase
                    tracking-[0.28em]

                    text-white/24
                  '
                >
                  <span>Based in Europe</span>

                  <div className='h-px w-8 bg-white/10' />

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
