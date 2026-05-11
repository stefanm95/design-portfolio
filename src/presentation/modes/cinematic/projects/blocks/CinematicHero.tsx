import FadeIn from "@/components/motion/FadeIn";

import { useTheme, ui } from "@/theme";

import type { ProjectBlockProps } from "@/presentation/shared/types";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ProjectLiveIndicator from "@/presentation/shared/ProjectLiveIndicator";

export default function CinematicHero({ project }: ProjectBlockProps) {
  const { theme } = useTheme();
  const hero = project.media.hero?.[0];

  const effects = theme.effects;

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
            variant='restrained'
            bloom={true}
            reflection={false}
            atmosphericFill={false}
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
              opacity: 0.4,
            }}
          />

          <ProjectLiveIndicator />
        </div>
      </a>
    </FadeIn>
  );
}
