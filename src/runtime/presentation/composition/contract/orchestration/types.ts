import type {
  CompositionRhythm,
  RhythmProfile,
} from "@/runtime/presentation/composition/orchestration";
import type { CompositionReactivityContextType } from "@/runtime/presentation/composition/reactivity";
import type {
  AtmosphericDepth,
  CompositionDensity,
  EnvironmentalPressure,
  MotionRestraint,
  SceneIntensity,
  TransitionIntensity,
} from "./types.shared";

export type OrchestrationContract = {
  //
  // COMPOSITION
  //

  density: CompositionDensity;

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
  // SCENE
  //

  sceneIntensity: SceneIntensity;

  //
  // REACTIVITY
  //

  reactivity: CompositionReactivityContextType;
};
