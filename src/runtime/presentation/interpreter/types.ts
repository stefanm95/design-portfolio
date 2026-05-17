import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

import type {
  CompositionSemantic,
  SemanticBehavior,
} from "@/runtime/presentation/semantics";

import type {
  CompositionContract,
  CompositionReactivityContextType,
  SpatialBehavior,
  SpatialPressure,
} from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type {
  PresentationProfile,
  PresentationProfileVariant,
} from "../profiles";
import type { MotionCadence } from "../motion";
import type { RuntimeBlockRelationship } from "./relationships";
import type { AtmosphericModulation } from "../atmosphere/resolveAtmosphericModulation";
import type { RenderingAttributes } from "../rendering";
import type { RuntimeSurfaceSet } from "../surfaces";
import type { RuntimeLayerSet } from "../layers";
import type { NarrativeTransition } from "../transitions";

import type {
  CinematicContainerAttributes,
  OverlayRendering,
  PanelRendering,
  TypographyRendering,
} from "../system";
import type { AtmosphereState } from "../resolvers";

//
// RUNTIME PRIMITIVES
//

export type RuntimeCadence = CompositionContract["rhythm"];

export type RuntimePressure = CompositionContract["sceneIntensity"];

export type RuntimeBreathing = CompositionReactivityContextType["breathing"];
export type RuntimeAtmosphere = AtmosphereState;

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
        cinematic: CinematicContainerAttributes;

        overlay: OverlayRendering;

        panel: PanelRendering;

        typography: TypographyRendering;
      };

      atmosphericModulation: AtmosphericModulation;

      transition: NarrativeTransition;

      spatialBehavior: SpatialBehavior;

      scene: SceneRuntime;

      atmosphere: RuntimeAtmosphere;

      semanticBehavior: SemanticBehavior;

      layers: RuntimeLayerSet;

      spacing: string;

      relationships: RuntimeBlockRelationship;

      surfaces: RuntimeSurfaceSet;
    };
  };

//
// PRESENTATION RUNTIME
//

export type PresentationRuntime = {
  composition: CompositionContract;

  profile: PresentationProfile;

  profileVariant: PresentationProfileVariant;

  scene: SceneRuntime;
};

//
// GLOBAL SNAPSHOT
//

export type PresentationRuntimeSnapshot = {
  atmosphere: RuntimeAtmosphere;

  atmosphericModulation: AtmosphericModulation;

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

  surfaces: RuntimeSurfaceSet;

  scene: SceneRuntime;

  system: {
    cinematic: CinematicContainerAttributes;

    overlay: OverlayRendering;

    panel: PanelRendering;

    typography: TypographyRendering;
  };
};
