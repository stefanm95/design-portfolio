import { presentationBlockRegistry } from "./index";

import {
  cinematicBlockRoles,
  editorialBlockRoles,
  type CompositionSemanticMap,
} from "@/runtime/presentation";

import type { ProjectPresentation } from "@/types/presentation";

import type { PresentationRegistry } from "./types";

export type PresentationDialect = {
  registry: PresentationRegistry;

  roleMap: CompositionSemanticMap;
};

export function resolvePresentationDialect(
  mode: ProjectPresentation["mode"],
): PresentationDialect {
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

    default:
      return {
        registry: presentationBlockRegistry.cinematic,

        roleMap: cinematicBlockRoles,
      };
  }
}
