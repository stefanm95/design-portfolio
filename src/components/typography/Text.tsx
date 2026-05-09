import { cn } from "@/lib/utils";
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
      className={cn(
        `
          font-body
          leading-relaxed
          text-[#a1a1a1]
        `,
        className,
      )}
    >
      {children}
    </Component>
  );
}
