import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Container from "./Container";

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
      className={cn("relative py-16 md:py-24 lg:py-32 xl:py-40", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
