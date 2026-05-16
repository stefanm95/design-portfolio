import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

import type { CompositionSemantic } from "@/runtime/presentation/semantics";

import type { SpatialBehavior } from "@/runtime/presentation/composition";
import type { SceneAtmosphere, SceneDefinition } from "../scene";

export type ResolvedPresentationBlockRuntime<TBlock extends PresentationBlock> =
  {
    block: TBlock;

    component: PresentationBlockRenderer<TBlock>;

    role: CompositionSemantic;

    spatialBehavior: SpatialBehavior;

    scene: SceneDefinition;

    atmosphere: SceneAtmosphere;

    spacing: string;
  };
