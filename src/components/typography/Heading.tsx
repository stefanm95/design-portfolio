import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import { headingTypography } from "@/theme";

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
