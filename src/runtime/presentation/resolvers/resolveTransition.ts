import type { ProjectPresentation } from "@/types/presentation";

import type { PresentationProfile } from "../profiles/types";

export function resolveTransition(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
) {
  return presentation.composition?.transitions ?? profile.transitions;
}
