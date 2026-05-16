import type { CompositionContract } from "../composition";

/**
 * Composition-Aware Motion Semantics
 *
 * Applies composition reactivity to motion cadence values,
 * influencing:
 * - reveal timing based on grouping intensity
 * - stagger distribution based on pacing
 * - breathing delays based on compositional pressure
 * - transition softness based on breathing
 *
 * WITHOUT generating layouts or duplicating orchestration
 */

/**
 * Breathing-influenced motion parameters
 *
 * Subtly modulates timing based on compositional pressure and breathing
 */
export type CompositionMotionInfluence = {
  /**
   * Reveal timing modifier based on grouping and breathing
   * How tightly/loosely reveals are distributed
   * Range: 0.85-1.2
   */
  revealTimeModifier: number;

  /**
   * Stagger distribution modifier based on pacing
   * Range: 0.9-1.1
   */
  staggerModifier: number;

  /**
   * Breathing delay influence
   * Modulates section delay based on breathing factor
   * Range: 0.8-1.2
   */
  breathingDelayModifier: number;

  /**
   * Pressure-aware softness
   * Transitions soften with gentle pressure, tighten with intense
   * Range: 0.85-1.15
   */
  pressureSoftness: number;
};

/**
 * Resolve composition-aware motion influence
 *
 * Extracts actionable motion semantics from composition reactivity
 * while maintaining semantic clarity and avoiding state machine complexity
 */
export function resolveCompositionMotionInfluence(
  contract: CompositionContract,
): CompositionMotionInfluence {
  const reactivity = contract.reactivity ?? {
    pacing: {
      revealGrouping: "balanced",
      spacingModifier: 1.0,
      staggerDistribution: "natural",
    },

    breathing: {
      breathingFactor: 1.0,
      pressure: "balanced",
      groupingIntensity: "natural",
    },

    density: {
      effectiveDensity: "balanced",
      influencesBreathing: true,
      pressureModifier: 1.0,
    },

    spacingInfluence: 1.0,
    revealTimeModifier: 1.0,
  };

  // Reveal timing modifier comes directly from reactivity
  const revealTimeModifier = reactivity.revealTimeModifier;

  // Stagger modifier based on stagger distribution
  let staggerModifier = 1.0;
  if (reactivity.pacing.staggerDistribution === "compressed") {
    staggerModifier = 0.95;
  } else if (reactivity.pacing.staggerDistribution === "expanded") {
    staggerModifier = 1.05;
  }

  // Breathing delay modifier based on breathing factor
  // Higher breathing = longer delays (more space between sections)
  const breathingDelayModifier = reactivity.breathing.breathingFactor;

  // Pressure-aware softness: gentle pressure lengthens transitions, intense tightens them
  let pressureSoftness = 1.0;
  if (reactivity.breathing.pressure === "gentle") {
    pressureSoftness = 1.1;
  } else if (reactivity.breathing.pressure === "intense") {
    pressureSoftness = 0.9;
  }

  return {
    revealTimeModifier,
    staggerModifier,
    breathingDelayModifier,
    pressureSoftness,
  };
}

/**
 * Apply composition motion influence to cadence values
 *
 * Transforms base cadence timing by composition reactivity
 * while preserving authored rhythm profile
 */
export function applyCompositionMotionInfluence(
  baseStagger: number,
  baseSectionDelay: number,
  influence: CompositionMotionInfluence,
): {
  stagger: number;
  sectionDelay: number;
} {
  return {
    // Stagger influenced by distribution pattern and reveal timing
    stagger:
      baseStagger * influence.staggerModifier * influence.revealTimeModifier,

    // Section delay influenced by breathing factor
    sectionDelay: baseSectionDelay * influence.breathingDelayModifier,
  };
}
