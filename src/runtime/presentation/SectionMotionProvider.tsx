"use client";

import type { ReactNode } from "react";

import { useMemo } from "react";

import {
  MotionCadenceProvider,
  resolveCompositionContract,
} from "@/runtime/presentation";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import { useScene } from "@/runtime/presentation/scene";

import type { ProjectPresentation } from "@/types/presentation";

type Props = {
  children: ReactNode;
};

export function SectionMotionProvider({ children }: Props) {
  const scene = useScene();

  /**
   * Lightweight synthetic presentation
   * used only for orchestration defaults.
   */
  const syntheticPresentation = useMemo<ProjectPresentation>(
    () => ({
      mode: "cinematic",

      composition: {
        profile: "immersive",
      },

      blocks: [],
    }),
    [],
  );

  const profile = resolveProfile(
    syntheticPresentation.composition?.profile ?? "immersive",
  );

  const composition = resolveCompositionContract(
    syntheticPresentation,
    profile,
    scene.environmentalPressure === "intense"
      ? "dramatic"
      : scene.environmentalPressure === "soft"
        ? "soft"
        : "balanced",
  );

  return (
    <MotionCadenceProvider contract={composition} sceneId={scene.id}>
      {children}
    </MotionCadenceProvider>
  );
}
