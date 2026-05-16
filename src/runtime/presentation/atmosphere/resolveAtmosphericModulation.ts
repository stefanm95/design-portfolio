import type { AtmosphereState } from "@/runtime/presentation/resolvers";

export type AtmosphericModulation = {
  overlays: {
    opacity: number;
    blur: number;
    noise: number;
  };

  visual: {
    contrast: number;
    saturation: number;
    luminance: number;
  };

  cinematic: {
    motionIntensity: number;
    spacingIntensity: number;
    atmosphericDepth: number;
  };
};

export function resolveAtmosphericModulation(
  atmosphere: AtmosphereState,
): AtmosphericModulation {
  switch (atmosphere) {
    case "immersive":
      return {
        overlays: {
          opacity: 0.75,
          blur: 24,
          noise: 0.18,
        },

        visual: {
          contrast: 1.08,
          saturation: 1.04,
          luminance: 0.96,
        },

        cinematic: {
          motionIntensity: 1.2,
          spacingIntensity: 1.15,
          atmosphericDepth: 1.25,
        },
      };

    case "technical":
      return {
        overlays: {
          opacity: 0.18,
          blur: 8,
          noise: 0.04,
        },

        visual: {
          contrast: 1,
          saturation: 0.92,
          luminance: 1,
        },

        cinematic: {
          motionIntensity: 0.82,
          spacingIntensity: 0.9,
          atmosphericDepth: 0.7,
        },
      };

    case "quiet":
      return {
        overlays: {
          opacity: 0.12,
          blur: 4,
          noise: 0.02,
        },

        visual: {
          contrast: 0.96,
          saturation: 0.94,
          luminance: 1.04,
        },

        cinematic: {
          motionIntensity: 0.72,
          spacingIntensity: 1.08,
          atmosphericDepth: 0.82,
        },
      };

    case "minimal":
      return {
        overlays: {
          opacity: 0.08,
          blur: 2,
          noise: 0,
        },

        visual: {
          contrast: 0.98,
          saturation: 0.9,
          luminance: 1.02,
        },

        cinematic: {
          motionIntensity: 0.76,
          spacingIntensity: 0.96,
          atmosphericDepth: 0.6,
        },
      };

    default:
      return {
        overlays: {
          opacity: 0.28,
          blur: 12,
          noise: 0.08,
        },

        visual: {
          contrast: 1,
          saturation: 1,
          luminance: 1,
        },

        cinematic: {
          motionIntensity: 1,
          spacingIntensity: 1,
          atmosphericDepth: 1,
        },
      };
  }
}
