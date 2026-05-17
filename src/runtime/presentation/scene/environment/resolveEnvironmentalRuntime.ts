import type { CompositionContract } from "../../composition";
import type { EnvironmentalRuntime, SceneDefinition } from "../types";
import { resolveVisualBreathing } from "./resolveVisualBreathing";

type Props = {
  scene: SceneDefinition;

  composition: CompositionContract;
};

export function resolveEnvironmentalRuntime({
  scene,
  composition,
}: Props): EnvironmentalRuntime {
  return {
    cinematicEnergy: resolveCinematicEnergy(scene, composition),

    atmosphericDensity: resolveAtmosphericDensity(scene, composition),

    environmentalPressure: resolveEnvironmentalPressure(scene, composition),

    motionSoftness: resolveMotionSoftness(scene, composition),

    cadenceSoftness: resolveCadenceSoftness(scene, composition),

    visualBreathing: resolveVisualBreathing(scene, composition),

    overlayIntensity: resolveOverlayIntensity(scene, composition),

    environmentalRestraint: resolveEnvironmentalRestraint(scene, composition),
  };
}
