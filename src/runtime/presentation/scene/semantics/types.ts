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

export type SceneSemantics = {
  atmosphere: SceneAtmosphere;

  tone: SceneTone;
};
