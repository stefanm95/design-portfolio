import type { AtmosphericModulation } from "../atmosphere";

import type { OverlayTreatment } from "./types";

type Props = {
  atmospheric: AtmosphericModulation;
};

export function resolveOverlayTreatment({
  atmospheric,
}: Props): OverlayTreatment {
  return {
    overlayOpacity: atmospheric.overlays.opacity,

    vignetteIntensity: atmospheric.cinematic.atmosphericDepth * 0.7,

    gradientStrength: atmospheric.visual.saturation,
  };
}
