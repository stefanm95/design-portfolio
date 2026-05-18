import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

import type {
  CompositionSemantic,
  ResolvedVisualTreatment,
} from "@/runtime/presentation/semantics";

import type { SpatialBehavior } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { AtmosphericModulation } from "@/runtime/presentation/atmosphere";

import type { RuntimeLayerSet } from "@/runtime/presentation/layers";

import type { MotionCadence } from "@/runtime/presentation/motion";

import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { NarrativeTransition } from "@/runtime/presentation/transitions";

import type { RuntimeBlockRelationship } from "@/runtime/presentation/interpreter/relationships";

import type { ResolvedSurfaceRealization } from "@/runtime/presentation/surfaces";

import type { RuntimeAtmosphere } from "@/runtime/presentation/execution/contracts/types";
import type {
  ResolvedCinematicContainer,
  ResolvedOverlayRendering,
  ResolvedPanelRendering,
  ResolvedTypographyRendering,
} from "@/runtime/presentation/system";

//
// BLOCK RUNTIME
//

export type ResolvedPresentationBlockRuntime<TBlock extends PresentationBlock> =
  {
    block: TBlock;

    component: PresentationBlockRenderer<TBlock>;

    role: CompositionSemantic;

    runtime: {
      motion: MotionCadence;

      rendering: RenderingAttributes;

      system: {
        cinematic: ResolvedCinematicContainer;

        overlay: ResolvedOverlayRendering;

        panel: ResolvedPanelRendering;

        typography: ResolvedTypographyRendering;
      };

      atmosphericModulation: AtmosphericModulation;

      transition: NarrativeTransition;

      spatialBehavior: SpatialBehavior;

      scene: SceneRuntime;

      atmosphere: RuntimeAtmosphere;

      visualTreatment: ResolvedVisualTreatment;

      layers: RuntimeLayerSet;

      spacing: string;

      relationships: RuntimeBlockRelationship;

      surfaces: ResolvedSurfaceRealization;
    };
  };

//
// BLOCK / COMPONENT LINK
//

export type ResolvedBlockComponentPair<TBlock extends PresentationBlock> = {
  block: TBlock;

  component: PresentationBlockRenderer<TBlock>;
};
