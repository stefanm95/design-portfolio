import { useState } from "react";

import FadeIn from "@/components/motion/FadeIn";

import Heading from "@/components/typography/Heading";
import Label from "@/components/typography/Label";
import Text from "@/components/typography/Text";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalShowcase({ project }: ProjectBlockProps) {
  const showcase = project.media.showcase ?? [];
  const [active, setActive] = useState(0);

  if (showcase.length < 2) return null;

  const primary = showcase[active];
  const mobileDetail = project.media.showcaseMobile?.[active];

  const switchImage = () => {
    setActive((prev) => (prev + 1) % showcase.length);
  };

  return (
    <section
      className='
        relative'
    >
      {/* INTRO */}
      <div className='mb-24 max-w-[760px] space-y-8'>
        <Label>CURATED SHOWCASE</Label>

        <Heading as='h3' className='max-w-[24ch]'>
          Cinematic project exploration systems.
        </Heading>

        <Text
          className='
            max-w-[38ch]

            leading-[1.9]
            text-white/44
          '
        >
          Fullscreen project presentation designed with layered hierarchy,
          atmospheric transitions, and immersive visual pacing.
        </Text>
      </div>

      {/* COMPOSITION */}
      <div className='relative'>
        {/* MAIN FRAME */}
        <FadeIn key={primary}>
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='block'
          >
            <div
              className='
        group
        relative
        overflow-hidden

        border
        border-white/[0.06]

        bg-black/20

        cursor-pointer
      '
            >
              <img
                src={primary}
                alt=''
                className='
                w-full
                object-cover

                transition-transform
                duration-[2200ms]
                ease-out

                group-hover:scale-[1.015]
              '
              />

              {/* ATMOSPHERE */}
              <div
                className='
                absolute
                inset-0

                bg-linear-to-t
                from-black/50
                via-transparent
                to-black/10
              '
              />

              {/* BLOOM */}
              <div
                className='
                absolute
                inset-0

                opacity-70
                blur-3xl

                bg-[radial-gradient(circle_at_72%_80%,rgba(103,80,255,0.18),transparent_38%)]
              '
              />
            </div>
          </a>
        </FadeIn>

        {/* FLOATING MOBILE DETAIL */}
        <FadeIn delay={0.2} key={mobileDetail}>
          <button
            onClick={switchImage}
            className='
      group/detail
      relative

      mx-auto
      -mt-[8%]

      block
      w-[42%]

      cursor-pointer

      xl:absolute
      xl:-bottom-24
      xl:right-16
      xl:mt-0
      xl:w-[22%]
    '
          >
            <div
              className='
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-white/[0.08]

        bg-black/90

        p-2

        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
      '
            >
              <img
                src={mobileDetail}
                alt=''
                className='
          w-full
          rounded-[20px]

          transition-transform
          duration-700

          group-hover/detail:scale-[1.03]
        '
              />

              {/* ATMOSPHERIC OVERLAY */}
              <div
                className='
          absolute
          inset-0

          rounded-[28px]

          bg-linear-to-t
          from-black/30
          via-transparent
          to-transparent
        '
              />

              {/* SWITCH INDICATOR */}
              <div
                className='
          absolute
          bottom-5
          right-5

          flex
          items-center
          gap-3

          text-[10px]
          uppercase
          tracking-[0.24em]

          text-white/58
        '
              >
                <span className='relative flex h-2 w-2'>
                  <span
                    className='
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full

              bg-emerald-400/60
            '
                  />

                  <span
                    className='
              relative
              inline-flex
              h-2
              w-2
              rounded-full

              bg-emerald-300
            '
                  />
                </span>

                <span>Switch View</span>
              </div>
            </div>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
