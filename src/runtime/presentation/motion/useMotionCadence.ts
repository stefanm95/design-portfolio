import { useContext } from "react";

import { MotionCadenceContext } from "./MotionCadenceContext";

import type { MotionCadence } from "./cadence";

/**
 * useMotionCadence
 *
 * Components consume runtime-orchestrated motion cadence.
 * Motion is profile-reactive and scene-modulated.
 *
 * Falls back to restrained editorial cadence.
 */
export function useMotionCadence(): MotionCadence {
  const cadence = useContext(MotionCadenceContext);

  if (!cadence) {
    return {
      fade: {
        duration: 0.6,
        delay: 0.08,
        offset: 24,
      },

      reveal: {
        duration: 0.8,
        distance: 24,
      },

      stagger: 0.04,

      sectionDelay: 0.12,

      transitionSoftness: 1,

      atmosphereIntensity: 1,

      cinematicPressure: 1,

      motionRestraint: 1,
    };
  }

  return cadence;
}
