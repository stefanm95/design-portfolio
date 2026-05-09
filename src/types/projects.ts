export type ProjectMedia = {
  hero?: string[];

  atmosphere?: string[];

  editorial?: string[];

  story?: string[];

  ui?: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectStatus = "live" | "private" | "concept";

export type ProjectAccent = "cyan" | "gold" | "violet" | "amber";

export type Project = {
  id: string;

  title: string;
  subtitle: string;

  description: string;

  year: string;

  status?: ProjectStatus;

  stack: string[];

  liveUrl?: string;
  githubUrl?: string;

  media: ProjectMedia;

  accent?: ProjectAccent;

  metrics?: ProjectMetric[];

  featured?: boolean;
};
