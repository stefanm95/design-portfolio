import type { PresentationProfile } from "../../profiles";
import type {
  CompositionBreathing,
  CompositionDensityReactivity,
  CompositionPacing,
  CompositionReactivityContextType,
} from "./types";

function resolveCompositionPacing(
  profile: PresentationProfile,
): CompositionPacing {
  const rhythm = profile.orchestration.rhythm;

  const density = profile.orchestration.density;

  if (rhythm === "editorial" && density === "tight") {
    return {
      revealGrouping: "tight",

      spacingModifier: 0.9,

      staggerDistribution: "compressed",
    };
  }

  if (rhythm === "editorial" && density === "balanced") {
    return {
      revealGrouping: "balanced",

      spacingModifier: 1,

      staggerDistribution: "natural",
    };
  }

  if (rhythm === "immersive" && density === "spacious") {
    return {
      revealGrouping: "relaxed",

      spacingModifier: 1.15,

      staggerDistribution: "expanded",
    };
  }

  if (rhythm === "cinematic") {
    return {
      revealGrouping: "balanced",

      spacingModifier: 1.05,

      staggerDistribution: "natural",
    };
  }

  if (rhythm === "immersive") {
    return {
      revealGrouping: "relaxed",

      spacingModifier: 1.1,

      staggerDistribution: "expanded",
    };
  }

  return {
    revealGrouping: "tight",

    spacingModifier: 0.95,

    staggerDistribution: "compressed",
  };
}

function resolveCompositionBreathing(
  profile: PresentationProfile,
): CompositionBreathing {
  const density = profile.orchestration.density;

  const transitions = profile.orchestration.transitions;

  if (density === "spacious") {
    return {
      breathingFactor: 1.2,

      pressure: "gentle",

      groupingIntensity: "spacious",
    };
  }

  if (density === "tight") {
    return {
      breathingFactor: 0.85,

      pressure: "intense",

      groupingIntensity: "tight",
    };
  }

  if (transitions === "soft") {
    return {
      breathingFactor: 1,

      pressure: "gentle",

      groupingIntensity: "natural",
    };
  }

  if (transitions === "dramatic") {
    return {
      breathingFactor: 1.1,

      pressure: "intense",

      groupingIntensity: "spacious",
    };
  }

  return {
    breathingFactor: 1,

    pressure: "balanced",

    groupingIntensity: "natural",
  };
}

function resolveCompositionDensity(
  profile: PresentationProfile,
  sceneIntensity?: "soft" | "balanced" | "dramatic",
): CompositionDensityReactivity {
  const effectiveDensity = profile.orchestration.density;

  const rhythm = profile.orchestration.rhythm;

  let pressureModifier: number;

  switch (effectiveDensity) {
    case "tight":
      pressureModifier = 1.2;
      break;

    case "spacious":
      pressureModifier = 0.8;
      break;

    default:
      pressureModifier = 1;
      break;
  }

  switch (sceneIntensity) {
    case "dramatic":
      pressureModifier *= 1.15;
      break;

    case "soft":
      pressureModifier *= 0.85;
      break;
  }

  switch (rhythm) {
    case "immersive":
      pressureModifier *= 0.9;
      break;

    case "editorial":
      pressureModifier *= 1.05;
      break;
  }

  pressureModifier = Math.max(0.7, Math.min(1.3, pressureModifier));

  return {
    effectiveDensity,

    influencesBreathing: true,

    pressureModifier,
  };
}

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
