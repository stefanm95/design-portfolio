import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";
import { rgba, ui } from "@/theme";

import type { ProjectBlockProps } from "../../../shared/types";

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
        <div
          className=' space-y-8

    xl:sticky
    xl:top-24

    2xl:top-32'
        >
          <Label>PROCESS & SYSTEMS</Label>

          <Heading as='h3' className='max-w-[11ch]'>
            Structured interaction translated into cinematic rhythm.
          </Heading>

          <Text
          className={`
              max-w-[32ch]

              leading-[1.9]
              ${ui.text.narrative}
            `}
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
              cursor-pointer
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
                blur-sm

              '
              style={{
                background: `radial-gradient(circle at 70% 40%, ${rgba.purpleShowcase}, transparent 42%)`,
              }}
            />

            {/* IMAGE */}
            <div className='relative overflow-hidden'>
              <img
                src={system}
                alt=''
                className='
                  w-full
                  object-contain
                  transition-transform
                duration-[2200ms]
                opacity-80
                ease-out
                group-hover:scale-[0.98]
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
                className={`
                  flex
                  items-center
                  gap-3

                  text-[10px]
                  uppercase
                  tracking-[0.24em]

                  ${ui.text.muted}
                `}
              >
                <div
                  className={`
                    h-px
                    w-16

                    ${ui.surfaces.chip}
                  `}
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
