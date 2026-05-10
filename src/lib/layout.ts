export const sectionSpacing = {
  default: `
    py-16
    md:py-20
    xl:py-28
  `,

  cinematic: `
    py-20
    md:py-28
    xl:py-40
  `,

  compact: `
    py-12
    md:py-16
    xl:py-20
  `,
};

export const sectionSpacingY = {
  default: `
    space-y-24
    md:space-y-32
    lg:space-y-40
    xl:space-y-52
  `,

  compact: `
    space-y-16
    md:space-y-24
    xl:space-y-32
  `,
};

export const gridLayouts = {
  editorial: `
    grid
    grid-cols-1

    gap-y-16

    xl:grid-cols-12
    xl:gap-x-24
    xl:items-start
  `,

  showcase: `
    grid
    grid-cols-1

    gap-y-16
    lg:gap-y-20

    xl:grid-cols-12
    xl:items-center
    xl:gap-x-20
  `,
};

export const stickyOffsets = {
  default: `
    xl:sticky
    xl:top-24
  `,

  cinematic: `
    xl:sticky
    xl:top-32
  `,
};

export const textWidths = {
  body: "max-w-[32ch]",
  bodyWide: "max-w-[38ch]",
  heading: "max-w-[10ch]",
  editorial: "max-w-lg",
};

export const responsiveHeading = {
  hero: `
    text-4xl
    sm:text-5xl
    md:text-6xl
    xl:text-7xl
  `,

  section: `
    text-3xl
    sm:text-4xl
    md:text-5xl
    xl:text-6xl
  `,
};

export const cinematicFrameHeights = {
  default: `
    min-h-[420px]
    xl:min-h-[560px]
  `,

  large: `
    min-h-[520px]
    xl:min-h-[720px]
  `,
};
