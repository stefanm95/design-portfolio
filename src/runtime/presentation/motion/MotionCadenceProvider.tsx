import type { ReactNode } from "react";

import { useMemo } from "react";

import type { PresentationRuntime } from "../interpreter";

import { resolveCadence } from "./cadence";

import {
  applySceneModulation,
  resolveSceneModulation,
} from "./sceneModulation";

import { MotionCadenceContext } from "./MotionCadenceContext";

import { CompositionReactivityContext } from "../composition/reactivity/CompositionReactivityContext";

type Props = {
  children: ReactNode;

  runtime: PresentationRuntime;
};

export function MotionCadenceProvider({ children, runtime }: Props) {
  const cadence = useMemo(() => {
    //
    // BASE CADENCE
    //

    const baseCadence = resolveCadence(runtime.composition);

    //
    // SCENE MODULATION
    //

    const modulation = resolveSceneModulation({
      scene: runtime.scene,
      composition: runtime.composition,
    });

    return applySceneModulation(baseCadence, modulation);
  }, [runtime]);

  return (
    <CompositionReactivityContext.Provider
      value={runtime.composition.reactivity}
    >
      <MotionCadenceContext.Provider value={cadence}>
        {children}
      </MotionCadenceContext.Provider>
    </CompositionReactivityContext.Provider>
  );
}
