import { useMemo } from "react";

import { useNavigation } from "@/runtime/navigation";

import { sceneRegistry } from "./sceneRegistry";

export function useScene() {
  const { activeSection } = useNavigation();

  const scene = useMemo(() => {
    return (
      sceneRegistry[activeSection as keyof typeof sceneRegistry] ??
      sceneRegistry.hero
    );
  }, [activeSection]);

  return scene;
}
