"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { PresentationContext } from "./PresentationContext";

import { useScene } from "./scene/useScene";

type Props = {
  children: React.ReactNode;
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
      currentScene: scene.id,

      isTransitioning,
    }),

    [scene.id, isTransitioning],
  );

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
}
