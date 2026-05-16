import type { SpatialPressure, SpatialRole } from "./types";

export const spatialScale: Record<
  SpatialPressure,
  Record<SpatialRole, string>
> = {
  compressed: {
    intro: `
      mt-8
      md:mt-12
      lg:mt-16
    `,

    supporting: `
      mt-10
      md:mt-14
      lg:mt-20
    `,

    feature: `
      mt-14
      md:mt-20
      lg:mt-28
    `,

    immersive: `
      mt-18
      md:mt-24
      lg:mt-32
    `,

    transition: `
      mt-6
      md:mt-10
      lg:mt-14
    `,

    compact: `
      mt-4
      md:mt-6
      lg:mt-8
    `,
  },

  balanced: {
    intro: `
      mt-10
      md:mt-16
      lg:mt-24
    `,

    supporting: `
      mt-14
      md:mt-20
      lg:mt-28
    `,

    feature: `
      mt-20
      md:mt-32
      lg:mt-44
    `,

    immersive: `
      mt-24
      md:mt-36
      lg:mt-52
    `,

    transition: `
      mt-10
      md:mt-14
      lg:mt-20
    `,

    compact: `
      mt-6
      md:mt-8
      lg:mt-10
    `,
  },

  spacious: {
    intro: `
      mt-14
      md:mt-20
      lg:mt-28
    `,

    supporting: `
      mt-20
      md:mt-28
      lg:mt-36
    `,

    feature: `
      mt-28
      md:mt-40
      lg:mt-56
    `,

    immersive: `
      mt-32
      md:mt-48
      lg:mt-64
    `,

    transition: `
      mt-16
      md:mt-24
      lg:mt-32
    `,

    compact: `
      mt-8
      md:mt-10
      lg:mt-12
    `,
  },
};
