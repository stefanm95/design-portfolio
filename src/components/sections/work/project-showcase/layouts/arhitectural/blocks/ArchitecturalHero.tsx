import FadeIn from "@/components/motion/FadeIn";

import type { ProjectBlockProps } from "../../../types";

export default function ArchitecturalHero({ project }: ProjectBlockProps) {
  const hero = project.media.hero?.[0];

  if (!hero) {
    return null;
  }

  return (
    <FadeIn>
      <section className='relative'>
        <a
          href={project.liveUrl}
          rel='noreferrer'
          target='_blank'
          className='group block'
        >
          <div
            className='
              relative
              overflow-hidden

              aspect-[16/9]

              border
              border-white/6

              bg-black/20
            '
          >
            <div
              className='
                absolute
                inset-0

                scale-[1.01]

                transition-transform
                duration-2400
                ease-out

                group-hover:scale-[1.04]
              '
              style={{
                backgroundImage: `url(${hero})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />

            <div
              className='
                absolute
                inset-0

                bg-linear-to-t
                from-black
                via-black/10
                to-black/10
              '
            />

            <div
              className='
                absolute
                inset-0

                opacity-20
                mix-blend-screen
              '
              style={{
                background:
                  "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)",
              }}
            />

            <div
              className='
                absolute
                inset-y-0
                left-[18%]

                w-px

                bg-linear-to-b
                from-transparent
                via-white/12
                to-transparent
              '
            />

            <div
              className='
                absolute
                bottom-8
                left-8

                space-y-3
              '
            >
              <div
                className='
                  text-[10px]
                  uppercase
                  tracking-[0.32em]
                  text-white/40
                '
              >
                Cinematic Architectural Platform
              </div>

              <h3
                className='
                  max-w-[10ch]

                  text-4xl
                  leading-[0.9]
                  tracking-[-0.06em]

                  text-white/92

                  md:text-6xl
                '
              >
                Spatial presentation with immersive product storytelling.
              </h3>
            </div>

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
              <div className='h-2 w-2 rounded-full bg-emerald-400' />

              <span>Live Experience</span>
            </div>
          </div>
        </a>
      </section>
    </FadeIn>
  );
}
