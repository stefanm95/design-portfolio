import type { AtmosphericModulation } from "../atmosphere";

import type { SpatialPressure } from "../composition";
import type { EnvironmentalRuntime } from "../scene";

import type { SurfaceTreatment } from "./types";

type Props = {
  atmospheric: AtmosphericModulation;

  environment: EnvironmentalRuntime;

  spatialPressure: SpatialPressure;
};

export function resolveSurfaceTreatment({
  atmospheric,
  spatialPressure,
  environment,
}: Props): SurfaceTreatment {
  const pressureMultiplier =
    spatialPressure === "compressed"
      ? 0.9
      : spatialPressure === "spacious"
        ? 1.1
        : 1;

  return {
    panelOpacity: atmospheric.overlays.opacity * 0.8,

    blur: `${atmospheric.overlays.blur}px`,

    borderOpacity: atmospheric.visual.contrast * 0.12,

    glowIntensity: environment.cinematicDepth * pressureMultiplier,

    textureIntensity: atmospheric.overlays.noise,
  };
}
