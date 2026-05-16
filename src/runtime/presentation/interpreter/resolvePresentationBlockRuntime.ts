import { resolveAtmosphere } from "@/runtime/presentation/resolvers";

import {
  resolveBlockSpacing,
  resolveSpatialBehavior,
} from "@/runtime/presentation/composition";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type {
  PresentationBlockRenderer,
  PresentationRegistry,
} from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import type { SceneDefinition } from "@/runtime/presentation/scene";

import type { PresentationBlock } from "@/types/presentation";

import type { ResolvedPresentationBlockRuntime } from "./types";

type Props<TBlock extends PresentationBlock> = {
  block: TBlock;

  composition: CompositionContract;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap;

  scene: SceneDefinition;
};

export function resolvePresentationBlockRuntime<
  TBlock extends PresentationBlock,
>({
  block,
  composition,
  registry,
  roleMap,
  scene,
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
    composition,
  });

  const atmosphere = resolveAtmosphere({
    scene,
    composition,
  });

  return {
    block,
    component,
    role,
    spatialBehavior,
    scene,
    atmosphere,
    spacing,
  };
}
