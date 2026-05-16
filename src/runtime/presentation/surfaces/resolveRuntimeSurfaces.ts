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
  const cinematicDepth = rendering.depth.cinematicDepth;

  const atmosphericDepth = rendering.atmosphere.cinematic.atmosphericDepth;

  //
  // IMMERSIVE
  //

  if (
    atmosphere === "immersive" &&
    cinematicDepth > 1 &&
    atmosphericDepth > 1
  ) {
    return "deep";
  }

  //
  // EDITORIAL
  //

  if (atmosphere === "editorial") {
    return "soft";
  }

  //
  // QUIET / MINIMAL
  //

  if (atmosphere === "minimal" || atmosphere === "quiet") {
    return "minimal";
  }

  //
  // DEFAULT
  //

  return "medium";
}

export function resolveRuntimeSurfaces({
  atmosphere,
  rendering,
}: Props): RuntimeSurfaceSet {
  const intensity = resolveSurfaceIntensity(atmosphere, rendering);

  return surfaceScale[intensity];
}
