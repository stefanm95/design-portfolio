import type { ResolvedPageLayoutRuntime } from "../contracts";

import { resolveSectionSpacing } from "./resolveSectionSpacing";

import { resolveStackLayout } from "./resolveStackLayout";

export function resolvePageLayoutRuntime(): ResolvedPageLayoutRuntime {
  //
  // HERO
  //

  const heroStack = resolveStackLayout({
    layout: "hero",
  });

  const heroSpacing = resolveSectionSpacing({
    section: "hero",
  });

  //
  // PHILOSOPHY
  //

  const philosophyStack = resolveStackLayout({
    layout: "philosophy",
  });

  const philosophySpacing = resolveSectionSpacing({
    section: "philosophy",
  });

  //
  // EXPERIENCE
  //

  const experienceStack = resolveStackLayout({
    layout: "experience",
  });

  const experienceSpacing = resolveSectionSpacing({
    section: "experience",
  });

  //
  // CONTACT
  //

  const contactStack = resolveStackLayout({
    layout: "contact",
  });

  const contactSpacing = resolveSectionSpacing({
    section: "contact",
  });

  //
  // ABOUT
  //

  const aboutStack = resolveStackLayout({
    layout: "about",
  });

  const aboutSpacing = resolveSectionSpacing({
    section: "about",
  });

  //
  // PROJECTS
  //

  const projectsSpacing = resolveSectionSpacing({
    section: "projects",
  });

  const projectsStack = resolveStackLayout({
    layout: "projects",
  });

  //
  // RETURN
  //

  return {
    hero: {
      root: `
        ${heroStack.root}
        ${heroSpacing.root}
      `,

      grid: heroStack.grid,

      content: heroStack.content,

      meta: heroStack.meta,

      display: `
        ${heroStack.display}
        ${heroSpacing.display}
      `,

      description: `
        ${heroStack.description}
        ${heroSpacing.description}
      `,

      marker: heroStack.marker,

      copy: heroStack.copy,

      availability: heroStack.availability,
    },

    philosophy: {
      root: philosophySpacing.root,

      divider: philosophySpacing.divider,

      ambientBloom: philosophySpacing.ambientBloom,

      stack: philosophyStack.root,

      left: philosophyStack.left,

      right: philosophyStack.right,

      heading: philosophyStack.heading,

      body: philosophyStack.body,

      metadata: `
        ${philosophyStack.metadata}
        ${philosophySpacing.metadata}
      `,

      metadataItem: philosophyStack.metadataItem,
    },

    projects: {
      section: projectsSpacing.root,

      bloom: projectsSpacing.bloom,

      content: `
    ${projectsStack.content}
    ${projectsSpacing.content}
  `,
    },

    experience: {
      section: experienceSpacing.root,

      root: experienceStack.root,

      hero: {
        content: experienceStack.hero.content,

        titleWrap: experienceStack.hero.titleWrap,

        glow: experienceSpacing.heroGlow,

        divider: experienceSpacing.divider,

        description: experienceSpacing.description,

        tags: `
          ${experienceSpacing.tags}
          ${experienceStack.hero.tags}
        `,
      },

      visual: {
        root: `
          ${experienceStack.visual.root}
          ${experienceSpacing.visualRoot}
        `,

        desktopBackground: experienceStack.visual.desktopBackground,

        mobileBackground: experienceStack.visual.mobileBackground,

        content: `
          ${experienceStack.visual.content}
          ${experienceSpacing.visualContent}
        `,

        stack: experienceStack.visual.stack,
      },

      panel: {
        root: experienceStack.panel.root,

        content: experienceStack.panel.content,

        title: experienceStack.panel.title,

        description: experienceStack.panel.description,
      },
    },

    contact: {
      root: `
    relative
    overflow-hidden
  `,

      content: `
    relative
    z-10

    flex
    flex-col

    ${contactSpacing.root}
    ${contactSpacing.padding}

    mx-auto
    w-full
    max-w-[1600px]

    px-6
    md:px-10
    xl:px-16
  `,

      grid: {
        root: `
      grid
      grid-cols-1
      lg:grid-cols-12

      ${contactSpacing.grid}
    `,

        left: `
      relative

      hidden
      lg:flex

      col-span-1
      lg:col-span-4

      min-h-[480px]
      md:min-h-[560px]
      lg:min-h-[620px]

      overflow-hidden
    `,

        right: `
      col-span-1
      lg:col-span-8

      ${contactStack.grid.right}
    `,
      },

      hero: {
        root: `
      relative
      z-10
    `,

        content: `
      grid
      grid-cols-1

      gap-16

      lg:grid-cols-12
      lg:gap-20
      lg:items-start
    `,

        left: `
      col-span-12
      lg:col-span-7

      ${contactStack.hero.left}
    `,

        right: `
      col-span-12

      lg:col-span-4
      lg:col-start-9

      ${contactStack.hero.right}
    `,

        card: `
      relative
      h-full
      w-full
    `,

        infoGroup: contactStack.hero.infoGroup,
      },

      links: {
        root: `
      relative
      overflow-hidden

      border
    `,

        content: `
      relative
      z-10

      px-6
      py-8

      md:px-10
      md:py-10
    `,

        label: `
      mb-12
    `,

        list: contactStack.links.list,

        row: contactStack.links.row,

        top: contactStack.links.top,

        status: contactStack.links.status,
      },

      availability: {
        root: `
      relative

      border-t

      px-8
      pt-8
    `,

        content: contactStack.availability.content,
      },

      footer: {
        root: `
      relative

      border-t

      ${contactSpacing.footer}
    `,

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

        left: contactStack.footer.left,

        right: contactStack.footer.right,

        meta: contactStack.footer.meta,

        cta: `
      group
      inline-flex
      items-center
      gap-4

      border

      px-6
      py-4
    `,
      },
    },

    about: {
      section: aboutSpacing.root,

      stack: aboutSpacing.stack,

      hero: {
        root: aboutStack.hero.root,

        label: aboutStack.hero.label,

        statement: aboutStack.hero.statement,
      },

      philosophy: {
        root: aboutStack.philosophy.root,

        left: aboutStack.philosophy.left,

        right: aboutStack.philosophy.right,

        content: aboutStack.philosophy.content,
      },

      principles: {
        root: `
      ${aboutStack.principles.root}
      ${aboutSpacing.principles}
    `,

        content: `
      ${aboutStack.principles.content}
      ${aboutSpacing.principlesContent}
    `,

        right: aboutStack.principles.right,

        stack: aboutStack.principles.stack,

        list: aboutStack.principles.list,
      },

      stackFooter: `
    ${aboutStack.stackFooter}
    ${aboutSpacing.stackFooter}
  `,
    },
  };
}
