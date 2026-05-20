// about.scale.ts

export const aboutScale = {
  hero: {
    root: `
      grid
      grid-cols-1

      md:grid-cols-12

      gap-y-10
      md:gap-y-16
      lg:gap-x-12
    `,

    label: `
      col-span-1
      md:col-span-12
      lg:col-span-2
    `,

    statement: `
      col-span-1
      md:col-span-12
      lg:col-span-10
    `,
  },

  philosophy: {
    root: `
      grid
      grid-cols-1

      md:grid-cols-12

      gap-y-10
      md:gap-y-14
      lg:gap-x-16
    `,

    left: `
      col-span-1
      md:col-span-12
      lg:col-span-5
    `,

    right: `
      col-span-1
      md:col-span-12
      lg:col-span-7
    `,

    content: `
      space-y-6
      md:space-y-8
    `,
  },

  principles: {
    root: `
      relative
      overflow-hidden
    `,

    content: `
      relative
      z-10

      grid
      grid-cols-1

      xl:grid-cols-12
      xl:items-center
    `,

    right: `
      max-w-[720px]

      xl:col-span-6
      xl:col-start-7
    `,

    stack: `
      space-y-12
      md:space-y-14
    `,

    list: `
      grid
      grid-cols-1

      sm:grid-cols-2

      gap-x-10
      gap-y-4

      pt-6
      md:pt-8

      max-w-[28rem]
    `,
  },

  stackFooter: `
    border-t
  `,
} as const;
