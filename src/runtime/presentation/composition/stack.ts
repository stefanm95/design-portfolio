export const compositionStack = {
  contact: {
    hero: {
      left: "space-y-10",

      right: "space-y-8",

      infoGroup: "space-y-2",
    },

    panel: {
      content: "space-y-6",
    },

    footer: {
      left: "space-y-8",

      right: `
        flex
        flex-col
        gap-8
        items-end
        xl:items-end
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

    links: {
      list: "space-y-8",

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
      content: "space-y-4",
    },
  },
  about: {
    hero: {
      root: `
      grid
      grid-cols-1
      md:grid-cols-12

      gap-y-10
      md:gap-y-16
      lg:gap-x-12
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

      content: `
      space-y-6
      md:space-y-8
    `,
    },

    principles: {
      content: `
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
  },
} as const;
