import FadeIn from "@/components/motion/FadeIn";

import { activeTheme, ui } from "@/theme";

import type { ProjectBlockProps } from "../../../shared/types";

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
        <div
          className={`
            group
            relative
            overflow-hidden

            border
            ${ui.borders.faint}

            bg-transparent

            ${effects.shadows.cinematic}
          `}
        >
          {/* IMAGE */}
          <div className='relative aspect-[16/9] w-full'>
            <img
              src={hero}
              alt={project.title}
              className='
                h-full
                w-full

                object-contain
                object-center

                scale-[1.01]

                transition-transform
                duration-[1800ms]
                ease-out

                group-hover:scale-[0.99]
              '
            />
          </div>

          {/* BASE ATMOSPHERE */}
          <div
            className='absolute inset-0'
            style={{
              background: effects.overlays.base,
            }}
          />

          {/* CINEMATIC DEPTH */}
          <div
            className='absolute inset-0'
            style={{
              background: effects.overlays.cinematic,
            }}
          />

          {/* FILMIC VIGNETTE */}
          <div
            className='absolute inset-0'
            style={{
              background: effects.overlays.vignette,
            }}
          />

          {/* ATMOSPHERIC BACK FILL */}
          <div
            className={`
              absolute
              inset-0

              ${effects.atmosphericFill.scale}
              ${effects.atmosphericFill.blur}
              ${effects.atmosphericFill.opacity}
            `}
            style={{
              backgroundImage: `url(${hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* LIGHT REFLECTION */}
          <div
            className={`
              absolute
              inset-0

              ${effects.reflections.opacity}
              ${effects.reflections.blend}
            `}
            style={{
              background: effects.reflections.hero,
            }}
          />

          {/* ACCENT BLOOM */}
          <div
            className='
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
