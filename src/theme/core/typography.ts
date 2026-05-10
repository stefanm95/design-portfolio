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

  glow: `
    drop-shadow-[0_0_30px_rgba(180,220,255,0.05)]
  `,

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
    primary: "text-[#f5f3ef]",

    soft: "text-white/92",

    muted: "text-white/72",
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
    primary: "text-white/34",

    muted: "text-white/24",

    subtle: "text-white/18",
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
    primary: "text-[#a1a1a1]",

    accent: "text-white/88",

    narrative: "text-white/44",

    secondary: "text-white/58",

    muted: "text-white/34",

    subtle: "text-white/24",
  },
};
