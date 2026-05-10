export const darkCyanExperiencePanel = {
  surface: {
    base: "bg-black/20",

    border: "border-white/[0.08]",

    blur: "backdrop-blur-[20px]",

    shadow: `
      shadow-[0_12px_60px_rgba(0,0,0,0.22)]
    `,
  },

  motion: {
    hover: `
      hover:-translate-y-2
      lg:hover:translate-x-6
      hover:scale-[1.015]
    `,

    stackFade: `
      lg:group-hover/stack:opacity-40
      hover:opacity-100!
    `,

    transition: `
      transition-all
      duration-1600
      ease-[cubic-bezier(0.22,1,0.36,1)]
    `,
  },

  overlays: {
    atmosphere: `
      radial-gradient(
        circle at 20% 10%,
        rgba(120,160,255,0.10),
        transparent 34%
      ),

      radial-gradient(
        circle at 80% 90%,
        rgba(255,140,90,0.08),
        transparent 36%
      )
    `,

    reflection: `
      linear-gradient(
        120deg,
        transparent 15%,
        rgba(255,255,255,0.12) 45%,
        transparent 75%
      )
    `,

    innerShade: `
      linear-gradient(
        180deg,
        rgba(255,255,255,0.04) 0%,
        transparent 40%,
        rgba(0,0,0,0.18) 100%
      )
    `,

    hoverBloom: `
      radial-gradient(
        circle at center,
        rgba(255,255,255,0.10),
        transparent 72%
      )
    `,
  },

  typography: {
    id: "text-white/32",

    title: "text-white/82",

    titleHover: "group-hover:text-white",

    description: "text-white/58",
  },

  dividers: {
    edge: `
      linear-gradient(
        to bottom,
        transparent,
        rgba(255,255,255,0.12),
        transparent
      )
    `,
  },
};
