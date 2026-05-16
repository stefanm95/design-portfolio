import type { SpatialBehavior, SpatialPressure } from "./types";

export const spatialScale: Record<
  SpatialPressure,
  Record<SpatialBehavior, string>
> = {
  compressed: {
    immersive: `
      mt-16
      md:mt-24
      lg:mt-32
    `,

    balanced: `
      mt-10
      md:mt-14
      lg:mt-20
    `,

    compact: `
      mt-4
      md:mt-6
      lg:mt-8
    `,
  },

  balanced: {
    immersive: `
      mt-24
      md:mt-36
      lg:mt-52
    `,

    balanced: `
      mt-14
      md:mt-20
      lg:mt-28
    `,

    compact: `
      mt-6
      md:mt-8
      lg:mt-10
    `,
  },

  spacious: {
    immersive: `
      mt-32
      md:mt-48
      lg:mt-64
    `,

    balanced: `
      mt-20
      md:mt-28
      lg:mt-36
    `,

    compact: `
      mt-8
      md:mt-10
      lg:mt-12
    `,
  },
};
