import type { PresentationBlock } from "@/types/presentation";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { PresentationProfile } from "@/runtime/presentation/profiles";

import { resolvePresentationSnapshot } from "./resolvePresentationSnapshot";

import { resolvePresentationBlockRuntime } from "./resolvePresentationBlockRuntime";

import type { ResolvedPresentationBlockRuntime } from "./types";

type Props<TBlock extends PresentationBlock> = {
  presentation: {
    blocks: TBlock[];
  };

  composition: CompositionContract;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;

  scene: SceneRuntime;

  profile: PresentationProfile;
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

  return presentation.blocks
    .map((block) =>
      resolvePresentationBlockRuntime({
        block,
        registry,
        roleMap,
        snapshot,
      }),
    )
    .filter(
      (runtime): runtime is ResolvedPresentationBlockRuntime<TBlock> =>
        runtime !== null,
    );
}
