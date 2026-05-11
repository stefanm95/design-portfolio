import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import { useTheme } from "@/theme";

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
  const { theme } = useTheme();
  const labelTypography = theme.typography.label;

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
