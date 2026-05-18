// runtime/presentation/layout/index.ts

//
// CONTRACTS
//
export type { ResolvedHeroLayout, ResolvedLayoutRuntime } from "./contracts";

//
// REALIZATION
//

export {
  gridSpacingScale,
  projectLayoutScale,
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
