import type { CompositionContract } from "../contract";

import type { SceneDefinition } from "@/runtime/presentation/scene";

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

  if (density === "tight" && rhythm === "editorial") {
    return "compressed";
  }

  if (scene.environmentalPressure === "intense") {
    return "compressed";
  }

  if (density === "spacious" || sceneIntensity === "dramatic") {
    return "spacious";
  }

  if (scene.breathingBias === "spacious") {
    return "spacious";
  }

  return "balanced";
}
