import type { CompositionContract } from "@/runtime/presentation/composition/contract/types.ts";
import {
  applyMotionInfluence,
  resolveMotionEasing,
  resolveMotionInfluence,
  type EnvironmentalRuntime,
} from "..";

import type { MotionCadence } from "./types.ts";

/**
 * Runtime Motion Cadence Contract
 *
 * Final temporal motion behavior resolved from:
 *
 * - Composition structure
 * - Rhythm profile
 * - Reactivity semantics
 * - Environmental orchestration
 */

type Props = {
  composition: CompositionContract;

  environment: EnvironmentalRuntime;
};

export function resolveCadence({
  composition,
  environment,
}: Props): MotionCadence {
  const { rhythmProfile, transition } = composition.orchestration;

  //
  // COMPOSITION MOTION INFLUENCE
  //

  const motionInfluence = resolveMotionInfluence(composition);

  //
  // TRANSITION SOFTNESS
  //

  let transitionSoftness =
    transition === "soft" ? 0.9 : transition === "dramatic" ? 1.2 : 1;

  //
  // COMPOSITION PRESSURE MODULATION
  //

  transitionSoftness *= motionInfluence.pressureSoftness;

  //
  // ENVIRONMENTAL MODULATION
  //

  transitionSoftness *= environment.cadenceSoftness;

  //
  // DENSITY OFFSET MODULATION
  //

  const densityOffsetMultiplier =
    composition.orchestration.density === "tight"
      ? 0.7
      : composition.orchestration.density === "spacious"
        ? 1.3
        : 1;

  //
  // BASE TEMPORAL VALUES
  //

  const { stagger, sectionDelay } = applyMotionInfluence(
    rhythmProfile.stagger,
    rhythmProfile.sectionDelay,
    motionInfluence,
  );

  //
  // FINAL CADENCE
  //

  return {
    fade: {
      duration: rhythmProfile.duration * transitionSoftness,

      delay: rhythmProfile.transitionDelay,

      offset:
        rhythmProfile.revealOffset *
        densityOffsetMultiplier *
        motionInfluence.offsetModifier *
        environment.spacingPressure,

      ease: resolveMotionEasing({
        influence: motionInfluence,

        environment,
      }),
    },

    reveal: {
      duration: rhythmProfile.duration * transitionSoftness,

      distance:
        rhythmProfile.revealOffset *
        densityOffsetMultiplier *
        environment.spacingPressure,
    },

    stagger: stagger * environment.breathingIntensity,

    sectionDelay: sectionDelay * environment.breathingIntensity,

    transitionSoftness,
  };
}
