import type { PresentationProfileVariant } from "@/runtime/presentation/profiles/contracts/types";
import { presentationProfiles } from "../realization/profiles";

export function resolvePresentationProfile(
  profile: PresentationProfileVariant = "immersive",
) {
  return presentationProfiles[profile];
}
