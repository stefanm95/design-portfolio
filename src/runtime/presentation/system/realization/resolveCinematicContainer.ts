import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { ResolvedCinematicContainer } from "../contracts/types";

type Props = {
  rendering: RenderingAttributes;
};

export function resolveCinematicContainer({
  rendering,
}: Props): ResolvedCinematicContainer {
  const cinematicDepth = rendering.depth.cinematicDepth;

  const atmosphericDepth = rendering.atmosphere.cinematic.atmosphericDepth;

  return {
    cinematic:
      cinematicDepth > 1
        ? `
            isolate
            overflow-hidden
          `
        : "",

    spacing: atmosphericDepth > 1 ? "space-y-24" : "space-y-16",
  };
}
