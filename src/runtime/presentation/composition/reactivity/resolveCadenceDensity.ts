import type { PresentationProfile } from "../../profiles";

import type { CompositionDensityReactivity } from "./types";

/**
 * Resolve composition density reactivity
 *
 * Determines how compositional density
 * influences breathing and environmental pressure
 * without adaptive layout generation.
 */

export function resolveCompositionDensity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionDensityReactivity {
  const effectiveDensity = profile.density;

  const rhythm = profile.rhythm;

  //
  // BASE PRESSURE
  //

  let pressureModifier: number;

  //
  // DENSITY MODULATION
  //

  switch (effectiveDensity) {
    case "tight":
      pressureModifier = 1.2;
      break;

    case "spacious":
      pressureModifier = 0.8;
      break;

    default:
      pressureModifier = 1;
      break;
  }

  //
  // SCENE INTENSITY MODULATION
  //

  switch (sceneIntensity) {
    case "dramatic":
      pressureModifier *= 1.15;
      break;

    case "soft":
      pressureModifier *= 0.85;
      break;
  }

  //
  // RHYTHM MODULATION
  //

  switch (rhythm) {
    case "immersive":
      pressureModifier *= 0.9;
      break;

    case "editorial":
      pressureModifier *= 1.05;
      break;
  }

  //
  // CLAMP
  //

  pressureModifier = Math.max(0.7, Math.min(1.3, pressureModifier));

  return {
    effectiveDensity,

    /**
     * Minimal environments should now
     * be resolved through scene orchestration,
     * not profile identity.
     *
     * Density always influences breathing
     * at the composition layer.
     */

    influencesBreathing: true,

    pressureModifier,
  };
}
