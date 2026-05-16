import { createContext, useContext } from "react";

import type { SceneId } from "./scene/definitions";

import type { SceneRuntime } from "./scene/types";

export type PresentationContextType = {
  currentScene: SceneRuntime;

  sceneId: SceneId;

  isTransitioning: boolean;
};

export const PresentationContext =
  createContext<PresentationContextType | null>(null);

export function usePresentation() {
  const context = useContext(PresentationContext);

  if (!context) {
    throw new Error("usePresentation must be used within PresentationProvider");
  }

  return context;
}
