import type { RenderingAttributes } from "@/runtime/presentation/rendering";

type Props = {
  rendering: RenderingAttributes;
};

export function resolveOverlayRendering({ rendering }: Props) {
  return {
    opacity: rendering.overlay.overlayOpacity,

    blur: rendering.overlay.gradientStrength,

    vignette: rendering.overlay.vignetteIntensity,
  };
}
