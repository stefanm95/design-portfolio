import type { PresentationBlock } from "@/types/presentation";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import type { SceneDefinition } from "@/runtime/presentation/scene";

import { resolvePresentationBlockRuntime } from "./resolvePresentationBlockRuntime";

import type { ResolvedPresentationBlockRuntime } from "./types";

type Props<TBlock extends PresentationBlock> = {
  presentation: {
    blocks: TBlock[];
  };

  composition: CompositionContract;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;

  scene: SceneDefinition;
};

export function resolvePresentationRuntime<TBlock extends PresentationBlock>({
  presentation,
  composition,
  registry,
  roleMap,
  scene,
}: Props<TBlock>): ResolvedPresentationBlockRuntime<TBlock>[] {
  return presentation.blocks
    .map((block) =>
      resolvePresentationBlockRuntime({
        block,
        composition,
        registry,
        roleMap,
        scene,
      }),
    )
    .filter(
      (runtime): runtime is ResolvedPresentationBlockRuntime<TBlock> =>
        runtime !== null,
    );
}
