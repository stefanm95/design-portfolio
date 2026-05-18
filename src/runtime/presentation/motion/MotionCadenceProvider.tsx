import type { ReactNode } from "react";

import { MotionCadenceContext } from "./MotionCadenceContext";

import { CompositionReactivityContext } from "../composition/reactivity/CompositionReactivityContext";

import type { MotionCadence } from "./types";

import type { CompositionReactivityContextType } from "../composition";

type Props = {
  children: ReactNode;

  cadence: MotionCadence;

  reactivity: CompositionReactivityContextType;
};

export function MotionCadenceProvider({
  children,
  cadence,
  reactivity,
}: Props) {
  return (
    <CompositionReactivityContext.Provider value={reactivity}>
      <MotionCadenceContext.Provider value={cadence}>
        {children}
      </MotionCadenceContext.Provider>
    </CompositionReactivityContext.Provider>
  );
}
