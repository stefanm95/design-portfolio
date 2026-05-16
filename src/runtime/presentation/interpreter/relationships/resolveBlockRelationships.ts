import type { CompositionSemantic } from "@/runtime/presentation/semantics";

import type { RuntimeBlockRelationship } from "./types";
import { type AtmosphereState } from "@/runtime/presentation/resolvers";

type Props = {
  index: number;

  totalBlocks: number;

  currentRole: CompositionSemantic;

  previousRole?: CompositionSemantic;

  nextRole?: CompositionSemantic;

  currentAtmosphere: AtmosphereState;

  previousAtmosphere?: AtmosphereState;

  nextAtmosphere?: AtmosphereState;
};

function isCompressedRole(role?: CompositionSemantic) {
  return role === "meta" || role === "transition";
}

export function resolveBlockRelationships({
  index,
  totalBlocks,
  currentRole,
  previousRole,
  nextRole,
  currentAtmosphere,
  previousAtmosphere,
  nextAtmosphere,
}: Props): RuntimeBlockRelationship {
  return {
    index,

    totalBlocks,

    isFirst: index === 0,

    isLast: index === totalBlocks - 1,

    previousRole,

    nextRole,

    previousAtmosphere,

    nextAtmosphere,

    continuity: {
      enteringImmersive:
        previousAtmosphere !== "immersive" && currentAtmosphere === "immersive",

      exitingImmersive:
        currentAtmosphere === "immersive" && nextAtmosphere !== "immersive",

      compressionTransition:
        !isCompressedRole(previousRole) && isCompressedRole(currentRole),

      decompressionTransition:
        isCompressedRole(previousRole) && !isCompressedRole(currentRole),
    },
  };
}
