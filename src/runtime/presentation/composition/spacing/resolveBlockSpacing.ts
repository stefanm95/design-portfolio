import { spatialScale } from "./scale";

import { resolveSpatialPressure } from "./resolveSpatialPressure";

import type { CompositionContract } from "../contract";

import type { SpatialBehavior } from "./types";

type Props = {
  behavior: SpatialBehavior;

  composition: CompositionContract;
};

export function resolveBlockSpacing({ behavior, composition }: Props) {
  const pressure = resolveSpatialPressure(composition);

  return spatialScale[pressure][behavior];
}
