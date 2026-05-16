import type { CompositionReactivityContextType } from "../reactivity";

export const neutralCompositionReactivity: CompositionReactivityContextType = {
  pacing: {
    revealGrouping: "balanced",
    spacingModifier: 1.0,
    staggerDistribution: "natural",
  },

  breathing: {
    breathingFactor: 1.0,
    pressure: "balanced",
    groupingIntensity: "natural",
  },

  density: {
    effectiveDensity: "balanced",
    influencesBreathing: true,
    pressureModifier: 1.0,
  },

  spacingInfluence: 1.0,

  revealTimeModifier: 1.0,
};
