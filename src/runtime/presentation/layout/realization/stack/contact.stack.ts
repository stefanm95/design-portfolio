export const contactStackScale = {
  hero: {
    left: "space-y-10",

    right: "space-y-8",

    infoGroup: "space-y-2",
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

  footer: {
    left: "space-y-8",

    right: `
      flex
      flex-col
      gap-8
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
