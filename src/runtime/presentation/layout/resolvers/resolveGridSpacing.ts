// runtime/presentation/layout/resolvers/resolveGridSpacing.ts

import { gridSpacingScale } from "../realization";

type GridSpacingVariant = keyof typeof gridSpacingScale;

type Props = {
  variant: GridSpacingVariant;
};

export function resolveGridSpacing({ variant }: Props): string {
  return gridSpacingScale[variant];
}
