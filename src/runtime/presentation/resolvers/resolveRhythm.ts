import type { ProjectPresentation } from "@/types/projects";
import type { PresentationProfile } from "../profiles/types";

export function resolveRhythm(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
) {
  return presentation.composition?.rhythm ?? profile.rhythm;
}
