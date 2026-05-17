import { useMemo } from "react";

import { useNavigation } from "@/runtime/navigation";

import { resolveCompositionContract } from "@/runtime/presentation/composition";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import type { ProjectPresentation } from "@/types/presentation";

import { resolveSceneRuntime } from "./resolveSceneRuntime";

import { sceneDefinitions, type SceneId } from "./definitions";

import type { SceneRuntime } from "./types";

type Props = {
  profileVariant?: PresentationProfileVariant;
};

export function useScene({
  profileVariant = "immersive",
}: Props = {}): SceneRuntime {
  const { activeSection } = useNavigation();

  const profile = resolveProfile(profileVariant);

  const scene = useMemo(() => {
    return sceneDefinitions[activeSection as SceneId] ?? sceneDefinitions.hero;
  }, [activeSection]);

  const syntheticPresentation = useMemo<ProjectPresentation>(
    () => ({
      mode: "cinematic",

      blocks: [],

      composition: {
        profile: profileVariant,
      },
    }),
    [profileVariant],
  );

  const composition = resolveCompositionContract(
    syntheticPresentation,
    profile,
    profile.sceneIntensity,
  );

  return resolveSceneRuntime({
    scene,
    composition,
  });
}
