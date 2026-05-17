import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { TypographyRendering } from "./types";

type Props = {
  rendering: RenderingAttributes;
};

export function resolveTypographyRendering({
  rendering,
}: Props): TypographyRendering {
  const softness = rendering.motion.softness;

  return {
    contrast: 1,

    softness,

    titleClass: softness > 0.9 ? "text-white" : "text-white/92",

    bodyClass: softness > 0.9 ? "text-white/72" : "text-white/80",
  };
}
