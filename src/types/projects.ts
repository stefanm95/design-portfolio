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
