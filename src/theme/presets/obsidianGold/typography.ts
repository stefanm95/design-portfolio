import { obsidianGoldGradients } from "./gradients";

export const obsidianGoldTypography = {
  display: {
    base: `
      font-display
      font-medium

      text-6xl
      md:text-8xl
      xl:text-[10rem]

      leading-[0.9]
      tracking-[-0.08em]

      text-balance

      bg-clip-text
      text-transparent
    `,

    glow: `
      drop-shadow-[0_0_30px_rgba(212,175,55,0.10)]
    `,

    variants: {
      primary: obsidianGoldGradients.display.primary,

      secondary: obsidianGoldGradients.display.secondary,

      tertiary: obsidianGoldGradients.display.tertiary,
    },
  },

  heading: {
    base: `
      font-display
      tracking-tighter
    `,

    colors: {
      primary: "text-[#f3e7cf]",

      soft: "text-[#dbc39a]/88",

      muted: "text-[#a88a5c]/68",
    },
  },

  label: {
    base: `
      font-body
      text-[10px]
      md:text-xs
      uppercase
      tracking-[0.42em]
    `,

    colors: {
      primary: "text-[#d4af37]/54",

      muted: "text-[#b8924f]/32",

      subtle: "text-[#8a6a34]/24",
    },
  },

  text: {
    base: `
      font-body
      leading-relaxed
    `,

    sizes: {
      body: `
        text-sm
        md:text-base
      `,

      narrative: `
        text-[15px]
        md:text-[16px]
        lg:text-[17px]
      `,
    },

    colors: {
      primary: "text-[#c8b28c]",

      accent: "text-[#f3dfb7]/90",

      narrative: "text-[#c2a06a]/46",

      secondary: "text-[#d4c1a1]/68",

      muted: "text-[#9a7a4c]/34",

      subtle: "text-[#6b512d]/22",
    },
  },
};
