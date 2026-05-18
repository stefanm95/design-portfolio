export const stackLayoutScale = {
  hero: {
    root: `
      relative
      flex
      items-start
      overflow-hidden
    `,

    grid: `
      hero-grid

      relative
      z-10

      grid
      w-full
      grid-cols-12
      items-center
    `,

    content: `
      col-span-12
      xl:col-span-9
    `,

    meta: `
      flex
      items-center
      gap-6
    `,

    display: `
      space-y-0
      md:-space-y-6
      xl:-space-y-10
    `,

    description: `
      flex
      flex-col

      max-w-190

      md:flex-row
      md:gap-6

      lg:gap-10
    `,

    marker: `
      relative
      hidden
      pt-4

      md:block
    `,

    copy: `
      space-y-7
    `,

    availability: `
      flex
      flex-wrap
      items-center

      gap-3
      md:gap-4
      lg:gap-5
    `,
  },

  projects: {
    content: `
    relative
    z-10

    flex
    flex-col

    gap-32
    md:gap-40
    xl:gap-48
  `,
  },

  philosophy: {
    root: `
      relative
      z-10

      grid
      grid-cols-1

      md:grid-cols-1

      lg:grid-cols-12

      gap-y-16
      md:gap-y-20
      lg:gap-y-24
    `,

    left: `
      col-span-1
      md:col-span-1
      lg:col-span-6
    `,

    right: `
      col-span-1
      md:col-span-1
      lg:col-span-5
      lg:col-start-8
    `,

    heading: `
      space-y-8
      md:space-y-10
    `,

    body: `
      space-y-8
      md:space-y-10
      lg:space-y-12
    `,

    metadata: `
      flex
      flex-col

      md:flex-wrap

      gap-x-8
      lg:gap-x-10

      gap-y-5

      border-t
    `,

    metadataItem: `
      space-y-2
    `,
  },

  experience: {
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
  },

  contact: {
    hero: {
      root: `
        grid
        grid-cols-1

        gap-16

        lg:grid-cols-12
        lg:gap-20
        lg:items-start
      `,

      content: `
        lg:col-span-12

        grid
        grid-cols-1

        lg:grid-cols-12
        lg:gap-20
      `,

      left: `
        lg:col-span-7
      `,

      right: `
        lg:col-span-4
        lg:col-start-9
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
  },
} as const;
