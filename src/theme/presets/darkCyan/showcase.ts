export const darkCyanShowcase = {
  overlays: {
    cinematic: `
      bg-linear-to-t
      from-black/60
      via-black/14
      to-cyan-950/10
    `,
  },

  blooms: {
    primary: `
      radial-gradient(
        circle at 72% 80%,
        rgba(78,210,255,0.12),
        transparent 42%
      )
    `,

    secondary: `
      radial-gradient(
        circle at 20% 10%,
        rgba(120,255,220,0.05),
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
    blur: "blur-lg",

    opacity: "opacity-70",
  },

  surfaces: {
    base: "bg-black/40",

    border: "border-cyan-100/[0.08]",
  },
};
