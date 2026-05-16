import type { PresentationProfile, PresentationProfileVariant } from "./types";

export const presentationProfiles: Record<
  PresentationProfileVariant,
  PresentationProfile
> = {
  immersive: {
    density: "spacious",

    rhythm: "immersive",

    overlays: true,

    transitions: "dramatic",

    sceneIntensity: "dramatic",

    navigation: "immersive",

    atmosphericDepth: "immersive",

    environmentalPressure: "soft",

    motionRestraint: "dynamic",
  },

  editorial: {
    density: "balanced",

    rhythm: "editorial",

    overlays: false,

    transitions: "balanced",

    sceneIntensity: "balanced",

    navigation: "minimal",

    atmosphericDepth: "balanced",

    environmentalPressure: "balanced",

    motionRestraint: "restrained",
  },

  minimal: {
    density: "tight",

    rhythm: "editorial",

    overlays: false,

    transitions: "soft",

    sceneIntensity: "soft",

    navigation: "minimal",

    atmosphericDepth: "minimal",

    environmentalPressure: "soft",

    motionRestraint: "minimal",
  },

  luxury: {
    density: "spacious",

    rhythm: "cinematic",

    overlays: true,

    transitions: "dramatic",

    sceneIntensity: "balanced",

    navigation: "immersive",

    atmosphericDepth: "immersive",

    environmentalPressure: "soft",

    motionRestraint: "balanced",
  },

  technical: {
    density: "balanced",

    rhythm: "editorial",

    overlays: false,

    transitions: "balanced",

    sceneIntensity: "balanced",

    navigation: "minimal",

    atmosphericDepth: "balanced",

    environmentalPressure: "intense",

    motionRestraint: "restrained",
  },

  experimental: {
    density: "spacious",

    rhythm: "immersive",

    overlays: true,

    transitions: "dramatic",

    sceneIntensity: "dramatic",

    navigation: "immersive",

    atmosphericDepth: "immersive",

    environmentalPressure: "balanced",

    motionRestraint: "dynamic",
  },
};
