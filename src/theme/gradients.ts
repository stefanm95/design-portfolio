export const gradients = {
  spine: {
    vertical: "bg-linear-to-b from-transparent via-white/10 to-transparent",
  },

  atmospheric: {
    cyan: "bg-[radial-gradient(circle,rgba(0,180,255,0.08),transparent_72%)]",

    violet:
      "bg-[radial-gradient(circle,rgba(103,80,255,0.16),transparent_72%)]",

    gold: "bg-[radial-gradient(circle,rgba(212,175,122,0.08),transparent_72%)]",
  },

  atmosphericRaw: {
    cyan: "radial-gradient(circle, rgba(0,180,255,0.10) 0%, transparent 72%)",

    gold: "radial-gradient(circle, rgba(212,175,122,0.08) 0%, transparent 72%)",
  },

  overlays: {
    cinematic: "bg-gradient-to-b from-black/10 via-transparent to-black/30",

    fadeBottom: "bg-linear-to-t from-black/30 to-transparent",

    topFade: "bg-linear-to-b from-black/72 to-transparent",
  },

  lighting: {
    verticalLight:
      "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)",

    vignette:
      "radial-gradient(circle at center, transparent 28%, rgba(0,0,0,0.68) 100%)",
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

  grid: {
    lines: `
      linear-gradient(
        to right,
        rgba(68,202,187,0.18) 1px,
        transparent 1px
      ),

      linear-gradient(
        to bottom,
        rgba(68,202,187,0.18) 1px,
        transparent 1px
      )
    `,
  },
};
