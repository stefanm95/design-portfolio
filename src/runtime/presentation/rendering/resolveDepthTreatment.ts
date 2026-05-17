import type { AtmosphericModulation } from "../atmosphere";

import type { EnvironmentalRuntime } from "../scene";

import type { DepthTreatment } from "./types";

type Props = {
  atmospheric: AtmosphericModulation;

  environment: EnvironmentalRuntime;
};

export function resolveDepthTreatment({
  atmospheric,
  environment,
}: Props): DepthTreatment {
  return {
    cinematicDepth: environment.cinematicDepth,

    layeringIntensity: environment.spacingPressure,

    elevation: atmospheric.visual.contrast,
  };
}
