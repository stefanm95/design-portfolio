import type { SceneDefinition } from "../../scene";
import type { CompositionContract } from "../contract";

import type { SpatialPressure } from "./types";

type Props = {
  composition: CompositionContract;

  scene: SceneDefinition;
};

export function resolveSpatialPressure({
  composition,
  scene,
}: Props): SpatialPressure {
  const { density, rhythm, sceneIntensity } = composition;

  //
  // HIGH COMPRESSION
  //

  if (density === "tight" && rhythm === "editorial") {
    return "compressed";
  }

  if (scene.environmentalPressure === "intense") {
    return "compressed";
  }

  if (scene.breathingBias === "spacious") {
    return "spacious";
  }

  //
  // HIGH OPENNESS
  //

  if (density === "spacious" || sceneIntensity === "dramatic") {
    return "spacious";
  }

  //
  // DEFAULT
  //

  return "balanced";
}
