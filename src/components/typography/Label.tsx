import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import { activeTheme } from "@/theme";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export default function Label({
  as: Component = "p",
  children,
  className,
}: Props) {
  const labelTypography = activeTheme.typography.label;
  return (
    <Component
      className={cn(
        labelTypography.base,

        labelTypography.colors.primary,

        className,
      )}
    >
      {children}
    </Component>
  );
}
