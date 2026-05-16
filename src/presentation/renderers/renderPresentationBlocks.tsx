import type { Project } from "@/types/projects";

import type {
  ProjectPresentation,
  PresentationBlock,
} from "@/types/presentation";

import {
  resolveSpatialBehavior,
  type CompositionContract,
} from "@/runtime/presentation/composition";

import {
  resolveAtmosphere,
  resolveScene,
} from "@/runtime/presentation/resolvers";

import { resolveBlockSpacing } from "@/runtime/presentation/composition/spacing/resolveBlockSpacing";

import type { PresentationRegistry, PresentationRoleMap } from "./types";

import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

export type RuntimePresentationAttributes = {
  composition: CompositionContract;

  profileVariant: PresentationProfileVariant;
};

type RenderPresentationBlocksProps = {
  project: Project;

  presentation: ProjectPresentation;

  runtime: RuntimePresentationAttributes;

  registry: PresentationRegistry;

  roleMap: PresentationRoleMap;
};

export function renderPresentationBlocks({
  project,
  presentation,
  runtime,
  registry,
  roleMap,
}: RenderPresentationBlocksProps) {
  return presentation.blocks.map((block, blockIndex) => {
    const blockType = block.type as keyof PresentationRegistry;
    const Component = registry[block.type as keyof typeof registry];

    if (!Component) {
      return null;
    }

    const scene = resolveScene(block.type);

    const atmosphere = resolveAtmosphere(presentation.mode, scene);

    const role = roleMap[blockType];

    if (!role) {
      return null;
    }

    const spatialBehavior = resolveSpatialBehavior(role);

    const spacing = resolveBlockSpacing({
      behavior: spatialBehavior,
      composition: runtime.composition,
    });

    return (
      <div
        key={`${block.type}-${blockIndex}`}
        className={spacing}
        data-scene={scene}
        data-atmosphere={atmosphere}
        data-profile={runtime.profileVariant}
        data-density={runtime.composition.density}
        data-rhythm={runtime.composition.rhythm}
        data-transition={runtime.composition.transition}
        data-scene-intensity={runtime.composition.sceneIntensity}
      >
        <Component
          project={project}
          block={block as PresentationBlock}
          index={blockIndex}
        />
      </div>
    );
  });
}
