import { cn } from "@/lib/utils";
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
        `
        font-body

        text-[10px]
        uppercase

        tracking-[0.42em]

        text-white/38

        md:text-xs
        `,
        className,
      )}
    >
      {children}
    </Component>
  );
}
