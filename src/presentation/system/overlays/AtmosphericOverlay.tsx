"use client";

import clsx from "clsx";

import type { OverlayRendering } from "@/runtime/presentation/system";

type Props = {
  overlay: OverlayRendering;
};

export default function AtmosphericOverlay({ overlay }: Props) {
  return (
    <>
      <div
        className={clsx(
          //
          // Base atmospheric layer
          //
          `
            pointer-events-none
            absolute inset-0
          `,

          //
          // Cinematic blending
          //
          `
            bg-white/[0.02]
            mix-blend-screen
          `,
        )}
        style={{
          opacity: overlay.opacity,
          backdropFilter: `blur(${overlay.blur}px)`,
        }}
      />

      <div
        className='
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-white/[0.04]
          to-transparent
        '
        style={{
          opacity: overlay.vignette,
        }}
      />
    </>
  );
}
