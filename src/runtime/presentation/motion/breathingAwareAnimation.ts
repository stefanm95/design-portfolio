import type { MotionCadence } from "./types";
import type { CompositionReactivityContextType } from "../composition/reactivity";

/**
 * Breathing-Aware Animation Utilities
 *
 * Apply composition reactivity to animation values
 * for subtle breathing and pressure modulation
 *
 * Preserves authored motion timing while enabling
 * composition-aware experiential modulation
 */

/**
 * Calculate breathing-influenced delay
 *
 * Modulates animation delay based on compositional pressure and breathing
 * Gentle pressure lengthens delays (more breathing room)
 * Intense pressure shortens delays (tighter feeling)
 */
export function calculateBreathingDelay(
  baseDelay: number,
  reactivity: CompositionReactivityContextType,
): number {
  let delayModifier = 1.0;

  // Breathing factor directly influences delay
  delayModifier *= reactivity.breathing.breathingFactor;

  // Pressure modulates breathing effect
  if (reactivity.breathing.pressure === "gentle") {
    delayModifier *= 1.05; // Slightly longer delays for gentle pressure
  } else if (reactivity.breathing.pressure === "intense") {
    delayModifier *= 0.95; // Slightly shorter delays for intense pressure
  }

  return baseDelay * delayModifier;
}

/**
 * Calculate pressure-aware stagger
 *
 * Modulates reveal stagger based on compositional grouping intensity
 * Tight grouping = faster stagger (more compressed)
 * Spacious grouping = slower stagger (more spread)
 */
export function calculatePressureStagger(
  baseStagger: number,
  reactivity: CompositionReactivityContextType,
): number {
  let staggerModifier = 1.0;

  if (reactivity.breathing.groupingIntensity === "tight") {
    staggerModifier = 0.95;
  } else if (reactivity.breathing.groupingIntensity === "spacious") {
    staggerModifier = 1.05;
  }

  return baseStagger * staggerModifier;
}

/**
 * Calculate breathing-influenced reveal distance
 *
 * Modulates reveal movement distance based on compositional density
 * Tight density = smaller movement (more restrained)
 * Spacious density = larger movement (more cinematic)
 */
export function calculateBreathingDistance(
  baseDistance: number,
  reactivity: CompositionReactivityContextType,
): number {
  // Pressure modifier from density influences distance
  const distanceModifier = reactivity.density.pressureModifier;

  return baseDistance * distanceModifier;
}

/**
 * Apply breathing modulation to cadence
 *
 * Creates breathing-aware cadence by modulating timing values
 * without changing the fundamental rhythm profile
 *
 * Used when a component needs to subtly react to composition
 * while maintaining semantic clarity
 */
export function applyBreathingModulation(
  cadence: MotionCadence,
  reactivity: CompositionReactivityContextType,
): MotionCadence {
  return {
    ...cadence,

    fade: {
      ...cadence.fade,
      // Modulate fade delay with breathing
      delay: calculateBreathingDelay(cadence.fade.delay, reactivity),
    },

    reveal: {
      ...cadence.reveal,
      // Modulate reveal distance with breathing
      distance: calculateBreathingDistance(cadence.reveal.distance, reactivity),
    },

    // Modulate stagger with pressure
    stagger: calculatePressureStagger(cadence.stagger, reactivity),
  };
}

/**
 * Calculate cinematic spacing modifier
 *
 * Applies composition spacing influence to section spacing
 * Enables subtle spacing modulation without restructuring layout
 */
export function calculateCinematicSpacingModifier(
  reactivity: CompositionReactivityContextType,
): number {
  // Clamp spacing influence to prevent extreme values
  return Math.max(0.9, Math.min(1.1, reactivity.spacingInfluence));
}

/**
 * Calculate compositional separation
 *
 * Determines how visually separated sections should feel
 * based on grouping intensity and breathing
 */
export function calculateCompositionalSeparation(
  reactivity: CompositionReactivityContextType,
): "tight" | "natural" | "spacious" {
  // Map grouping intensity to separation
  return reactivity.breathing.groupingIntensity;
}
