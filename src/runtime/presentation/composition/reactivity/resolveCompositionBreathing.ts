import type { PresentationProfile } from "../../profiles";
import type { CompositionBreathing } from "./types";

/**
 * Resolve composition breathing based on profile and density
 *
 * Orchestrates spatial breathing, compositional pressure,
 * and visual pacing without generating adaptive layouts
 */
export function resolveCompositionBreathing(
  profile: PresentationProfile,
): CompositionBreathing {
  const density = profile.density;
  //   const atmosphere = profile.atmosphere;
  const transitions = profile.transitions;

  // Spacious: high breathing factor, gentle pressure
  if (density === "spacious") {
    return {
      breathingFactor: 1.2,
      pressure: "gentle",
      groupingIntensity: "spacious",
    };
  }

  // Tight: low breathing factor, intense pressure
  if (density === "tight") {
    return {
      breathingFactor: 0.85,
      pressure: "intense",
      groupingIntensity: "tight",
    };
  }

  // Balanced: natural breathing factor
  // Soft transitions: gentle pressure
  if (transitions === "soft") {
    return {
      breathingFactor: 1.0,
      pressure: "gentle",
      groupingIntensity: "natural",
    };
  }

  // Dramatic transitions: intense pressure
  if (transitions === "dramatic") {
    return {
      breathingFactor: 1.1,
      pressure: "intense",
      groupingIntensity: "spacious",
    };
  }

  // Default: balanced breathing
  return {
    breathingFactor: 1.0,
    pressure: "balanced",
    groupingIntensity: "natural",
  };
}
