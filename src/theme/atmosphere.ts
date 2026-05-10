export const atmosphereMotion = {
  slowFloat: {
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },

  glassFloat: {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },

  subtleShift: {
    duration: 24,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },

  bloomPulse: {
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const atmosphereGradients = {
  verticalSpine: "bg-linear-to-b from-transparent via-white/10 to-transparent",

  verticalLight:
    "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)",

  cyanBloom: "radial-gradient(circle, rgba(0,180,255,0.08), transparent 72%)",
};

export const atmosphereTextures = {
  primaryGlass: "/textures/glass/fabio-troyli-stzrfbcWPP8-unsplash.webp",

  secondaryGlass: "/textures/glass/zhiqiang-wang-tMgP-wH4ux0-unsplash.webp",
};

export const atmosphereBlur = {
  soft: "blur-sm",
  glass: "blur-[2px]",
  texture: "blur-[1px]",
};

export const atmosphereBlend = {
  screen: "screen" as const,
};

export const atmosphereOpacity = {
  texture: "opacity-[0.05]",
};

export const atmosphereLayout = {
  spine: "left-[68%]",

  primaryVolume: {
    position: "left-[62%] top-[-10%]",
    size: "h-[140vh] w-[32vw]",
  },

  primaryGlass: {
    position: "left-[72%] top-[-6%]",
    size: "h-[128vh] w-[14vw]",
  },

  secondaryGlass: {
    position: "left-[82%] top-[10%]",
    size: "h-[70vh] w-[6vw]",
  },

  texture: {
    position: "left-[66%] top-[18%]",
    size: "h-[42vh] w-[10vw]",
  },

  bloom: {
    position: "left-[60%] bottom-[-20%]",
    size: "h-[34vw] w-[34vw]",
  },
};

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
