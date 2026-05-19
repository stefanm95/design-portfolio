"use client";

import clsx from "clsx";

import type { ElementType, ReactNode } from "react";

import type { ResolvedTypographyRendering } from "@/runtime/presentation/system";

type Props = {
  children: ReactNode;

  typography: ResolvedTypographyRendering;

  as?: ElementType;

  className?: string;
};

export default function RuntimeTypography({
  children,
  typography,
  as: Component = "div",
  className,
}: Props) {
  return (
    <Component
      className={clsx(
        typography.titleClass,

        `
          relative
          text-balance
          transition-colors
          duration-500
        `,

        className,
      )}
      data-softness={typography.softness}
      data-contrast={typography.contrast}
    >
      {children}
    </Component>
  );
}
