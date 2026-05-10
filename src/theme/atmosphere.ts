export const atmosphere = {
  glow: {
    violet:
      "bg-[radial-gradient(circle,rgba(103,80,255,0.16),transparent_72%)]",

    cyan: "bg-[radial-gradient(circle,rgba(0,180,255,0.08),transparent_72%)]",
  },

  overlays: {
    cinematic: "bg-gradient-to-b from-black/10 via-transparent to-black/30",

    fadeBottom: "bg-linear-to-t from-black/30 to-transparent",
  },

  blur: {
    soft: "blur-sm",
    glass: "blur-[2px]",
    bloom: "blur-3xl",
  },
};

export const atmosphericText = {
  primary: "text-white/92",

  highContrast: "text-white/92",

  secondary: "text-white/72",

  narrative: "text-white/44",

  metadata: "text-white/24",

  subtle: "text-white/24",

  muted: "text-white/18",

  glow: `
    text-transparent
    bg-clip-text

    bg-[linear-gradient(
      180deg,
      rgba(240,244,248,0.98)_0%,
      rgba(210,220,228,0.92)_50%,
      rgba(214,195,161,0.88)_100%
    )]

    drop-shadow-[0_0_30px_rgba(255,255,255,0.03)]
  `,
};

export const atmosphereBackgrounds = {
  base: "#050505",
};

export const atmosphereGrid = {
  size: "120px 120px",

  overlayBounds: "inset-[-120px]",

  lineColor: "rgba(68,202,187,0.18)",

  opacity: {
    idle: 0.012,
    active: 0.02,
  },
};

export const atmosphereNoise = {
  texture: "/textures/noise.webp",

  opacity: "opacity-[0.018]",

  size: "320px 320px",

  zIndex: "z-[1]",
};
