import type { PresentationBlock } from "@/types/presentation";

import type { PresentationBlockRenderer } from "@/presentation/renderers/types";

export type ResolvedBlockComponentPair<TBlock extends PresentationBlock> = {
  block: TBlock;

  component: PresentationBlockRenderer<TBlock>;
};
