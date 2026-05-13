import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import { presentationBlockRegistry } from "@/presentation";

import type { Project } from "@/types/projects";

import {
  cinematicSpacing,
  compositionDensity,
  editorialSpacing,
} from "@/runtime/presentation";

import type {
  CinematicPresentationBlock,
  EditorialPresentationBlock,
  ProjectPresentation,
} from "../types";

type Props = {
  project: Project;
  presentation: ProjectPresentation;
  index?: number;
};

export default function PresentationRuntime({
  project,
  presentation,
  index = 0,
}: Props) {
  const density =
    compositionDensity[presentation.composition?.density ?? "spacious"];

  return (
    <article className="relative">
      <ProjectDivider />

      <div className={density}>
        <FadeIn>
          <ProjectMeta project={project} index={index} />
        </FadeIn>

        {presentation.mode === "cinematic" &&
          presentation.blocks.map((block, index) => {
            const cinematicBlock = block as CinematicPresentationBlock;

            const registry = presentationBlockRegistry.cinematic;

            const Component = registry[cinematicBlock.type];

            if (!Component) {
              return null;
            }

            return (
              <div
                key={`${cinematicBlock.type}-${index}`}
                className={cinematicSpacing[cinematicBlock.type]}
              >
                <Component
                  project={project}
                  block={cinematicBlock}
                  index={index}
                />
              </div>
            );
          })}

        {presentation.mode === "editorial" &&
          presentation.blocks.map((block, index) => {
            const editorialBlock = block as EditorialPresentationBlock;

            const registry = presentationBlockRegistry.editorial;

            const Component = registry[editorialBlock.type];

            if (!Component) {
              return null;
            }

            return (
              <div
                key={`${editorialBlock.type}-${index}`}
                className={editorialSpacing[editorialBlock.type]}
              >
                <Component
                  project={project}
                  block={editorialBlock}
                  index={index}
                />
              </div>
            );
          })}
      </div>
    </article>
  );
}
