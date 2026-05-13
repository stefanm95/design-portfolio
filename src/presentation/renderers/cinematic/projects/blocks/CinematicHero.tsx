"use client";

import FadeIn from "@/presentation/animation/FadeIn";

import { ui, useTheme } from "@/theme";

import ProjectCinematicFrame from "@/presentation/shared/ProjectCinematicFrame";
import ProjectLiveIndicator from "@/presentation/shared/ProjectLiveIndicator";

import type {
  CinematicPresentationBlock,
  PresentationBlockRendererProps,
} from "@/runtime/presentation/types";

type Props = PresentationBlockRendererProps<CinematicPresentationBlock>;

export default function CinematicHero({ project }: Props) {
  const { theme } = useTheme();

  const hero = project.media.hero?.[0];

  const effects = theme.effects;

  if (!hero) {
    return null;
  }

  return (
    <FadeIn>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <div
          className="
            relative
            -translate-y-[4vh]
            xl:px-6
          "
        >
          <ProjectCinematicFrame
            image={hero}
            alt={project.title}
            imageFit="cover"
            variant="restrained"
            bloom={true}
            reflection={false}
            atmosphericFill={false}
            minHeight="min-h-[320px] md:min-h-[420px] lg:min-h-[520px]"
            className={`
              aspect-[2.15/1]
              overflow-hidden
              border
              ${ui.borders.faint}
              bg-black/20
            `}
          />

          {/* ATMOSPHERIC BLOOM */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[38%]
            "
            style={{
              background: effects.blooms.projectHero,
              opacity: 0.34,
            }}
          />

          {/* SIDE META */}
          <div
            className="
              absolute
              bottom-6
              right-6
              hidden
              lg:flex
            "
          >
            <ProjectLiveIndicator />
          </div>
        </div>
      </a>
    </FadeIn>
  );
}
