import { cn } from "@/lib/utils";

import type { ElementType, ReactNode } from "react";

import { cinematicDisplay } from "@/theme";

type Variant = "primary" | "secondary" | "tertiary";

type Props = {
  as?: ElementType;
  children: ReactNode;
  variant?: Variant;
  className?: string;
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
        cinematicDisplay.base,

        cinematicDisplay.glow,

        cinematicDisplay.variants[variant],

        className,
      )}
    >
      {children}
    </Component>
  );
}
