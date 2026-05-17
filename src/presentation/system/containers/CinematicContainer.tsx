"use client";

import clsx from "clsx";

import type { ReactNode } from "react";

import type { CinematicContainerAttributes } from "@/runtime/presentation/system";

type Props = {
  children: ReactNode;

  cinematic: CinematicContainerAttributes;

  className?: string;
};

export default function CinematicContainer({
  children,
  cinematic,
  className,
}: Props) {
  return (
    <section
      className={clsx(
        //
        // Runtime cinematic orchestration
        //
        cinematic.cinematic,

        //
        // Runtime spacing orchestration
        //
        cinematic.spacing,

        //
        // Structural composition
        //
        "relative w-full",

        className,
      )}
    >
      {children}
    </section>
  );
}
