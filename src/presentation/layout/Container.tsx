import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-360 px-6 md:px-10 xl:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
