export type PresentationBlockType =
  | "hero"
  | "showcase"
  | "systems"
  | "services"
  | "mobile";

export type PresentationBlock = {
  type: PresentationBlockType;
};

export type PresentationMode = "cinematic" | "editorial";

export type ProjectPresentation = {
  mode: PresentationMode;

  blocks: PresentationBlock[];
};
