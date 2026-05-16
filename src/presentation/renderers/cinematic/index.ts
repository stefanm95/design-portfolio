import type { CinematicPresentationRegistry } from "../types";

import CinematicHero from "./projects/blocks/CinematicHero";
import CinematicSystems from "./projects/blocks/CinematicSystems";
import CinematicServices from "./projects/blocks/CinematicServices";
import CinematicMobile from "./projects/blocks/mobile/CinematicMobile";
import CinematicShowcase from "./projects/blocks/showcase/CinematicShowcase";

export const cinematicBlockRegistry: CinematicPresentationRegistry = {
  hero: CinematicHero,

  showcase: CinematicShowcase,

  systems: CinematicSystems,

  services: CinematicServices,

  mobile: CinematicMobile,
};
