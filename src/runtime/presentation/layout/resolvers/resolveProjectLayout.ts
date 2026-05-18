import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import { projectLayoutRealization } from "../realization/projectLayoutRealization";

type Props = {
  profile: PresentationProfileVariant;
};

export function resolveProjectLayout({ profile }: Props) {
  switch (profile) {
    case "immersive":
    case "luxury":
    case "experimental":
      return projectLayoutRealization.cinematic;

    case "editorial":
    case "technical":
    case "minimal":
      return projectLayoutRealization.editorial;

    default:
      return projectLayoutRealization.editorial;
  }
}
