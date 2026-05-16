import type { CompositionContract } from "../composition";
import {
  resolveCompositionMotionInfluence,
  applyCompositionMotionInfluence,
} from "./compositionMotionSemantics";

/**
 * Runtime Motion Cadence Contract
 *
 * Transforms composition profile/rhythm/transition semantics
 * into actionable motion behavior for components.
 *
 * This is the bridge between profile resolution and experiential consequences.
 *
 * Extended to include:
 * - Composition reactivity influence (breathing, pacing, pressure)
 * - Environmental modulation values from scenes
 */

export type MotionCadence = {
  // Fade motion
  fade: {
    duration: number;
    delay: number;
    offset: number; // y-axis movement
  };

  // Reveal motion
  reveal: {
    duration: number;
    distance: number;
  };

  // Stagger timing for multiple elements
  // Influenced by composition pacing and breathing
  stagger: number;

  // Section breathing (delay between sections)
  // Influenced by composition breathing factor
  sectionDelay: number;

  // Transition softness (ease multiplier)
  // Influenced by composition pressure
  transitionSoftness: number;

  // Environmental modulation values (added by scenes)
  atmosphereIntensity?: number;
  cinematicPressure?: number;
  motionRestraint?: number;
};

/**
 * Resolve motion cadence from composition contract
 *
 * Profile + Rhythm + Transition → Motion Behavior
 * PLUS Composition Reactivity → Breathing, Pacing, Pressure Modulation
 *
 * This ensures motion feels consistent with the overall composition intent:
 * - Editorial profiles feel tighter, sharper
 * - Cinematic profiles feel slower, more deliberate
 * - Immersive profiles feel deeper, more breathable
 *
 * Composition reactivity subtly modulates timing without changing the rhythm profile
 */
export function resolveCadence(contract: CompositionContract): MotionCadence {
  const { rhythmProfile, transition } = contract;

  // Resolve composition motion influence from reactivity
  const motionInfluence = resolveCompositionMotionInfluence(contract);

  // Transition softness: how much the ease curves lengthen/shorten durations
  // Further modulated by composition pressure
  let transitionSoftness =
    transition === "soft" ? 0.9 : transition === "dramatic" ? 1.2 : 1;

  // Apply pressure-aware softness from composition breathing
  transitionSoftness *= motionInfluence.pressureSoftness;

  // Density influences offsets: tighter density = smaller movement
  const densityOffsetMultiplier =
    contract.density === "tight"
      ? 0.7
      : contract.density === "spacious"
        ? 1.3
        : 1;

  // Apply composition motion influence to cadence timing
  const { stagger, sectionDelay } = applyCompositionMotionInfluence(
    rhythmProfile.stagger,
    rhythmProfile.sectionDelay,
    motionInfluence,
  );

  return {
    fade: {
      duration: rhythmProfile.duration * transitionSoftness,
      delay: rhythmProfile.transitionDelay,
      offset: rhythmProfile.revealOffset * densityOffsetMultiplier,
    },

    reveal: {
      duration: rhythmProfile.duration * transitionSoftness,
      distance: rhythmProfile.revealOffset * densityOffsetMultiplier,
    },

    // Stagger and sectionDelay now incorporate composition reactivity
    stagger,

    sectionDelay,

    transitionSoftness,
  };
}
