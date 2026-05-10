export const darkCyanContactLinks = {
  surface: {
    base: "bg-black/20",

    border: "border-white/[0.08]",

    blur: "backdrop-blur-[8px]",
  },

  textures: {
    panel: "/textures/glass/fiona-wZuSilr-mTw-unsplash.jpg",
  },

  atmosphere: {
    glow: `
      radial-gradient(
        circle,
        rgba(90,180,255,0.22),
        transparent 72%
      )
    `,
  },

  overlays: {
    textureFade: `
      linear-gradient(
        to left,
        rgba(0,0,0,0.08),
        rgba(0,0,0,0.42),
        transparent
      )
    `,

    reflection: `
      linear-gradient(
        120deg,
        transparent 10%,
        rgba(255,255,255,0.08) 45%,
        transparent 80%
      )
    `,
  },

  motion: {
    card: `
      transition-all
      duration-700
      ease-out

      hover:translate-x-2
    `,

    arrow: `
      transition-all
      duration-500

      group-hover:translate-x-1
    `,
  },

  typography: {
    label: "text-white/38",

    value: "text-white/84",

    meta: "text-white/32",

    hover: "group-hover:text-white",
  },

  indicators: {
    online: "bg-emerald-400",
  },
};
