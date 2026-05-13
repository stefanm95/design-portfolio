export type PresentationProfileId = "immersive" | "editorial" | "minimal";

export type PresentationProfile = {
  density: "tight" | "balanced" | "spacious";

  rhythm: "editorial" | "cinematic" | "immersive";

  overlays: boolean;

  atmosphere: "cinematic" | "editorial" | "minimal";

  transitions: "soft" | "balanced" | "dramatic";

  navigation: "immersive" | "minimal";
};
