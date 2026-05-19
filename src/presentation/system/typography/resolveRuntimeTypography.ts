import clsx from "clsx";

import type { ResolvedTypographyRendering } from "@/runtime/presentation/system";

import type { AtmosphereState } from "@/runtime/presentation/resolvers";

import { resolveTypographyVariant } from "./resolveTypographyVariant";

import type { TypographyVariant } from "./types";

type Props = {
  variant: TypographyVariant;

  rendering: ResolvedTypographyRendering;

  atmosphere: AtmosphereState;
};

export function resolveRuntimeTypography({
  variant,
  rendering,
  atmosphere,
}: Props) {
  const base = resolveTypographyVariant(variant);

  return clsx(
    base,

    rendering.titleClass,

    atmosphere === "immersive" &&
      `
        tracking-[-0.02em]
      `,

    rendering.softness > 1 &&
      `
        antialiased
      `,
  );
}
