export const obsidianGoldContactLinks = {
  surface: {
    base: "bg-[#120f0b]/72",

    border: "border-[#d4af37]/[0.08]",

    blur: "backdrop-blur-[14px]",
  },

  textures: {
    panel: "/textures/obsidianGold/obsidian/pexels-alfomedeiros.jpg",
  },

  atmosphere: {
    glow: `
      radial-gradient(
        circle,
        rgba(212,175,55,0.12),
        transparent 72%
      )
    `,
  },

  overlays: {
    textureFade: `
      linear-gradient(
        to left,
        rgba(0,0,0,0.22),
        rgba(0,0,0,0.66),
        transparent
      )
    `,

    reflection: `
      linear-gradient(
        120deg,
        transparent 10%,
        rgba(255,240,210,0.06) 45%,
        transparent 80%
      )
    `,
  },

  motion: {
    card: `
      transition-all
      duration-700
      ease-out

      hover:translate-x-1
    `,

    arrow: `
      transition-all
      duration-500

      group-hover:translate-x-1
    `,
  },

  typography: {
    label: "text-[#c8a96b]/34",

    value: "text-[#f3e2bf]/82",

    meta: "text-[#9a7a4c]/34",

    hover: "group-hover:text-[#f8e7c8]",
  },

  indicators: {
    online: "bg-[#d4af37]/72",
  },
};
