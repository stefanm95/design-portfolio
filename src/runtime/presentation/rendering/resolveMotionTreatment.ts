import type { EnvironmentalRuntime } from "../scene";

import type { MotionCadence } from "../motion";

import type { MotionTreatment } from "./types";

type Props = {
  motion: MotionCadence;

  environment: EnvironmentalRuntime;
};

export function resolveMotionTreatment({
  environment,
}: Props): MotionTreatment {
  return {
    softness: environment.cadenceSoftness,

    restraint: environment.motionRestraint,
  };
}
