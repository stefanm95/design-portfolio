import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import { activeTheme } from "@/theme";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export default function Heading({
  as: Component = "h2",
  children,
  className,
}: Props) {
  const headingTypography = activeTheme.typography.heading;
  return (
    <Component
      className={cn(
        headingTypography.base,

        headingTypography.colors.primary,

        className,
      )}
    >
      {children}
    </Component>
  );
}
