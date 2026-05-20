import type { SceneDefinition } from "@/runtime/presentation/scene";
import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts/types";
import type { RuntimeBlockRelationship } from "@/runtime/presentation/interpreter/relationships";
import { spatialScale } from "@/runtime/presentation/realization/spatial";
import type { CompositionSemantic } from "../../semantics";
import type { CompositionContract } from "../contract";
import type { SpatialBehavior, SpatialPressure } from "./types";

type SpatialPressureProps = {
  composition: CompositionContract;

  scene: SceneDefinition;
};

type BlockSpacingProps = {
  behavior: SpatialBehavior;

  snapshot: PresentationRuntimeSnapshot;
};

type ContextualSpacingProps = BlockSpacingProps & {
  relationships: RuntimeBlockRelationship;
};

export function resolveSpatialPressure({
  composition,
  scene,
}: SpatialPressureProps): SpatialPressure {
  const { density, rhythm, sceneIntensity } = composition.orchestration;

  if (density === "tight" && rhythm === "editorial") {
    return "compressed";
  }

  if (scene.orchestration.environmentalPressure === "intense") {
    return "compressed";
  }

  if (density === "spacious" || sceneIntensity === "dramatic") {
    return "spacious";
  }

  if (scene.orchestration.breathingBias === "spacious") {
    return "spacious";
  }

  return "balanced";
}

export function resolveSpatialBehavior(
  role: CompositionSemantic,
): SpatialBehavior {
  switch (role) {
    case "hero":
    case "immersive":
      return "immersive";

    case "meta":
    case "transition":
      return "compact";

    case "intro":
    case "showcase":
    case "gallery":
    case "detail":
    case "closing":
    default:
      return "balanced";
  }
}

export function resolveBlockSpacing({
  behavior,
  snapshot,
}: BlockSpacingProps): string {
  const { spatialPressure } = snapshot.spatial;

  return spatialScale[spatialPressure][behavior];
}

export function resolveContextualSpacing({
  behavior,
  snapshot,
  relationships,
}: ContextualSpacingProps): string {
  const baseSpacing = resolveBlockSpacing({
    behavior,
    snapshot,
  });

  if (relationships.continuity.enteringImmersive) {
    return `${baseSpacing} pt-32 md:pt-40`;
  }

  if (relationships.continuity.exitingImmersive) {
    return `${baseSpacing} pb-32 md:pb-40`;
  }

  if (relationships.continuity.decompressionTransition) {
    return `${baseSpacing} pt-24`;
  }

  if (relationships.continuity.compressionTransition) {
    return `${baseSpacing} pb-12`;
  }

  return baseSpacing;
}
