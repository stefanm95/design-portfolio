// runtime/presentation/layout/resolvers/resolveLayoutRuntime.ts

import { resolveContactStack } from "@/runtime/presentation/layout/realization/stack/resolveContactStack";
import type { ResolvedPageLayoutRuntime } from "../contracts";

import { resolveSectionSpacing } from "./resolveSectionSpacing";
import { resolveStackLayout } from "./resolveStackLayout";

export function resolvePageLayoutRuntime(): ResolvedPageLayoutRuntime {
  //
  // HERO
  //

  const heroLayout = resolveStackLayout({
    layout: "hero",
  });

  const heroSpacing = resolveSectionSpacing({
    section: "hero",
  });

  //
  // PHILOSOPHY
  //

  const philosophyLayout = resolveStackLayout({
    layout: "philosophy",
  });

  const philosophySpacing = resolveSectionSpacing({
    section: "philosophy",
  });

  //
  // EXPERIENCE
  //

  const experienceLayout = resolveStackLayout({
    layout: "experience",
  });

  const experienceSpacing = resolveSectionSpacing({
    section: "experience",
  });

  //
  // CONTACT
  //

  const contactLayout = resolveStackLayout({
    layout: "contact",
  });

  const contactSpacing = resolveSectionSpacing({
    section: "contact",
  });

  const contactHeroStack = resolveContactStack({
    section: "hero",
  });

  const contactFooterStack = resolveContactStack({
    section: "footer",
  });

  const contactLinksStack = resolveContactStack({
    section: "links",
  });

  const contactAvailabilityStack = resolveContactStack({
    section: "availability",
  });

  //
  // ABOUT
  //

  const aboutLayout = resolveStackLayout({
    layout: "about",
  });

  const aboutSpacing = resolveSectionSpacing({
    section: "about",
  });

  //
  // PROJECTS
  //

  const projectsLayout = resolveStackLayout({
    layout: "projects",
  });

  const projectsSpacing = resolveSectionSpacing({
    section: "projects",
  });

  //
  // RETURN
  //

  return {
    hero: {
      root: `
        ${heroLayout.root}
        ${heroSpacing.root}
      `,

      grid: heroLayout.grid,

      content: heroLayout.content,

      meta: heroLayout.meta,

      display: `
        ${heroLayout.display}
        ${heroSpacing.display}
      `,

      description: `
        ${heroLayout.description}
        ${heroSpacing.description}
      `,

      marker: heroLayout.marker,

      copy: heroLayout.copy,

      availability: heroLayout.availability,
    },

    philosophy: {
      root: philosophySpacing.root,

      divider: philosophySpacing.divider,

      ambientBloom: philosophySpacing.ambientBloom,

      stack: philosophyLayout.root,

      left: philosophyLayout.left,

      right: philosophyLayout.right,

      heading: philosophyLayout.heading,

      body: philosophyLayout.body,

      metadata: `
        ${philosophyLayout.metadata}
        ${philosophySpacing.metadata}
      `,

      metadataItem: philosophyLayout.metadataItem,
    },

    projects: {
      section: projectsSpacing.root,

      bloom: projectsSpacing.bloom,

      content: `
        ${projectsLayout.content}
        ${projectsSpacing.content}
      `,
    },

    experience: {
      section: experienceSpacing.root,

      root: experienceLayout.root,

      hero: {
        content: experienceLayout.hero.content,

        titleWrap: experienceLayout.hero.titleWrap,

        glow: experienceSpacing.heroGlow,

        divider: experienceSpacing.divider,

        description: experienceSpacing.description,

        tags: `
          ${experienceLayout.hero.tags}
          ${experienceSpacing.tags}
        `,
      },

      visual: {
        root: `
          ${experienceLayout.visual.root}
          ${experienceSpacing.visualRoot}
        `,

        desktopBackground: experienceLayout.visual.desktopBackground,

        mobileBackground: experienceLayout.visual.mobileBackground,

        content: `
          ${experienceLayout.visual.content}
          ${experienceSpacing.visualContent}
        `,

        stack: experienceLayout.visual.stack,
      },

      panel: {
        root: experienceLayout.panel.root,

        content: experienceLayout.panel.content,

        title: experienceLayout.panel.title,

        description: experienceLayout.panel.description,
      },
    },

    contact: {
      section: `

  `,

      //
      // GRID
      //

      grid: {
        root: contactLayout.grid.root,

        panel: contactLayout.grid.panel,

        stack: contactLayout.grid.stack,
      },

      panel: {
        content: contactLayout.panel.content,
        top: contactLayout.panel.top,
      },

      //
      // HERO
      //

      hero: {
        root: contactLayout.hero.root,

        content: contactLayout.hero.content,

        left: `
      ${contactLayout.hero.left}
      ${contactHeroStack.left}
    `,

        right: `
      ${contactLayout.hero.right}
      ${contactHeroStack.right}
    `,

        card: `
      ${contactLayout.hero.card}
    `,

        infoGroup: contactHeroStack.infoGroup,
      },

      //
      // LINKS
      //

      links: {
        root: contactLayout.links.root,

        list: contactLinksStack.list,

        row: contactLinksStack.row,

        top: contactLinksStack.top,

        status: contactLinksStack.status,
      },

      //
      // AVAILABILITY
      //

      availability: {
        root: contactLayout.availability.root,

        content: contactAvailabilityStack.content,
      },

      //
      // FOOTER
      //

      footer: {
        root: contactSpacing.footer,

        content: contactLayout.footer.content,

        left: contactFooterStack.left,

        right: contactFooterStack.right,

        meta: contactFooterStack.meta,
      },
    },

    about: {
      section: aboutSpacing.root,

      stack: aboutSpacing.stack,

      hero: {
        root: aboutLayout.hero.root,

        label: aboutLayout.hero.label,

        statement: aboutLayout.hero.statement,
      },

      philosophy: {
        root: aboutLayout.philosophy.root,

        left: aboutLayout.philosophy.left,

        right: aboutLayout.philosophy.right,

        content: aboutLayout.philosophy.content,
      },

      principles: {
        root: `
          ${aboutLayout.principles.root}
          ${aboutSpacing.principles}
        `,

        content: `
          ${aboutLayout.principles.content}
          ${aboutSpacing.principlesContent}
        `,

        right: aboutLayout.principles.right,

        stack: aboutLayout.principles.stack,

        list: aboutLayout.principles.list,
      },

      stackFooter: `
        ${aboutLayout.stackFooter}
        ${aboutSpacing.stackFooter}
      `,
    },
  };
}
