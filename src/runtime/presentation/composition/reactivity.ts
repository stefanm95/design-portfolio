import type {
  CompositionDensity,
  //   CompositionRhythm,
} from "@/types/presentation";

import type { PresentationProfile } from "../profiles/types";

// import { compositionDensity } from "./density";
// import { compositionRhythm } from "./rhythm";

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
 * Resolve composition pacing based on profile and rhythm
 *
 * Orchestrates how reveals are grouped and distributed
 * through authored composition without restructuring layout
 */
export function resolveCompositionPacing(
  profile: PresentationProfile,
): CompositionPacing {
  const rhythm = profile.rhythm;
  const density = profile.density;

  // Editorial + Tight: compressed, tight grouping
  if (profile.atmosphere === "editorial" && density === "tight") {
    return {
      revealGrouping: "tight",
      spacingModifier: 0.9,
      staggerDistribution: "compressed",
    };
  }

  // Editorial + Balanced: balanced grouping
  if (profile.atmosphere === "editorial" && density === "balanced") {
    return {
      revealGrouping: "balanced",
      spacingModifier: 1.0,
      staggerDistribution: "natural",
    };
  }

  // Immersive + Spacious: relaxed, expanded grouping
  if (profile.atmosphere === "cinematic" && density === "spacious") {
    return {
      revealGrouping: "relaxed",
      spacingModifier: 1.15,
      staggerDistribution: "expanded",
    };
  }

  // Cinematic rhythm: natural pacing
  if (rhythm === "cinematic") {
    return {
      revealGrouping: "balanced",
      spacingModifier: 1.05,
      staggerDistribution: "natural",
    };
  }

  // Immersive rhythm: expanded pacing
  if (rhythm === "immersive") {
    return {
      revealGrouping: "relaxed",
      spacingModifier: 1.1,
      staggerDistribution: "expanded",
    };
  }

  // Editorial rhythm: tight pacing
  return {
    revealGrouping: "tight",
    spacingModifier: 0.95,
    staggerDistribution: "compressed",
  };
}

/**
 * Resolve composition breathing based on profile and density
 *
 * Orchestrates spatial breathing, compositional pressure,
 * and visual pacing without generating adaptive layouts
 */
export function resolveCompositionBreathing(
  profile: PresentationProfile,
): CompositionBreathing {
  const density = profile.density;
  //   const atmosphere = profile.atmosphere;
  const transitions = profile.transitions;

  // Spacious: high breathing factor, gentle pressure
  if (density === "spacious") {
    return {
      breathingFactor: 1.2,
      pressure: "gentle",
      groupingIntensity: "spacious",
    };
  }

  // Tight: low breathing factor, intense pressure
  if (density === "tight") {
    return {
      breathingFactor: 0.85,
      pressure: "intense",
      groupingIntensity: "tight",
    };
  }

  // Balanced: natural breathing factor
  // Soft transitions: gentle pressure
  if (transitions === "soft") {
    return {
      breathingFactor: 1.0,
      pressure: "gentle",
      groupingIntensity: "natural",
    };
  }

  // Dramatic transitions: intense pressure
  if (transitions === "dramatic") {
    return {
      breathingFactor: 1.1,
      pressure: "intense",
      groupingIntensity: "spacious",
    };
  }

  // Default: balanced breathing
  return {
    breathingFactor: 1.0,
    pressure: "balanced",
    groupingIntensity: "natural",
  };
}

/**
 * Resolve composition density reactivity
 *
 * Determines whether and how density influences section breathing
 * and compositional pressure without adaptive layout generation
 */
export function resolveCompositionDensity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionDensityReactivity {
  const effectiveDensity = profile.density;
  const rhythm = profile.rhythm;

  // Calculate pressure modifier based on density and rhythm
  let pressureModifier = 1.0;

  if (effectiveDensity === "tight") {
    pressureModifier = 1.2; // Compressed composition feels tighter
  } else if (effectiveDensity === "spacious") {
    pressureModifier = 0.8; // Spacious composition feels more open
  }

  // Scene intensity modulates pressure
  if (sceneIntensity === "dramatic") {
    pressureModifier *= 1.15;
  } else if (sceneIntensity === "soft") {
    pressureModifier *= 0.85;
  }

  // Immersive rhythm further influences breathing
  if (rhythm === "immersive") {
    pressureModifier *= 0.9; // More open pacing
  }

  // Clamp pressure modifier
  pressureModifier = Math.max(0.7, Math.min(1.3, pressureModifier));

  return {
    effectiveDensity,
    influencesBreathing: profile.atmosphere !== "minimal",
    pressureModifier,
  };
}

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

/**
 * Resolve complete composition reactivity context
 *
 * Orchestrates all composition reactivity layers while maintaining
 * authored composition integrity and runtime semantic ownership
 */
export function resolveCompositionReactivity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionReactivityContextType {
  const pacing = resolveCompositionPacing(profile);
  const breathing = resolveCompositionBreathing(profile);
  const density = resolveCompositionDensity(profile, sceneIntensity);

  // Calculate combined spacing influence
  // Breathing factor influences how much spacing is modulated
  let spacingInfluence = breathing.breathingFactor;
  spacingInfluence *= pacing.spacingModifier;
  spacingInfluence *= density.pressureModifier;

  // Clamp spacing influence to preserve authored composition integrity
  spacingInfluence = Math.max(0.85, Math.min(1.25, spacingInfluence));

  // Calculate reveal timing influence
  // Based on stagger distribution and breathing
  let revealTimeModifier = 1.0;

  if (pacing.staggerDistribution === "compressed") {
    revealTimeModifier *= 0.95;
  } else if (pacing.staggerDistribution === "expanded") {
    revealTimeModifier *= 1.1;
  }

  if (breathing.pressure === "intense") {
    revealTimeModifier *= 0.9;
  } else if (breathing.pressure === "gentle") {
    revealTimeModifier *= 1.05;
  }

  revealTimeModifier = Math.max(0.85, Math.min(1.2, revealTimeModifier));

  return {
    pacing,
    breathing,
    density,
    spacingInfluence,
    revealTimeModifier,
  };
}
