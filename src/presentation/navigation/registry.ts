import { CinematicNavigation, ImmersiveNavigation } from "@/presentation";

export const navigationRegistry = {
  immersive: ImmersiveNavigation,
  cinematic: CinematicNavigation,
  minimal: ImmersiveNavigation,
};

export type NavigationVariant = keyof typeof navigationRegistry;
