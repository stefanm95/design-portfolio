import { presentationBlockRegistry } from "./index";

import {
  cinematicBlockRoles,
  editorialBlockRoles,
  type CompositionSemanticMap,
} from "@/runtime/presentation";

import type {
  PresentationMode,
  PresentationBlock,
  CinematicPresentationBlock,
  EditorialPresentationBlock,
} from "@/types/presentation";

import type { PresentationRegistry } from "./types";

export type PresentationDialect<TBlock extends PresentationBlock> = {
  registry: PresentationRegistry<TBlock>;

  roleMap: CompositionSemanticMap;
};

export function resolvePresentationDialect(
  mode: "cinematic",
): PresentationDialect<CinematicPresentationBlock>;

export function resolvePresentationDialect(
  mode: "editorial",
): PresentationDialect<EditorialPresentationBlock>;

export function resolvePresentationDialect(
  mode: PresentationMode,
):
  | PresentationDialect<CinematicPresentationBlock>
  | PresentationDialect<EditorialPresentationBlock> {
  switch (mode) {
    case "cinematic":
      return {
        registry: presentationBlockRegistry.cinematic,

        roleMap: cinematicBlockRoles,
      };

    case "editorial":
      return {
        registry: presentationBlockRegistry.editorial,

        roleMap: editorialBlockRoles,
      };
  }
}
