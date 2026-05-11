import FadeIn from "@/components/motion/FadeIn";

import { ui } from "@/theme";

import type { ProjectBlockProps } from "../../../shared/types";

import ProjectCinematicFrame from "../../../shared/ProjectCinematicFrame";
import ProjectLiveIndicator from "../../../shared/ProjectLiveIndicator";

export default function EditorialtHero({ project }: ProjectBlockProps) {
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
        <div className='relative'>
          <ProjectCinematicFrame
            image={hero}
            alt={project.title}
            imageFit='contain'
            variant='immersive'
            minHeight='min-h-[420px] xl:min-h-[620px]'
            className={`
              aspect-[16/9]

              bg-black/20

              border
              ${ui.borders.subtle}
            `}
          />

          <ProjectLiveIndicator />
        </div>
      </a>
    </FadeIn>
  );
}
