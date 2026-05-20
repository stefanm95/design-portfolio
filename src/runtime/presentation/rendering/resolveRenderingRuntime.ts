import type { AtmosphericModulation } from "../atmosphere";
import type { SpatialPressure } from "../composition";
import type { MotionCadence } from "../motion";
import type { EnvironmentalRuntime } from "../scene";
import type {
  DepthTreatment,
  MotionTreatment,
  OverlayTreatment,
  RenderingAttributes,
  SurfaceTreatment,
} from "./types";

type Props = {
  atmospheric: AtmosphericModulation;

  environment: EnvironmentalRuntime;

  motion: MotionCadence;

  spatialPressure: SpatialPressure;
};

function resolveSurfaceTreatment({
  atmospheric,
  spatialPressure,
  environment,
}: Props): SurfaceTreatment {
  const pressureMultiplier =
    spatialPressure === "compressed"
      ? 0.9
      : spatialPressure === "spacious"
        ? 1.1
        : 1;

  return {
    panelOpacity: atmospheric.overlays.opacity * 0.8,

    blur: `${atmospheric.overlays.blur}px`,

    borderOpacity: atmospheric.visual.contrast * 0.12,

    glowIntensity: environment.cinematicDepth * pressureMultiplier,

    textureIntensity: atmospheric.overlays.noise,
  };
}

function resolveDepthTreatment({
  atmospheric,
  environment,
}: Props): DepthTreatment {
  return {
    cinematicDepth: environment.cinematicDepth,

    layeringIntensity: environment.spacingPressure,

    elevation: atmospheric.visual.contrast,
  };
}

function resolveOverlayTreatment({
  atmospheric,
  environment,
}: Props): OverlayTreatment {
  return {
    overlayOpacity: atmospheric.overlays.opacity,

    vignetteIntensity: environment.cinematicDepth * 0.7,

    gradientStrength: atmospheric.visual.saturation,
  };
}

function resolveMotionTreatment({ environment }: Props): MotionTreatment {
  return {
    softness: environment.cadenceSoftness,

    restraint: environment.motionRestraint,
  };
}

export function resolveRenderingRuntime(props: Props): RenderingAttributes {
  return {
    surface: resolveSurfaceTreatment(props),

    depth: resolveDepthTreatment(props),

    overlay: resolveOverlayTreatment(props),

    motion: resolveMotionTreatment(props),

    atmosphere: props.atmospheric,

    spatialPressure: props.spatialPressure,
  };
}
