import type { CompositionContract } from "@/runtime/presentation/composition/contract/types";
import { resolveEnvironmentalRuntime } from "./environment/resolveEnvironmentalRuntime";

import type { SceneDefinition, SceneRuntime } from "./types";

type Props = {
  scene: SceneDefinition;

  composition: CompositionContract;
};

export function resolveSceneRuntime({
  scene,
  composition,
}: Props): SceneRuntime {
  return {
    definition: scene,

    environment: resolveEnvironmentalRuntime({
      scene,
      composition,
    }),
  };
}
