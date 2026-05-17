import type { CompositionContract } from "@/runtime/presentation/composition";

import { resolveSpatialPressure } from "@/runtime/presentation/composition";

import type { SceneRuntime } from "@/runtime/presentation/scene";

import type { PresentationProfile } from "@/runtime/presentation/profiles";

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

  profile: PresentationProfile;
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

    spatialPressure: resolveSpatialPressure({
      composition,
      scene,
    }),
  };

  //
  // MOTION
  //

  const motion = resolveCadence(composition);

  //
  // RENDERING
  //

  const rendering = resolveRenderingAttributes({
    atmospheric: atmosphericModulation,

    motion,

    spatialPressure: spatial.spatialPressure,
  });

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

  const surfaces = resolveRuntimeSurfaces({
    atmosphere,

    rendering,
  });

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

    environmental: {
      cinematicEnergy:
        composition.sceneIntensity === "dramatic"
          ? 0.9
          : composition.sceneIntensity === "balanced"
            ? 0.6
            : 0.4,

      overlayIntensity: composition.overlays ? 0.8 : 0.2,

      atmosphericDensity:
        composition.atmosphericDepth === "immersive"
          ? 0.9
          : composition.atmosphericDepth === "balanced"
            ? 0.6
            : 0.3,

      environmentalPressure: composition.environmentalPressure,
    },

    surfaces,

    scene,
  };
}
