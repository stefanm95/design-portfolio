import type {
  CompositionSemantic,
  AtmosphereState,
} from "@/runtime/presentation";
import type {} from "@/runtime/presentation";

export type RuntimeContinuityState = {
  enteringImmersive: boolean;

  exitingImmersive: boolean;

  compressionTransition: boolean;

  decompressionTransition: boolean;
};

export type RuntimeBlockRelationship = {
  index: number;

  totalBlocks: number;

  isFirst: boolean;

  isLast: boolean;

  previousRole?: CompositionSemantic;

  nextRole?: CompositionSemantic;

  previousAtmosphere?: AtmosphereState;

  nextAtmosphere?: AtmosphereState;

  continuity: RuntimeContinuityState;
};
