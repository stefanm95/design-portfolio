import type { PresentationBlock } from "@/types";

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

export type CompositionSemanticMap<TBlock extends PresentationBlock> = {
  [K in TBlock["type"]]: CompositionSemantic;
};
