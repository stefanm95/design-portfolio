import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts/types";
import { spatialScale } from "@/runtime/presentation/realization/spatial";
import type { SpatialBehavior } from "./types";

type Props = {
  behavior: SpatialBehavior;

  snapshot: PresentationRuntimeSnapshot;
};

export function resolveBlockSpacing({ behavior, snapshot }: Props): string {
  const { spatialPressure } = snapshot.spatial;

  return spatialScale[spatialPressure][behavior];
}
