import type { CompositionContract } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

export type AtmosphereState =
  | "immersive"
  | "editorial"
  | "technical"
  | "minimal"
  | "quiet";

type Props = {
  scene: SceneRuntime;

  composition: CompositionContract;
};

export function resolveAtmosphere({
  scene,
  composition,
}: Props): AtmosphereState {
  const definition = scene.definition;

  //
  // TECHNICAL OVERRIDE
  //

  if (definition.atmosphere === "technical") {
    return "technical";
  }

  //
  // QUIET ENVIRONMENTS
  //

  if (definition.atmosphere === "quiet") {
    return "quiet";
  }

  //
  // MINIMAL ENVIRONMENTS
  //

  if (definition.atmosphere === "minimal") {
    return "minimal";
  }

  //
  // IMMERSIVE ORCHESTRATION
  //

  if (
    composition.sceneIntensity === "dramatic" ||
    composition.atmosphericDepth === "immersive"
  ) {
    return "immersive";
  }

  //
  // DEFAULT EDITORIAL
  //

  return "editorial";
}
