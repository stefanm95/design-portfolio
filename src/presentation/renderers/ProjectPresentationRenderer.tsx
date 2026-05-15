import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import type {
  CinematicPresentation,
  EditorialPresentation,
  ProjectPresentation,
} from "@/types/presentation";

import type { Project } from "@/types/projects";

import {
  cinematicSpacing,
  editorialSpacing,
  resolveCompositionContract,
} from "@/runtime/presentation";

import {
  resolveAtmosphere,
  resolveProfile,
  resolveScene,
} from "@/runtime/presentation/resolvers";

import {
  resolveCinematicRegistry,
  resolveEditorialRegistry,
} from "@/presentation/renderers/registryResolver";
import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";
import type { CompositionContract } from "@/runtime/presentation/composition";

type Props = {
  project: Project;
  presentation: ProjectPresentation;
  index?: number;
};

type RuntimePresentationAttributes = {
  composition: CompositionContract;

  profileVariant: PresentationProfileVariant;
};

function renderCinematicPresentation(
  project: Project,
  presentation: CinematicPresentation,
  runtime: RuntimePresentationAttributes,
) {
  const registry = resolveCinematicRegistry();

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
        data-profile={runtime.profileVariant}
        data-density={runtime.composition.density}
        data-rhythm={runtime.composition.rhythm}
        data-transition={runtime.composition.transition}
        data-scene-intensity={runtime.composition.sceneIntensity}
      >
        <Component project={project} block={block} index={blockIndex} />
      </div>
    );
  });
}

function renderEditorialPresentation(
  project: Project,
  presentation: EditorialPresentation,
  runtime: RuntimePresentationAttributes,
) {
  const registry = resolveEditorialRegistry();

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
        data-profile={runtime.profileVariant}
        data-density={runtime.composition.density}
        data-rhythm={runtime.composition.rhythm}
        data-transition={runtime.composition.transition}
        data-scene-intensity={runtime.composition.sceneIntensity}
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
  const profileVariant = presentation.composition?.profile ?? "immersive";

  const profile = resolveProfile(profileVariant);

  const composition = resolveCompositionContract(presentation, profile);

  const runtime: RuntimePresentationAttributes = {
    composition,

    profileVariant,
  };

  return (
    <article
      className="relative"
      data-profile={runtime.profileVariant}
      data-density={composition.density}
      data-rhythm={composition.rhythm}
      data-transition={composition.transition}
      data-scene-intensity={composition.sceneIntensity}
    >
      <ProjectDivider />

      <div className={composition.densityClass}>
        <FadeIn rhythm={composition.rhythm} transition={composition.transition}>
          <ProjectMeta project={project} index={index} />
        </FadeIn>

        {presentation.mode === "cinematic"
          ? renderCinematicPresentation(project, presentation, runtime)
          : renderEditorialPresentation(project, presentation, runtime)}
      </div>
    </article>
  );
}
