export const darkCyanEffects = {
  overlays: {
    base: "rgba(0,0,0,0.36)",

    cinematic: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.10),
        transparent 45%,
        rgba(0,0,0,0.30)
      )
    `,

    vignette: `
      radial-gradient(
        circle at center,
        transparent 45%,
        rgba(0,0,0,0.22)
      )
    `,
  },

  reflections: {
    opacity: "opacity-20",

    blend: "mix-blend-screen",

    hero: `
      linear-gradient(
        120deg,
        transparent 20%,
        rgba(255,255,255,0.06) 50%,
        transparent 80%
      )
    `,
  },

  atmosphericFill: {
    opacity: "opacity-20",

    blur: "blur-sm",

    scale: "scale-110",
  },

  blooms: {
    projectHero: `
      linear-gradient(
        to top,
        rgba(139,92,246,0.05),
        transparent
      )
    `,

    showcasePrimary: `
      radial-gradient(
        circle at 72% 80%,
        rgba(103,80,255,0.16),
        transparent 40%
      )
    `,

    showcaseSecondary: `
      radial-gradient(
        circle at 20% 10%,
        rgba(0,180,255,0.08),
        transparent 38%
      )
    `,
  },

  indicators: {
    livePing: "bg-emerald-400/70",

    liveDot: "bg-emerald-300",
  },

  shadows: {
    cinematic: `
      shadow-[0_40px_120px_rgba(0,0,0,0.45)]
    `,

    soft: `
      shadow-[0_20px_60px_rgba(0,0,0,0.28)]
    `,
  },

  glass: {
    border: "border-white/[0.08]",

    surface: "bg-white/[0.025]",

    highlight: "bg-white/[0.04]",
  },
};
