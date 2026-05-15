import type { ProjectPresentation } from "@/types/presentation";

import { compositionDensity } from "../composition";
import type { PresentationProfile } from "../profiles/types";

export function resolveDensity(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
) {
  const density = presentation.composition?.density ?? profile.density;

  return compositionDensity[density];
}
