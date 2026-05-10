import { cn } from "@/lib/utils";

import { textColors, typography } from "@/theme";

import type { ElementType, ReactNode } from "react";

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
      className={cn(typography.heading, textColors.heading, className)}
    >
      {children}
    </Component>
  );
}
