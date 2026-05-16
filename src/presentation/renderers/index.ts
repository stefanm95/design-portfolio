import { cinematicBlockRegistry } from "./cinematic";

import { editorialBlockRegistry } from "./editorial";

import type { PresentationRegistry } from "./types";

export const presentationBlockRegistry: Record<string, PresentationRegistry> = {
  cinematic: cinematicBlockRegistry,

  editorial: editorialBlockRegistry,
};

export { default as ProjectPresentationRenderer } from "./ProjectPresentationRenderer";

export * from "./types";

export * from "./presentationDialect";

export * from "./renderPresentationBlocks";
