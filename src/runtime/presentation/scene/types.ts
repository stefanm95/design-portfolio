import type { SceneId } from "./definitions";

//
// ATMOSPHERE
//

export type SceneAtmosphere =
  | "immersive"
  | "editorial"
  | "technical"
  | "minimal"
  | "quiet";

//
// TONE
//

export type SceneTone =
  | "cinematic"
  | "reflective"
  | "showcase"
  | "systemic"
  | "structured"
  | "closing";

//
// ENVIRONMENT
//

export type EnvironmentalPressure = "soft" | "balanced" | "intense";

export type EnvironmentalRuntime = {
  cadenceSoftness: number;

  spacingPressure: number;

  breathingIntensity: number;

  atmosphereModulation: number;

  cinematicDepth: number;

  motionRestraint: number;
};

export type BreathingBias = "compressed" | "balanced" | "spacious";

//
// MOTION
//

export type MotionRestraint = "restrained" | "balanced" | "expressive";

//
// VISUAL DEPTH
//

export type OverlayDepth = "minimal" | "medium" | "deep";

//
// BASE SCENE
//

export type SceneDefinition = {
  id: SceneId;

  atmosphere: SceneAtmosphere;

  tone: SceneTone;

  environmentalPressure: EnvironmentalPressure;

  breathingBias: BreathingBias;

  motionRestraint: MotionRestraint;

  overlayDepth: OverlayDepth;
};

//
// RUNTIME SCENE
//

export type SceneRuntime = {
  definition: SceneDefinition;

  environment: EnvironmentalRuntime;
};
