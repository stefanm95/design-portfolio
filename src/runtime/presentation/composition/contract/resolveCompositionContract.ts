import {
  compositionRhythmScale,
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

  const density =
    presentation.composition?.density ?? profile.orchestration.density;

  const rhythm =
    presentation.composition?.rhythm ?? profile.orchestration.rhythm;

  const transition =
    presentation.composition?.transitions ?? profile.orchestration.transitions;

  //
  // REACTIVITY
  //

  const reactivity = resolveCompositionReactivity(profile, sceneIntensity);

  //
  // CONTRACT
  //

  return {
    semantics: {
      overlays: profile.semantics.overlays,

      navigation: profile.semantics.navigation,
    },

    orchestration: {
      density,

      rhythm,

      rhythmProfile: compositionRhythmScale[rhythm],

      transition,

      atmosphericDepth: profile.orchestration.atmosphericDepth,

      environmentalPressure: profile.orchestration.environmentalPressure,

      motionRestraint: profile.orchestration.motionRestraint,

      sceneIntensity:
        sceneIntensity ?? profile.orchestration.sceneIntensity ?? "balanced",

      reactivity,
    },
  };
}
