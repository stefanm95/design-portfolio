import type { CompositionContract } from "@/runtime/presentation/composition/contract/types";
import { resolveSpatialPressure } from "@/runtime/presentation/composition/spacing";
import type { SceneRuntime } from "@/runtime/presentation/scene/types";

type Props = {
  composition: CompositionContract;
  scene: SceneRuntime;
};

export function resolveSpatialStage({ composition, scene }: Props) {
  const spatialPressure = resolveSpatialPressure({
    composition,
    scene: scene.definition,
  });

  return {
    cadence: composition.orchestration.rhythm,

    pressure: composition.orchestration.sceneIntensity,

    breathing: composition.orchestration.reactivity.breathing,

    openness:
      composition.orchestration.environmentalPressure === "soft"
        ? 0.9
        : composition.orchestration.environmentalPressure === "balanced"
          ? 0.6
          : 0.3,

    compression:
      composition.orchestration.density === "tight"
        ? 0.9
        : composition.orchestration.density === "balanced"
          ? 0.5
          : 0.2,

    spatialPressure,
  };
}
