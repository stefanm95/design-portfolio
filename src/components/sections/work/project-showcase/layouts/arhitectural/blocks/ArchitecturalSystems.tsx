import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalSystems({ project }: ProjectBlockProps) {
  const system = project.media.systems?.[0];

  if (!system) return null;

  return (
    <section
      className='
        relative

        grid
        grid-cols-12

        gap-y-20
        xl:gap-x-20
      '
    >
      {/* LEFT */}
      <div className='col-span-12 xl:col-span-4'>
        <div className='sticky top-32 space-y-10'>
          <Label>PROCESS & SYSTEMS</Label>

          <Heading as='h3' className='max-w-[11ch]'>
            Structured interaction translated into cinematic rhythm.
          </Heading>

          <Text
            className='
              max-w-[32ch]

              leading-[1.9]
              text-white/44
            '
          >
            Clear service flows, process hierarchy, and restrained motion
            systems designed to support immersive navigation without
            overwhelming the experience.
          </Text>
        </div>
      </div>

      {/* RIGHT */}
      <div className='col-span-12 xl:col-span-8'>
        <FadeIn>
          <div
            className='
              relative

              xl:translate-y-12
            '
          >
            {/* ATMOSPHERIC GLOW */}
            <div
              className='
                absolute
                inset-0

                scale-110

                opacity-60
                blur-3xl

                bg-[radial-gradient(circle_at_70%_40%,rgba(103,80,255,0.16),transparent_42%)]
              '
            />

            {/* IMAGE */}
            <div className='relative overflow-hidden'>
              <img
                src={system}
                alt=''
                className='
                  w-full
                  object-cover
                '
              />

              {/* DEPTH OVERLAY */}
              <div
                className='
                  absolute
                  inset-0

                  bg-linear-to-t
                  from-black/30
                  via-transparent
                  to-black/10
                '
              />
            </div>

            {/* FLOATING DETAIL */}
            <div
              className='
                pointer-events-none

                absolute
                -bottom-10
                left-10

                hidden
                xl:block
              '
            >
              <div
                className='
                  flex
                  items-center
                  gap-3

                  text-[10px]
                  uppercase
                  tracking-[0.24em]

                  text-white/34
                '
              >
                <div
                  className='
                    h-px
                    w-16

                    bg-white/14
                  '
                />

                <span>Interaction Systems</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
