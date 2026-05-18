// presentation/renderers/renderPresentationBlocks.tsx

import type { Project } from "@/types/projects";

import type { PresentationBlock } from "@/types/presentation";

import type { PresentationRegistry } from "./types";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import { resolvePresentationRuntime } from "@/runtime/presentation/interpreter";
import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts";

export type RuntimePresentationAttributes = {
  snapshot: PresentationRuntimeSnapshot;

  profileVariant: PresentationProfileVariant;
};

type RenderPresentationBlocksProps<TBlock extends PresentationBlock> = {
  project: Project;

  presentation: {
    blocks: TBlock[];
  };

  snapshot: PresentationRuntimeSnapshot;

  profileVariant: PresentationProfileVariant;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;
};

export function renderPresentationBlocks<TBlock extends PresentationBlock>({
  project,
  presentation,
  snapshot,
  profileVariant,
  registry,
  roleMap,
}: RenderPresentationBlocksProps<TBlock>) {
  const resolvedBlocks = resolvePresentationRuntime({
    presentation,

    composition: snapshot.composition,

    registry,

    roleMap,

    scene: snapshot.scene,
  });

  return resolvedBlocks.map((resolvedBlock, index) => {
    const Component = resolvedBlock.component;

    const block = resolvedBlock.block;

    const blockRuntime = resolvedBlock.runtime;

    return (
      <div
        key={`${resolvedBlock.block.type}-${index}`}
        className={blockRuntime.spacing}
        data-scene={blockRuntime.scene.definition.id}
        data-atmosphere={blockRuntime.atmosphere}
        data-profile={profileVariant}
        data-density={snapshot.composition.orchestration.density}
        data-rhythm={snapshot.composition.orchestration.rhythm}
        data-transition={snapshot.composition.orchestration.transition}
        data-scene-intensity={snapshot.composition.orchestration.sceneIntensity}
        data-spatial-behavior={blockRuntime.spatialBehavior}
      >
        <Component
          project={project}
          block={block}
          index={index}
          runtime={blockRuntime}
        />
      </div>
    );
  });
}
