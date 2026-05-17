import type { AtmosphericModulation } from "../atmosphere";

import type { MotionCadence } from "../motion";

import type { SpatialPressure } from "../composition";

import type { RenderingAttributes } from "./types";

import { resolveSurfaceTreatment } from "./resolveSurfaceTreatment";

import { resolveDepthTreatment } from "./resolveDepthTreatment";

import { resolveOverlayTreatment } from "./resolveOverlayTreatment";

import { resolveMotionTreatment } from "./resolveMotionTreatment";
import type { EnvironmentalRuntime } from "../scene";

type Props = {
  atmospheric: AtmosphericModulation;

  environment: EnvironmentalRuntime;

  motion: MotionCadence;

  spatialPressure: SpatialPressure;
};

export function resolveRenderingAttributes({
  atmospheric,
  environment,
  motion,
  spatialPressure,
}: Props): RenderingAttributes {
  return {
    surface: resolveSurfaceTreatment({
      atmospheric,
      environment,
      spatialPressure,
    }),

    depth: resolveDepthTreatment({
      atmospheric,
      environment,
    }),

    overlay: resolveOverlayTreatment({
      atmospheric,
      environment,
    }),

    motion: resolveMotionTreatment({
      motion,
      environment,
    }),

    atmosphere: atmospheric,

    spatialPressure,
  };
}
