import type { AtmosphericModulation } from "../atmosphere";
import type { EnvironmentalRuntime } from "../scene";
import type { OverlayTreatment } from "./types";

type Props = {
  atmospheric: AtmosphericModulation;

  environment: EnvironmentalRuntime;
};

export function resolveOverlayTreatment({
  atmospheric,
  environment,
}: Props): OverlayTreatment {
  return {
    overlayOpacity: atmospheric.overlays.opacity,

    vignetteIntensity: environment.cinematicDepth * 0.7,

    gradientStrength: atmospheric.visual.saturation,
  };
}
