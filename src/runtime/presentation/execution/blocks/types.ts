import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

import type { CompositionSemantic } from "@/runtime/presentation/semantics";

import type { PresentationRendererRuntime } from "@/runtime/presentation/execution/contracts";

//
// BLOCK RUNTIME
//

export type ResolvedPresentationBlockRuntime<TBlock extends PresentationBlock> =
  {
    block: TBlock;

    component: PresentationBlockRenderer<TBlock>;

    role: CompositionSemantic;

    runtime: PresentationRendererRuntime;
  };

//
// BLOCK / COMPONENT LINK
//

export type ResolvedBlockComponentPair<TBlock extends PresentationBlock> = {
  block: TBlock;

  component: PresentationBlockRenderer<TBlock>;
};
