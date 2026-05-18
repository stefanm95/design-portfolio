import type { RenderingAttributes } from "@/runtime/presentation/rendering";
import type { ResolvedOverlayRendering } from "@/runtime/presentation/system/contracts/types";

type Props = {
  rendering: RenderingAttributes;
};

export function resolveOverlayRendering({
  rendering,
}: Props): ResolvedOverlayRendering {
  return {
    opacity: rendering.overlay.overlayOpacity,

    blur: rendering.overlay.gradientStrength,

    vignette: rendering.overlay.vignetteIntensity,
  };
}
