import type { CompositionContract } from "../contract";
import type { SpatialPressure } from "./types";

export function resolveSpatialPressure(
  composition: CompositionContract,
): SpatialPressure {
  switch (composition.density) {
    case "tight":
      return "compressed";

    case "spacious":
      return "spacious";

    default:
      return "balanced";
  }
}
