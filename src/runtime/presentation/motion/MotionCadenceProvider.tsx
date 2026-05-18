import type { ReactNode } from "react";

import { useMemo } from "react";

import type { PresentationRuntime } from "../interpreter";

import { resolveCadence } from "./cadence";

import { MotionCadenceContext } from "./MotionCadenceContext";

import { CompositionReactivityContext } from "../composition/reactivity/CompositionReactivityContext";

type Props = {
  children: ReactNode;

  runtime: PresentationRuntime;
};

export function MotionCadenceProvider({ children, runtime }: Props) {
  const cadence = useMemo(() => {
    return resolveCadence({
      composition: runtime.composition,

      environment: runtime.scene.environment,
    });
  }, [runtime]);

  return (
    <CompositionReactivityContext.Provider
      value={runtime.composition.orchestration.reactivity}
    >
      <MotionCadenceContext.Provider value={cadence}>
        {children}
      </MotionCadenceContext.Provider>
    </CompositionReactivityContext.Provider>
  );
}
