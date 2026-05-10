import { ui } from "./colors";
import { gradients } from "./gradients";

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
    primary: gradients.display.primary,

    secondary: gradients.display.secondary,

    tertiary: gradients.display.tertiary,
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
