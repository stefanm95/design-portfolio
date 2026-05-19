"use client";

import type { ReactNode } from "react";

import { useMemo } from "react";

import {
  MotionCadenceProvider,
  resolveCompositionContract,
} from "@/runtime/presentation";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import { useScene } from "@/runtime/presentation/scene";

import { resolvePresentationSnapshot } from "@/runtime/presentation/execution/snapshot";

import type { ProjectPresentation } from "@/types/presentation";

type Props = {
  children: ReactNode;
};

export function SectionMotionProvider({ children }: Props) {
  //
  // SCENE
  //

  const scene = useScene();

  //
  // SYNTHETIC PRESENTATION
  //

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

  //
  // PROFILE
  //

  const profileVariant =
    syntheticPresentation.composition?.profile ?? "immersive";

  const profile = resolveProfile(profileVariant);

  //
  // COMPOSITION
  //

  const composition = resolveCompositionContract(
    syntheticPresentation,

    profile,

    profile.orchestration.sceneIntensity ?? "balanced",
  );

  //
  // SNAPSHOT
  //

  const snapshot = resolvePresentationSnapshot({
    composition,

    scene,

    profile: profileVariant,
  });

  //
  // RENDER
  //

  return (
    <MotionCadenceProvider
      cadence={snapshot.motion}
      reactivity={composition.orchestration.reactivity}
    >
      {children}
    </MotionCadenceProvider>
  );
}
