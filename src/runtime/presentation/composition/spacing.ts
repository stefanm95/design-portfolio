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

//
// GRID SPACING
//

export const gridSpacing = {
  cinematic: `
    gap-y-10
    md:gap-y-12
    lg:gap-x-20
  `,

  editorial: `
    gap-y-8
    md:gap-y-10
    lg:gap-x-14
  `,
};

//
// STACK SPACING
//

export const stackSpacing = {
  cinematic: `
    gap-16
    md:gap-20
    lg:gap-28
  `,

  relaxed: `
    space-y-12
    md:space-y-16
    lg:space-y-20
  `,

  editorial: `
    space-y-8
    md:space-y-10
  `,

  compact: `
    space-y-6
    md:space-y-8
  `,
};
