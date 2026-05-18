import type { CompositionContract } from "@/runtime/presentation/composition/contract";

import type { CompositionReactivityContextType } from "@/runtime/presentation/composition";

import type { AtmosphereState } from "@/runtime/presentation/resolvers";

//
// EXECUTION PRIMITIVES
//

export type RuntimeCadence = CompositionContract["orchestration"]["rhythm"];

export type RuntimePressure =
  CompositionContract["orchestration"]["sceneIntensity"];

export type RuntimeBreathing = CompositionReactivityContextType["breathing"];

export type RuntimeAtmosphere = AtmosphereState;
