import type { PresentationProfile, PresentationProfileVariant } from "./types";

export const presentationProfiles: Record<
  PresentationProfileVariant,
  PresentationProfile
> = {
  immersive: {
    density: "spacious",

    rhythm: "immersive",

    overlays: true,

    atmosphere: "cinematic",

    transitions: "dramatic",

    navigation: "immersive",
  },

  editorial: {
    density: "balanced",

    rhythm: "editorial",

    overlays: false,

    atmosphere: "editorial",

    transitions: "balanced",

    navigation: "minimal",
  },

  minimal: {
    density: "tight",

    rhythm: "editorial",

    overlays: false,

    atmosphere: "minimal",

    transitions: "soft",

    navigation: "minimal",
  },
};
