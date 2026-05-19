export const sectionSpacingScale = {
  hero: {
    root: `
    min-h-screen
  `,

    display: `
    mt-10
  `,

    description: `
    mt-16
    md:mt-18
    lg:mt-20
  `,
  },

  contact: {
    root: `
      gap-16
      md:gap-20
      lg:gap-28
    `,

    padding: `
      py-20
      md:py-24
      lg:py-28
      xl:py-36
    `,

    content: `
      space-y-12
      md:space-y-16
      lg:space-y-20
    `,

    grid: `
    gap-y-10
    md:gap-y-12
    lg:gap-y-0
    lg:gap-x-20
  `,

    footer: `
      py-10
      md:py-12
      lg:py-14
    `,
  },

  about: {
    root: `
    md:py-40
    lg:py-48
    xl:py-56
  `,

    stack: `
    space-y-28
    md:space-y-32
    lg:space-y-40
    xl:space-y-56
  `,

    principles: `
    py-24
    md:py-28
    lg:py-32
    xl:py-40
  `,

    principlesContent: `
    px-6
    sm:px-8
    md:px-14
    lg:px-16
    xl:px-0

    gap-y-20
  `,

    stackFooter: `
    pt-12
  `,
  },

  experience: {
    root: `
      md:py-40
      xl:py-48
    `,

    heroGlow: `
      -left-10
      top-10

      h-40
      w-40
    `,

    divider: `
      mt-10
      h-px
      w-24
    `,

    description: `
      mt-8
      max-w-[420px]
    `,

    tags: `
      mt-12
    `,

    visualRoot: `
      min-h-[560px]
      lg:min-h-[760px]
    `,

    visualContent: `
      min-h-[560px]
      lg:min-h-[780px]
    `,
  },

  philosophy: {
    root: `
    md:py-40
    lg:py-48
    xl:py-56
  `,

    divider: `
    absolute
    inset-x-0
    top-0

    h-px
  `,

    ambientBloom: `
    pointer-events-none
    absolute

    left-[10%]
    md:left-[5%]
    lg:left-[10%]

    top-[10%]

    h-[300px]
    w-[300px]

    md:h-[350px]
    md:w-[350px]

    lg:h-[420px]
    lg:w-[420px]

    rounded-full
    blur-sm

    opacity-6
  `,

    metadata: `
    pt-8
    md:pt-10
  `,
  },

  projects: {
    root: `
    md:py-40
    lg:py-48
    xl:py-56
  `,

    bloom: `
    pointer-events-none
    absolute

    left-[-10%]
    top-[10%]

    h-[40vw]
    w-[40vw]

    rounded-full
    blur-sm

    opacity-10
  `,

    content: `
    relative
    z-10

    space-y-32
    md:space-y-40
    lg:space-y-48
    xl:space-y-56
  `,
  },
} as const;
