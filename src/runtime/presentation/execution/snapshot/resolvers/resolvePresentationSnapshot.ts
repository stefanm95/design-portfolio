import type { CompositionContract } from "@/runtime/presentation/composition/contract";

import { resolveSpatialPressure } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import { resolveCadence } from "@/runtime/presentation/motion";

import { resolveAtmosphericModulation } from "@/runtime/presentation/atmosphere";

import { resolveAtmosphere } from "@/runtime/presentation/resolvers";

import { resolveRenderingRuntime } from "@/runtime/presentation/rendering";

import { resolveRuntimeSurfaces } from "@/runtime/presentation/surfaces";

import { resolveRuntimeLayers } from "@/runtime/presentation/layers";

import {
  resolveCinematicContainer,
  resolveOverlayRendering,
  resolvePanelRendering,
  resolveTypographyRendering,
} from "@/runtime/presentation/system";

import { resolveLayoutRuntime } from "@/runtime/presentation/layout";
import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";
import type { PresentationRuntimeSnapshot } from "../contracts";

type Props = {
  composition: CompositionContract;

  scene: SceneRuntime;

  profile: PresentationProfileVariant;
};

export function resolvePresentationSnapshot({
  composition,
  scene,
  profile,
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
    cadence: composition.orchestration.rhythm,

    pressure: composition.orchestration.sceneIntensity,

    breathing: composition.orchestration.reactivity.breathing,

    openness:
      composition.orchestration.environmentalPressure === "soft"
        ? 0.9
        : composition.orchestration.environmentalPressure === "balanced"
          ? 0.6
          : 0.3,

    compression:
      composition.orchestration.density === "tight"
        ? 0.9
        : composition.orchestration.density === "balanced"
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

  const rendering = resolveRenderingRuntime({
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
  // LAYOUT
  //

  const layout = resolveLayoutRuntime({
    composition,
  });

  //
  // RETURN SNAPSHOT
  //

  return {
    profile,

    layout,

    composition,

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
