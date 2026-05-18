import type { ResolvedPageLayoutRuntime } from "./page";

import type { ResolvedProjectLayoutRuntime } from "./project";

export type {
  ResolvedAboutLayout,
  ResolvedContactLayout,
  ResolvedExperienceLayout,
  ResolvedHeroLayout,
  ResolvedPhilosophyLayout,
  ResolvedProjectsSectionLayout,
  ResolvedPageLayoutRuntime,
} from "./page";

export * from "./project";

export * from "./shared";

export type ResolvedLayoutRuntime = {
  page: ResolvedPageLayoutRuntime;

  project: ResolvedProjectLayoutRuntime;
};
