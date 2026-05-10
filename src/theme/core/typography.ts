import { ui } from "./colors";

export const cinematicDisplay = {
  base: `
    font-display
    font-medium

    text-6xl
    md:text-8xl
    xl:text-[10rem]

    leading-[0.88]
    tracking-[-0.075em]

    text-balance

    bg-clip-text
    text-transparent
  `,

  glow: ui.glow.cinematic,

  variants: {
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

export const headingTypography = {
  base: `
    font-display
    tracking-tighter
  `,

  colors: {
    primary: ui.text.heading,

    soft: ui.text.primary,

    muted: ui.text.secondary,
  },
};

export const labelTypography = {
  base: `
    font-body

    text-[10px]
    md:text-xs

    uppercase
    tracking-[0.42em]
  `,

  colors: {
    primary: ui.text.muted,

    muted: ui.text.metadata,

    subtle: ui.text.subtle,
  },
};

export const textTypography = {
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
    primary: ui.text.body,

    accent: ui.text.accent,

    narrative: ui.text.narrative,

    secondary: ui.text.secondary,

    muted: ui.text.muted,

    subtle: ui.text.metadata,
  },
};
