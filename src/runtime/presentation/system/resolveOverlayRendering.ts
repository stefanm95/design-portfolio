import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { OverlayRendering } from "./types";

type Props = {
  rendering: RenderingAttributes;
};

export function resolveOverlayRendering({
  rendering,
}: Props): OverlayRendering {
  return {
    opacity: rendering.overlay.overlayOpacity,

    blur: rendering.overlay.gradientStrength,

    vignette: rendering.overlay.vignetteIntensity,
  };
}
