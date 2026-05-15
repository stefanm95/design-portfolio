import type { PresentationMode } from "@/types/presentation";

export type AtmosphereState =
  | "immersive"
  | "editorial"
  | "technical"
  | "ambient";

export function resolveAtmosphere(
  mode: PresentationMode,
  scene: string,
): AtmosphereState {
  if (scene === "technical") {
    return "technical";
  }

  switch (mode) {
    case "cinematic":
      return "immersive";

    case "editorial":
    default:
      return "editorial";
  }
}
