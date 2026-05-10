import { opacity } from "@/theme/core/opacity";
import { textures } from "@/theme/core/textures";

import { darkCyanGradients } from "./gradients";

export const darkCyanAtmosphere = {
  base: {
    background: "#050505",
  },

  stoneLayer: {
    image: textures.stone.darkWall,
    opacity: opacity.texture,
  },

  primaryBloom: {
    gradient: darkCyanGradients.atmosphere.primaryBloom,

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
    gradient: darkCyanGradients.atmosphere.secondaryBloom,

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
};
