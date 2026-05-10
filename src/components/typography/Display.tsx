import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import {
  displayEffects,
  displayScale,
  displayTypography,
  gradients,
} from "@/theme";

type Variant = "primary" | "secondary" | "tertiary";

type Props = {
  as?: ElementType;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants = {
  primary: gradients.display.primary,

  secondary: gradients.display.secondary,

  tertiary: gradients.display.tertiary,
};

export default function Display({
  as: Component = "h1",
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <Component
      className={cn(
        displayTypography.base,

        displayScale.base,

        displayEffects.transparent,
        displayEffects.glow,

        variants[variant],

        className,
      )}
    >
      {children}
    </Component>
  );
}
