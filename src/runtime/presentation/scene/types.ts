export type SceneAtmosphere =
  | "immersive"
  | "editorial"
  | "technical"
  | "minimal"
  | "quiet";

export type SceneTone =
  | "cinematic"
  | "reflective"
  | "showcase"
  | "systemic"
  | "structured"
  | "closing";

export type EnvironmentalPressure = "soft" | "balanced" | "intense";

export type BreathingBias = "compressed" | "balanced" | "spacious";

export type MotionRestraint = "restrained" | "balanced" | "expressive";

export type OverlayDepth = "minimal" | "medium" | "deep";

export type SceneDefinition = {
  id: string;

  atmosphere: SceneAtmosphere;

  tone: SceneTone;

  environmentalPressure: EnvironmentalPressure;

  breathingBias: BreathingBias;

  motionRestraint: MotionRestraint;

  overlayDepth: OverlayDepth;
};
