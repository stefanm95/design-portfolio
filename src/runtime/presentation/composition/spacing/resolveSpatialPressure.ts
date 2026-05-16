import type { CompositionContract } from "../contract";

import type { SpatialPressure } from "./types";

export function resolveSpatialPressure(
  composition: CompositionContract,
): SpatialPressure {
  const { density, rhythm, sceneIntensity } = composition;

  //
  // HIGH COMPRESSION
  //

  if (density === "tight" && rhythm === "editorial") {
    return "compressed";
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
