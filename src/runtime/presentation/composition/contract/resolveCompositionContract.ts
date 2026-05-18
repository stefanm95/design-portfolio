import {
  compositionRhythm,
  resolveCompositionReactivity,
} from "@/runtime/presentation/composition";
import type {
  CompositionContract,
  SceneIntensity,
} from "@/runtime/presentation/composition/contract";
import type { PresentationProfile } from "@/runtime/presentation/profiles";
import type { ProjectPresentation } from "@/types";

export function resolveCompositionContract(
  presentation: ProjectPresentation,
  profile: PresentationProfile,
  sceneIntensity?: SceneIntensity,
): CompositionContract {
  //
  // AUTHORED OVERRIDES
  //

  const density = presentation.composition?.density ?? profile.density;

  const rhythm = presentation.composition?.rhythm ?? profile.rhythm;

  const transition =
    presentation.composition?.transitions ?? profile.transitions;

  //
  // REACTIVITY
  //

  const reactivity = resolveCompositionReactivity(profile, sceneIntensity);

  //
  // CONTRACT
  //

  return {
    semantics: {
      overlays: profile.overlays,
    },

    orchestration: {
      density,

      rhythm,

      rhythmProfile: compositionRhythm[rhythm],

      transition,

      atmosphericDepth: profile.atmosphericDepth,

      environmentalPressure: profile.environmentalPressure,

      motionRestraint: profile.motionRestraint,

      sceneIntensity: sceneIntensity ?? profile.sceneIntensity ?? "balanced",

      reactivity,
    },
  };
}
