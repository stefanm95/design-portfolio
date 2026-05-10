export const motionEase = {
  cinematic: [0.16, 1, 0.3, 1] as const,
};

export const motionDuration = {
  reveal: 1.4,
  slideReveal: 1.6,
  atmospheric: {
    slow: 24,
    medium: 20,
    fast: 14,
  },
};

export const motionViewport = {
  reveal: {
    once: true,
    amount: 0.15,
  },
};

export const motionReveal = {
  fadeUp: {
    initial: {
      opacity: 0,
      y: 18,
      filter: "blur(6px)",
    },

    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  },

  slideUp: {
    initial: {
      y: "110%",
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },
  },
};

export const motionScroll = {
  cinematic: {
    duration: 1.6,
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  },

  editorial: {
    duration: 1.2,
    lerp: 0.1,
    smoothWheel: true,
    wheelMultiplier: 1,
  },
};
