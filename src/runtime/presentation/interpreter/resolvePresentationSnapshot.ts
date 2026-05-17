import {
  resolveSpatialPressure,
  type CompositionContract,
} from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { PresentationRuntimeSnapshot } from "./types";

import { resolveCadence } from "../motion";

import { resolveAtmosphericModulation } from "../atmosphere";

import { resolveAtmosphere } from "../resolvers";

import { resolveRenderingAttributes } from "../rendering";

import { resolveRuntimeSurfaces } from "../surfaces";

import { resolveRuntimeLayers } from "../layers";

import {
  resolveCinematicContainer,
  resolveOverlayRendering,
  resolvePanelRendering,
  resolveTypographyRendering,
} from "../system";

type Props = {
  composition: CompositionContract;

  scene: SceneRuntime;
};

export function resolvePresentationSnapshot({
  composition,
  scene,
}: Props): PresentationRuntimeSnapshot {
  //
  // ATMOSPHERE
  //

  const atmosphere = resolveAtmosphere({
    scene,
    composition,
  });

  const atmosphericModulation = resolveAtmosphericModulation(atmosphere);

  //
  // SPATIAL
  //

  const spatialPressure = resolveSpatialPressure({
    composition,
    scene: scene.definition,
  });

  const spatial = {
    cadence: composition.rhythm,

    pressure: composition.sceneIntensity,

    breathing: composition.reactivity.breathing,

    openness:
      composition.environmentalPressure === "soft"
        ? 0.9
        : composition.environmentalPressure === "balanced"
          ? 0.6
          : 0.3,

    compression:
      composition.density === "tight"
        ? 0.9
        : composition.density === "balanced"
          ? 0.5
          : 0.2,

    spatialPressure,
  };

  //
  // MOTION
  //

  const motion = resolveCadence({
    composition,

    environment: scene.environment,
  });

  //
  // RENDERING
  //

  const rendering = resolveRenderingAttributes({
    atmospheric: atmosphericModulation,

    environment: scene.environment,

    motion,

    spatialPressure,
  });

  //
  // SYSTEM
  //

  const system = {
    cinematic: resolveCinematicContainer({
      rendering,
    }),

    overlay: resolveOverlayRendering({
      rendering,
    }),

    panel: resolvePanelRendering({
      rendering,
    }),

    typography: resolveTypographyRendering({
      rendering,
    }),
  };

  //
  // SURFACES
  //

  const surfaces = resolveRuntimeSurfaces({
    atmosphere,

    rendering,
  });

  //
  // LAYERS
  //

  const layers = resolveRuntimeLayers({
    atmosphere,

    rendering,
  });

  //
  // RETURN SNAPSHOT
  //

  return {
    system,

    atmosphere,

    atmosphericModulation,

    spatial,

    layers,

    motion,

    rendering,

    surfaces,

    scene,
  };
}
