import type { AtmosphericModulation } from "../atmosphere";

import type { MotionCadence } from "../motion";

import type { SpatialPressure } from "../composition";

import type { RenderingAttributes } from "./types";

import { resolveSurfaceTreatment } from "./resolveSurfaceTreatment";

import { resolveDepthTreatment } from "./resolveDepthTreatment";

import { resolveOverlayTreatment } from "./resolveOverlayTreatment";

import { resolveMotionTreatment } from "./resolveMotionTreatment";

type Props = {
  atmospheric: AtmosphericModulation;

  motion: MotionCadence;

  spatialPressure: SpatialPressure;
};

export function resolveRenderingAttributes({
  atmospheric,
  motion,
  spatialPressure,
}: Props): RenderingAttributes {
  return {
    surface: resolveSurfaceTreatment({
      atmospheric,
      spatialPressure,
    }),

    depth: resolveDepthTreatment({
      atmospheric,
    }),

    overlay: resolveOverlayTreatment({
      atmospheric,
    }),

    motion: resolveMotionTreatment({
      motion,
    }),

    atmosphere: atmospheric,

    spatialPressure,
  };
}
