export { compositionDensity } from "../realization/composition/density";

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
  EnvironmentalPressure,
  MotionRestraint,
  SceneIntensity,
  SpatialBehavior,
  SpatialPressure,
  TransitionIntensity,
} from "./contract/orchestration/types.shared";

export * from "./orchestration";
