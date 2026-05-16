import type { ComponentType } from "react";

import type { Project } from "@/types/projects";

import type {
  PresentationBlock,
  CinematicPresentationBlock,
  EditorialPresentationBlock,
} from "@/types/presentation";

//
// RENDERER
//

export type PresentationBlockRendererProps<
  TBlock extends PresentationBlock = PresentationBlock,
> = {
  project: Project;

  block: TBlock;

  index: number;
};

export type PresentationBlockRenderer<
  TBlock extends PresentationBlock = PresentationBlock,
> = ComponentType<PresentationBlockRendererProps<TBlock>>;

//
// REGISTRIES
//

export type PresentationRegistry = Record<string, PresentationBlockRenderer>;

//
// SPECIALIZED REGISTRIES
//

export type CinematicPresentationRegistry = Record<
  string,
  PresentationBlockRenderer<CinematicPresentationBlock>
>;

export type EditorialPresentationRegistry = Record<
  string,
  PresentationBlockRenderer<EditorialPresentationBlock>
>;
