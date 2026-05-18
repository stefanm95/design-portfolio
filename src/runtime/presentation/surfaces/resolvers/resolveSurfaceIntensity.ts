import type { RenderingAttributes } from "../../rendering";

import type { AtmosphereState } from "../../resolvers";

import type { SurfaceIntensity } from "../contracts";

type Props = {
  atmosphere: AtmosphereState;

  rendering: RenderingAttributes;
};

export function resolveSurfaceIntensity({
  atmosphere,
  rendering,
}: Props): SurfaceIntensity {
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
