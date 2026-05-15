import { presentationProfiles } from "../profiles";

import type { PresentationMode } from "@/types/presentation";

export function resolveProfile(mode: PresentationMode) {
  switch (mode) {
    case "cinematic":
      return presentationProfiles.immersive;

    case "editorial":
    default:
      return presentationProfiles.editorial;
  }
}
