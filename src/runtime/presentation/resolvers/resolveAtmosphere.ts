import type { CompositionContract } from "@/runtime/presentation/composition/contract";

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
  //
  // ENVIRONMENT
  //

  const environment = scene.environment;

  //
  // ORCHESTRATION
  //

  const orchestration = composition.orchestration;

  //
  // TECHNICAL
  //

  if (
    environment.cinematicDepth < 0.35 &&
    environment.spacingPressure > 0.7 &&
    environment.motionRestraint > 0.7
  ) {
    return "technical";
  }

  //
  // QUIET
  //

  if (
    environment.breathingIntensity < 0.35 &&
    environment.cadenceSoftness > 0.7
  ) {
    return "quiet";
  }

  //
  // MINIMAL
  //

  if (
    orchestration.atmosphericDepth === "minimal" ||
    orchestration.motionRestraint === "minimal"
  ) {
    return "minimal";
  }

  //
  // IMMERSIVE
  //

  if (
    orchestration.sceneIntensity === "dramatic" ||
    orchestration.atmosphericDepth === "immersive" ||
    environment.cinematicDepth > 0.75
  ) {
    return "immersive";
  }

  //
  // DEFAULT
  //

  return "editorial";
}
