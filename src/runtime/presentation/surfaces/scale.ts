import type { RuntimeSurfaceSet, SurfaceIntensity } from "./types";

export const surfaceScale: Record<SurfaceIntensity, RuntimeSurfaceSet> = {
  minimal: {
    panel: `
        bg-white/[0.02]
        border border-white/[0.04]
      `,

    elevated: `
        bg-white/[0.03]
      `,

    immersive: `
        bg-white/[0.02]
      `,

    overlay: `
        bg-black/[0.12]
      `,

    border: `
        border-white/[0.05]
      `,

    text: `
        text-white/80
      `,
  },

  soft: {
    panel: `
        bg-white/[0.04]
        backdrop-blur-md
        border border-white/[0.06]
      `,

    elevated: `
        bg-white/[0.05]
        backdrop-blur-xl
      `,

    immersive: `
        bg-gradient-to-b
        from-white/[0.05]
        to-white/[0.02]
      `,

    overlay: `
        bg-black/[0.18]
      `,

    border: `
        border-white/[0.08]
      `,

    text: `
        text-white/90
      `,
  },

  medium: {
    panel: `
        bg-white/[0.06]
        backdrop-blur-xl
        border border-white/[0.08]
      `,

    elevated: `
        bg-white/[0.08]
        backdrop-blur-2xl
      `,

    immersive: `
        bg-gradient-to-br
        from-white/[0.08]
        via-white/[0.03]
        to-transparent
      `,

    overlay: `
        bg-black/[0.24]
      `,

    border: `
        border-white/[0.12]
      `,

    text: `
        text-white
      `,
  },

  deep: {
    panel: `
        bg-white/[0.08]
        backdrop-blur-2xl
        border border-white/[0.12]
      `,

    elevated: `
        bg-white/[0.12]
        backdrop-blur-3xl
      `,

    immersive: `
        bg-gradient-to-br
        from-white/[0.12]
        via-white/[0.04]
        to-transparent
      `,

    overlay: `
        bg-black/[0.36]
      `,

    border: `
        border-white/[0.16]
      `,

    text: `
        text-white
      `,
  },
};
