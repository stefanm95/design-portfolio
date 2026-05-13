import type { ComponentType } from "react";

//
// MEDIA
//

export type ProjectMedia = {
  hero?: string[];

  atmosphere?: string[];

  editorial?: string[];

  story?: string[];

  ui?: string[];

  showcase?: string[];

  showcaseMobile?: string[];

  systems?: string[];

  services?: string[];

  mobile?: string[];
};

//
// META
//

export type ProjectMetric = {
  label: string;

  value: string;
};

export type ProjectStatus = "live" | "private" | "concept";

export type ProjectAccent = "cyan" | "gold" | "violet" | "amber";

//
// PRESENTATION
//

export type PresentationMode = "cinematic" | "editorial";

//
// CINEMATIC PRESENTATION
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

export type CinematicPresentation = {
  mode: "cinematic";

  composition?: PresentationComposition;

  blocks: CinematicPresentationBlock[];
};

//
// EDITORIAL PRESENTATION
//

export type EditorialBlockType = "hero" | "showcase" | "atmosphere" | "ui";

export type EditorialPresentationBlock = {
  type: EditorialBlockType;

  id?: string;

  spacing?: string;

  variant?: string;
};

export type EditorialPresentation = {
  mode: "editorial";

  composition?: PresentationComposition;

  blocks: EditorialPresentationBlock[];
};

//
// SHARED PRESENTATION
//

export type PresentationBlockType = CinematicBlockType | EditorialBlockType;

export type PresentationBlock =
  | CinematicPresentationBlock
  | EditorialPresentationBlock;

export type CompositionDensity = "tight" | "balanced" | "spacious";

export type CompositionRhythm = "editorial" | "cinematic" | "immersive";

export type PresentationComposition = {
  density?: CompositionDensity;

  rhythm?: CompositionRhythm;

  transitions?: "soft" | "cinematic";
};

//
// PROJECT PRESENTATION
//

export type ProjectPresentation = CinematicPresentation | EditorialPresentation;

//
// CINEMATIC CONTENT
//

export type CinematicTextBlock = {
  label: string;

  heading: string;

  description: string;
};

export type CinematicHeroContent = {
  liveIndicator?: boolean;
};

export type CinematicShowcaseContent = CinematicTextBlock & {
  mobileLabel?: string;

  mobileHeading?: string;

  mobileDescription?: string;
};

export type CinematicSystemsContent = CinematicTextBlock & {
  floatingLabel?: string;
};

export type CinematicContent = {
  hero?: CinematicHeroContent;

  showcase?: CinematicShowcaseContent;

  systems?: CinematicSystemsContent;

  services?: CinematicTextBlock;

  mobile?: CinematicTextBlock;
};

//
// EDITORIAL CONTENT
//

export type EditorialTextBlock = {
  label: string;

  heading: string;

  description: string;
};

export type EditorialHeroContent = {
  liveIndicator?: boolean;
};

export type EditorialContent = {
  hero?: EditorialHeroContent;

  showcase?: EditorialTextBlock;

  atmosphere?: EditorialTextBlock;

  ui?: EditorialTextBlock;
};

//
// PROJECT
//

export type Project = {
  id: string;

  title: string;

  subtitle: string;

  description: string;

  year: string;

  presentation: ProjectPresentation;

  status?: ProjectStatus;

  stack: string[];

  liveUrl?: string;

  githubUrl?: string;

  media: ProjectMedia;

  accent?: ProjectAccent;

  metrics?: ProjectMetric[];

  featured?: boolean;

  cinematic?: CinematicContent;

  editorial?: EditorialContent;
};

//
// RENDERER TYPES
//

export type ProjectBlockProps = {
  project: Project;
};

export type ProjectShowcaseProps = {
  project: Project;

  index: number;
};

export type ProjectShowcaseItem = {
  image: string;

  title?: string;

  description?: string;

  alt?: string;
};

//
// RUNTIME RENDERERS
//

export type PresentationRenderer = ComponentType<ProjectShowcaseProps>;
