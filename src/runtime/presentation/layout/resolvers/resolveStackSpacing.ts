// runtime/presentation/layout/resolvers/resolveStackSpacing.ts

import { stackSpacingScale } from "../realization";

type StackSpacingVariant = keyof typeof stackSpacingScale;

type Props = {
  variant: StackSpacingVariant;
};

export function resolveStackSpacing({ variant }: Props): string {
  return stackSpacingScale[variant];
}
