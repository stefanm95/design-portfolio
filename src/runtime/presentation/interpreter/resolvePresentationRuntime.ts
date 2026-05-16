import type { ProjectPresentation } from "@/types/presentation";

import type { CompositionContract } from "@/runtime/presentation/composition";

import type { PresentationRegistry } from "@/presentation/renderers/types";

import type { CompositionSemanticMap } from "@/runtime/presentation/semantics";

import { resolvePresentationBlockRuntime } from "./resolvePresentationBlockRuntime";

import type { ResolvedPresentationBlockRuntime } from "./types";

type Props = {
  presentation: ProjectPresentation;

  composition: CompositionContract;

  registry: PresentationRegistry;

  roleMap: CompositionSemanticMap;
};

export function resolvePresentationRuntime({
  presentation,
  composition,
  registry,
  roleMap,
}: Props): ResolvedPresentationBlockRuntime[] {
  return presentation.blocks
    .map((block) =>
      resolvePresentationBlockRuntime({
        block,
        presentation,
        composition,
        registry,
        roleMap,
      }),
    )
    .filter(
      (runtime): runtime is ResolvedPresentationBlockRuntime =>
        runtime !== null,
    );
}
