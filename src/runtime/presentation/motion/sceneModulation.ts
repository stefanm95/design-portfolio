import type { SceneId } from "../scene/sceneRegistry";
import { sceneRegistry } from "../scene/sceneRegistry";
import type { MotionCadence } from "./cadence";
import { cinematicEasing, type CubicBezier } from "./resolveMotionEasing";

/**
 * Scene Modulation Contract
 *
 * Transforms scene context into cadence multipliers.
 * Scenes don't replace profiles — they contextually influence them.
 *
 * This is environmental orchestration, not profile orchestration.
 */

export type SceneModulation = {
  // How much to soften motion (1 = neutral, 0.8 = softer, 1.2 = sharper)
  cadenceSoftness: number;

  // How much to compress/expand spacing pressure
  spacingPressure: number;

  // How aggressively to breathe between sections
  breathingIntensity: number;

  // How to modulate atmospheric intensity
  atmosphereModulation: number;

  // How much environmental depth to add
  cinematicDepth: number;

  // How to restrain motion (1 = neutral, 0.7 = restrained, 1.3 = expressive)
  motionRestraint: number;
};

/**
 * Resolve scene modulation
 *
 * Takes scene semantics (atmosphere, tone) and produces modulation values
 * that contextually influence the baseline cadence.
 *
 * Examples:
 * - immersive scenes: soften motion, increase breathing, deepen atmosphere
 * - editorial scenes: tighten motion, restrain spacing, cleaner transitions
 * - technical scenes: restrain motion, reduce breathing, minimal depth
 */
export function resolveSceneModulation(sceneId: SceneId): SceneModulation {
  const scene = sceneRegistry[sceneId];

  // Base modulation (neutral)
  let cadenceSoftness = 1;
  let spacingPressure = 1;
  let breathingIntensity = 1;
  let atmosphereModulation = 1;
  let cinematicDepth = 1;
  let motionRestraint = 1;

  // Modulate based on atmosphere
  switch (scene.atmosphere) {
    case "introduction":
      // Hero: dramatic, slower, deeper breathing
      cadenceSoftness = 1.1;
      breathingIntensity = 1.15;
      cinematicDepth = 1.2;
      spacingPressure = 1.05;
      atmosphereModulation = 1.1;
      break;

    case "immersive":
      // Projects: very slow, deep spacing, strong atmosphere
      cadenceSoftness = 1.2;
      spacingPressure = 1.25;
      breathingIntensity = 1.25;
      cinematicDepth = 1.3;
      atmosphereModulation = 1.25;
      motionRestraint = 0.85;
      break;

    case "editorial":
      // Philosophy: clean, measured, slight tightening
      cadenceSoftness = 0.95;
      spacingPressure = 0.95;
      breathingIntensity = 1;
      cinematicDepth = 1;
      atmosphereModulation = 0.9;
      motionRestraint = 1.1;
      break;

    case "minimal":
      // About: restrained, precise, minimal depth
      cadenceSoftness = 0.9;
      spacingPressure = 0.85;
      breathingIntensity = 0.9;
      cinematicDepth = 0.85;
      atmosphereModulation = 0.75;
      motionRestraint = 1.15;
      break;

    case "technical":
      // Experience: structured, tight, low breathing
      cadenceSoftness = 0.85;
      spacingPressure = 0.8;
      breathingIntensity = 0.8;
      cinematicDepth = 0.8;
      atmosphereModulation = 0.7;
      motionRestraint = 1.2;
      break;

    case "quiet":
      // Contact: calm, restrained, minimal motion
      cadenceSoftness = 0.9;
      spacingPressure = 0.85;
      breathingIntensity = 0.85;
      cinematicDepth = 0.9;
      atmosphereModulation = 0.8;
      motionRestraint = 1.2;
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
 * Apply scene modulation to cadence
 *
 * Takes base cadence and scene modulation, returns modulated cadence.
 * This is purely multiplicative — no destructive changes.
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

    // New environmental modulation values
    atmosphereIntensity: modulation.atmosphereModulation,
    cinematicPressure: modulation.cinematicDepth,
    motionRestraint: modulation.motionRestraint,
  };
}
