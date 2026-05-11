import { opacity } from "@/theme/core/opacity";
import { textures } from "@/theme/core/textures";

import { obsidianGoldColors } from "./colors";
import { obsidianGoldGradients } from "./gradients";

export const obsidianGoldAtmosphere = {
  base: {
    background: obsidianGoldColors.background.base,
  },

  stoneLayer: {
    image: textures.obsidianGold.obsidianStone,
    opacity: opacity.ambient,
  },

  primaryBloom: {
    gradient: obsidianGoldGradients.atmosphere.primaryBloom,

    position: `
      left-[-12vw]
      top-[-18vh]
    `,

    size: `
      h-[78vw]
      w-[78vw]
    `,

    opacity: "0.42",
  },

  secondaryBloom: {
    gradient: obsidianGoldGradients.atmosphere.secondaryBloom,

    position: `
      right-[-14vw]
      bottom-[-24vh]
    `,

    size: `
      h-[64vw]
      w-[64vw]
    `,

    opacity: "0.34",
  },

  metallicVeil: {
    gradient: obsidianGoldGradients.atmosphere.metallicVeil,

    position: `
      inset-0
    `,

    opacity: "0.12",
  },
};
