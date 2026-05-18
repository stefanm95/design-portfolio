import type { PresentationProfileVariant } from "@/runtime/presentation/profiles";

import { projectLayoutScale } from "../realization/projectLayoutScale";

type Props = {
  profile: PresentationProfileVariant;
};

export function resolveProjectLayout({ profile }: Props) {
  switch (profile) {
    case "immersive":
    case "luxury":
    case "experimental":
      return projectLayoutScale.cinematic;

    case "editorial":
    case "technical":
    case "minimal":
      return projectLayoutScale.editorial;

    default:
      return projectLayoutScale.editorial;
  }
}
