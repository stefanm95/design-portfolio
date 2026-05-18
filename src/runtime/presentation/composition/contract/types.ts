import type {
  OrchestrationContract,
  SemanticContract,
} from "@/runtime/presentation";

export type CompositionContract = {
  semantics: SemanticContract;

  orchestration: OrchestrationContract;
};
