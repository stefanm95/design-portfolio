import type {
  CompositionDensity,
  CompositionRhythm,
  SceneIntensity,
  TransitionIntensity,
  AtmosphericDepth,
  EnvironmentalPressure,
  MotionRestraint,
} from "./types";

import type { ProjectPresentation } from "@/types/presentation";

import type { PresentationProfile } from "../profiles/types";

import { compositionDensity } from "./density";

import { compositionRhythm, type RhythmProfile } from "./rhythm";

import {
  resolveCompositionReactivity,
  type CompositionReactivityContextType,
} from "./reactivity";

export type CompositionContract = {
  //
  // COMPOSITION
  //

  density: CompositionDensity;

  densityClass: string;

  rhythm: CompositionRhythm;

  rhythmProfile: RhythmProfile;

  transition: TransitionIntensity;

  //
  // ENVIRONMENT
  //

  atmosphericDepth: AtmosphericDepth;

  environmentalPressure: EnvironmentalPressure;

  //
  // MOTION
  //

  motionRestraint: MotionRestraint;

  //
  // UI
  //

  overlays: boolean;

  //
  // SCENE
  //

  sceneIntensity: SceneIntensity;

  //
  // RUNTIME REACTIVITY
  //

  reactivity: CompositionReactivityContextType;
};

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
    //
    // COMPOSITION
    //

    density,

    densityClass: compositionDensity[density],

    rhythm,

    rhythmProfile: compositionRhythm[rhythm],

    transition,

    //
    // ENVIRONMENT
    //

    atmosphericDepth: profile.atmosphericDepth,

    environmentalPressure: profile.environmentalPressure,

    //
    // MOTION
    //

    motionRestraint: profile.motionRestraint,

    //
    // UI
    //

    overlays: profile.overlays,

    //
    // SCENE
    //

    sceneIntensity: sceneIntensity ?? profile.sceneIntensity ?? "balanced",

    //
    // RUNTIME
    //

    reactivity,
  };
}
