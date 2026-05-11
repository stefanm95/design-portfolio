import { createContext } from "react";

import type { SceneId } from "./scene/sceneRegistry";

type PresentationContextType = {
  currentScene: SceneId;

  isTransitioning: boolean;
};

export const PresentationContext =
  createContext<PresentationContextType | null>(null);
