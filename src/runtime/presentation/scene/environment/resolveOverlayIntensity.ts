import type { CompositionContract } from "../../composition";
import type { SceneDefinition } from "../types";

export function resolveOverlayIntensity(
  scene: SceneDefinition,
  composition: CompositionContract,
): number {
  let intensity = 0.4;

  //
  // SCENE DEPTH
  //

  switch (scene.overlayDepth) {
    case "minimal":
      intensity -= 0.2;
      break;

    case "medium":
      break;

    case "deep":
      intensity += 0.3;
      break;
  }

  //
  // ATMOSPHERIC DEPTH
  //

  switch (composition.atmosphericDepth) {
    case "soft":
      intensity -= 0.1;
      break;

    case "deep":
      intensity += 0.15;
      break;
  }

  return Math.max(0, Math.min(1, intensity));
}
