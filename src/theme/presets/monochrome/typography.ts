import { monochromeGradients } from "./gradients";

export const monochromeTypography = {
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
      drop-shadow-[0_0_24px_rgba(255,255,255,0.04)]
    `,

    variants: {
      primary: monochromeGradients.display.primary,

      secondary: monochromeGradients.display.secondary,

      tertiary: monochromeGradients.display.tertiary,
    },
  },

  heading: {
    base: `
      font-display
      tracking-tighter
    `,

    colors: {
      primary: "text-white",

      soft: "text-white/88",

      muted: "text-white/62",
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
      primary: "text-white/28",

      muted: "text-white/18",

      subtle: "text-white/12",
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
      primary: "text-[#b0b0b0]",

      accent: "text-white/84",

      narrative: "text-white/42",

      secondary: "text-white/62",

      muted: "text-white/28",

      subtle: "text-white/18",
    },
  },
};
