import {
  resolveContextualSpacing,
  resolveSpatialBehavior,
} from "@/runtime/presentation/composition";

import type {
  PresentationBlockRenderer,
  PresentationRegistry,
} from "@/presentation/renderers/types";

import {
  resolveVisualTreatment,
  type CompositionSemanticMap,
} from "@/runtime/presentation/semantics";

import type { PresentationBlock } from "@/types/presentation";

import { resolveContextualMotion } from "../motion";
import { resolveNarrativeTransition } from "../transitions";
import type { RuntimeBlockRelationship } from "./relationships";
import type {
  PresentationRuntimeSnapshot,
  ResolvedPresentationBlockRuntime,
} from "./types";

type Props<TBlock extends PresentationBlock> = {
  block: TBlock;

  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap<TBlock>;

  snapshot: PresentationRuntimeSnapshot;

  relationships: RuntimeBlockRelationship;
};

export function resolvePresentationBlockRuntime<
  TBlock extends PresentationBlock,
>({
  block,
  registry,
  roleMap,
  snapshot,
  relationships,
}: Props<TBlock>): ResolvedPresentationBlockRuntime<TBlock> | null {
  const blockType = block.type as TBlock["type"];

  const component = registry[blockType] as PresentationBlockRenderer<
    typeof block
  >;

  if (!component) {
    return null;
  }

  const role = roleMap[blockType];

  if (!role) {
    return null;
  }

  const spatialBehavior = resolveSpatialBehavior(role);

  const spacing = resolveContextualSpacing({
    behavior: spatialBehavior,
    snapshot,
    relationships,
  });

  const motion = resolveContextualMotion({
    cadence: snapshot.motion,

    relationships,
  });

  const visualTreatment = resolveVisualTreatment({
    role,

    atmosphere: snapshot.atmosphere,
  });

  const transition = resolveNarrativeTransition({
    relationships,
  });

  return {
    block,

    component,

    role,

    runtime: {
      rendering: snapshot.rendering,

      system: snapshot.system,

      atmosphericModulation: snapshot.atmosphericModulation,

      transition,

      visualTreatment,

      motion,

      spatialBehavior,

      layers: snapshot.layers,

      surfaces: snapshot.surfaces,

      scene: snapshot.scene,

      atmosphere: snapshot.atmosphere,

      spacing,

      relationships,
    },
  };
}
