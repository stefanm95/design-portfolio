// navigation/registry.ts

import CinematicNavigation from "./variants/cinematic/CinematicNavigation";
import ImmersiveNavigation from "./variants/immersive/ImmersiveNavigation";

export const navigationRegistry = {
  immersive: ImmersiveNavigation,
  cinematic: CinematicNavigation,
  minimal: ImmersiveNavigation,
};

export type NavigationVariant = keyof typeof navigationRegistry;
