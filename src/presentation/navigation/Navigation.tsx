import { navigationRegistry } from "./registry";

export function Navigation() {
  const NavigationComponent = navigationRegistry.immersive;

  return <NavigationComponent />;
}
