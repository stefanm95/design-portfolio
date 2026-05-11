import { obsidianGoldColors } from "./colors";

export const obsidianGoldEffects = {
  overlays: {
    base: "rgba(0,0,0,0.34)",

    cinematic: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.08),
        rgba(8,6,4,0.10),
        rgba(0,0,0,0.28)
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
        rgba(255,240,210,0.03) 36%,
        rgba(212,175,55,0.05) 50%,
        rgba(120,92,44,0.03) 64%,
        transparent 82%
      )
    `,

    opacity: "opacity-12",

    blend: "mix-blend-screen",
  },

  atmosphericFill: {
    scale: "scale-[1.06]",

    blur: "blur-lg",

    opacity: "opacity-10",
  },

  blooms: {
    primary: `
      radial-gradient(
        circle at 30% 20%,
        rgba(212,175,55,0.05),
        transparent 48%
      )
    `,

    secondary: `
      radial-gradient(
        circle at 70% 80%,
        rgba(120,92,44,0.04),
        transparent 52%
      )
    `,

    projectHero: `
      linear-gradient(
        to top,
        rgba(212,175,55,0.03),
        transparent
      )
    `,
  },

  indicators: {
    livePing: "bg-[#d4af37]/30",

    liveDot: "bg-[#f3dfb7]/72",
  },

  shadows: {
    cinematic: `
      shadow-[0_40px_120px_rgba(0,0,0,0.52)]
    `,

    soft: `
      shadow-[0_18px_60px_rgba(0,0,0,0.34)]
    `,
  },

  glass: {
    border: "border-[#d4af37]/[0.08]",

    surface: "bg-[#120f0b]/[0.28]",

    highlight: "bg-[#fff1d6]/[0.03]",
  },

  textures: {
    grain: obsidianGoldColors.textures.grain,

    wall: obsidianGoldColors.textures.wall,
  },
};
