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
