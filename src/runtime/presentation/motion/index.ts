export { resolveCadence } from "./cadence";

export { MotionCadenceProvider } from "./MotionCadenceProvider";

export { useMotionCadence } from "./useMotionCadence";

export { resolveContextualMotion } from "./resolveContextualMotion";

export { cinematicEasing, resolveMotionEasing } from "./resolveMotionEasing";

export {
  resolveCompositionMotionInfluence,
  applyCompositionMotionInfluence,
} from "./compositionMotionSemantics";

export {
  calculateBreathingDelay,
  calculatePressureStagger,
  calculateBreathingDistance,
  applyBreathingModulation,
  calculateCinematicSpacingModifier,
  calculateCompositionalSeparation,
} from "./breathingAwareAnimation";

export type {
  MotionCadence,
  CubicBezier,
  SceneModulation,
  CompositionMotionInfluence,
} from "./types";
