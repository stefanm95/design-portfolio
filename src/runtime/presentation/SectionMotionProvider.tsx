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
import type { PresentationRuntime } from "./interpreter";

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
    scene.definition.environmentalPressure === "intense"
      ? "dramatic"
      : scene.definition.environmentalPressure === "soft"
        ? "soft"
        : "balanced",
  );

  const runtime: PresentationRuntime = {
    composition,

    profileVariant: syntheticPresentation.composition?.profile ?? "immersive",

    scene,
  };

  return (
    <MotionCadenceProvider runtime={runtime}>{children}</MotionCadenceProvider>
  );
}
