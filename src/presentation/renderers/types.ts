import type { ComponentType } from "react";

import type { Project } from "@/types/projects";

import type {
  CinematicPresentationBlock,
  EditorialPresentationBlock,
  PresentationBlock,
} from "@/types/presentation";

import type { PresentationRendererRuntime } from "@/runtime/presentation/execution/contracts/rendererRuntime";

//
// RENDERER
//

export type PresentationBlockRendererProps<
  TBlock extends PresentationBlock = PresentationBlock,
> = {
  project: Project;

  block: TBlock;

  index: number;

  runtime: PresentationRendererRuntime;
};

export type PresentationBlockRenderer<TBlock extends PresentationBlock> =
  ComponentType<PresentationBlockRendererProps<TBlock>>;

//
// REGISTRIES
//

export type PresentationRegistry<TBlock extends PresentationBlock> = {
  [K in TBlock["type"]]: PresentationBlockRenderer<
    Extract<TBlock, { type: K }>
  >;
};

//
// SPECIALIZED REGISTRIES
//

export type CinematicPresentationRegistry =
  PresentationRegistry<CinematicPresentationBlock>;

export type EditorialPresentationRegistry =
  PresentationRegistry<EditorialPresentationBlock>;
