export const motion = {
  easing: {},
  duration: {},
  reveal: {},
  float: {},
};

export const motionPresets = {
  fadeIn: {
    initial: {
      opacity: 0,
      y: 18,
      filter: "blur(6px)",
    },

    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },

  reveal: {
    initial: {
      y: "110%",
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },

    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },

  gridFloat: {
    duration: 40,
    repeat: Infinity,
    ease: "linear" as const,
  },

  atmosphere: {
    slowFloat: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },

    glassFloat: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },

    subtleShift: {
      duration: 24,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },

    bloomPulse: {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },

  smoothScroll: {
    lerp: 0.08,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
  },
};
