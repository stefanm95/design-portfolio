export const glowSurface = {
  violet: `
    bg-[radial-gradient(circle,rgba(103,80,255,0.16),transparent_72%)]
  `,

  cyan: `
    bg-[radial-gradient(circle,rgba(0,255,200,0.12),transparent_72%)]
  `,
};

export const overlaySurface = {
  cinematic: `
    bg-gradient-to-b
    from-black/10
    via-transparent
    to-black/30
  `,
};

export const surfaces = {
  glass: {
    subtle: "bg-white/[0.02] backdrop-blur-sm",
  },

  rings: {
    subtle: "ring-1 ring-white/[0.08]",
  },

  borders: {
    subtle: "border border-white/10",
  },
  subtleLine: "h-px w-16 bg-white/10",

  subtleDivider: "h-px w-8 bg-white/10",

  editorialHorizontalLine: "h-px w-20 bg-white/12",

  editorialVerticalFade: `
    h-20
    w-px

    bg-linear-to-b
    from-white/10
    to-transparent
  `,
};
