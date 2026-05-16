import { useContext } from "react";

import {
  PresentationContext,
  type PresentationContextType,
} from "./PresentationContext";

export function usePresentation(): PresentationContextType {
  const context = useContext(PresentationContext);

  if (!context) {
    throw new Error("usePresentation must be used inside PresentationProvider");
  }

  return context;
}
