import { cn } from "@/lib/utils";

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

        text-white/26
        `,
        className,
      )}
    >
      <div className='h-px w-12 bg-white/10' />

      <span>{children}</span>
    </div>
  );
}
