import CinematicHero from "./blocks/CinematicHero";
import CinematicServices from "./blocks/CinematicServices";
import CinematicSystems from "./blocks/CinematicSystems";
import CinematicMobile from "./blocks/mobile/CinematicMobile";
import CinematicShowcase from "./blocks/showcase/CinematicShowcase";

export const cinematicRegistry = {
  hero: CinematicHero,
  showcase: CinematicShowcase,
  systems: CinematicSystems,
  services: CinematicServices,
  mobile: CinematicMobile,
};
