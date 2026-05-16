export type CompositionSemantic =
  | "hero"
  | "intro"
  | "transition"
  | "showcase"
  | "gallery"
  | "detail"
  | "immersive"
  | "meta"
  | "closing"
  | "section"
  | "feature";

export type CompositionSemanticMap = Record<string, CompositionSemantic>;
