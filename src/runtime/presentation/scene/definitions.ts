import type { SceneDefinition } from "./types";

export const sceneDefinitions = {
  hero: {
    id: "hero",

    atmosphere: "immersive",

    tone: "cinematic",

    environmentalPressure: "soft",

    breathingBias: "spacious",

    motionRestraint: "restrained",

    overlayDepth: "deep",
  },

  philosophy: {
    id: "philosophy",

    atmosphere: "editorial",

    tone: "reflective",

    environmentalPressure: "balanced",

    breathingBias: "balanced",

    motionRestraint: "restrained",

    overlayDepth: "medium",
  },

  projects: {
    id: "projects",

    atmosphere: "immersive",

    tone: "showcase",

    environmentalPressure: "balanced",

    breathingBias: "spacious",

    motionRestraint: "balanced",

    overlayDepth: "deep",
  },

  experience: {
    id: "experience",

    atmosphere: "technical",

    tone: "systemic",

    environmentalPressure: "intense",

    breathingBias: "compressed",

    motionRestraint: "balanced",

    overlayDepth: "medium",
  },

  about: {
    id: "about",

    atmosphere: "minimal",

    tone: "structured",

    environmentalPressure: "soft",

    breathingBias: "balanced",

    motionRestraint: "restrained",

    overlayDepth: "minimal",
  },

  contact: {
    id: "contact",

    atmosphere: "quiet",

    tone: "closing",

    environmentalPressure: "soft",

    breathingBias: "spacious",

    motionRestraint: "restrained",

    overlayDepth: "minimal",
  },
} as const satisfies Record<string, SceneDefinition>;

export type SceneId = keyof typeof sceneDefinitions;
