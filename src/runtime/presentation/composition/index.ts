// runtime/presentation/composition/index.ts

//
// FOUNDATIONS
//

export { compositionDensity } from "../realization/composition/density";

export { compositionRhythm } from "./rhythm";

export { compositionStack } from "./stack";

export { sectionSpacing } from "./section";

export { gridSpacing, stackSpacing } from "./gridSpacing";

export { projectComposition } from "./projects";

//
// CONTRACTS
//

export {
  resolveCompositionContract,
  type OrchestrationContract,
  type SemanticContract,
} from "./contract";

//
// REACTIVITY
//

export {
  resolveCompositionBreathing,
  resolveCompositionDensity,
  resolveCompositionPacing,
  resolveCompositionReactivity,
  type CompositionBreathing,
  type CompositionDensityReactivity,
  type CompositionPacing,
  type CompositionReactivityContextType,
} from "./reactivity";

//
// SPATIAL ORCHESTRATION
//

export {
  resolveBlockSpacing,
  resolveContextualSpacing,
  resolveSpatialBehavior,
  resolveSpatialPressure,
} from "./spacing";

//
// ORCHESTRATION TYPES
//

export type {
  AtmosphericDepth,
  CompositionDensity,
  CompositionRhythm,
  EnvironmentalPressure,
  MotionRestraint,
  SceneIntensity,
  SpatialBehavior,
  SpatialPressure,
  TransitionIntensity,
} from "./contract/orchestration/types.shared";
