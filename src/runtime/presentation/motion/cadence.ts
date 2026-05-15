import type { CompositionContract } from "../composition";

/**
 * Runtime Motion Cadence Contract
 *
 * Transforms composition profile/rhythm/transition semantics
 * into actionable motion behavior for components.
 *
 * This is the bridge between profile resolution and experiential consequences.
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
  stagger: number;

  // Section breathing (delay between sections)
  sectionDelay: number;

  // Transition softness (ease multiplier)
  transitionSoftness: number;
};

/**
 * Resolve motion cadence from composition contract
 *
 * Profile + Rhythm + Transition → Motion Behavior
 *
 * This ensures motion feels consistent with the overall composition intent:
 * - Editorial profiles feel tighter, sharper
 * - Cinematic profiles feel slower, more deliberate
 * - Immersive profiles feel deeper, more breathable
 */
export function resolveCadence(contract: CompositionContract): MotionCadence {
  const { rhythmProfile, transition } = contract;

  // Transition softness: how much the ease curves lengthen/shorten durations
  const transitionSoftness =
    transition === "soft" ? 0.9 : transition === "dramatic" ? 1.2 : 1;

  // Density influences offsets: tighter density = smaller movement
  const densityOffsetMultiplier =
    contract.density === "tight"
      ? 0.7
      : contract.density === "spacious"
        ? 1.3
        : 1;

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

    stagger: rhythmProfile.stagger,

    sectionDelay: rhythmProfile.sectionDelay,

    transitionSoftness,
  };
}
