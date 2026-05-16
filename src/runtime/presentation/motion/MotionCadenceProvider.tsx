import type { ReactNode } from "react";

import { useMemo } from "react";

import type { CompositionContract } from "../composition";

import type { SceneId } from "../scene/definitions";

import { sceneDefinitions } from "../scene/definitions";

import { resolveCadence } from "./cadence";

import {
  applySceneModulation,
  resolveSceneModulation,
} from "./sceneModulation";

import { MotionCadenceContext } from "./MotionCadenceContext";

import { CompositionReactivityContext } from "../composition/reactivity/CompositionReactivityContext";

type Props = {
  children: ReactNode;

  contract: CompositionContract;

  sceneId?: SceneId;
};

export function MotionCadenceProvider({ children, contract, sceneId }: Props) {
  const cadence = useMemo(() => {
    //
    // BASE CADENCE
    //

    const baseCadence = resolveCadence(contract);

    //
    // OPTIONAL SCENE MODULATION
    //

    if (sceneId) {
      const scene = sceneDefinitions[sceneId];

      const modulation = resolveSceneModulation({
        scene,
        composition: contract,
      });

      return applySceneModulation(baseCadence, modulation);
    }

    //
    // DEFAULT
    //

    return baseCadence;
  }, [contract, sceneId]);

  return (
    <CompositionReactivityContext.Provider value={contract.reactivity}>
      <MotionCadenceContext.Provider value={cadence}>
        {children}
      </MotionCadenceContext.Provider>
    </CompositionReactivityContext.Provider>
  );
}
