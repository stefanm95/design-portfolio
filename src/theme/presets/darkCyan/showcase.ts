export const darkCyanShowcase = {
  overlays: {
    cinematic: `
      bg-linear-to-t
      from-black/50
      via-transparent
      to-black/10
    `,
  },

  blooms: {
    primary: `
      radial-gradient(
        circle at 72% 80%,
        rgba(103,80,255,0.16),
        transparent 40%
      )
    `,
  },

  image: {
    hoverScale: "group-hover:scale-[0.98]",

    transition: `
      transition-transform
      duration-[2200ms]
      ease-out
    `,
  },
};
