import type { PresentationProfile } from "@/runtime/presentation/profiles/contracts/types";

export function resolveNavigation(profile: PresentationProfile) {
  return profile.semantics.navigation;
}
