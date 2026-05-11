import { cn } from "@/lib/utils";
import { ui } from "@/theme";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ProjectSectionLabel({ children, className }: Props) {
  return (
    <div
      className={cn(
        `
        flex
        items-center
        gap-5

        text-[10px]
        uppercase
        tracking-[0.34em]

        ${ui.text.caption}
        `,
        className,
      )}
    >
      <div className={`h-px w-12 ${ui.dividers.subtle}`} />

      <span>{children}</span>
    </div>
  );
}
