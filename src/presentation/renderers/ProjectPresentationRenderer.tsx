import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import type { ProjectPresentation } from "@/types/presentation";

import type { Project } from "@/types/projects";

import { MotionCadenceProvider } from "@/runtime/presentation";

import { resolvePresentationDialect } from "./presentationDialect";

import { renderPresentationBlocks } from "./renderPresentationBlocks";

import { resolveDensityClass } from "@/runtime/presentation/realization/composition/resolveDensityClass";

import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts";

type Props = {
  project: Project;

  presentation: ProjectPresentation;

  snapshot: PresentationRuntimeSnapshot;

  index?: number;
};

export default function ProjectPresentationRenderer({
  project,
  presentation,
  snapshot,
  index = 0,
}: Props) {
  //
  // COMPOSITION
  //

  const composition = snapshot.composition;

  //
  // PROFILE
  //

  const profileVariant = snapshot.profile;

  //
  // CONTENT
  //

  let content: React.ReactNode;

  if (presentation.mode === "cinematic") {
    const dialect = resolvePresentationDialect("cinematic");

    content = renderPresentationBlocks({
      project,

      presentation,

      profileVariant,

      snapshot,

      registry: dialect.registry,

      roleMap: dialect.roleMap,
    });
  } else {
    const dialect = resolvePresentationDialect("editorial");

    content = renderPresentationBlocks({
      project,

      presentation,

      profileVariant,

      snapshot,

      registry: dialect.registry,

      roleMap: dialect.roleMap,
    });
  }

  //
  // RENDER
  //

  return (
    <article
      className="relative"
      data-profile={profileVariant}
      data-density={composition.orchestration.density}
      data-rhythm={composition.orchestration.rhythm}
      data-transition={composition.orchestration.transition}
      data-scene-intensity={composition.orchestration.sceneIntensity}
    >
      <ProjectDivider />

      <MotionCadenceProvider
        cadence={snapshot.motion}
        reactivity={composition.orchestration.reactivity}
      >
        <div className={resolveDensityClass(composition.orchestration.density)}>
          <FadeIn>
            <ProjectMeta project={project} index={index} />
          </FadeIn>

          {content}
        </div>
      </MotionCadenceProvider>
    </article>
  );
}
