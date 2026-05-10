import { gridGradients } from "../core/gradients/gridGradients";

export const grid = {
  background: gridGradients.primary,

  size: "120px 120px",

  opacity: {
    idle: 0.012,
    active: 0.02,
  },

  motion: {
    duration: 40,
    ease: "linear" as const,
  },
};
