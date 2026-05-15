import type { ComponentType } from "react";

import type { Project } from "@/types/projects";

import type {
  CinematicPresentationBlock,
  EditorialPresentationBlock,
} from "@/types/presentation";

export type PresentationBlockRendererProps<
  TBlock = CinematicPresentationBlock | EditorialPresentationBlock,
> = {
  project: Project;

  block: TBlock;

  index: number;
};

export type CinematicBlockRenderer = ComponentType<
  PresentationBlockRendererProps<CinematicPresentationBlock>
>;

export type EditorialBlockRenderer = ComponentType<
  PresentationBlockRendererProps<EditorialPresentationBlock>
>;
