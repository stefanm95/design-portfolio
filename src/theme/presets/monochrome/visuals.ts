export const monochromeVisuals = {
  rightSide: {
    atmosphericVolume: {
      background: `
        linear-gradient(
          to bottom,
          rgba(255,255,255,0.04),
          rgba(180,180,180,0.03),
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
          rgba(255,255,255,0.08),
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
          rgba(255,255,255,0.06),
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
        rgba(255,255,255,0.05),
        rgba(180,180,180,0.03),
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
        rgba(255,255,255,0.08),
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
        rgba(255,255,255,0.06),
        transparent 72%
      )
    `,
    },
  },
};
