import { obsidianGoldColors } from "./colors";

export const obsidianGoldGradients = {
  atmosphere: {
    primaryBloom: `
      radial-gradient(
        circle,
        ${obsidianGoldColors.atmosphere.primary} 0%,
        transparent 72%
      )
    `,

    secondaryBloom: `
      radial-gradient(
        circle,
        ${obsidianGoldColors.atmosphere.secondary} 0%,
        transparent 72%
      )
    `,
    metallicVeil: `
      linear-gradient(
        135deg,
        rgba(255,255,255,0.02) 0%,
        rgba(212,175,55,0.08) 18%,
        rgba(120,92,44,0.14) 42%,
        rgba(18,18,18,0.28) 100%
      )
    `,
  },

  overlays: {
    cinematic: `
      bg-gradient-to-b
      from-black/20
      via-transparent
      to-black/25
    `,

    fadeBottom: `
      bg-linear-to-t
      from-black/45
      to-transparent
    `,
  },

  grid: {
    primary: `
      linear-gradient(
        to right,
        ${obsidianGoldColors.grid.primary} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${obsidianGoldColors.grid.primary} 1px,
        transparent 1px
      )
    `,

    subtle: `
      linear-gradient(
        to right,
        ${obsidianGoldColors.grid.subtle} 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        ${obsidianGoldColors.grid.subtle} 1px,
        transparent 1px
      )
    `,
  },

  display: {
    primary: `
      bg-linear-to-br
      from-[#f6e7c8]
      via-[#c8a96b]
      to-[#5c4728]
    `,

    secondary: `
      bg-linear-to-br
      from-[#ead7b2]
      via-[#b78d4f]
      to-[#46341c]
    `,

    tertiary: `
      bg-linear-to-br
      from-[#d6c2a0]
      via-[#8c6a38]
      to-[#2c2114]
    `,
  },
};
