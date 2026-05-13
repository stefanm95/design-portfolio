export const sectionSpacing = {
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

    hero: `
      py-12
      md:py-16
      xl:py-20
    `,

    heroContent: `
      gap-y-20
    `,

    heroLeft: `
      px-8
    `,

    heroRight: `
      px-8
    `,

    heroCard: `
      pt-8
    `,

    grid: `
      gap-y-10
      md:gap-y-12
      lg:gap-y-0
      lg:gap-x-20
    `,

    content: `
      space-y-12
      md:space-y-16
      lg:space-y-20
    `,

    linksPanel: `
      px-6
      py-8

      md:px-10
      md:py-10
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
} as const;
