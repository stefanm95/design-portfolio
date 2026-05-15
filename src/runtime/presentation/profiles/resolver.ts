import { presentationProfiles } from "./profiles";

import type { PresentationProfileVariant } from "./types";

export function resolvePresentationProfile(
  profile: PresentationProfileVariant = "immersive",
) {
  return presentationProfiles[profile];
}
