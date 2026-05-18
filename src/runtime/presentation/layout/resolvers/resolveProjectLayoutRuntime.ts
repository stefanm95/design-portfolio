// runtime/presentation/layout/resolvers/resolveProjectLayoutRuntime.ts

import type { CompositionContract } from "@/runtime/presentation/composition/contract";

import type { ResolvedProjectLayoutRuntime } from "../contracts/project";
import { projectLayoutRealization } from "../realization";

type Props = {
  composition: CompositionContract;
};

export function resolveProjectLayoutRuntime({
  composition,
}: Props): ResolvedProjectLayoutRuntime {
  const { density, sceneIntensity, environmentalPressure } =
    composition.orchestration;

  //
  // DYNAMIC MODIFIERS
  //

  const cinematicSpacing =
    density === "spacious"
      ? "gap-y-24 xl:gap-y-32"
      : density === "balanced"
        ? "gap-y-20 xl:gap-y-24"
        : "gap-y-14 xl:gap-y-18";

  const showcaseScale =
    sceneIntensity === "dramatic"
      ? "xl:translate-y-16"
      : sceneIntensity === "balanced"
        ? "xl:translate-y-10"
        : "xl:translate-y-4";

  const environmentalBreathing =
    environmentalPressure === "soft"
      ? "2xl:px-12"
      : environmentalPressure === "balanced"
        ? "2xl:px-6"
        : "";

  //
  // BASE
  //

  const base = projectLayoutRealization;

  return {
    cinematic: {
      systems: {
        ...base.cinematic.systems,

        section: `
          ${base.cinematic.systems.section}
          ${cinematicSpacing}
        `,

        visual: `
          ${base.cinematic.systems.visual}
          ${showcaseScale}
        `,
      },

      services: {
        ...base.cinematic.services,
      },

      mobile: {
        ...base.cinematic.mobile,

        contentInner: `
          ${base.cinematic.mobile.contentInner}
          ${environmentalBreathing}
        `,
      },

      showcase: {
        desktop: {
          ...base.cinematic.showcase.desktop,
        },

        mobile: {
          ...base.cinematic.showcase.mobile,
        },

        switcher: {
          ...base.cinematic.showcase.switcher,
        },
      },
    },

    editorial: {
      showcase: {
        ...base.editorial.showcase,
      },
    },
  };
}
