import { cn } from "@/lib/utils";

import { containerPadding, containerWidth } from "@/theme";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        `
          mx-auto
          w-full
        `,
        containerWidth.default,
        containerPadding.default,
        className,
      )}
    >
      {children}
    </div>
  );
}
