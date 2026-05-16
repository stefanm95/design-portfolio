import type {
  CompositionDensity,
  CompositionRhythm,
  PresentationTransition,
  ProjectPresentation,
} from "@/types/presentation";

import type { PresentationProfile } from "../profiles/types";

import { compositionDensity } from "./density";
import { compositionRhythm, type RhythmProfile } from "./rhythm";
import {
  resolveCompositionReactivity,
  type CompositionReactivityContextType,
} from "./reactivity";

export type CompositionContract = {
  density: CompositionDensity;

  densityClass: string;

  rhythm: CompositionRhythm;

  rhythmProfile: RhythmProfile;

  transition: PresentationTransition;

  atmosphere: PresentationProfile["atmosphere"];

  overlays: boolean;

  sceneIntensity: NonNullable<PresentationProfile["sceneIntensity"]>;

  /**
   * Runtime composition reactivity context
   * Determines subtle composition influence without layout generation
   */
  reactivity: CompositionReactivityContextType;
};

export function resolveCompositionContract(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionContract {
  const density = presentation.composition?.density ?? profile.density;

  const rhythm = presentation.composition?.rhythm ?? profile.rhythm;

  const transition =
    presentation.composition?.transitions ?? profile.transitions;

  const reactivity = resolveCompositionReactivity(profile, sceneIntensity);

  return {
    density,
    densityClass: compositionDensity[density],
    rhythm,
    rhythmProfile: compositionRhythm[rhythm],
    transition,
    atmosphere: profile.atmosphere,
    overlays: profile.overlays,
    sceneIntensity:
      sceneIntensity ?? profile.sceneIntensity ?? ("balanced" as const),
    reactivity,
  };
}
