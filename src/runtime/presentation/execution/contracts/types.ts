import type { CompositionContract } from "@/runtime/presentation/composition/contract";

import type { CompositionReactivityContextType } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import type { AtmosphereState } from "@/runtime/presentation/resolvers";

//
// EXECUTION PRIMITIVES
//

export type RuntimeCadence = CompositionContract["orchestration"]["rhythm"];

export type RuntimePressure =
  CompositionContract["orchestration"]["sceneIntensity"];

export type RuntimeBreathing = CompositionReactivityContextType["breathing"];

export type RuntimeAtmosphere = AtmosphereState;

//
// EXECUTION CONTEXT
//

export type PresentationRuntime = {
  composition: CompositionContract;

  profileVariant: PresentationProfileVariant;

  scene: SceneRuntime;
};
