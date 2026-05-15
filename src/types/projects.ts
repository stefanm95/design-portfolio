import type { ProjectPresentation } from "./presentation";

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
// PROJECT RENDERER HELPERS
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
