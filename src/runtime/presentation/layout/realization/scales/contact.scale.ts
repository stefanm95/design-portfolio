export const contactScale = {
  grid: {
    root: `
      grid
      grid-cols-1

      gap-y-10
      md:gap-y-12

      lg:grid-cols-12
      lg:gap-y-0
      lg:gap-x-20
    `,

    panel: `
      relative

      hidden
      lg:flex

      col-span-1
      lg:col-span-4

      min-h-[480px]
      md:min-h-[560px]
      lg:min-h-[620px]

      overflow-hidden
    `,

    stack: `
      col-span-1
      lg:col-span-8
    `,
  },

  panel: {
    content: `
      relative
      z-10

      flex
      h-full
      flex-col
      justify-between

      p-10
    `,

    top: "space-y-6",
  },

  hero: {
    root: `
      relative
      overflow-hidden
    `,

    content: `
      grid
      grid-cols-12

      gap-y-20
    `,

    left: `
      col-span-12
      xl:col-span-7
    `,

    right: `
      col-span-12

      xl:col-span-4
      xl:col-start-9
    `,

    card: `
      border-t
    `,
  },

  links: {
    root: `
      relative
      overflow-hidden

      border
    `,
  },

  availability: {
    root: `
      relative

      border-t
    `,
  },

  footer: {
    content: `
      flex
      flex-col

      lg:flex-row
      lg:items-end
      lg:justify-between
    `,
  },
} as const;
