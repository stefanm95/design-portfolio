import type { PresentationProfile } from "../../profiles";

import type { CompositionBreathing } from "./types";

/**
 * Resolve composition breathing
 *
 * Orchestrates spatial breathing,
 * compositional pressure,
 * and visual pacing.
 */

export function resolveCompositionBreathing(
  profile: PresentationProfile,
): CompositionBreathing {
  const density = profile.orchestration.density;

  const transitions = profile.orchestration.transitions;

  //
  // SPACIOUS
  //

  if (density === "spacious") {
    return {
      breathingFactor: 1.2,

      pressure: "gentle",

      groupingIntensity: "spacious",
    };
  }

  //
  // TIGHT
  //

  if (density === "tight") {
    return {
      breathingFactor: 0.85,

      pressure: "intense",

      groupingIntensity: "tight",
    };
  }

  //
  // SOFT TRANSITIONS
  //

  if (transitions === "soft") {
    return {
      breathingFactor: 1,

      pressure: "gentle",

      groupingIntensity: "natural",
    };
  }

  //
  // DRAMATIC TRANSITIONS
  //

  if (transitions === "dramatic") {
    return {
      breathingFactor: 1.1,

      pressure: "intense",

      groupingIntensity: "spacious",
    };
  }

  //
  // DEFAULT
  //

  return {
    breathingFactor: 1,

    pressure: "balanced",

    groupingIntensity: "natural",
  };
}
