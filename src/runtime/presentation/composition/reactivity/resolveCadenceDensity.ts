import type { PresentationProfile } from "../../profiles";
import type { CompositionDensityReactivity } from "./types";

/**
 * Resolve composition density reactivity
 *
 * Determines whether and how density influences section breathing
 * and compositional pressure without adaptive layout generation
 */
export function resolveCompositionDensity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionDensityReactivity {
  const effectiveDensity = profile.density;
  const rhythm = profile.rhythm;

  // Calculate pressure modifier based on density and rhythm
  let pressureModifier = 1.0;

  if (effectiveDensity === "tight") {
    pressureModifier = 1.2; // Compressed composition feels tighter
  } else if (effectiveDensity === "spacious") {
    pressureModifier = 0.8; // Spacious composition feels more open
  }

  // Scene intensity modulates pressure
  if (sceneIntensity === "dramatic") {
    pressureModifier *= 1.15;
  } else if (sceneIntensity === "soft") {
    pressureModifier *= 0.85;
  }

  // Immersive rhythm further influences breathing
  if (rhythm === "immersive") {
    pressureModifier *= 0.9; // More open pacing
  }

  // Clamp pressure modifier
  pressureModifier = Math.max(0.7, Math.min(1.3, pressureModifier));

  return {
    effectiveDensity,
    influencesBreathing: profile.atmosphere !== "minimal",
    pressureModifier,
  };
}
