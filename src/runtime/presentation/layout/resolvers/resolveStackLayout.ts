// runtime/presentation/layout/resolvers/resolveStackLayout.ts

import { layoutScales } from "../realization/scales";

type LayoutKey = keyof typeof layoutScales;

type Props<TLayout extends LayoutKey> = {
  layout: TLayout;
};

export function resolveStackLayout<TLayout extends LayoutKey>({
  layout,
}: Props<TLayout>): (typeof layoutScales)[TLayout] {
  return layoutScales[layout];
}
