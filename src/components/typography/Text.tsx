import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import { activeTheme } from "@/theme";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export default function Text({
  as: Component = "p",
  children,
  className,
}: Props) {
  const textTypography = activeTheme.typography.text;

  return (
    <Component
      className={cn(
        textTypography.base,

        textTypography.colors.primary,

        className,
      )}
    >
      {children}
    </Component>
  );
}
