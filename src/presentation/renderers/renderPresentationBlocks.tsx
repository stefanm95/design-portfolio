import type { Project } from "@/types/projects";

import type { ProjectPresentation } from "@/types/presentation";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "./types";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import { resolvePresentationRuntime } from "@/runtime/presentation/interpreter";

import type { SceneDefinition } from "@/runtime/presentation/scene";

export type RuntimePresentationAttributes = {
  composition: CompositionContract;

  profileVariant: PresentationProfileVariant;
};

type RenderPresentationBlocksProps = {
  project: Project;

  presentation: ProjectPresentation;

  runtime: RuntimePresentationAttributes;

  registry: PresentationRegistry;

  roleMap: CompositionSemanticMap;

  scene: SceneDefinition;
};

export function renderPresentationBlocks({
  project,
  presentation,
  runtime,
  registry,
  roleMap,
  scene,
}: RenderPresentationBlocksProps) {
  const resolvedBlocks = resolvePresentationRuntime({
    presentation,
    composition: runtime.composition,
    registry,
    roleMap,
    scene,
  });

  return resolvedBlocks.map((resolvedBlock, index) => {
    const Component = resolvedBlock.component;

    return (
      <div
        key={`${resolvedBlock.block.type}-${index}`}
        className={resolvedBlock.spacing}
        data-scene={resolvedBlock.scene.id}
        data-atmosphere={resolvedBlock.atmosphere}
        data-profile={runtime.profileVariant}
        data-density={runtime.composition.density}
        data-rhythm={runtime.composition.rhythm}
        data-transition={runtime.composition.transition}
        data-scene-intensity={runtime.composition.sceneIntensity}
      >
        <Component
          project={project}
          block={resolvedBlock.block}
          index={index}
        />
      </div>
    );
  });
}
