import type {
  PresentationProfile,
  PresentationProfileVariant,
} from "@/runtime/presentation/profiles/contracts/types";

export const presentationProfiles: Record<
  PresentationProfileVariant,
  PresentationProfile
> = {
  immersive: {
    semantics: {
      overlays: true,

      navigation: "immersive",
    },

    orchestration: {
      density: "spacious",

      rhythm: "immersive",

      transitions: "dramatic",

      sceneIntensity: "dramatic",

      atmosphericDepth: "immersive",

      environmentalPressure: "soft",

      motionRestraint: "dynamic",
    },
  },

  editorial: {
    semantics: {
      overlays: false,

      navigation: "minimal",
    },

    orchestration: {
      density: "balanced",

      rhythm: "editorial",

      transitions: "balanced",

      sceneIntensity: "balanced",

      atmosphericDepth: "balanced",

      environmentalPressure: "balanced",

      motionRestraint: "restrained",
    },
  },

  minimal: {
    semantics: {
      overlays: false,

      navigation: "minimal",
    },

    orchestration: {
      density: "tight",

      rhythm: "editorial",

      transitions: "soft",

      sceneIntensity: "soft",

      atmosphericDepth: "minimal",

      environmentalPressure: "soft",

      motionRestraint: "minimal",
    },
  },

  luxury: {
    semantics: {
      overlays: true,

      navigation: "immersive",
    },

    orchestration: {
      density: "spacious",

      rhythm: "cinematic",

      transitions: "dramatic",

      sceneIntensity: "balanced",

      atmosphericDepth: "immersive",

      environmentalPressure: "soft",

      motionRestraint: "balanced",
    },
  },

  technical: {
    semantics: {
      overlays: false,

      navigation: "minimal",
    },

    orchestration: {
      density: "balanced",

      rhythm: "editorial",

      transitions: "balanced",

      sceneIntensity: "balanced",

      atmosphericDepth: "balanced",

      environmentalPressure: "intense",

      motionRestraint: "restrained",
    },
  },

  experimental: {
    semantics: {
      overlays: true,

      navigation: "immersive",
    },

    orchestration: {
      density: "spacious",

      rhythm: "immersive",

      transitions: "dramatic",

      sceneIntensity: "dramatic",

      atmosphericDepth: "immersive",

      environmentalPressure: "balanced",

      motionRestraint: "dynamic",
    },
  },
};
