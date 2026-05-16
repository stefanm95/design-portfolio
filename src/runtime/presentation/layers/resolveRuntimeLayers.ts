import type { AtmosphereState } from "../resolvers";

import type { RenderingAttributes } from "../rendering";

import type { RuntimeLayerSet } from "./types";

type Props = {
  atmosphere: AtmosphereState;

  rendering: RenderingAttributes;
};

export function resolveRuntimeLayers({ atmosphere }: Props): RuntimeLayerSet {
  //
  // IMMERSIVE
  //

  if (atmosphere === "immersive") {
    return {
      background: `
          bg-[radial-gradient(circle_at_top,
          rgba(255,255,255,0.08),
          transparent_60%)]
        `,

      overlay: `
          bg-black/[0.28]
        `,

      ambient: `
          opacity-100
          blur-3xl
        `,

      glow: `
          shadow-[0_0_120px_rgba(255,255,255,0.08)]
        `,

      depth: `
          ring-1 ring-white/[0.08]
        `,

      noise: `
          opacity-[0.035]
        `,
    };
  }

  //
  // EDITORIAL
  //

  if (atmosphere === "editorial") {
    return {
      background: `
          bg-gradient-to-b
          from-transparent
          to-black/[0.08]
        `,

      overlay: `
          bg-black/[0.12]
        `,

      ambient: `
          opacity-60
        `,

      glow: `
          shadow-[0_0_40px_rgba(255,255,255,0.04)]
        `,

      depth: `
          ring-1 ring-white/[0.04]
        `,

      noise: `
          opacity-[0.02]
        `,
    };
  }

  //
  // MINIMAL / QUIET
  //

  return {
    background: "",

    overlay: `
        bg-black/[0.06]
      `,

    ambient: `
        opacity-20
      `,

    glow: "",

    depth: `
        ring-1 ring-white/[0.03]
      `,

    noise: `
        opacity-[0.01]
      `,
  };
}
