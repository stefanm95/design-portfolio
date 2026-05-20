// contact.scale.ts

export const contactScale = {
  hero: {
    root: `
      relative
      z-10

      grid
      grid-cols-1

      gap-16

      lg:grid-cols-12
      lg:gap-20
      lg:items-start
    `,

    left: `
      lg:col-span-7
    `,

    right: `
      lg:col-span-4
      lg:col-start-9
    `,

    card: `
      p-8
      md:p-10
    `,

    infoGroup: `
      space-y-2
    `,
  },

  links: {
    list: `
      space-y-8
    `,

    row: `
      flex
      items-end
      justify-between

      gap-6
    `,

    top: `
      mb-4

      flex
      items-center
      justify-between
    `,

    status: `
      flex
      items-center
      gap-2
    `,
  },

  availability: {
    content: `
      space-y-4
    `,
  },

  footer: {
    content: `
      flex
      flex-col

      gap-10
      md:gap-12
      lg:gap-14

      lg:flex-row
      lg:items-end
      lg:justify-between
    `,

    left: `
      space-y-8
    `,

    right: `
      flex
      flex-col
      gap-8

      items-start
      lg:items-end
    `,

    meta: `
      flex
      flex-col

      gap-3

      md:flex-row
      md:items-center
      md:gap-8
    `,
  },
} as const;
