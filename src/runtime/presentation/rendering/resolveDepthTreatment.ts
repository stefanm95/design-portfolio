import type { AtmosphericModulation } from "../atmosphere";

import type { DepthTreatment } from "./types";

type Props = {
  atmospheric: AtmosphericModulation;
};

export function resolveDepthTreatment({ atmospheric }: Props): DepthTreatment {
  return {
    cinematicDepth: atmospheric.cinematic.atmosphericDepth,

    layeringIntensity: atmospheric.cinematic.spacingIntensity,

    elevation: atmospheric.visual.contrast,
  };
}
