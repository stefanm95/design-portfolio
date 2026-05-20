// runtime/presentation/layout/resolvers/resolveLayoutRuntime.ts

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
      section: contactSpacing.root,

      hero: {
        root: `
      ${contactLayout.hero.root}
      ${contactSpacing.hero}
    `,

        content: contactSpacing.heroContent,

        left: `
      ${contactLayout.hero.left}
      ${contactSpacing.heroLeft}
    `,

        right: `
      ${contactLayout.hero.right}
      ${contactSpacing.heroRight}
    `,

        card: `
      ${contactLayout.hero.card}
      ${contactSpacing.heroCard}
    `,

        infoGroup: contactLayout.hero.infoGroup,
      },

      links: {
        list: contactLayout.links.list,

        row: contactLayout.links.row,

        top: contactLayout.links.top,

        status: contactLayout.links.status,
      },

      availability: {
        root: contactSpacing.heroCard,

        content: contactLayout.availability.content,
      },

      footer: {
        root: contactSpacing.footer,

        content: contactLayout.footer.content,

        left: contactLayout.footer.left,

        right: contactLayout.footer.right,

        meta: contactLayout.footer.meta,
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
