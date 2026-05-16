import type { AtmosphericModulation } from "../atmosphere";

import type { SpatialPressure } from "../composition";

export type SurfaceTreatment = {
  panelOpacity: number;

  blur: string;

  borderOpacity: number;

  glowIntensity: number;

  textureIntensity: number;
};

export type DepthTreatment = {
  cinematicDepth: number;

  layeringIntensity: number;

  elevation: number;
};

export type OverlayTreatment = {
  overlayOpacity: number;

  vignetteIntensity: number;

  gradientStrength: number;
};

export type MotionTreatment = {
  softness: number;

  restraint: number;
};

export type RenderingAttributes = {
  surface: SurfaceTreatment;

  depth: DepthTreatment;

  overlay: OverlayTreatment;

  motion: MotionTreatment;

  atmosphere: AtmosphericModulation;

  spatialPressure: SpatialPressure;
};
