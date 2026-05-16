import type { PresentationProfile } from "../../profiles";
import type { CompositionPacing } from "./types";

/**
 * Resolve composition pacing based on profile and rhythm
 *
 * Orchestrates how reveals are grouped and distributed
 * through authored composition without restructuring layout
 */
export function resolveCompositionPacing(
  profile: PresentationProfile,
): CompositionPacing {
  const rhythm = profile.rhythm;
  const density = profile.density;

  // Editorial + Tight: compressed, tight grouping
  if (profile.atmosphere === "editorial" && density === "tight") {
    return {
      revealGrouping: "tight",
      spacingModifier: 0.9,
      staggerDistribution: "compressed",
    };
  }

  // Editorial + Balanced: balanced grouping
  if (profile.atmosphere === "editorial" && density === "balanced") {
    return {
      revealGrouping: "balanced",
      spacingModifier: 1.0,
      staggerDistribution: "natural",
    };
  }

  // Immersive + Spacious: relaxed, expanded grouping
  if (profile.atmosphere === "cinematic" && density === "spacious") {
    return {
      revealGrouping: "relaxed",
      spacingModifier: 1.15,
      staggerDistribution: "expanded",
    };
  }

  // Cinematic rhythm: natural pacing
  if (rhythm === "cinematic") {
    return {
      revealGrouping: "balanced",
      spacingModifier: 1.05,
      staggerDistribution: "natural",
    };
  }

  // Immersive rhythm: expanded pacing
  if (rhythm === "immersive") {
    return {
      revealGrouping: "relaxed",
      spacingModifier: 1.1,
      staggerDistribution: "expanded",
    };
  }

  // Editorial rhythm: tight pacing
  return {
    revealGrouping: "tight",
    spacingModifier: 0.95,
    staggerDistribution: "compressed",
  };
}
