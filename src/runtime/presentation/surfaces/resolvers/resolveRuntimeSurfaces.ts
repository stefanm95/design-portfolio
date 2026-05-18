import type { RenderingAttributes } from "../../rendering";

import type { AtmosphereState } from "../../resolvers";

import { surfaceRealizationScale } from "../realization";

import { resolveSurfaceIntensity } from "./resolveSurfaceIntensity";

import type { ResolvedSurfaceRealization } from "../contracts";

type Props = {
  atmosphere: AtmosphereState;

  rendering: RenderingAttributes;
};

export function resolveRuntimeSurfaces({
  atmosphere,
  rendering,
}: Props): ResolvedSurfaceRealization {
  const intensity = resolveSurfaceIntensity({
    atmosphere,
    rendering,
  });

  return surfaceRealizationScale[intensity];
}
