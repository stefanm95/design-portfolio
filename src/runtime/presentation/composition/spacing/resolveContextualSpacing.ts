import type { SpatialBehavior } from "./types";

import type { RuntimeBlockRelationship } from "@/runtime/presentation/interpreter/relationships";

import type { PresentationRuntimeSnapshot } from "@/runtime/presentation/execution/snapshot/contracts/types";
import { resolveBlockSpacing } from "./resolveBlockSpacing";

type Props = {
  behavior: SpatialBehavior;

  snapshot: PresentationRuntimeSnapshot;

  relationships: RuntimeBlockRelationship;
};

export function resolveContextualSpacing({
  behavior,
  snapshot,
  relationships,
}: Props): string {
  const baseSpacing = resolveBlockSpacing({
    behavior,
    snapshot,
  });

  //
  // IMMERSIVE ENTRY
  //

  if (relationships.continuity.enteringImmersive) {
    return `${baseSpacing} pt-32 md:pt-40`;
  }

  //
  // IMMERSIVE EXIT
  //

  if (relationships.continuity.exitingImmersive) {
    return `${baseSpacing} pb-32 md:pb-40`;
  }

  //
  // DECOMPRESSION
  //

  if (relationships.continuity.decompressionTransition) {
    return `${baseSpacing} pt-24`;
  }

  //
  // COMPRESSION
  //

  if (relationships.continuity.compressionTransition) {
    return `${baseSpacing} pb-12`;
  }

  return baseSpacing;
}
