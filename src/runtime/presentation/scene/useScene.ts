import { useMemo } from "react";

import { useNavigation } from "@/runtime/navigation";

import { resolveCompositionContract } from "@/runtime/presentation/composition";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import { resolveSceneRuntime } from "./resolveSceneRuntime";

import { sceneDefinitions, type SceneId } from "./definitions";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

type Props = {
  profileVariant?: PresentationProfileVariant;
};

export function useScene({ profileVariant = "immersive" }: Props = {}) {
  const { activeSection } = useNavigation();

  const profile = resolveProfile(profileVariant);

  const scene = useMemo(() => {
    return sceneDefinitions[activeSection as SceneId] ?? sceneDefinitions.hero;
  }, [activeSection]);

  const composition = resolveCompositionContract(
    {
      mode: "cinematic",
      blocks: [],
    },
    profile,
    profile.sceneIntensity,
  );

  return resolveSceneRuntime({
    scene,
    composition,
    profile,
    profileVariant,
  });
}
