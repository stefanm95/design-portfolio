import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import type {
  CinematicPresentation,
  EditorialPresentation,
  ProjectPresentation,
} from "@/types/presentation";

import type { Project } from "@/types/projects";

import { cinematicSpacing, editorialSpacing } from "@/runtime/presentation";

import {
  resolveAtmosphere,
  resolveDensity,
  resolveProfile,
  resolveScene,
} from "@/runtime/presentation/resolvers";

import {
  resolveCinematicRegistry,
  resolveEditorialRegistry,
} from "@/presentation/renderers/registryResolver";

type Props = {
  project: Project;
  presentation: ProjectPresentation;
  index?: number;
};

function renderCinematicPresentation(
  project: Project,
  presentation: CinematicPresentation,
) {
  const registry = resolveCinematicRegistry(presentation);

  return presentation.blocks.map((block, blockIndex) => {
    const Component = registry[block.type];

    if (!Component) {
      return null;
    }

    const scene = resolveScene(block.type);

    const atmosphere = resolveAtmosphere(presentation.mode, scene);

    return (
      <div
        key={`${block.type}-${blockIndex}`}
        className={cinematicSpacing[block.type]}
        data-scene={scene}
        data-atmosphere={atmosphere}
      >
        <Component project={project} block={block} index={blockIndex} />
      </div>
    );
  });
}

function renderEditorialPresentation(
  project: Project,
  presentation: EditorialPresentation,
) {
  const registry = resolveEditorialRegistry(presentation);

  return presentation.blocks.map((block, blockIndex) => {
    const Component = registry[block.type];

    if (!Component) {
      return null;
    }

    const scene = resolveScene(block.type);

    const atmosphere = resolveAtmosphere(presentation.mode, scene);

    return (
      <div
        key={`${block.type}-${blockIndex}`}
        className={editorialSpacing[block.type]}
        data-scene={scene}
        data-atmosphere={atmosphere}
      >
        <Component project={project} block={block} index={blockIndex} />
      </div>
    );
  });
}

export default function ProjectPresentationRenderer({
  project,
  presentation,
  index = 0,
}: Props) {
  const profile = resolveProfile(presentation.mode);

  const density = resolveDensity(presentation, profile);

  return (
    <article className="relative">
      <ProjectDivider />

      <div className={density}>
        <FadeIn>
          <ProjectMeta project={project} index={index} />
        </FadeIn>

        {presentation.mode === "cinematic"
          ? renderCinematicPresentation(project, presentation)
          : renderEditorialPresentation(project, presentation)}
      </div>
    </article>
  );
}
