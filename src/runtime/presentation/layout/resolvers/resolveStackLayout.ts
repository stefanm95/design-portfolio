// runtime/presentation/layout/resolvers/resolveStackLayout.ts

import { stackLayoutScale } from "../realization";

type StackLayoutKey = keyof typeof stackLayoutScale;

type Props<TLayout extends StackLayoutKey> = {
  layout: TLayout;
};

export function resolveStackLayout<TLayout extends StackLayoutKey>({
  layout,
}: Props<TLayout>): (typeof stackLayoutScale)[TLayout] {
  return stackLayoutScale[layout];
}
