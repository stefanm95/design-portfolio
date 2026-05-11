export const sceneRegistry = {
  hero: {
    id: "hero",

    atmosphere: "introduction",

    tone: "cinematic",
  },

  philosophy: {
    id: "philosophy",

    atmosphere: "editorial",

    tone: "reflective",
  },

  about: {
    id: "about",

    atmosphere: "minimal",

    tone: "structured",
  },

  projects: {
    id: "projects",

    atmosphere: "immersive",

    tone: "showcase",
  },

  experience: {
    id: "experience",

    atmosphere: "technical",

    tone: "systemic",
  },

  contact: {
    id: "contact",

    atmosphere: "quiet",

    tone: "closing",
  },
} as const;

export type SceneId = keyof typeof sceneRegistry;
