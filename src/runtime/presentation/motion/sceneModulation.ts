import type { CompositionContract } from "@/runtime/presentation/composition";

import type { SceneDefinition } from "@/runtime/presentation/scene";

import type { MotionCadence } from "./cadence";

import { cinematicEasing, type CubicBezier } from "./resolveMotionEasing";

/**
 * Scene Modulation Contract
 *
 * Environmental orchestration layer.
 *
 * Scenes contextually influence cadence,
 * spacing pressure,
 * atmospheric depth,
 * and motion restraint.
 */

export type SceneModulation = {
  cadenceSoftness: number;

  spacingPressure: number;

  breathingIntensity: number;

  atmosphereModulation: number;

  cinematicDepth: number;

  motionRestraint: number;
};

type Props = {
  scene: SceneDefinition;

  composition: CompositionContract;
};

/**
 * Resolve Scene Modulation
 *
 * Derives motion/environment modulation
 * from resolved scene orchestration state.
 */

export function resolveSceneModulation({
  scene,
  composition,
}: Props): SceneModulation {
  //
  // BASELINE
  //

  let cadenceSoftness = 1;

  let spacingPressure = 1;

  let breathingIntensity = 1;

  let atmosphereModulation = 1;

  let cinematicDepth = 1;

  let motionRestraint = 1;

  //
  // ATMOSPHERE MODULATION
  //

  switch (scene.atmosphere) {
    case "immersive":
      cadenceSoftness *= 1.15;
      spacingPressure *= 1.2;
      breathingIntensity *= 1.2;
      cinematicDepth *= 1.25;
      atmosphereModulation *= 1.2;
      break;

    case "editorial":
      cadenceSoftness *= 0.95;
      spacingPressure *= 0.95;
      breathingIntensity *= 1;
      cinematicDepth *= 1;
      atmosphereModulation *= 0.9;
      break;

    case "technical":
      cadenceSoftness *= 0.85;
      spacingPressure *= 0.8;
      breathingIntensity *= 0.8;
      cinematicDepth *= 0.8;
      atmosphereModulation *= 0.75;
      break;

    case "minimal":
      cadenceSoftness *= 0.9;
      spacingPressure *= 0.85;
      breathingIntensity *= 0.9;
      cinematicDepth *= 0.85;
      atmosphereModulation *= 0.8;
      break;

    case "quiet":
      cadenceSoftness *= 0.92;
      spacingPressure *= 0.9;
      breathingIntensity *= 0.85;
      cinematicDepth *= 0.9;
      atmosphereModulation *= 0.82;
      break;
  }

  //
  // ENVIRONMENTAL PRESSURE
  //

  switch (scene.environmentalPressure) {
    case "soft":
      cadenceSoftness *= 1.05;
      breathingIntensity *= 1.05;
      break;

    case "intense":
      cadenceSoftness *= 0.92;
      spacingPressure *= 0.9;
      cinematicDepth *= 1.1;
      break;
  }

  //
  // BREATHING BIAS
  //

  switch (scene.breathingBias) {
    case "compressed":
      spacingPressure *= 0.85;
      breathingIntensity *= 0.85;
      break;

    case "spacious":
      spacingPressure *= 1.15;
      breathingIntensity *= 1.15;
      break;
  }

  //
  // MOTION RESTRAINT
  //

  switch (scene.motionRestraint) {
    case "restrained":
      motionRestraint *= 1.15;
      break;

    case "expressive":
      motionRestraint *= 0.85;
      break;
  }

  //
  // SCENE INTENSITY
  //

  switch (composition.sceneIntensity) {
    case "dramatic":
      cadenceSoftness *= 1.08;
      cinematicDepth *= 1.15;
      atmosphereModulation *= 1.1;
      break;

    case "soft":
      cadenceSoftness *= 1.05;
      atmosphereModulation *= 1.05;
      break;
  }

  return {
    cadenceSoftness,

    spacingPressure,

    breathingIntensity,

    atmosphereModulation,

    cinematicDepth,

    motionRestraint,
  };
}

function resolveSceneEasing(
  restraint: number,
  softness: number,
  currentEase: CubicBezier,
): CubicBezier {
  if (restraint >= 1.15) {
    return cinematicEasing.tight;
  }

  if (softness >= 1.1) {
    return cinematicEasing.soft;
  }

  return currentEase;
}

/**
 * Apply Scene Modulation
 *
 * Applies environmental orchestration
 * to base cadence contracts.
 */

export function applySceneModulation(
  cadence: MotionCadence,
  modulation: SceneModulation,
): MotionCadence {
  return {
    fade: {
      duration: cadence.fade.duration * modulation.cadenceSoftness,

      delay: cadence.fade.delay,

      offset: cadence.fade.offset * modulation.spacingPressure,

      ease: resolveSceneEasing(
        modulation.motionRestraint,
        modulation.cadenceSoftness,
        cadence.fade.ease,
      ),
    },

    reveal: {
      duration: cadence.reveal.duration * modulation.cadenceSoftness,

      distance: cadence.reveal.distance * modulation.spacingPressure,
    },

    stagger: cadence.stagger * modulation.breathingIntensity,

    sectionDelay: cadence.sectionDelay * modulation.breathingIntensity,

    transitionSoftness: cadence.transitionSoftness * modulation.cadenceSoftness,

    atmosphereIntensity: modulation.atmosphereModulation,

    cinematicPressure: modulation.cinematicDepth,

    motionRestraint: modulation.motionRestraint,
  };
}
