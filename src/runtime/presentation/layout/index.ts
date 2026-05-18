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
  projectLayoutRealization,
  sectionSpacingScale,
  stackLayoutScale,
  stackSpacingScale,
} from "./realization";

export {
  resolveGridSpacing,
  resolveProjectLayout,
  resolveSectionSpacing,
  resolveStackLayout,
  resolveStackSpacing,
} from "./resolvers";
