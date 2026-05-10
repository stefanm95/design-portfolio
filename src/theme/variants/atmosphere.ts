import { atmosphereGradients } from "../core/gradients/atmosphereGradients";
import { opacity } from "../core/opacity";
import { textures } from "../core/textures";

export const atmosphere = {
  base: {
    background: "#050505",
  },

  stoneLayer: {
    image: textures.stone.darkWall,
    opacity: opacity.texture,
  },

  primaryBloom: {
    gradient: atmosphereGradients.primaryBloom,

    position: `
      left-[-12vw]
      top-[-18vh]
    `,

    size: `
      h-[90vw]
      w-[90vw]
    `,

    opacity: opacity.bloom,
  },

  secondaryBloom: {
    gradient: atmosphereGradients.secondaryBloom,

    position: `
      right-[-12vw]
      bottom-[-30vh]
    `,

    size: `
      h-[70vw]
      w-[70vw]
    `,

    opacity: opacity.ambient,
  },

  vignette: {
    gradient: atmosphereGradients.vignette,
  },

  topFade: {
    gradient: atmosphereGradients.topFade,
    height: "h-[28vh]",
  },
};
