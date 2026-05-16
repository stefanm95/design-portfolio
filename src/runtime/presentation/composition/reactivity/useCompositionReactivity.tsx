import { useContext } from "react";

import { CompositionReactivityContext } from "./CompositionReactivityContext";

import { neutralCompositionReactivity } from "./defaults";

export function useCompositionReactivity() {
  return (
    useContext(CompositionReactivityContext) ?? neutralCompositionReactivity
  );
}
