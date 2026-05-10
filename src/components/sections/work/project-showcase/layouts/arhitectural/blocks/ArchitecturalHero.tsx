import FadeIn from "@/components/motion/FadeIn";

import { activeTheme, ui } from "@/theme";

import type { ProjectBlockProps } from "../../../shared/types";
import ProjectCinematicFrame from "../../../shared/ProjectCinematicFrame";

export default function ArchitecturalHero({ project }: ProjectBlockProps) {
  const hero = project.media.hero?.[0];

  const effects = activeTheme.effects;

  if (!hero) return null;

  return (
    <FadeIn>
      <a
        href={project.liveUrl}
        target='_blank'
        rel='noreferrer'
        className='block'
      >
        <div className='relative'>
          <ProjectCinematicFrame
            image={hero}
            alt={project.title}
            imageFit='contain'
            minHeight='min-h-[320px] md:min-h-[520px]'
            className={`
              bg-transparent
              border
              ${ui.borders.faint}
            `}
          />

          {/* PROJECT HERO BLOOM */}
          <div
            className='
              pointer-events-none

              absolute
              inset-x-0
              bottom-0

              h-[40%]
            '
            style={{
              background: effects.blooms.projectHero,
            }}
          />

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
            <span className='relative flex h-2 w-2'>
              <span
                className={`
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full

                  ${effects.indicators.livePing}
                `}
              />

              <span
                className={`
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full

                  ${effects.indicators.liveDot}
                `}
              />
            </span>

            <span
              className={`
                transition-colors
                duration-500

                ${ui.text.hoverInteractive}
              `}
            >
              Live Experience
            </span>
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
