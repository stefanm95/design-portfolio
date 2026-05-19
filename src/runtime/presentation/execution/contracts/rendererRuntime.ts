import type { MotionCadence } from "@/runtime/presentation/motion";

import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type {
  ResolvedCinematicContainer,
  ResolvedOverlayRendering,
  ResolvedPanelRendering,
  ResolvedTypographyRendering,
} from "@/runtime/presentation/system";

import type { AtmosphericModulation } from "@/runtime/presentation/atmosphere";

import type { NarrativeTransition } from "@/runtime/presentation/transitions";

import type { SpatialBehavior } from "@/runtime/presentation/composition";

import type { RuntimeLayerSet } from "@/runtime/presentation/layers";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { RuntimeAtmosphere } from "@/runtime/presentation/execution/contracts/types";

import type { ResolvedVisualTreatment } from "@/runtime/presentation/semantics";

import type { RuntimeBlockRelationship } from "@/runtime/presentation/interpreter/relationships";

import type { ResolvedSurfaceRealization } from "@/runtime/presentation/surfaces";

import type { PresentationRuntimeSnapshot } from "../snapshot/contracts";

export type PresentationRendererRuntime = {
  motion: MotionCadence;

  layout: PresentationRuntimeSnapshot["layout"];

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
