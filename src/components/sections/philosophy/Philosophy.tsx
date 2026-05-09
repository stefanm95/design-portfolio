import Section from "@/components/layout/Section";

import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import LeftSideVisual from "./LeftSideVisual";

export default function Philosophy() {
  return (
    <Section className='relative py-40 xl:py-56'>
      <LeftSideVisual />
      {/* Atmospheric Divider */}
      <div
        className='
          absolute
          inset-x-0
          top-0

          h-px

          bg-linear-to-r
          from-transparent
          via-white/8
          to-transparent
        '
      />

      {/* Ambient Bloom */}
      <div
        className='
          pointer-events-none
          absolute

          left-[10%]
          top-[10%]

          h-[420px]
          w-[420px]

          rounded-full
          blur-3xl

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
          grid-cols-12
          gap-y-24
        '
      >
        {/* LEFT */}
        <div className='col-span-12 xl:col-span-6'>
          <FadeIn>
            <div className='space-y-10'>
              <Label>Philosophy</Label>

              <Heading
                as='h2'
                className='
                  max-w-[10ch]

                  text-5xl
                  leading-[0.95]
                  tracking-[-0.06em]

                  text-white/96

                  md:text-7xl
                  xl:text-[5.5rem]
                '
              >
                Designing interfaces that feel spatial, tactile, and emotionally
                intentional.
              </Heading>
            </div>
          </FadeIn>
        </div>

        {/* RIGHT */}
        <div className='col-span-12 xl:col-span-5 xl:col-start-8'>
          <FadeIn delay={0.15}>
            <div className='space-y-12'>
              <Text
                className='
                  text-[17px]
                  leading-[2]

                  text-white/46
                '
              >
                I approach frontend development as a form of architectural
                composition — balancing rhythm, typography, motion, and
                atmosphere to create experiences that feel immersive without
                overwhelming the user.
              </Text>

              <Text
                className='
                  text-[15px]
                  leading-[1.9]

                  text-white/34
                '
              >
                My focus is NOT ONLY on building functional interfaces, but on
                crafting visual systems with depth, clarity, and cinematic
                presence.
              </Text>

              {/* Metadata */}
              <div
                className='
                  flex flex-wrap
                  gap-x-10
                  gap-y-5

                  border-t
                  border-white/6

                  pt-10
                '
              >
                <div className='space-y-2'>
                  <Label className='text-white/22'>Focus</Label>

                  <Text className='text-white/58'>Frontend Systems</Text>
                </div>

                <div className='space-y-2'>
                  <Label className='text-white/22'>Specialties</Label>

                  <Text className='text-white/58'>
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
