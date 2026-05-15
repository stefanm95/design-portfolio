import { cinematicBlockRegistry } from "./cinematic";
import { editorialBlockRegistry } from "./editorial";

export const presentationBlockRegistry = {
  cinematic: cinematicBlockRegistry,

  editorial: editorialBlockRegistry,
};
export { default as ProjectPresentationRenderer } from "./ProjectPresentationRenderer";

export * from "./types";
