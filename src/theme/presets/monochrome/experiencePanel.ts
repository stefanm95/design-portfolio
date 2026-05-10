export const monochromeExperiencePanel = {
  surface: {
    base: "bg-white/[0.02]",

    border: "border-white/[0.06]",

    blur: "backdrop-blur-[18px]",

    shadow: `
      shadow-[0_12px_60px_rgba(0,0,0,0.42)]
    `,
  },

  motion: {
    hover: `
      hover:-translate-y-1
      hover:scale-[1.01]
    `,

    stackFade: `
      lg:group-hover/stack:opacity-30
      hover:opacity-100!
    `,

    transition: `
      transition-all
      duration-[1800ms]
      ease-out
    `,
  },

  overlays: {
    atmosphere: `
      radial-gradient(
        circle at 20% 10%,
        rgba(255,255,255,0.05),
        transparent 34%
      ),

      radial-gradient(
        circle at 80% 90%,
        rgba(255,255,255,0.03),
        transparent 36%
      )
    `,

    reflection: `
      linear-gradient(
        120deg,
        transparent 15%,
        rgba(255,255,255,0.08) 45%,
        transparent 75%
      )
    `,

    innerShade: `
      linear-gradient(
        180deg,
        rgba(255,255,255,0.02) 0%,
        transparent 40%,
        rgba(0,0,0,0.28) 100%
      )
    `,

    hoverBloom: `
      radial-gradient(
        circle at center,
        rgba(255,255,255,0.06),
        transparent 72%
      )
    `,
  },

  typography: {
    id: "text-white/24",

    title: "text-white/72",

    titleHover: "group-hover:text-white",

    description: "text-white/42",
  },

  dividers: {
    edge: `
      linear-gradient(
        to bottom,
        transparent,
        rgba(255,255,255,0.08),
        transparent
      )
    `,
  },
};
