import type { CompositionContract } from "@/runtime/presentation/composition";

import type { SceneDefinition } from "@/runtime/presentation/scene";

export type AtmosphereState =
  | "immersive"
  | "editorial"
  | "technical"
  | "minimal"
  | "quiet";

type Props = {
  scene: SceneDefinition;

  composition: CompositionContract;
};

export function resolveAtmosphere({
  scene,
  composition,
}: Props): AtmosphereState {
  //
  // TECHNICAL OVERRIDE
  //

  if (scene.atmosphere === "technical") {
    return "technical";
  }

  //
  // QUIET ENVIRONMENTS
  //

  if (scene.atmosphere === "quiet") {
    return "quiet";
  }

  //
  // MINIMAL ENVIRONMENTS
  //

  if (scene.atmosphere === "minimal") {
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
