import type { CompositionContract } from "@/runtime/presentation/composition";

import type {
  PresentationProfile,
  PresentationProfileVariant,
} from "@/runtime/presentation/profiles";

import type { SceneDefinition } from "./types";

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
}: Props) {
  return {
    ...scene,

    density: composition.density,

    rhythm: composition.rhythm,

    transition: composition.transition,

    sceneIntensity: composition.sceneIntensity,

    profile: profileVariant,

    environmentalIntensity: profile.sceneIntensity,

    atmosphericDepth:
      scene.overlayDepth === "deep" && composition.sceneIntensity === "dramatic"
        ? "immersive"
        : "balanced",
  };
}
