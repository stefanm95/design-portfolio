"use client";

import FadeIn from "@/presentation/animation/FadeIn";

import { ui } from "@/theme";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ProjectLiveIndicator from "@/presentation/shared/ProjectLiveIndicator";

import type {
  EditorialPresentationBlock,
  PresentationBlockRendererProps,
} from "@/runtime/presentation/types";

type Props = PresentationBlockRendererProps<EditorialPresentationBlock>;

export default function EditorialHero({ project, block, index }: Props) {
  const hero = project.media.hero?.[0];

  if (!hero) {
    return null;
  }

  return (
    <FadeIn>
      <a
        title={project.title}
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <div className="relative">
          <ProjectCinematicFrame
            image={hero}
            alt={project.title}
            imageFit="contain"
            variant="immersive"
            minHeight="min-h-[420px] xl:min-h-[620px]"
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
