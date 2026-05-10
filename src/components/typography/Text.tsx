import { cn } from "@/lib/utils";

import { atmosphericText, typography } from "@/theme";

import type { ElementType, ReactNode } from "react";

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
  return (
    <Component
      className={cn(typography.body, atmosphericText.secondary, className)}
    >
      {children}
    </Component>
  );
}
