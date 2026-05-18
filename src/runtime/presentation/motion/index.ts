export { resolveCadence } from "./cadence";

export { MotionCadenceProvider } from "./MotionCadenceProvider";

export { useMotionCadence } from "./useMotionCadence";

export { resolveContextualMotion } from "./resolveContextualMotion";

export { cinematicEasing, resolveMotionEasing } from "./resolveMotionEasing";

export {
  applyMotionInfluence,
  resolveMotionInfluence,
} from "./resolveMotionInfluence";

export {
  applyBreathingModulation,
  calculateBreathingDelay,
  calculateBreathingDistance,
  calculateCinematicSpacingModifier,
  calculateCompositionalSeparation,
  calculatePressureStagger,
} from "./breathingAwareAnimation";

export type {
  CompositionMotionInfluence,
  CubicBezier,
  MotionCadence,
  SceneModulation,
} from "./types";
