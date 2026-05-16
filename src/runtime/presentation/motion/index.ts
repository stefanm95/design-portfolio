export { resolveCadence, type MotionCadence } from "./cadence";

export { MotionCadenceProvider } from "./MotionCadenceProvider";

export { useMotionCadence } from "./useMotionCadence";

export { resolveContextualMotion } from "./resolveContextualMotion";

export {
  cinematicEasing,
  resolveMotionEasing,
  type CubicBezier,
} from "./resolveMotionEasing";

export {
  applySceneModulation,
  resolveSceneModulation,
  type SceneModulation,
} from "./sceneModulation";

export {
  resolveCompositionMotionInfluence,
  applyCompositionMotionInfluence,
  type CompositionMotionInfluence,
} from "./compositionMotionSemantics";

export {
  calculateBreathingDelay,
  calculatePressureStagger,
  calculateBreathingDistance,
  applyBreathingModulation,
  calculateCinematicSpacingModifier,
  calculateCompositionalSeparation,
} from "./breathingAwareAnimation";
