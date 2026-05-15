import { presentationBlockRegistry } from "./index";

export function resolveCinematicRegistry() {
  return presentationBlockRegistry.cinematic;
}

export function resolveEditorialRegistry() {
  return presentationBlockRegistry.editorial;
}
