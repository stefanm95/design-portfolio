import FadeIn from "@/components/motion/FadeIn";
import { rgba, ui } from "@/theme";

import type { ProjectBlockProps } from "../../../shared/types";

export default function ProjectHero({ project }: ProjectBlockProps) {
  const hero = project.media.hero?.[0];

  return (
    <FadeIn>
      <a
        href={project.liveUrl}
        target='_blank'
        rel='noreferrer'
        className='block'
      >
        <div
          className={`
            group
            relative
            overflow-hidden

            aspect-[16/9]

            border
            ${ui.borders.subtle}

            bg-black/20
          `}
        >
          {/* IMAGE */}
          <div
            className='
              absolute
              inset-0

              scale-[1.02]
      
              transition-transform
              duration-2200
              ease-out

              group-hover:scale-[0.99]
            '
            style={{
              backgroundImage: `url(${hero})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* OVERLAY */}
          <div
            className='
              absolute
              inset-0

              bg-linear-to-t
              from-black/80
              via-black/10
              to-black/10
            '
          />
          {/* BACK ATMOSPHERIC FILL */}
          <div
            className='
    absolute
    inset-0

    scale-110
    blur-sm
    opacity-20
  '
            style={{
              backgroundImage: `url(${hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* REFLECTION */}
          <div
            className='
              absolute
              inset-0

              opacity-30
              mix-blend-screen
            '
            style={{
              background:
                `linear-gradient(120deg, transparent 20%, ${rgba.whiteReflection} 50%, transparent 80%)`,
            }}
          />

          {/* PURPLE BLOOM */}
          <div
            className='
              absolute
              inset-x-0
              bottom-0

              h-[40%]

              bg-linear-to-t
              from-[#8b5cf6]/5
              to-transparent
            '
          />
        </div>
      </a>
      {/* LIVE INDICATOR */}
      <div
        className={`
    absolute
    bottom-8
    right-8

    flex
    items-center
    gap-3

    text-[10px]
    uppercase
    tracking-[0.28em]

    ${ui.text.paragraph}
  `}
      >
        <div className='h-2 w-2 rounded-full bg-emerald-400' />

        <span>Live Experience</span>
      </div>
    </FadeIn>
  );
}
