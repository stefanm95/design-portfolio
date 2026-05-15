import { presentationBlockRegistry } from "./index";

import type {
  CinematicPresentation,
  EditorialPresentation,
} from "@/types/presentation";

export function resolveCinematicRegistry(_presentation: CinematicPresentation) {
  return presentationBlockRegistry.cinematic;
}

export function resolveEditorialRegistry(_presentation: EditorialPresentation) {
  return presentationBlockRegistry.editorial;
}
