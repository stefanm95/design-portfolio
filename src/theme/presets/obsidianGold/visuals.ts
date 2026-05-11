export const obsidianGoldVisuals = {
  rightSide: {
    atmosphericVolume: {
      background: `
        linear-gradient(
          to bottom,
          rgba(32,24,18,0.42),
          rgba(82,58,24,0.18),
          transparent
        )
      `,
    },

    glassRefraction: {
      image: "/textures/glass/fabio-troyli-stzrfbcWPP8-unsplash.webp",
    },

    secondaryRefraction: {
      background: `
        linear-gradient(
          to bottom,
          rgba(212,175,55,0.10),
          transparent
        )
      `,
    },

    textureLayer: {
      image: "/textures/glass/zhiqiang-wang-tMgP-wH4ux0-unsplash.webp",
    },

    bottomBloom: {
      background: `
        radial-gradient(
          circle,
          rgba(212,175,55,0.10),
          transparent 72%
        )
      `,
    },
  },

  leftSide: {
    atmosphericVolume: {
      background: `
        linear-gradient(
          to bottom,
          rgba(48,34,18,0.34),
          rgba(120,84,28,0.18),
          transparent
        )
      `,
    },

    glassRefraction: {
      image:
        "/textures/glass/ambitious-studio-rick-barrett-jNOUEeCVKe4-unsplash.jpg",
    },

    secondaryRefraction: {
      background: `
        linear-gradient(
          to bottom,
          rgba(212,175,55,0.12),
          transparent
        )
      `,
    },

    textureLayer: {
      image: "/textures/stone/bekky-bekks-79k1zS6SnzY-unsplash.jpg",
    },

    bottomBloom: {
      background: `
        radial-gradient(
          circle,
          rgba(212,175,55,0.14),
          transparent 72%
        )
      `,
    },
  },
};
