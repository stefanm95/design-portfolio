import { cn } from "@/lib/utils";

import { atmosphericText, metadataScale, typography } from "@/theme";

import type { ElementType, ReactNode } from "react";

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
  return (
    <Component
      className={cn(
        typography.label,
        metadataScale.label,
        atmosphericText.secondary,
        className,
      )}
    >
      {children}
    </Component>
  );
}
