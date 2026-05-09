import FadeIn from "@/components/motion/FadeIn";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalHero({ project }: ProjectBlockProps) {
  const hero = project.media.hero?.[0];

  if (!hero) return null;

  return (
    <FadeIn>
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
            border-white/[0.05]

            bg-black
          '
        >
          {/* IMAGE */}
          <div className='relative h-full w-full'>
            <img
              src={hero}
              alt={project.title}
              className='
                h-full
                w-full

                object-cover
                object-center

                scale-[1.01]

                transition-transform
                duration-1600
                ease-out

                group-hover:scale-[1.03]
              '
            />
          </div>

          {/* DARK ATMOSPHERE */}
          <div className='absolute inset-0 bg-black/36' />

          {/* DEPTH */}
          <div
            className='
              absolute
              inset-0

              bg-linear-to-b
              from-black/10
              via-transparent
              to-black/90
            '
          />

          {/* FILMIC VIGNETTE */}
          <div
            className='
              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.62))]
            '
          />

          {/* LIGHT REFLECTION */}
          <div
            className='
              absolute
              inset-0

              opacity-20
              mix-blend-screen
            '
            style={{
              background:
                "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.06) 50%, transparent 80%)",
            }}
          />

          {/* LIVE INDICATOR */}
          <div
            className='
              absolute
              bottom-8
              right-8

              flex
              items-center
              gap-3

              text-[10px]
              uppercase
              tracking-[0.28em]

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

                  bg-emerald-400/70
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

            <span
              className='
                transition-colors
                duration-500

                group-hover:text-white/82
              '
            >
              Live Experience
            </span>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
