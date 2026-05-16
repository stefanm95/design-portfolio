import { spatialScale } from "./scale";

import type { CompositionContract } from "../contract";

import type { SpatialBehavior } from "./types";
import type { SceneRuntime } from "@/runtime/presentation/scene";

type Props = {
  behavior: SpatialBehavior;

  composition: CompositionContract;

  scene: SceneRuntime;
};

export function resolveBlockSpacing({ behavior, scene }: Props) {
  const pressure = scene.spatialPressure;

  return spatialScale[pressure][behavior];
}
