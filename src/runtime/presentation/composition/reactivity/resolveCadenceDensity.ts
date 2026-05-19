import type { PresentationProfile } from "../../profiles";

import type { CompositionDensityReactivity } from "./types";

/**
 * Resolve composition density reactivity
 */

export function resolveCompositionDensity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionDensityReactivity {
  const effectiveDensity = profile.orchestration.density;

  const rhythm = profile.orchestration.rhythm;

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
  // SCENE INTENSITY
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

    influencesBreathing: true,

    pressureModifier,
  };
}
