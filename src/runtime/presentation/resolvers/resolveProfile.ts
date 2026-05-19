import {
  resolvePresentationProfile,
  type PresentationProfileVariant,
} from "../profiles";

export function resolveProfile(profile: PresentationProfileVariant) {
  return resolvePresentationProfile(profile);
}
