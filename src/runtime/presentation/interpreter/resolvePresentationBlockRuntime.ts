import { resolveAtmosphere } from "@/runtime/presentation/resolvers";

import {
  resolveBlockSpacing,
  resolveSpatialBehavior,
} from "@/runtime/presentation/composition";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import type { SceneDefinition } from "@/runtime/presentation/scene";

import type {
  ProjectPresentation,
  PresentationBlock,
} from "@/types/presentation";

import type { ResolvedPresentationBlockRuntime } from "./types";

type Props = {
  block: PresentationBlock;

  presentation: ProjectPresentation;

  composition: CompositionContract;

  registry: PresentationRegistry;

  roleMap: CompositionSemanticMap;

  scene: SceneDefinition;
};

export function resolvePresentationBlockRuntime({
  block,
  composition,
  registry,
  roleMap,
  scene,
}: Props): ResolvedPresentationBlockRuntime | null {
  const blockType = block.type as keyof PresentationRegistry;

  const component = registry[blockType];

  if (!component) {
    return null;
  }

  const role = roleMap[blockType];

  if (!role) {
    return null;
  }

  //
  // SPATIAL ORCHESTRATION
  //

  const spatialBehavior = resolveSpatialBehavior(role);

  const spacing = resolveBlockSpacing({
    behavior: spatialBehavior,
    composition,
  });

  //
  // ENVIRONMENTAL ATMOSPHERE
  //

  const atmosphere = resolveAtmosphere({
    scene,
    composition,
  });

  //
  // RUNTIME CONTRACT
  //

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
