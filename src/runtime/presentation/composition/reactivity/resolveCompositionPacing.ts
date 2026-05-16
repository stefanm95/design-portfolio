import type { PresentationProfile } from "../../profiles";

import type { CompositionPacing } from "./types";

/**
 * Resolve composition pacing
 *
 * Determines authored reveal grouping
 * and stagger orchestration behavior.
 */

export function resolveCompositionPacing(
  profile: PresentationProfile,
): CompositionPacing {
  const rhythm = profile.rhythm;

  const density = profile.density;

  //
  // EDITORIAL + TIGHT
  //

  if (rhythm === "editorial" && density === "tight") {
    return {
      revealGrouping: "tight",

      spacingModifier: 0.9,

      staggerDistribution: "compressed",
    };
  }

  //
  // EDITORIAL + BALANCED
  //

  if (rhythm === "editorial" && density === "balanced") {
    return {
      revealGrouping: "balanced",

      spacingModifier: 1,

      staggerDistribution: "natural",
    };
  }

  //
  // IMMERSIVE + SPACIOUS
  //

  if (rhythm === "immersive" && density === "spacious") {
    return {
      revealGrouping: "relaxed",

      spacingModifier: 1.15,

      staggerDistribution: "expanded",
    };
  }

  //
  // CINEMATIC RHYTHM
  //

  if (rhythm === "cinematic") {
    return {
      revealGrouping: "balanced",

      spacingModifier: 1.05,

      staggerDistribution: "natural",
    };
  }

  //
  // IMMERSIVE RHYTHM
  //

  if (rhythm === "immersive") {
    return {
      revealGrouping: "relaxed",

      spacingModifier: 1.1,

      staggerDistribution: "expanded",
    };
  }

  //
  // DEFAULT EDITORIAL PACING
  //

  return {
    revealGrouping: "tight",

    spacingModifier: 0.95,

    staggerDistribution: "compressed",
  };
}
