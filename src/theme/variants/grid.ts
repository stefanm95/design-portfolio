import { gradients } from "../core/gradients";

export const grid = {
  background: gradients.grid.cyan,

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
