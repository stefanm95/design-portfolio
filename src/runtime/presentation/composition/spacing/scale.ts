import type { SpatialPressure, SpatialRole } from "./types";

export const spatialScale: Record<
  SpatialPressure,
  Record<SpatialRole, string>
> = {
  compressed: {
    intro: "mt-8 md:mt-12 lg:mt-16",
    section: "mt-12 md:mt-16 lg:mt-24",
    feature: "mt-16 md:mt-24 lg:mt-32",
    immersive: "mt-20 md:mt-28 lg:mt-36",
  },

  balanced: {
    intro: "mt-10 md:mt-16 lg:mt-24",
    section: "mt-16 md:mt-24 lg:mt-32",
    feature: "mt-20 md:mt-32 lg:mt-44",
    immersive: "mt-24 md:mt-36 lg:mt-52",
  },

  spacious: {
    intro: "mt-14 md:mt-20 lg:mt-28",
    section: "mt-20 md:mt-32 lg:mt-40",
    feature: "mt-28 md:mt-40 lg:mt-56",
    immersive: "mt-32 md:mt-48 lg:mt-64",
  },
};
