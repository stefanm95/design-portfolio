import type { AtmosphericModulation } from "@/runtime/presentation/atmosphere";

import type { RuntimeLayerSet } from "@/runtime/presentation/layers";

import type { MotionCadence } from "@/runtime/presentation/motion";

import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { SpatialPressure } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { ResolvedSurfaceRealization } from "@/runtime/presentation/surfaces";

import type {
  RuntimeAtmosphere,
  RuntimeBreathing,
  RuntimeCadence,
  RuntimePressure,
} from "@/runtime/presentation/execution/contracts/types";
import type {
  ResolvedCinematicContainer,
  ResolvedOverlayRendering,
  ResolvedPanelRendering,
  ResolvedTypographyRendering,
} from "@/runtime/presentation/system";
import type { ResolvedPageLayoutRuntime } from "@/runtime/presentation/layout";
import type { ResolvedProjectLayoutRuntime } from "@/runtime/presentation/layout/contracts";
import type { CompositionContract } from "@/runtime/presentation/composition/contract";

export type PresentationRuntimeSnapshot = {
  atmosphere: RuntimeAtmosphere;

  layout: {
    page: ResolvedPageLayoutRuntime;

    project: ResolvedProjectLayoutRuntime;
  };

  atmosphericModulation: AtmosphericModulation;

  composition: CompositionContract;

  layers: RuntimeLayerSet;

  spatial: {
    cadence: RuntimeCadence;

    pressure: RuntimePressure;

    breathing: RuntimeBreathing;

    openness: number;

    compression: number;

    spatialPressure: SpatialPressure;
  };

  motion: MotionCadence;

  rendering: RenderingAttributes;

  surfaces: ResolvedSurfaceRealization;

  scene: SceneRuntime;

  system: {
    cinematic: ResolvedCinematicContainer;

    overlay: ResolvedOverlayRendering;

    panel: ResolvedPanelRendering;

    typography: ResolvedTypographyRendering;
  };
};
