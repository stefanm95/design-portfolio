import { navigationRegistry } from "./registry";

import { resolveNavigation } from "@/runtime/presentation/resolvers";

import { resolvePresentationProfile } from "@/runtime/presentation/profiles";

type Props = {
  profileVariant?: "immersive" | "editorial" | "minimal";
};

export function Navigation({ profileVariant = "immersive" }: Props) {
  //
  // TEMPORARY:
  // later this resolves from
  // active presentation state
  //

  const profile = resolvePresentationProfile(profileVariant);

  const navigationVariant = resolveNavigation(profile);

  const NavigationComponent = navigationRegistry[navigationVariant];

  return <NavigationComponent />;
}
