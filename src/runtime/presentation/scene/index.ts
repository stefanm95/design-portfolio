//
// DEFINITIONS
//

export { sceneDefinitions, type SceneId } from "./definitions";

//
// RUNTIME
//

export { resolveSceneRuntime } from "./resolveSceneRuntime";

export { useScene } from "./useScene";

//
// TYPES
//

export type {
  SceneRuntime,
  SceneDefinition,
  SceneAtmosphere,
  SceneTone,
  EnvironmentalRuntime,
  EnvironmentalPressure,
  BreathingBias,
  MotionRestraint,
  OverlayDepth,
} from "./types";

export * from "./environment";
