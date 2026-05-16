import { spatialScale } from "./scale";

import { resolveSpatialPressure } from "./resolveSpatialPressure";

import type { CompositionContract } from "../contract";

import type { SpatialBehavior } from "./types";
import type { SceneDefinition } from "../../scene";

type Props = {
  behavior: SpatialBehavior;

  composition: CompositionContract;

  scene: SceneDefinition;
};

export function resolveBlockSpacing({ behavior, composition, scene }: Props) {
  const pressure = resolveSpatialPressure({
    composition,
    scene,
  });

  return spatialScale[pressure][behavior];
}
