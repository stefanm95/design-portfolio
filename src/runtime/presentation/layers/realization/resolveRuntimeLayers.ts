import type { AtmosphereState } from "@/runtime/presentation/resolvers";

import type { RenderingAttributes } from "@/runtime/presentation/rendering";

import type { RuntimeLayerSet } from "../contracts";

type Props = {
  atmosphere: AtmosphereState;

  rendering: RenderingAttributes;
};

export function resolveRuntimeLayers({
  atmosphere,
  rendering,
}: Props): RuntimeLayerSet {
  const cinematicDepth = rendering.depth.cinematicDepth;

  //
  // IMMERSIVE
  //

  if (atmosphere === "immersive") {
    return {
      atmosphericBackdrop: `
        bg-[radial-gradient(circle_at_top,
        rgba(255,255,255,0.08),
        transparent_60%)]
      `,

      overlayVeil: `
        bg-black/[0.28]
      `,

      ambientPresence: `
        opacity-100
        blur-3xl
      `,

      cinematicGlow:
        cinematicDepth > 1
          ? `
              shadow-[0_0_120px_rgba(255,255,255,0.08)]
            `
          : `
              shadow-[0_0_80px_rgba(255,255,255,0.05)]
            `,

      depthTreatment: `
        ring-1 ring-white/[0.08]
      `,

      textureLayer: `
        opacity-[0.035]
      `,
    };
  }

  //
  // EDITORIAL
  //

  if (atmosphere === "editorial") {
    return {
      atmosphericBackdrop: `
        bg-gradient-to-b
        from-transparent
        to-black/[0.08]
      `,

      overlayVeil: `
        bg-black/[0.12]
      `,

      ambientPresence: `
        opacity-60
      `,

      cinematicGlow: `
        shadow-[0_0_40px_rgba(255,255,255,0.04)]
      `,

      depthTreatment: `
        ring-1 ring-white/[0.04]
      `,

      textureLayer: `
        opacity-[0.02]
      `,
    };
  }

  //
  // MINIMAL / QUIET
  //

  return {
    atmosphericBackdrop: "",

    overlayVeil: `
      bg-black/[0.06]
    `,

    ambientPresence: `
      opacity-20
    `,

    cinematicGlow: "",

    depthTreatment: `
      ring-1 ring-white/[0.03]
    `,

    textureLayer: `
      opacity-[0.01]
    `,
  };
}
