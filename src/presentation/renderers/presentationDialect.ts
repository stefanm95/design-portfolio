import { presentationBlockRegistry } from "./index";

import {
  cinematicBlockRoles,
  editorialBlockRoles,
} from "@/runtime/presentation";

import type { ProjectPresentation } from "@/types/presentation";

import type { PresentationRegistry, PresentationRoleMap } from "./types";

export type PresentationDialect = {
  registry: PresentationRegistry;

  roleMap: PresentationRoleMap;
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
