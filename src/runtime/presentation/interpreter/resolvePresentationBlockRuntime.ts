import {
  resolveAtmosphere,
  resolveScene,
} from "@/runtime/presentation/resolvers";

import {
  resolveBlockSpacing,
  resolveSpatialBehavior,
} from "@/runtime/presentation/composition";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

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
};

export function resolvePresentationBlockRuntime({
  block,
  presentation,
  composition,
  registry,
  roleMap,
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

  const spatialBehavior = resolveSpatialBehavior(role);

  const spacing = resolveBlockSpacing({
    behavior: spatialBehavior,
    composition,
  });

  const scene = resolveScene(block.type);

  const atmosphere = resolveAtmosphere(presentation.mode, scene);

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
