import type { CinematicBlockType, EditorialBlockType } from "../types";

export const cinematicSpacing: Record<CinematicBlockType, string> = {
  hero: "mt-10 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-32",

  showcase: "mt-14 sm:mt-20 md:mt-28 lg:mt-40 xl:mt-52",

  systems: "mt-14 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40",

  services: "mt-14 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40",

  mobile: "mt-16 sm:mt-24 md:mt-32 lg:mt-48 xl:mt-56",
};

export const editorialSpacing: Record<EditorialBlockType, string> = {
  hero: "mt-10 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-32",

  showcase: "mt-14 sm:mt-20 md:mt-28 lg:mt-40 xl:mt-52",

  atmosphere: "mt-14 sm:mt-20 md:mt-24 lg:mt-32 xl:mt-40",

  ui: "mt-16 sm:mt-24 md:mt-32 lg:mt-48 xl:mt-56",
};
