import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import type {
  CompositionDensity,
  CompositionRhythm,
  TransitionIntensity,
} from "@/runtime/presentation/composition";

//
// MODES
//

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

export type PresentationComposition = {
  profile?: PresentationProfileVariant;

  density?: CompositionDensity;

  rhythm?: CompositionRhythm;

  transitions?: TransitionIntensity;
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
