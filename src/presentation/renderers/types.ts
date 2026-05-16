import type { ComponentType } from "react";

import type { Project } from "@/types/projects";

import type { PresentationBlock } from "@/types/presentation";

export type { PresentationBlock } from "@/types/presentation";

export type PresentationBlockRendererProps<TBlock = PresentationBlock> = {
  project: Project;

  block: TBlock;

  index: number;
};

export type PresentationBlockRenderer<TBlock = PresentationBlock> =
  ComponentType<PresentationBlockRendererProps<TBlock>>;

export type PresentationRegistry = Record<string, PresentationBlockRenderer>;

export type PresentationRole =
  | "hero"
  | "intro"
  | "transition"
  | "showcase"
  | "gallery"
  | "detail"
  | "immersive"
  | "meta"
  | "closing";

export type PresentationRoleMap = Record<string, PresentationRole>;
