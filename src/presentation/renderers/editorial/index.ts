import type { EditorialPresentationRegistry } from "../types";

import EditorialHero from "./projects/blocks/EditorialHero";
import EditorialAtmosphere from "./projects/blocks/EditorialAtmosphere";
import EditorialShowcase from "./projects/blocks/EditorialShowcase";
import EditorialUIDetail from "./projects/blocks/EditorialUIDetail";

export const editorialBlockRegistry: EditorialPresentationRegistry = {
  hero: EditorialHero,

  showcase: EditorialShowcase,

  atmosphere: EditorialAtmosphere,

  ui: EditorialUIDetail,
};
