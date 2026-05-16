import type { PresentationProfile } from "../../profiles";
import { resolveCompositionDensity } from "./resolveCadenceDensity";
import { resolveCompositionBreathing } from "./resolveCompositionBreathing";
import { resolveCompositionPacing } from "./resolveCompositionPacing";
import type { CompositionReactivityContextType } from "./types";

/**
 * Resolve complete composition reactivity context
 *
 * Orchestrates all composition reactivity layers while maintaining
 * authored composition integrity and runtime semantic ownership
 */
export function resolveCompositionReactivity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionReactivityContextType {
  const pacing = resolveCompositionPacing(profile);
  const breathing = resolveCompositionBreathing(profile);
  const density = resolveCompositionDensity(profile, sceneIntensity);

  // Calculate combined spacing influence
  // Breathing factor influences how much spacing is modulated
  let spacingInfluence = breathing.breathingFactor;
  spacingInfluence *= pacing.spacingModifier;
  spacingInfluence *= density.pressureModifier;

  // Clamp spacing influence to preserve authored composition integrity
  spacingInfluence = Math.max(0.85, Math.min(1.25, spacingInfluence));

  // Calculate reveal timing influence
  // Based on stagger distribution and breathing
  let revealTimeModifier = 1.0;

  if (pacing.staggerDistribution === "compressed") {
    revealTimeModifier *= 0.95;
  } else if (pacing.staggerDistribution === "expanded") {
    revealTimeModifier *= 1.1;
  }

  if (breathing.pressure === "intense") {
    revealTimeModifier *= 0.9;
  } else if (breathing.pressure === "gentle") {
    revealTimeModifier *= 1.05;
  }

  revealTimeModifier = Math.max(0.85, Math.min(1.2, revealTimeModifier));

  return {
    pacing,
    breathing,
    density,
    spacingInfluence,
    revealTimeModifier,
  };
}
