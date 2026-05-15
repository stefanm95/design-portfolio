import { opacity } from "@/theme/core/opacity";
import { textures } from "@/theme/core/textures";

import { monochromeColors } from "./colors";
import { monochromeGradients } from "./gradients";

export const monochromeAtmosphere = {
  base: {
    background: monochromeColors.background.base,
  },

  stoneLayer: {
    image: textures.monochrome.monochromeWall,
    opacity: opacity.ambient,
  },

  primaryBloom: {
    gradient: monochromeGradients.atmosphere.primaryBloom,

    position: `
      left-[-10vw]
      top-[-14vh]
    `,

    size: `
      h-[72vw]
      w-[72vw]
    `,

    opacity: 0.82,
  },

  secondaryBloom: {
    gradient: monochromeGradients.atmosphere.secondaryBloom,

    position: `
      right-[-10vw]
      bottom-[-20vh]
    `,

    size: `
      h-[60vw]
      w-[60vw]
    `,

    opacity: 0.82,
  },
};
