export const gradients = {
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

  dividers: {
    horizontal: `
      bg-linear-to-r
      from-transparent
      via-white/8
      to-transparent
    `,

    vertical: `
      bg-linear-to-b
      from-transparent
      via-white/10
      to-transparent
    `,

    atmospheric: `
      bg-linear-to-r
      from-transparent
      via-white/8
      to-transparent
    `,

    verticalAtmospheric: `
      bg-linear-to-b
      from-transparent
      via-white/8
      to-transparent
    `,

    verticalSubtle: `
      bg-linear-to-b
      from-transparent
      via-white/10
      to-transparent
    `,

    verticalLeadIn: `
      bg-linear-to-b
      from-white/10
      to-transparent
    `,

    columnGlow: `
      bg-linear-to
      from-transparent
      via-white/[0.035]
      to-transparent
    `,

    leadIn: `
      bg-linear-to-r
      from-white/20
      to-transparent
    `,

    activeOverlay: `
      bg-linear-to-t
      from-white/[0.03]
      to-transparent
    `,
  },

  atmosphere: {
    cyan: "radial-gradient(circle, rgba(0,180,255,0.16) 0%, transparent 72%)",

    gold: "radial-gradient(circle, rgba(212,175,122,0.10) 0%, transparent 72%)",

    vignette:
      "radial-gradient(circle at center, transparent 22%, rgba(0,0,0,0.78) 100%)",

    topFade: "linear-gradient(to bottom, rgba(0,0,0,0.76), transparent)",
  },

  grid: {
    cyan: `
      linear-gradient(to right, rgba(68,202,187,0.18) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(68,202,187,0.18) 1px, transparent 1px)
    `,

    monochrome: `
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,

    gold: `
      linear-gradient(to right, rgba(212,175,122,0.12) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(212,175,122,0.12) 1px, transparent 1px)
    `,
  },
};
