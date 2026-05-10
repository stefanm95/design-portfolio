export const monochromeShowcase = {
  overlays: {
    cinematic: `
      bg-linear-to-t
      from-black/62
      via-black/12
      to-black/8
    `,
  },

  blooms: {
    primary: `
      radial-gradient(
        circle at 72% 80%,
        rgba(255,255,255,0.06),
        transparent 42%
      )
    `,

    secondary: `
      radial-gradient(
        circle at 20% 10%,
        rgba(255,255,255,0.03),
        transparent 38%
      )
    `,
  },

  image: {
    hoverScale: "group-hover:scale-[0.985]",

    transition: `
      transition-transform
      duration-[2600ms]
      ease-out
    `,
  },

  atmosphere: {
    blur: "blur-md",

    opacity: "opacity-60",
  },

  surfaces: {
    base: "bg-black/36",

    border: "border-white/[0.06]",
  },
};
