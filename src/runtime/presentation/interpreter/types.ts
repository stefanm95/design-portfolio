import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

import type { CompositionSemantic } from "@/runtime/presentation/semantics";

import type {
  CompositionContract,
  SpatialBehavior,
} from "@/runtime/presentation/composition";
import type { SceneAtmosphere, SceneRuntime } from "../scene";
import type {
  PresentationProfile,
  PresentationProfileVariant,
} from "../profiles";

export type ResolvedPresentationBlockRuntime<TBlock extends PresentationBlock> =
  {
    block: TBlock;

    component: PresentationBlockRenderer<TBlock>;

    role: CompositionSemantic;

    spatialBehavior: SpatialBehavior;

    scene: SceneRuntime;

    atmosphere: SceneAtmosphere;

    spacing: string;
  };

export type PresentationRuntime = {
  composition: CompositionContract;

  profile: PresentationProfile;

  profileVariant: PresentationProfileVariant;

  scene: SceneRuntime;
};
