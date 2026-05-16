import type { AtmosphericModulation } from "@/runtime/presentation/atmosphere";

import type { MotionCadence } from "@/runtime/presentation/motion";

import type { SpatialPressure } from "@/runtime/presentation/composition";

export type RenderingAttributes = {
  surface: {
    translucency: number;
    blur: number;
    elevation: number;
  };

  typography: {
    contrast: number;
    softness: number;
    density: number;
  };

  cinematic: {
    intensity: number;
    motionPresence: number;
    atmosphericDepth: number;
  };

  overlays: {
    opacity: number;
    noise: number;
    blur: number;
  };
};

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
  const pressureMultiplier =
    spatialPressure === "compressed"
      ? 0.9
      : spatialPressure === "spacious"
        ? 1.1
        : 1;

  return {
    surface: {
      translucency: atmospheric.overlays.opacity * 0.8,

      blur: atmospheric.overlays.blur,

      elevation: atmospheric.cinematic.atmosphericDepth * pressureMultiplier,
    },

    typography: {
      contrast: atmospheric.visual.contrast,

      softness: motion.transitionSoftness,

      density: pressureMultiplier,
    },

    cinematic: {
      intensity: atmospheric.cinematic.motionIntensity,

      motionPresence: motion.transitionSoftness,

      atmosphericDepth: atmospheric.cinematic.atmosphericDepth,
    },

    overlays: {
      opacity: atmospheric.overlays.opacity,

      noise: atmospheric.overlays.noise,

      blur: atmospheric.overlays.blur,
    },
  };
}
