import { darkCyanColors } from "./colors";

export const darkCyanGradients = {
  atmosphere: {
    primaryBloom: `
      radial-gradient(
        circle,
        ${darkCyanColors.atmosphere.primary} 0%,
        transparent 72%
      )
    `,

    secondaryBloom: `
      radial-gradient(
        circle,
        ${darkCyanColors.atmosphere.secondary} 0%,
        transparent 72%
      )
    `,
  },

  grid: {
    primary: `
      linear-gradient(
        to right,
        ${darkCyanColors.grid.primary} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${darkCyanColors.grid.primary} 1px,
        transparent 1px
      )
    `,

    subtle: `
      linear-gradient(
        to right,
        ${darkCyanColors.grid.subtle} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${darkCyanColors.grid.subtle} 1px,
        transparent 1px
      )
    `,
  },

  display: {
    primary: `
      bg-linear-to-br
      from-[#f3f6f8]
      via-[#adc0cf]
      to-[#f0d1a0]
    `,

    secondary: `
      bg-linear-to-br
      from-[#dce8f2]
      via-[#9fb8c8]
      to-[#f1cb93]
    `,

    tertiary: `
      bg-linear-to-br
      from-[#eef2f5]
      via-[#a8bac7]
      to-[#e8c48c]
    `,
  },
};
