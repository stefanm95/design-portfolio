import { useContext } from "react";

import { PresentationContext } from "./PresentationContext";

export function usePresentation() {
  const context = useContext(PresentationContext);

  if (!context) {
    throw new Error("usePresentation must be used inside PresentationProvider");
  }

  return context;
}
