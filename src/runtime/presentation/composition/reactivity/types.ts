import type {
  CompositionDensity,
  //   CompositionRhythm,
} from "@/types/presentation";

/**
 * Composition Reactivity Layer
 *
 * Subtly influences authored composition based on:
 * - profile (immersive, editorial, minimal)
 * - cadence (rhythm: editorial, cinematic, immersive)
 * - scene modulation
 * - density
 *
 * WITHOUT:
 * - generating layouts
 * - duplicating orchestration
 * - creating state machines
 * - being a generic engine
 */

export type CompositionPacing = {
  /**
   * Pacing influence on reveal grouping
   * Determines how tightly/loosely reveals are grouped
   */
  revealGrouping: "tight" | "balanced" | "relaxed";

  /**
   * Pacing influence on spacing modulation
   * Modifier (0.8 to 1.2) to apply to base spacing
   */
  spacingModifier: number;

  /**
   * Reveal stagger distribution
   * Influences how reveals are distributed across containers
   */
  staggerDistribution: "compressed" | "natural" | "expanded";
};

export type CompositionBreathing = {
  /**
   * Section breathing factor
   * Influences compositional pressure and openness
   */
  breathingFactor: number;

  /**
   * Visual pacing pressure
   * Subtle cinematic tension modifier
   */
  pressure: "gentle" | "balanced" | "intense";

  /**
   * Grouping intensity
   * How visually grouped/separated sections feel
   */
  groupingIntensity: "tight" | "natural" | "spacious";
};

export type CompositionDensityReactivity = {
  /**
   * Density influence from runtime
   * May differ from authored density in specific contexts
   */
  effectiveDensity: CompositionDensity;

  /**
   * Whether density influences section breathing
   */
  influencesBreathing: boolean;

  /**
   * Compositional pressure modifier based on density
   * Range: 0.7 to 1.3
   */
  pressureModifier: number;
};

/**
 * Resolve composition context for presentation layer
 *
 * Aggregates pacing, breathing, and density reactivity
 * into actionable composition modifiers without orchestration duplication
 */
export type CompositionReactivityContextType = {
  pacing: CompositionPacing;
  breathing: CompositionBreathing;
  density: CompositionDensityReactivity;

  /**
   * Combined breathing influence on section spacing
   * Modifier to be applied to base section spacing values
   */
  spacingInfluence: number;

  /**
   * Reveal timing influence from composition reactivity
   * Modifies base stagger/delay without replacing rhythm profile
   */
  revealTimeModifier: number;
};
