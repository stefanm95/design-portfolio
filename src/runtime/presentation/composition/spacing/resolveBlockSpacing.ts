import { spatialScale } from "./scale";

import { resolveSpatialPressure } from "./resolveSpatialPressure";

import type { CompositionContract } from "../contract";

import type { SpatialRole } from "./types";

type Props = {
  role: SpatialRole;

  composition: CompositionContract;
};

export function resolveBlockSpacing({ role, composition }: Props) {
  const pressure = resolveSpatialPressure(composition);

  return spatialScale[pressure][role];
}
