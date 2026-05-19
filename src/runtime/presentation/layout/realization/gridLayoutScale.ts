export const gridLayoutScale = {
  cinematic: {
    root: `
      grid
      grid-cols-1
      lg:grid-cols-12
    `,

    left: `
      relative
      hidden
      overflow-hidden

      lg:flex
      lg:col-span-4

      min-h-[480px]
      md:min-h-[560px]
      lg:min-h-[620px]
    `,

    right: `
      col-span-1
      lg:col-span-8
    `,
  },
} as const;
