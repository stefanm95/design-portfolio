// hero.scale.ts

export const heroScale = {
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
} as const;
