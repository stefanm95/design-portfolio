import type { CompositionDensity, CompositionRhythm } from "./types";

export const compositionDensity: Record<CompositionDensity, string> = {
  tight: "space-y-24 md:space-y-32",
  balanced: "space-y-32 md:space-y-40",
  spacious: "space-y-40 md:space-y-56 xl:space-y-64",
};

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
