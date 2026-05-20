// runtime/presentation/layout/index.ts

//
// CONTRACTS
//
export type {
  ResolvedHeroLayout,
  ResolvedPageLayoutRuntime,
} from "./contracts";

//
// REALIZATION
//

export {
  gridSpacingScale,
  layoutScales,
  projectLayoutRealization,
  sectionSpacingScale,
  stackSpacingScale,
} from "./realization";

export {
  resolveLayoutRuntime,
  resolvePageLayoutRuntime,
  resolveProjectLayoutRuntime,
} from "./resolvers";
