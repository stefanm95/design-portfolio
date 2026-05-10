export const monochromeContactLinks = {
  surface: {
    base: "bg-white/[0.02]",

    border: "border-white/[0.06]",

    blur: "backdrop-blur-[10px]",
  },

  textures: {
    panel: "/textures/stone/photo-ground-texture-pattern.jpg",
  },

  atmosphere: {
    glow: `
      radial-gradient(
        circle,
        rgba(255,255,255,0.08),
        transparent 72%
      )
    `,
  },

  overlays: {
    textureFade: `
      linear-gradient(
        to left,
        rgba(0,0,0,0.18),
        rgba(0,0,0,0.52),
        transparent
      )
    `,

    reflection: `
      linear-gradient(
        120deg,
        transparent 10%,
        rgba(255,255,255,0.05) 45%,
        transparent 80%
      )
    `,
  },

  motion: {
    card: `
      transition-all
      duration-700
      ease-out

      hover:translate-x-1
    `,

    arrow: `
      transition-all
      duration-500

      group-hover:translate-x-1
    `,
  },

  typography: {
    label: "text-white/26",

    value: "text-white/72",

    meta: "text-white/28",

    hover: "group-hover:text-white",
  },

  indicators: {
    online: "bg-white/70",
  },
};
