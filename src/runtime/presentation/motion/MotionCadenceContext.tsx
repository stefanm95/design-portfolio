import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import type { CompositionContract } from "../composition";
import type { SceneId } from "../scene/sceneRegistry";
import { resolveCadence, type MotionCadence } from "./cadence";
import {
  applySceneModulation,
  resolveSceneModulation,
} from "./sceneModulation";

/**
 * Motion Cadence Context
 *
 * Provides runtime-orchestrated motion values to animation components.
 * This makes motion profile-reactive throughout the composition.
 *
 * Extended to apply scene modulation contextually.
 */

const MotionCadenceContext = createContext<MotionCadence | null>(null);

export function MotionCadenceProvider({
  children,
  contract,
  sceneId,
}: {
  children: ReactNode;
  contract: CompositionContract;
  sceneId?: SceneId;
}) {
  const cadence = useMemo(() => {
    const baseCadence = resolveCadence(contract);

    // Apply scene modulation if scene is provided
    if (sceneId) {
      const modulation = resolveSceneModulation(sceneId);
      return applySceneModulation(baseCadence, modulation);
    }

    return baseCadence;
  }, [contract, sceneId]);

  return (
    <MotionCadenceContext.Provider value={cadence}>
      {children}
    </MotionCadenceContext.Provider>
  );
}

/**
 * useMotionCadence
 *
 * Components use this hook to access profile-orchestrated motion values.
 * Motion is now both profile-reactive and scene-modulated.
 *
 * If no provider, returns sensible defaults (editorial = tight/sharp).
 */
export function useMotionCadence(): MotionCadence {
  const cadence = useContext(MotionCadenceContext);

  if (!cadence) {
    // Fallback to editorial (tight, sharp) cadence
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
