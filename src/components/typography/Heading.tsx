import { cn } from "@/lib/utils";
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
      className={cn(
        `
          font-display
          tracking-tighter
          text-[#f5f3ef]
        `,
        className,
      )}
    >
      {children}
    </Component>
  );
}
