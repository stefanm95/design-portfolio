import type { RenderingAttributes } from "@/runtime/presentation/rendering";

type Props = {
  rendering: RenderingAttributes;
};

export function resolveTypographyRendering({ rendering }: Props) {
  const contrast = rendering.atmosphere.visual.contrast;

  const softness = rendering.motion.softness;

  return {
    contrast,

    softness,

    titleClass: contrast > 1 ? "text-white" : "text-white/92",

    bodyClass: softness > 1 ? "text-white/72" : "text-white/80",
  };
}
