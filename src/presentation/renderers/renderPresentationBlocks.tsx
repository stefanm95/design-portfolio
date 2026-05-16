import type { Project } from "@/types/projects";

import type { PresentationBlock } from "@/types/presentation";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "./types";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import {
  resolvePresentationRuntime,
  type PresentationRuntime,
} from "@/runtime/presentation/interpreter";

export type RuntimePresentationAttributes = {
  composition: CompositionContract;

  profileVariant: PresentationProfileVariant;
};

type RenderPresentationBlocksProps<TBlock extends PresentationBlock> = {
  project: Project;

  presentation: {
    blocks: TBlock[];
  };

  runtime: PresentationRuntime;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;
};

export function renderPresentationBlocks<TBlock extends PresentationBlock>({
  project,
  presentation,
  runtime,
  registry,
  roleMap,
}: RenderPresentationBlocksProps<TBlock>) {
  const resolvedBlocks = resolvePresentationRuntime({
    presentation,

    composition: runtime.composition,

    registry,

    roleMap,

    scene: runtime.scene,

    profile: runtime.profile,
  });

  return resolvedBlocks.map((resolvedBlock, index) => {
    const Component = resolvedBlock.component;

    const block = resolvedBlock.block;

    const blockRuntime = resolvedBlock.runtime;

    return (
      <div
        key={`${resolvedBlock.block.type}-${index}`}
        className={blockRuntime.spacing}
        data-scene={blockRuntime.scene.id}
        data-atmosphere={blockRuntime.atmosphere}
        data-profile={runtime.profileVariant}
        data-density={runtime.composition.density}
        data-rhythm={runtime.composition.rhythm}
        data-transition={runtime.composition.transition}
        data-scene-intensity={runtime.composition.sceneIntensity}
        data-spatial-behavior={blockRuntime.spatialBehavior}
      >
        <Component project={project} block={block} index={index} />
      </div>
    );
  });
}
