import { useContext } from "react";

import { CompositionReactivityContext } from "./CompositionReactivityContext";

import type { CompositionReactivityContextType } from "@/runtime/presentation";

const neutralReactivity: CompositionReactivityContextType = {
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

export function useCompositionReactivity(): CompositionReactivityContextType {
  return useContext(CompositionReactivityContext) ?? neutralReactivity;
}
