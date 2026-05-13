import type { ComponentType } from "react";

import type { Project, ProjectShowcaseProps } from "@/types/projects";

//
// MODES
//

export type PresentationMode = "cinematic" | "editorial";

//
// CINEMATIC
//

export type CinematicBlockType =
  | "hero"
  | "showcase"
  | "systems"
  | "services"
  | "mobile";

export type CinematicPresentationBlock = {
  type: CinematicBlockType;

  id?: string;

  spacing?: string;

  variant?: string;
};

//
// EDITORIAL
//

export type EditorialBlockType = "hero" | "showcase" | "atmosphere" | "ui";

export type EditorialPresentationBlock = {
  type: EditorialBlockType;

  id?: string;

  spacing?: string;

  variant?: string;
};

//
// SHARED COMPOSITION
//

export type CompositionDensity = "tight" | "balanced" | "spacious";

export type CompositionRhythm = "editorial" | "cinematic" | "immersive";

export type PresentationComposition = {
  density?: CompositionDensity;

  rhythm?: CompositionRhythm;

  transitions?: "soft" | "cinematic";
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

//
// RENDERERS
//

export type PresentationRenderer = ComponentType<ProjectShowcaseProps>;

export type CinematicBlockRenderer = ComponentType<
  PresentationBlockRendererProps<CinematicPresentationBlock>
>;

export type EditorialBlockRenderer = ComponentType<
  PresentationBlockRendererProps<EditorialPresentationBlock>
>;

export type PresentationBlockRendererProps<
  TBlock = CinematicPresentationBlock | EditorialPresentationBlock,
> = {
  project: Project;

  block: TBlock;

  index: number;
};
