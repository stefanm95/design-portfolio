import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import type { ProjectPresentation } from "@/types/presentation";

import type { Project } from "@/types/projects";

import { resolveSceneRuntime } from "@/runtime/presentation/scene";

import {
  MotionCadenceProvider,
  resolveCompositionContract,
} from "@/runtime/presentation";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import { resolvePresentationDialect } from "./presentationDialect";

import { renderPresentationBlocks } from "./renderPresentationBlocks";

import { sceneDefinitions } from "@/runtime/presentation/scene";
import type { PresentationRuntime } from "@/runtime/presentation/interpreter";

type Props = {
  project: Project;

  presentation: ProjectPresentation;

  index?: number;
};

export default function ProjectPresentationRenderer({
  project,
  presentation,
  index = 0,
}: Props) {
  const profileVariant = presentation.composition?.profile ?? "immersive";

  const profile = resolveProfile(profileVariant);

  const composition = resolveCompositionContract(
    presentation,
    profile,
    profile.sceneIntensity,
  );

  const scene = resolveSceneRuntime({
    scene: sceneDefinitions.projects,
    composition,
    profile,
    profileVariant,
  });

  const runtime: PresentationRuntime = {
    composition,

    profile,

    profileVariant,

    scene,
  };

  let content: React.ReactNode;

  if (presentation.mode === "cinematic") {
    const dialect = resolvePresentationDialect("cinematic");

    content = renderPresentationBlocks({
      project,
      presentation,
      runtime,
      registry: dialect.registry,
      roleMap: dialect.roleMap,
    });
  } else {
    const dialect = resolvePresentationDialect("editorial");

    content = renderPresentationBlocks({
      project,
      presentation,
      runtime,
      registry: dialect.registry,
      roleMap: dialect.roleMap,
    });
  }

  return (
    <article
      className='relative'
      data-profile={runtime.profileVariant}
      data-density={composition.density}
      data-rhythm={composition.rhythm}
      data-transition={composition.transition}
      data-scene-intensity={composition.sceneIntensity}
    >
      <ProjectDivider />

      <MotionCadenceProvider runtime={runtime}>
        <div className={composition.densityClass}>
          <FadeIn>
            <ProjectMeta project={project} index={index} />
          </FadeIn>

          {content}
        </div>
      </MotionCadenceProvider>
    </article>
  );
}
