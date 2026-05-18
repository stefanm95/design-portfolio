import { navigationRegistry } from "./registry";

import { resolveNavigation } from "@/runtime/presentation/resolvers";

import { resolveProfile } from "@/runtime/presentation/resolvers";

import type { NavigationVariant } from "./registry";

type Props = {
  profileVariant?: "immersive" | "editorial" | "minimal";
};

export function Navigation({ profileVariant = "immersive" }: Props) {
  //
  // PROFILE
  //

  const profile = resolveProfile(profileVariant);

  //
  // VARIANT
  //

  const navigationVariant: NavigationVariant = resolveNavigation(profile);

  //
  // COMPONENT
  //

  const NavigationComponent = navigationRegistry[navigationVariant];

  //
  // RENDER
  //

  return <NavigationComponent />;
}
