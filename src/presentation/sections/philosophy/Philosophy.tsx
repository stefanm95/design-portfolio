import Section from "@/components/layout/Section";

import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import { dividersGradients, ui } from "@/theme";
import LeftSideVisual from "@/components/shared/LeftSideVisual";
export default function Philosophy() {
  return (
    <Section id='philosophy' className='relative md:py-40 lg:py-48 xl:py-56'>
      <LeftSideVisual />
      {/* Atmospheric Divider */}
      <div
        className={`
          absolute
          inset-x-0
          top-0

          h-px

          ${dividersGradients.atmospheric}
        `}
      />

      {/* Ambient Bloom */}
      <div
        className='
          pointer-events-none
          absolute

          left-[10%]
          md:left-[5%]
          lg:left-[10%]
          top-[10%]

          h-[300px]
          md:h-[350px]
          lg:h-[420px]
          w-[300px]
          md:w-[350px]
          lg:w-[420px]

          rounded-full
          blur-sm

          opacity-6
        '
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,255,0.18), transparent 72%)",
        }}
      />

      <div
        className='
          relative z-10

          grid
          grid-cols-1
          md:grid-cols-1
          lg:grid-cols-12
          gap-y-16
          md:gap-y-20
          lg:gap-y-24
        '
      >
        {/* LEFT */}
        <div className='col-span-1 md:col-span-1 lg:col-span-6'>
          <FadeIn>
            <div className='space-y-8 md:space-y-10'>
              <Label>Philosophy</Label>

              <Heading
                as='h2'
                className={`
                  max-w-[10ch]

                  text-4xl
                  md:text-5xl
                  lg:text-[5.5rem]
                  leading-[0.95]
                  tracking-[-0.06em]

                  ${ui.text.strong}
                `}
              >
                Designing interfaces that feel spatial, tactile, and emotionally
                intentional.
              </Heading>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT */}
        <div className='col-span-1 md:col-span-1 lg:col-span-5 lg:col-start-8'>
          <FadeIn delay={0.15}>
            <div className='space-y-8 md:space-y-10 lg:space-y-12'>
              <Text
                className={`
                  text-base
                  md:text-lg
                  lg:text-[17px]
                  leading-[2]

                  ${ui.text.reading}
                `}
              >
                I approach frontend development as a form of architectural
                composition — balancing rhythm, typography, motion, and
                atmosphere to create experiences that feel immersive without
                overwhelming the user.
              </Text>

              <Text
                className={`
                  text-sm
                  md:text-base
                  lg:text-[15px]
                  leading-[1.9]

                  ${ui.text.muted}
                `}
              >
                My focus is NOT ONLY on building functional interfaces, but on
                crafting visual systems with depth, clarity, and cinematic
                presence.
              </Text>

              {/* Metadata */}
              <div
                className={`
                  flex flex-col
                  md:flex-wrap
                  gap-x-8
                  lg:gap-x-10
                  gap-y-5

                  border-t
                  ${ui.borders.subtle}

                  pt-8
                  md:pt-10
                `}
              >
                <div className='space-y-2'>
                  <Label className={ui.text.annotation}>Focus</Label>

                  <Text className={ui.text.paragraph}>Frontend Systems</Text>
                </div>

                <div className='space-y-2'>
                  <Label className={ui.text.annotation}>Specialties</Label>

                  <Text className={ui.text.paragraph}>
                    Motion / UI Architecture
                  </Text>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
