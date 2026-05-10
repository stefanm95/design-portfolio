import type { ReactNode } from "react";

import Container from "@/components/layout/Container";

import { cn } from "@/lib/utils";

import { sectionSpacing } from "@/theme";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  id,
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <section
      id={id}
      className={cn("relative", sectionSpacing.editorial, className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
