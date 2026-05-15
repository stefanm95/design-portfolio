import { presentationBlockRegistry } from "@/presentation";

import type {
  CinematicPresentation,
  EditorialPresentation,
} from "@/types/presentation";

export function resolveCinematicRegistry(presentation: CinematicPresentation) {
  return presentationBlockRegistry.cinematic;
}

export function resolveEditorialRegistry(presentation: EditorialPresentation) {
  return presentationBlockRegistry.editorial;
}
