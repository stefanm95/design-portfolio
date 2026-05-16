import { createContext } from "react";

import type { SceneId } from "./scene/definitions";

type PresentationContextType = {
  currentScene: SceneId;

  isTransitioning: boolean;
};

export const PresentationContext =
  createContext<PresentationContextType | null>(null);
