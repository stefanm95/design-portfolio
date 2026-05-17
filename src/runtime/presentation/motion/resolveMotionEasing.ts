import type { EnvironmentalRuntime } from "../scene";

import type { CompositionMotionInfluence, CubicBezier } from "./types";

export const cinematicEasing: Record<
  "soft" | "balanced" | "tight",
  CubicBezier
> = {
  soft: [0.25, 1, 0.5, 1],

  balanced: [0.22, 1, 0.36, 1],

  tight: [0.16, 1, 0.3, 1],
};

type Props = {
  influence: CompositionMotionInfluence;

  environment: EnvironmentalRuntime;
};

export function resolveMotionEasing({
  influence,
  environment,
}: Props): CubicBezier {
  //
  // ENVIRONMENTAL RESTRAINT
  //

  if (environment.motionRestraint >= 1.15) {
    return cinematicEasing.tight;
  }

  //
  // ENVIRONMENTAL SOFTNESS
  //

  if (environment.cadenceSoftness >= 1.1) {
    return cinematicEasing.soft;
  }

  //
  // COMPOSITION PRESSURE
  //

  if (influence.pressureSoftness > 1.05) {
    return cinematicEasing.soft;
  }

  if (influence.pressureSoftness < 0.95) {
    return cinematicEasing.tight;
  }

  //
  // DEFAULT
  //

  return cinematicEasing.balanced;
}
