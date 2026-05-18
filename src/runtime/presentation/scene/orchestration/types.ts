import type {
  EnvironmentalPressure,
  MotionRestraint,
} from "@/runtime/presentation/composition/contract";

export type BreathingBias = "compressed" | "balanced" | "spacious";

export type OverlayDepth = "minimal" | "medium" | "deep";

export type SceneOrchestration = {
  environmentalPressure: EnvironmentalPressure;

  breathingBias: BreathingBias;

  motionRestraint: MotionRestraint;

  overlayDepth: OverlayDepth;
};
