import type { CinematicPresentationRegistry } from "../types";

import CinematicMobileRenderer from "@/presentation/renderers/cinematic/projects/blocks/mobile/CinematicMobileRenderer";
import CinematicHero from "./projects/blocks/CinematicHero";
import CinematicServices from "./projects/blocks/CinematicServices";
import CinematicSystems from "./projects/blocks/CinematicSystems";
import CinematicShowcase from "./projects/blocks/showcase/CinematicShowcase";

export const cinematicBlockRegistry: CinematicPresentationRegistry = {
  hero: CinematicHero,

  showcase: CinematicShowcase,

  systems: CinematicSystems,

  services: CinematicServices,

  mobile: CinematicMobileRenderer,
};
