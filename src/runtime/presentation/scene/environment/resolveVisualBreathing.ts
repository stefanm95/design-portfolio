import type { CompositionContract } from "../../composition";

import type { SceneDefinition } from "../types";

type Props = {
  scene: SceneDefinition;

  composition: CompositionContract;
};

export function resolveVisualBreathing({ scene, composition }: Props): number {
  let breathing = 0.5;

  //
  // SCENE BREATHING
  //

  switch (scene.breathingBias) {
    case "compressed":
      breathing -= 0.2;
      break;

    case "balanced":
      break;

    case "spacious":
      breathing += 0.2;
      break;
  }

  //
  // ENVIRONMENTAL PRESSURE
  //

  switch (scene.environmentalPressure) {
    case "soft":
      breathing += 0.1;
      break;

    case "balanced":
      break;

    case "intense":
      breathing -= 0.1;
      break;
  }

  //
  // COMPOSITION DENSITY
  //

  switch (composition.density) {
    case "dense":
      breathing -= 0.1;
      break;

    case "balanced":
      break;

    case "spacious":
      breathing += 0.1;
      break;
  }

  return Math.max(0, Math.min(1, breathing));
}
