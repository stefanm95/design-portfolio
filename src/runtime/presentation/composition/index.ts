//
// FOUNDATIONS
//

export { compositionDensity } from "./density";

export { compositionRhythm } from "./rhythm";

export { compositionStack } from "./stack";

export { sectionLayouts } from "./layout";

export { sectionSpacing } from "./section";

export { gridSpacing, stackSpacing } from "./gridSpacing";

export { projectComposition } from "./projects";

//
// CONTRACTS
//

export {
  resolveCompositionContract,
  type CompositionContract,
} from "./contract";

//
// REACTIVITY
//

export {
  resolveCompositionReactivity,
  resolveCompositionPacing,
  resolveCompositionBreathing,
  resolveCompositionDensity,
  type CompositionReactivityContextType,
  type CompositionPacing,
  type CompositionBreathing,
  type CompositionDensityReactivity,
} from "./reactivity";

//
// SPATIAL ORCHESTRATION
//

export {
  resolveBlockSpacing,
  resolveSpatialBehavior,
  resolveSpatialPressure,
  spatialScale,
  type SpatialBehavior,
  type SpatialPressure,
} from "./spacing";
