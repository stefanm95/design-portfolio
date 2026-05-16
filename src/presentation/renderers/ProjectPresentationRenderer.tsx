import FadeIn from "@/presentation/animation/FadeIn";

import { ProjectDivider, ProjectMeta } from "@/presentation/shared";

import type { ProjectPresentation } from "@/types/presentation";

import type { Project } from "@/types/projects";

import {
  MotionCadenceProvider,
  resolveCompositionContract,
} from "@/runtime/presentation";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import { resolvePresentationDialect } from "./presentationDialect";

import {
  renderPresentationBlocks,
  type RuntimePresentationAttributes,
} from "./renderPresentationBlocks";

import { sceneDefinitions } from "@/runtime/presentation/scene";

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

  const runtime: RuntimePresentationAttributes = {
    composition,

    profileVariant,
  };

  const dialect = resolvePresentationDialect(presentation.mode);

  const scene = sceneDefinitions.projects;

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

      <MotionCadenceProvider contract={composition}>
        <div className={composition.densityClass}>
          <FadeIn>
            <ProjectMeta project={project} index={index} />
          </FadeIn>

          {renderPresentationBlocks({
            project,
            presentation,
            runtime,
            registry: dialect.registry,
            roleMap: dialect.roleMap,
            scene,
          })}
        </div>
      </MotionCadenceProvider>
    </article>
  );
}
