"use client";

import type { ReactNode } from "react";

import { useEffect, useMemo, useRef, useState } from "react";

import { PresentationContext } from "./PresentationContext";

import { useScene } from "./scene/useScene";

type Props = {
  children: ReactNode;
};

export default function PresentationProvider({ children }: Props) {
  const scene = useScene();

  const previousScene = useRef(scene.id);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (previousScene.current === scene.id) {
      return;
    }

    previousScene.current = scene.id;

    setIsTransitioning(true);

    const timeout = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [scene.id]);

  const value = useMemo(
    () => ({
      currentScene: scene,

      sceneId: scene.id,

      isTransitioning,
    }),
    [scene, isTransitioning],
  );

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
}
