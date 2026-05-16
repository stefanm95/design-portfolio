import type { RenderingAttributes } from "../rendering";

import type { AtmosphereState } from "../resolvers";

import { surfaceScale } from "./scale";

import type { RuntimeSurfaceSet, SurfaceIntensity } from "./types";

type Props = {
  atmosphere: AtmosphereState;

  rendering: RenderingAttributes;
};

function resolveSurfaceIntensity(
  atmosphere: AtmosphereState,
  rendering: RenderingAttributes,
): SurfaceIntensity {
  if (atmosphere === "immersive" && rendering.cinematic.intensity > 0.75) {
    return "deep";
  }

  if (atmosphere === "editorial") {
    return "soft";
  }

  if (atmosphere === "minimal" || atmosphere === "quiet") {
    return "minimal";
  }

  return "medium";
}

export function resolveRuntimeSurfaces({
  atmosphere,
  rendering,
}: Props): RuntimeSurfaceSet {
  const intensity = resolveSurfaceIntensity(atmosphere, rendering);

  return surfaceScale[intensity];
}
