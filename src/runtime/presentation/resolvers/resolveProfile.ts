import { resolvePresentationProfile } from "../profiles";

import type { PresentationProfileVariant } from "../profiles/types";

export function resolveProfile(profile: PresentationProfileVariant) {
  return resolvePresentationProfile(profile);
}
