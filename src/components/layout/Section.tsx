import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <section className={cn("relative py-24 md:py-32 xl:py-40", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
