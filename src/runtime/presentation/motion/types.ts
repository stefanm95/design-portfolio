export type MotionCadence = {
  fade: {
    duration: number;

    delay: number;

    offset: number;

    ease: CubicBezier;
  };

  reveal: {
    duration: number;

    distance: number;
  };

  stagger: number;

  sectionDelay: number;

  transitionSoftness: number;
};

export type CubicBezier = [number, number, number, number];

export type SceneModulation = {
  cadenceSoftness: number;

  spacingPressure: number;

  breathingIntensity: number;

  atmosphereModulation: number;

  cinematicDepth: number;

  motionRestraint: number;
};

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

  offsetModifier: number;
};
