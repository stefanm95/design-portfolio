import type { CompositionContract } from "../composition";

import type {
  PresentationProfile,
  PresentationProfileVariant,
} from "../profiles";

import type { SceneDefinition, SceneRuntime } from "./types";

type Props = {
  scene: SceneDefinition;

  composition: CompositionContract;

  profile: PresentationProfile;

  profileVariant: PresentationProfileVariant;
};

export function resolveSceneRuntime({
  scene,
  composition,
  profile,
  profileVariant,
}: Props): SceneRuntime {
  return {
    ...scene,

    composition,

    profile,

    profileVariant,

    sceneIntensity: composition.sceneIntensity,

    atmosphericDepth: composition.atmosphericDepth,
  };
}
