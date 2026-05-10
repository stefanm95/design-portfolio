import { gradients } from "../core/gradients";
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

  cyanBloom: {
    gradient: gradients.atmosphere.cyan,

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

  goldBloom: {
    gradient: gradients.atmosphere.gold,

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
    gradient: gradients.atmosphere.vignette,
  },

  topFade: {
    gradient: gradients.atmosphere.topFade,
    height: "h-[28vh]",
  },
};
