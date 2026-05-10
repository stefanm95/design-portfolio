import { monochromeColors } from "./colors";

export const monochromeEffects = {
  overlays: {
    base: "rgba(0,0,0,0.52)",

    cinematic: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.10),
        transparent,
        rgba(0,0,0,0.30)
      )
    `,

    vignette: `
      radial-gradient(
        circle at center,
        transparent 42%,
        rgba(0,0,0,0.34)
      )
    `,
  },

  reflections: {
    hero: `
      linear-gradient(
        120deg,
        transparent 18%,
        rgba(255,255,255,0.04) 50%,
        transparent 82%
      )
    `,

    opacity: "opacity-10",

    blend: "mix-blend-screen",
  },

  atmosphericFill: {
    scale: "scale-[1.08]",

    blur: "blur-md",

    opacity: "opacity-12",
  },

  blooms: {
    primary: `
      radial-gradient(
        circle at 30% 20%,
        rgba(255,255,255,0.045),
        transparent 42%
      )
    `,

    secondary: `
      radial-gradient(
        circle at 70% 80%,
        rgba(255,255,255,0.03),
        transparent 42%
      )
    `,

    projectHero: `
      linear-gradient(
        to top,
        rgba(255,255,255,0.03),
        transparent
      )
    `,
  },

  indicators: {
    livePing: "bg-white/40",

    liveDot: "bg-white/72",
  },

  shadows: {
    cinematic: `
      shadow-[0_40px_120px_rgba(0,0,0,0.55)]
    `,

    soft: `
      shadow-[0_20px_60px_rgba(0,0,0,0.32)]
    `,
  },

  glass: {
    border: "border-white/[0.08]",

    surface: "bg-white/[0.025]",

    highlight: "bg-white/[0.04]",
  },

  textures: {
    grain: monochromeColors.textures.grain,

    wall: monochromeColors.textures.wall,
  },
};
