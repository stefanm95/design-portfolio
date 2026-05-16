import type { CompositionSemantic } from "../../semantics";
import type { SpatialBehavior } from "./types";

export function resolveSpatialBehavior(
  role: CompositionSemantic,
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
