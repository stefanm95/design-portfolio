export const contentWidth = {
  narrative: "max-w-[32rem]",
  wideNarrative: "max-w-145",
};

export const containerWidth = {
  default: "max-w-360",
  wide: "max-w-[1920px]",
  narrow: "max-w-5xl",
};

export const containerPadding = {
  default: "px-6 md:px-10 xl:px-16",

  compact: "px-5 md:px-8 xl:px-12",

  cinematic: "px-6 md:px-12 xl:px-20",
};

export const layoutGrid = {
  hero: "grid grid-cols-12 items-center",

  editorial: `
    grid
    grid-cols-1
    xl:grid-cols-12
    xl:gap-x-20
  `,

  showcase: `
    grid
    gap-y-16
    lg:gap-y-20
  `,
};
