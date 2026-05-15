import type { ReactNode } from "react";
import { useMemo } from "react";

import type { CompositionContract } from "../composition";
import type { SceneId } from "../scene/sceneRegistry";

import { resolveCadence } from "./cadence";

import {
  applySceneModulation,
  resolveSceneModulation,
} from "./sceneModulation";

import { MotionCadenceContext } from "./MotionCadenceContext";

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
