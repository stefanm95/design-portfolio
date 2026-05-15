import type {
  CompositionDensity,
  CompositionRhythm,
  PresentationTransition,
  ProjectPresentation,
} from "@/types/presentation";

import type { PresentationProfile } from "../profiles/types";

import { compositionDensity } from "./density";
import { compositionRhythm, type RhythmProfile } from "./rhythm";

export type CompositionContract = {
  density: CompositionDensity;

  densityClass: string;

  rhythm: CompositionRhythm;

  rhythmProfile: RhythmProfile;

  transition: PresentationTransition;

  atmosphere: PresentationProfile["atmosphere"];

  overlays: boolean;

  sceneIntensity: NonNullable<PresentationProfile["sceneIntensity"]>;
};

export function resolveCompositionContract(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
): CompositionContract {
  const density = presentation.composition?.density ?? profile.density;

  const rhythm = presentation.composition?.rhythm ?? profile.rhythm;

  const transition =
    presentation.composition?.transitions ?? profile.transitions;

  return {
    density,
    densityClass: compositionDensity[density],
    rhythm,
    rhythmProfile: compositionRhythm[rhythm],
    transition,
    atmosphere: profile.atmosphere,
    overlays: profile.overlays,
    sceneIntensity: profile.sceneIntensity ?? "balanced",
  };
}
