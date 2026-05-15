import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import type { CompositionContract } from "../composition";
import { resolveCadence, type MotionCadence } from "./cadence";

/**
 * Motion Cadence Context
 *
 * Provides runtime-orchestrated motion values to animation components.
 * This makes motion profile-reactive throughout the composition.
 */

const MotionCadenceContext = createContext<MotionCadence | null>(null);

export function MotionCadenceProvider({
  children,
  contract,
}: {
  children: ReactNode;
  contract: CompositionContract;
}) {
  const cadence = useMemo(() => resolveCadence(contract), [contract]);

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
    };
  }

  return cadence;
}
