export const contentWidth = {
  narrative: "max-w-[32rem]",

  wideNarrative: "max-w-145",

  body: "max-w-[32ch]",

  bodyWide: "max-w-[38ch]",

  heading: "max-w-[10ch]",

  editorial: "max-w-lg",
};

export const containerWidth = {
  default: "max-w-360",

  wide: "max-w-[1920px]",

  narrow: "max-w-5xl",
};

export const layoutGrid = {
  hero: `
    grid
    grid-cols-12
    items-center
  `,

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

export const atmosphericLayout = {
  spine: "left-[68%]",

  primaryVolume: {
    position: "left-[62%] top-[-10%]",
    size: "h-[140vh] w-[32vw]",
  },

  primaryGlass: {
    position: "left-[72%] top-[-6%]",
    size: "h-[128vh] w-[14vw]",
  },

  secondaryGlass: {
    position: "left-[82%] top-[10%]",
    size: "h-[70vh] w-[6vw]",
  },

  texture: {
    position: "left-[66%] top-[18%]",
    size: "h-[42vh] w-[10vw]",
  },

  bloom: {
    position: "left-[60%] bottom-[-20%]",
    size: "h-[34vw] w-[34vw]",
  },

  globalCyan: {
    position: "left-[-12vw] top-[-18vh]",
    size: "h-[90vw] w-[90vw]",
  },

  globalGold: {
    position: "right-[-12vw] bottom-[-30vh]",
    size: "h-[70vw] w-[70vw]",
  },

  sideRefraction: {
    width: "w-[34vw]",
  },

  topFade: {
    height: "h-[28vh]",
  },
};
