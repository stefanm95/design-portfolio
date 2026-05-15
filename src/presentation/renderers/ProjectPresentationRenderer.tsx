import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import type {
  CinematicPresentation,
  CompositionDensity,
  CompositionRhythm,
  EditorialPresentation,
  PresentationTransition,
  ProjectPresentation,
} from "@/types/presentation";

import type { Project } from "@/types/projects";

import { cinematicSpacing, editorialSpacing } from "@/runtime/presentation";

import {
  resolveAtmosphere,
  resolveDensity,
  resolveProfile,
  resolveRhythm,
  resolveScene,
  resolveTransition,
} from "@/runtime/presentation/resolvers";

import {
  resolveCinematicRegistry,
  resolveEditorialRegistry,
} from "@/presentation/renderers/registryResolver";
import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

type Props = {
  project: Project;
  presentation: ProjectPresentation;
  index?: number;
};

type RuntimePresentationAttributes = {
  density: CompositionDensity;

  rhythm: CompositionRhythm;

  transition: PresentationTransition;

  profileVariant: PresentationProfileVariant;
};

function renderCinematicPresentation(
  project: Project,
  presentation: CinematicPresentation,
  runtime: RuntimePresentationAttributes,
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
        data-profile={runtime.profileVariant}
        data-density={runtime.density}
        data-rhythm={runtime.rhythm}
        data-transition={runtime.transition}
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
        data-profile={runtime.profileVariant}
        data-density={runtime.density}
        data-rhythm={runtime.rhythm}
        data-transition={runtime.transition}
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

  const densityVariant = presentation.composition?.density ?? profile.density;

  const densityClass = resolveDensity(presentation, profile);

  const rhythm = resolveRhythm(presentation, profile);

  const transition = resolveTransition(presentation, profile);

  //
  // TEMPORARY:
  // currently tied to presentation mode
  // later becomes true runtime profile state
  //

  const runtime: RuntimePresentationAttributes = {
    density: densityVariant,

    rhythm,

    transition,

    profileVariant,
  };

  return (
    <article
      className="relative"
      data-profile={runtime.profileVariant}
      data-density={runtime.density}
      data-rhythm={runtime.rhythm}
      data-transition={runtime.transition}
    >
      <ProjectDivider />

      <div className={densityClass}>
        <FadeIn rhythm={rhythm} transition={transition}>
          <ProjectMeta project={project} index={index} />
        </FadeIn>

        {presentation.mode === "cinematic"
          ? renderCinematicPresentation(project, presentation, runtime)
          : renderEditorialPresentation(project, presentation, runtime)}
      </div>
    </article>
  );
}
