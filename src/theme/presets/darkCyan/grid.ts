import { darkCyanGradients } from "./gradients";

export const darkCyanGrid = {
  background: darkCyanGradients.grid.primary,

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
