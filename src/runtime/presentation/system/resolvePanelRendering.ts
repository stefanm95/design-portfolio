import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { PanelRendering } from "./types";

type Props = {
  rendering: RenderingAttributes;
};

export function resolvePanelRendering({ rendering }: Props): PanelRendering {
  const opacity = rendering.surface.panelOpacity;

  const blur = rendering.surface.blur;

  const elevation = rendering.depth.elevation;

  return {
    panel: `
      border border-white/10
      bg-white/[${opacity}]
      ${blur}
    `,

    elevation,

    glow:
      elevation > 1
        ? "shadow-[0_0_80px_rgba(255,255,255,0.08)]"
        : "shadow-none",
  };
}
