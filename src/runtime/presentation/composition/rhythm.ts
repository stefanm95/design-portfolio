import type { CompositionRhythm } from "../types";

export type RhythmProfile = {
  transitionDelay: number;

  revealOffset: number;

  stagger: number;

  sectionDelay: number;

  duration: number;
};

export const compositionRhythm: Record<CompositionRhythm, RhythmProfile> = {
  editorial: {
    transitionDelay: 0.08,

    revealOffset: 40,

    stagger: 0.04,

    sectionDelay: 0.12,

    duration: 0.8,
  },

  cinematic: {
    transitionDelay: 0.16,

    revealOffset: 80,

    stagger: 0.08,

    sectionDelay: 0.2,

    duration: 1.2,
  },

  immersive: {
    transitionDelay: 0.24,

    revealOffset: 120,

    stagger: 0.12,

    sectionDelay: 0.32,

    duration: 1.6,
  },
};
