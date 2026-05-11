export const darkCyanVisuals = {
  rightSide: {
    atmosphericVolume: {
      background: `
        linear-gradient(
          to bottom,
          rgba(0,180,255,0.14),
          rgba(0,120,180,0.10),
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
          rgba(120,240,255,0.10),
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
          rgba(0,220,255,0.10),
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
        rgba(0,180,255,0.14),
        rgba(0,255,220,0.10),
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
        rgba(120,240,255,0.10),
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
        rgba(0,220,255,0.12),
        transparent 72%
      )
    `,
    },
  },
};
