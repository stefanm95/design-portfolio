export const environmentLayoutScale = {
  cinematic: {
    root: `
      absolute
      inset-0
      pointer-events-none
    `,

    texture: `
      absolute
      inset-0
      opacity-[0.06]
    `,

    vignette: `
      absolute
      inset-0
      bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.46)_100%)]
    `,

    bloom: `
      absolute
      left-1/2
      top-[22%]

      h-[32rem]
      w-[32rem]

      -translate-x-1/2

      rounded-full
      blur-sm

      opacity-[0.12]
    `,
  },
} as const;
