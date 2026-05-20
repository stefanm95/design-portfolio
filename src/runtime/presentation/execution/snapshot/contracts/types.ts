import type { AtmosphericModulation } from "@/runtime/presentation/atmosphere";

import type { RuntimeLayerSet } from "@/runtime/presentation/layers";

import type { MotionCadence } from "@/runtime/presentation/motion";

import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { SpatialPressure } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { ResolvedSurfaceRealization } from "@/runtime/presentation/surfaces";

import type { CompositionContract } from "@/runtime/presentation/composition/contract";
import type { AtmosphereState } from "@/runtime/presentation/resolvers";
import type { CompositionReactivityContextType } from "@/runtime/presentation/composition";
import type { ResolvedPageLayoutRuntime } from "@/runtime/presentation/layout";
import type { ResolvedProjectLayoutRuntime } from "@/runtime/presentation/layout/contracts";
import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";
import type {
  ResolvedCinematicContainer,
  ResolvedOverlayRendering,
  ResolvedPanelRendering,
  ResolvedTypographyRendering,
} from "@/runtime/presentation/system";

export type PresentationRuntimeSnapshot = {
  atmosphere: AtmosphereState;

  layout: {
    page: ResolvedPageLayoutRuntime;

    project: ResolvedProjectLayoutRuntime;
  };

  atmosphericModulation: AtmosphericModulation;

  composition: CompositionContract;

  layers: RuntimeLayerSet;

  profile: PresentationProfileVariant;

  spatial: {
    cadence: CompositionContract["orchestration"]["rhythm"];

    pressure: CompositionContract["orchestration"]["sceneIntensity"];

    breathing: CompositionReactivityContextType["breathing"];

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
