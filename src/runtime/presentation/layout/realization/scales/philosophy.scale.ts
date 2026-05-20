// philosophy.scale.ts

export const philosophyScale = {
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
} as const;
