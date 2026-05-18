// presentation/renderers/types.ts

import type { ComponentType } from "react";

import type { Project } from "@/types/projects";

import type {
  PresentationBlock,
  CinematicPresentationBlock,
  EditorialPresentationBlock,
} from "@/types/presentation";

import type { ResolvedPresentationBlockRuntime } from "@/runtime/presentation/execution/blocks/contracts/types";

//
// RENDERER
//

export type PresentationBlockRendererProps<
  TBlock extends PresentationBlock = PresentationBlock,
> = {
  project: Project;

  block: TBlock;

  index: number;

  runtime: ResolvedPresentationBlockRuntime<TBlock>["runtime"];
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
