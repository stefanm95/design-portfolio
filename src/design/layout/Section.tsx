import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import Container from "./Container";

type Props = {
  id?: string;
  children: ReactNode;

  className?: string;
  containerClassName?: string;

  contained?: boolean;

  spacingClassName?: string;
};

export default function Section({
  id,
  children,
  className,
  containerClassName,

  contained = true,

  spacingClassName,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative",

        spacingClassName ?? "py-16 md:py-24 lg:py-32 xl:py-40",

        className,
      )}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
