import type { CompositionMotionInfluence } from "./compositionMotionSemantics";

export type CubicBezier = [number, number, number, number];

export const cinematicEasing: Record<
  "soft" | "balanced" | "tight",
  CubicBezier
> = {
  soft: [0.25, 1, 0.5, 1],

  balanced: [0.22, 1, 0.36, 1],

  tight: [0.16, 1, 0.3, 1],
};

export function resolveMotionEasing(influence: CompositionMotionInfluence) {
  if (influence.pressureSoftness > 1.05) {
    return cinematicEasing.soft;
  }

  if (influence.pressureSoftness < 0.95) {
    return cinematicEasing.tight;
  }

  return cinematicEasing.balanced;
}
