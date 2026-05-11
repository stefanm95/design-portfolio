export const obsidianGoldShowcase = {
  overlays: {
    cinematic: `
      bg-linear-to-t
      from-black/38
      via-black/8
      to-[#2b2112]/10
    `,
  },

  blooms: {
    primary: `
      radial-gradient(
        circle at 72% 80%,
        rgba(212,175,55,0.08),
        transparent 46%
      )
    `,

    secondary: `
      radial-gradient(
        circle at 20% 10%,
        rgba(160,120,58,0.04),
        transparent 42%
      )
    `,
  },

  image: {
    hoverScale: "group-hover:scale-[0.992]",

    transition: `
      transition-transform
      duration-[2600ms]
      ease-out
    `,
  },

  atmosphere: {
    blur: "blur-[2px]",

    opacity: "opacity-40",
  },

  surfaces: {
    base: "bg-black/18",

    border: "border-[#d4af37]/[0.06]",
  },
};
