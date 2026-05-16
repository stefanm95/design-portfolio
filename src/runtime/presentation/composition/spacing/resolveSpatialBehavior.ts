import type { SpatialBehavior } from "./types";

import type { PresentationRole } from "@/presentation/renderers/types";

export function resolveSpatialBehavior(
  role: PresentationRole,
): SpatialBehavior {
  switch (role) {
    //
    // HIGH BREATHING
    //

    case "hero":
    case "immersive":
      return "immersive";

    //
    // HIGH COMPRESSION
    //

    case "meta":
    case "transition":
      return "compact";

    //
    // BALANCED COMPOSITION
    //

    case "intro":
    case "showcase":
    case "gallery":
    case "detail":
    case "closing":
    default:
      return "balanced";
  }
}
