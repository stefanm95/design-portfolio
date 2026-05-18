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

//
// SEMANTICS
//

export type ProfileSemantics = {
  overlays: boolean;

  navigation: NavigationStyle;
};

//
// ORCHESTRATION
//

export type ProfileOrchestration = {
  density: CompositionDensity;

  rhythm: CompositionRhythm;

  atmosphericDepth: AtmosphericDepth;

  environmentalPressure: EnvironmentalPressure;

  motionRestraint: MotionRestraint;

  transitions: TransitionIntensity;

  sceneIntensity?: SceneIntensity;
};

//
// PROFILE
//

export type PresentationProfile = {
  semantics: ProfileSemantics;

  orchestration: ProfileOrchestration;
};
