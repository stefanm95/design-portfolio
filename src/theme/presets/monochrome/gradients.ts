import { monochromeColors } from "./colors";

export const monochromeGradients = {
  atmosphere: {
    primaryBloom: `
      radial-gradient(
        circle,
        ${monochromeColors.atmosphere.primary} 0%,
        transparent 72%
      )
    `,

    secondaryBloom: `
      radial-gradient(
        circle,
        ${monochromeColors.atmosphere.secondary} 0%,
        transparent 72%
      )
    `,
  },

  overlays: {
    cinematic: `
      bg-gradient-to-b
      from-black/10
      via-transparent
      to-black/30
    `,

    fadeBottom: `
      bg-linear-to-t
      from-black/30
      to-transparent
    `,
  },

  grid: {
    primary: `
      linear-gradient(
        to right,
        ${monochromeColors.grid.primary} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${monochromeColors.grid.primary} 1px,
        transparent 1px
      )
    `,

    subtle: `
      linear-gradient(
        to right,
        ${monochromeColors.grid.subtle} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${monochromeColors.grid.subtle} 1px,
        transparent 1px
      )
    `,
  },

  display: {
    primary: `
      bg-linear-to-br
      from-[#ffffff]
      via-[#d6d6d6]
      to-[#8f8f8f]
    `,

    secondary: `
      bg-linear-to-br
      from-[#f5f5f5]
      via-[#cfcfcf]
      to-[#7a7a7a]
    `,

    tertiary: `
      bg-linear-to-br
      from-[#e8e8e8]
      via-[#b8b8b8]
      to-[#666666]
    `,
  },
};
