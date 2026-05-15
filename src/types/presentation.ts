export type PresentationMode = "cinematic" | "editorial";

//
// BLOCK TYPES
//

export type CinematicBlockType =
  | "hero"
  | "showcase"
  | "systems"
  | "services"
  | "mobile";

export type EditorialBlockType = "hero" | "showcase" | "atmosphere" | "ui";

export type PresentationBlockType = CinematicBlockType | EditorialBlockType;

//
// BLOCKS
//

export type CinematicPresentationBlock = {
  type: CinematicBlockType;

  id?: string;

  spacing?: string;

  variant?: string;
};

export type EditorialPresentationBlock = {
  type: EditorialBlockType;

  id?: string;

  spacing?: string;

  variant?: string;
};

export type PresentationBlock =
  | CinematicPresentationBlock
  | EditorialPresentationBlock;

//
// COMPOSITION
//

export type CompositionDensity = "tight" | "balanced" | "spacious";

export type CompositionRhythm = "editorial" | "cinematic" | "immersive";

export type PresentationTransition = "soft" | "balanced" | "dramatic";

export type PresentationComposition = {
  density?: CompositionDensity;

  rhythm?: CompositionRhythm;

  transitions?: PresentationTransition;
};

//
// PRESENTATIONS
//

export type CinematicPresentation = {
  mode: "cinematic";

  composition?: PresentationComposition;

  blocks: CinematicPresentationBlock[];
};

export type EditorialPresentation = {
  mode: "editorial";

  composition?: PresentationComposition;

  blocks: EditorialPresentationBlock[];
};

export type ProjectPresentation = CinematicPresentation | EditorialPresentation;
