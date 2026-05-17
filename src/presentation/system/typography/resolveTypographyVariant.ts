import { ui } from "@/theme";

import type { TypographyVariant } from "./types";

export function resolveTypographyVariant(variant: TypographyVariant): string {
  switch (variant) {
    case "hero":
      return ui.text.strong;

    case "title":
      return ui.text.heading;

    case "secondary":
      return ui.text.secondary;

    case "meta":
      return ui.text.metadata;

    case "caption":
      return ui.text.caption;

    default:
      return ui.text.body;
  }
}
