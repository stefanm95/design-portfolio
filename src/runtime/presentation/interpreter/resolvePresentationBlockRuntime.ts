import {
  resolveBlockSpacing,
  resolveSpatialBehavior,
} from "@/runtime/presentation/composition";

import type {
  PresentationBlockRenderer,
  PresentationRegistry,
} from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import type { PresentationBlock } from "@/types/presentation";

import type {
  PresentationRuntimeSnapshot,
  ResolvedPresentationBlockRuntime,
} from "./types";

type Props<TBlock extends PresentationBlock> = {
  block: TBlock;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;

  snapshot: PresentationRuntimeSnapshot;
};

export function resolvePresentationBlockRuntime<
  TBlock extends PresentationBlock,
>({
  block,
  registry,
  roleMap,
  snapshot,
}: Props<TBlock>): ResolvedPresentationBlockRuntime<TBlock> | null {
  const blockType = block.type as TBlock["type"];

  const component = registry[blockType] as PresentationBlockRenderer<TBlock>;

  if (!component) {
    return null;
  }

  const role = roleMap[blockType];

  if (!role) {
    return null;
  }

  const spatialBehavior = resolveSpatialBehavior(role);

  const spacing = resolveBlockSpacing({
    behavior: spatialBehavior,
    snapshot,
  });

  return {
    block,

    component,

    role,

    runtime: {
      spatialBehavior,

      scene: snapshot.scene,

      atmosphere: snapshot.atmosphere,

      spacing,
    },
  };
}
