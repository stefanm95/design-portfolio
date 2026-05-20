import type { PresentationBlock } from "@/types/presentation";

import type { PresentationRegistry } from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { CompositionContract } from "@/runtime/presentation/composition/contract/types";
import {
  resolvePresentationBlockRuntime,
  type ResolvedPresentationBlockRuntime,
} from "@/runtime/presentation/execution/blocks";
import { resolvePresentationSnapshot } from "@/runtime/presentation/execution/snapshot";
import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";
import { resolveBlockRelationships } from "../../../interpreter/relationships";

type Props<TBlock extends PresentationBlock> = {
  presentation: {
    blocks: TBlock[];
  };

  composition: CompositionContract;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;

  scene: SceneRuntime;

  profile: PresentationProfileVariant;
};

export function resolvePresentationRuntime<TBlock extends PresentationBlock>({
  presentation,
  composition,
  registry,
  roleMap,
  scene,
  profile,
}: Props<TBlock>): ResolvedPresentationBlockRuntime<TBlock>[] {
  const snapshot = resolvePresentationSnapshot({
    composition,
    scene,
    profile,
  });

  const totalBlocks = presentation.blocks.length;

  return presentation.blocks
    .map((block, index) => {
      const previousBlock = presentation.blocks[index - 1];

      const nextBlock = presentation.blocks[index + 1];

      const blockType = block.type as TBlock["type"];

      const currentRole = roleMap[blockType];

      if (!currentRole) {
        return null;
      }

      const relationships = resolveBlockRelationships({
        index,

        totalBlocks,

        currentRole,

        previousRole: previousBlock
          ? roleMap[previousBlock.type as TBlock["type"]]
          : undefined,

        nextRole: nextBlock
          ? roleMap[nextBlock.type as TBlock["type"]]
          : undefined,

        currentAtmosphere: snapshot.atmosphere,

        previousAtmosphere: snapshot.atmosphere,

        nextAtmosphere: snapshot.atmosphere,
      });

      return resolvePresentationBlockRuntime({
        block,

        registry,

        roleMap,

        snapshot,

        relationships,
      });
    })
    .filter(
      (runtime): runtime is ResolvedPresentationBlockRuntime<TBlock> =>
        runtime !== null,
    );
}
