export const projectComposition = {
  cinematic: {
    systems: {
      section: `
        relative
        grid
        grid-cols-12
        gap-y-20
        xl:gap-x-20
      `,

      left: `
        col-span-12
        xl:col-span-4
      `,

      leftInner: `
        space-y-8
        xl:sticky
        xl:top-24
        2xl:top-32
      `,

      right: `
        col-span-12
        xl:col-span-8
      `,

      visual: `
        relative
        xl:translate-y-12
      `,
    },

    services: {
      section: `
        space-y-20
      `,

      intro: `
        max-w-[760px]
        space-y-8
      `,

      grid: `
        grid
        grid-cols-12
        gap-10
      `,

      primary: `
        col-span-12
        xl:col-span-8
      `,

      secondary: `
        col-span-12
        xl:col-span-4
      `,
    },
  },

  editorial: {
    showcase: {
      section: `
        grid
        grid-cols-1
        gap-y-10
        md:gap-y-14
        xl:grid-cols-12
        xl:gap-x-32
      `,

      left: `
        xl:col-span-4
      `,

      leftInner: `
        space-y-8
        xl:sticky
        xl:top-24
        2xl:top-32
      `,

      right: `
        xl:col-span-8
      `,
    },
  },
};
