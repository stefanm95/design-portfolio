import type { ResolvedVisualTreatment } from "@/runtime/presentation/semantics";
import type { AtmosphereState } from "../../resolvers";

import type { CompositionSemantic } from "../../semantics/types";

type Props = {
  role: CompositionSemantic;

  atmosphere: AtmosphereState;
};

export function resolveVisualTreatment({
  role,
  atmosphere,
}: Props): ResolvedVisualTreatment {
  //
  // HERO / IMMERSIVE
  //

  if (role === "hero" || role === "immersive") {
    return {
      separation: `
          py-24 md:py-32
        `,

      emphasis: `
          scale-[1.01]
        `,

      surface: `
          backdrop-blur-xl
        `,

      intensity: atmosphere === "immersive" ? "opacity-100" : "opacity-90",

      immersion: 1,
    };
  }

  //
  // SHOWCASE
  //

  if (role === "showcase" || role === "gallery") {
    return {
      separation: `
          py-20
        `,

      emphasis: `
          shadow-2xl
        `,

      surface: `
          backdrop-blur-md
        `,

      intensity: `
          opacity-95
        `,

      immersion: 0.8,
    };
  }

  //
  // META
  //

  if (role === "meta" || role === "transition") {
    return {
      separation: `
          py-8
        `,

      emphasis: `
          opacity-80
        `,

      surface: `
          backdrop-blur-sm
        `,

      intensity: `
          opacity-70
        `,

      immersion: 0.2,
    };
  }

  //
  // DEFAULT
  //

  return {
    separation: `
        py-16
      `,

    emphasis: "",

    surface: `
        backdrop-blur-md
      `,

    intensity: `
        opacity-100
      `,

    immersion: 0.5,
  };
}
