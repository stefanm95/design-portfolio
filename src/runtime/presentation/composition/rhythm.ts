import type { CompositionRhythm } from "../types";

export const compositionRhythm: Record<
  CompositionRhythm,
  {
    transitionDelay: number;

    revealOffset: number;
  }
> = {
  editorial: {
    transitionDelay: 0.08,
    revealOffset: 40,
  },

  cinematic: {
    transitionDelay: 0.16,
    revealOffset: 80,
  },

  immersive: {
    transitionDelay: 0.24,
    revealOffset: 120,
  },
};
