export const obsidianGoldExperiencePanel = {
  surface: {
    base: "bg-[#120f0b]/72",

    border: "border-[#d4af37]/[0.08]",

    blur: "backdrop-blur-[20px]",

    shadow: `
      shadow-[0_18px_90px_rgba(0,0,0,0.58)]
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
        rgba(212,175,55,0.08),
        transparent 34%
      ),

      radial-gradient(
        circle at 80% 90%,
        rgba(120,92,44,0.05),
        transparent 36%
      )
    `,

    reflection: `
      linear-gradient(
        120deg,
        transparent 15%,
        rgba(255,240,210,0.08) 45%,
        transparent 75%
      )
    `,

    innerShade: `
      linear-gradient(
        180deg,
        rgba(255,255,255,0.015) 0%,
        transparent 40%,
        rgba(0,0,0,0.42) 100%
      )
    `,

    hoverBloom: `
      radial-gradient(
        circle at center,
        rgba(212,175,55,0.08),
        transparent 72%
      )
    `,
  },

  typography: {
    id: "text-[#8a6a34]/34",

    title: "text-[#f3dfb7]/82",

    titleHover: "group-hover:text-[#fff1d6]",

    description: "text-[#c2a06a]/44",
  },

  dividers: {
    edge: `
      linear-gradient(
        to bottom,
        transparent,
        rgba(212,175,55,0.08),
        transparent
      )
    `,
  },
};
