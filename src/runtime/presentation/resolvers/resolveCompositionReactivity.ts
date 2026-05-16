import { resolveCompositionReactivity as getCompositionReactivity } from "../composition/reactivity";

import type { PresentationProfile } from "../profiles/types";

/**
 * Resolve composition reactivity for runtime orchestration
 *
 * Determines how composition should subtly react to:
 * - profile (immersive, editorial, minimal)
 * - scene intensity
 *
 * Returns composition influence without generating layouts
 * or duplicating orchestration
 */
export function resolveCompositionReactivity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
) {
  return getCompositionReactivity(profile, sceneIntensity);
}
