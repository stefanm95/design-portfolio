import { presentationProfiles } from "./profiles";

import type { PresentationProfileId } from "./types";

export function resolvePresentationProfile(
  profile: PresentationProfileId = "immersive",
) {
  return presentationProfiles[profile];
}
