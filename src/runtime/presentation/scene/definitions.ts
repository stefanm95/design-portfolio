import type { SceneDefinition } from "./types";

export type SceneId =
  | "hero"
  | "philosophy"
  | "projects"
  | "experience"
  | "about"
  | "contact";

export const sceneDefinitions: Record<SceneId, SceneDefinition> = {
  hero: {
    id: "hero",

    semantics: {
      atmosphere: "immersive",

      tone: "cinematic",
    },

    orchestration: {
      environmentalPressure: "soft",

      breathingBias: "spacious",

      motionRestraint: "restrained",

      overlayDepth: "deep",
    },
  },

  philosophy: {
    id: "philosophy",

    semantics: {
      atmosphere: "editorial",

      tone: "reflective",
    },

    orchestration: {
      environmentalPressure: "balanced",

      breathingBias: "balanced",

      motionRestraint: "restrained",

      overlayDepth: "medium",
    },
  },

  projects: {
    id: "projects",

    semantics: {
      atmosphere: "immersive",

      tone: "showcase",
    },

    orchestration: {
      environmentalPressure: "balanced",

      breathingBias: "spacious",

      motionRestraint: "balanced",

      overlayDepth: "deep",
    },
  },

  experience: {
    id: "experience",

    semantics: {
      atmosphere: "technical",

      tone: "systemic",
    },

    orchestration: {
      environmentalPressure: "intense",

      breathingBias: "compressed",

      motionRestraint: "balanced",

      overlayDepth: "medium",
    },
  },

  about: {
    id: "about",

    semantics: {
      atmosphere: "minimal",

      tone: "structured",
    },

    orchestration: {
      environmentalPressure: "soft",

      breathingBias: "balanced",

      motionRestraint: "restrained",

      overlayDepth: "minimal",
    },
  },

  contact: {
    id: "contact",

    semantics: {
      atmosphere: "quiet",

      tone: "closing",
    },

    orchestration: {
      environmentalPressure: "soft",

      breathingBias: "spacious",

      motionRestraint: "restrained",

      overlayDepth: "minimal",
    },
  },
};
