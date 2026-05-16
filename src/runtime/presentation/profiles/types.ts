import type {
  AtmosphericDepth,
  CompositionDensity,
  CompositionRhythm,
  EnvironmentalPressure,
  MotionRestraint,
  SceneIntensity,
  TransitionIntensity,
} from "@/runtime/presentation/composition";

export type PresentationProfileVariant =
  | "immersive"
  | "editorial"
  | "minimal"
  | "luxury"
  | "technical"
  | "experimental";

export type NavigationStyle = "immersive" | "minimal";

export type PresentationProfile = {
  //
  // COMPOSITION
  //

  density: CompositionDensity;

  rhythm: CompositionRhythm;

  //
  // ENVIRONMENT
  //

  atmosphericDepth: AtmosphericDepth;

  environmentalPressure: EnvironmentalPressure;

  //
  // MOTION
  //

  motionRestraint: MotionRestraint;

  transitions: TransitionIntensity;

  //
  // SCENE
  //

  sceneIntensity?: SceneIntensity;

  //
  // UI
  //

  overlays: boolean;

  navigation: NavigationStyle;
};
