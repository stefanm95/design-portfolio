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

export type ProjectMetric = {
  label: string;

  value: string;
};

export type ProjectStatus = "live" | "private" | "concept";

export type ProjectAccent = "cyan" | "gold" | "violet" | "amber";

export type ProjectLayout = "editorial" | "architectural";

//
// PRESENTATION TYPES
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
};

export type CinematicPresentation = {
  mode: "cinematic";

  blocks: CinematicPresentationBlock[];
};

//
// EDITORIAL PRESENTATION
//

export type EditorialBlockType = "hero" | "showcase" | "atmosphere" | "ui";

export type EditorialPresentationBlock = {
  type: EditorialBlockType;
};

export type EditorialPresentation = {
  mode: "editorial";

  blocks: EditorialPresentationBlock[];
};

//
// PROJECT PRESENTATION
//

export type ProjectPresentation = CinematicPresentation | EditorialPresentation;

//
// CINEMATIC CONTENT TYPES
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
// EDITORIAL CONTENT TYPES
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

  presentation: ProjectPresentation;

  title: string;

  subtitle: string;

  description: string;

  year: string;

  status?: ProjectStatus;

  layout: ProjectLayout;

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
