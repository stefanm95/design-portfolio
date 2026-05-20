// experience.scale.ts

export const experienceScale = {
  root: `
    grid
    grid-cols-1

    items-center

    gap-16
    md:gap-20
    lg:gap-24

    lg:grid-cols-[minmax(0,1.15fr)_520px]
  `,

  hero: {
    content: `
      relative
      max-w-[760px]
    `,

    titleWrap: `
      relative
      mt-8
    `,

    tags: `
      flex
      flex-wrap
      gap-3
    `,
  },

  visual: {
    root: `
      relative

      flex
      items-center
      justify-center
    `,

    desktopBackground: `
      absolute
      inset-y-0

      left-[-5%]
      right-[-28%]

      hidden
      lg:block
    `,

    mobileBackground: `
      absolute
      inset-0

      lg:hidden
    `,

    content: `
      relative
      z-10

      w-full
      max-w-[720px]

      lg:max-w-[860px]
    `,

    stack: `
      group/stack
      relative

      flex
      flex-col

      gap-5

      px-6
      py-10

      sm:px-10

      lg:gap-0
      lg:px-0
      lg:py-0
    `,
  },

  panel: {
    root: `
      group
      relative

      min-h-[150px]
      w-full

      sm:w-[300px]

      md:h-50
      md:w-[320px]
      md:left-60
      lg:left-0

      overflow-hidden
      cursor-pointer

      border

      hover:z-20
    `,

    content: `
      relative
      z-10

      flex
      h-full
      flex-col
      justify-between

      p-5
      md:p-7
      lg:p-7
    `,

    title: `
      max-w-[190px]

      text-[16px]
      sm:text-[18px]
      lg:text-[20px]

      leading-[1]

      font-light
      tracking-[-0.04em]

      transition-all
      duration-700
    `,

    description: `
      mt-4
      max-w-[210px]

      text-[12px]
      leading-[1.8]

      transition-all
      duration-1000
      ease-out

      opacity-100
      translate-y-0

      lg:opacity-0
      lg:translate-y-3

      lg:group-hover:translate-y-0
      lg:group-hover:opacity-100
    `,
  },
} as const;
