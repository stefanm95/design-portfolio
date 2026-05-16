import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

import type { CompositionSemantic } from "@/runtime/presentation/semantics";

import type {
  CompositionContract,
  CompositionReactivityContextType,
  SpatialBehavior,
  SpatialPressure,
} from "@/runtime/presentation/composition";

import type {
  SceneAtmosphere,
  SceneRuntime,
} from "@/runtime/presentation/scene";

import type {
  PresentationProfile,
  PresentationProfileVariant,
} from "../profiles";
import type { MotionCadence } from "../motion";

//
// RUNTIME PRIMITIVES
//

export type RuntimeCadence = CompositionContract["rhythm"];

export type RuntimePressure = CompositionContract["sceneIntensity"];

export type RuntimeBreathing = CompositionReactivityContextType["breathing"];
export type RuntimeAtmosphere = SceneAtmosphere;

//
// BLOCK RUNTIME
//

export type ResolvedPresentationBlockRuntime<TBlock extends PresentationBlock> =
  {
    block: TBlock;

    component: PresentationBlockRenderer<TBlock>;

    role: CompositionSemantic;

    runtime: {
      spatialBehavior: SpatialBehavior;

      scene: SceneRuntime;

      atmosphere: RuntimeAtmosphere;

      spacing: string;
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

  spatial: {
    cadence: RuntimeCadence;

    pressure: RuntimePressure;

    breathing: RuntimeBreathing;

    openness: number;

    compression: number;

    spatialPressure: SpatialPressure;
  };

  motion: MotionCadence;

  environmental: {
    cinematicEnergy: number;

    overlayIntensity: number;

    atmosphericDensity: number;

    environmentalPressure: CompositionContract["environmentalPressure"];
  };

  scene: SceneRuntime;
};
