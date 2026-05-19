// runtime/presentation/layout/resolvers/resolveLayoutRuntime.ts

import {
  environmentLayoutScale,
  gridLayoutScale,
  panelLayoutScale,
  sectionLayoutScale,
} from "@/runtime/presentation/layout/realization";
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
  //Environment
  const contactEnvironment = environmentLayoutScale.cinematic;

  const contactGrid = gridLayoutScale.cinematic;

  const contactPanel = panelLayoutScale.cinematic;

  const contactSection = sectionLayoutScale.cinematic;

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
      section: contactSection.root,

      content: `
    ${contactSection.content}

    ${contactSpacing.root}
    ${contactSpacing.padding}
    ${contactSpacing.content}
  `,

      environment: contactEnvironment,

      grid: contactGrid,

      panel: contactPanel,

      hero: {
        root: contactStack.hero.root,

        content: contactStack.hero.content,

        left: contactStack.hero.left,

        right: contactStack.hero.right,

        card: contactStack.hero.card,

        infoGroup: contactStack.hero.infoGroup,
      },

      links: {
        list: contactStack.links.list,

        row: contactStack.links.row,

        top: contactStack.links.top,

        status: contactStack.links.status,
      },

      availability: {
        root: "",

        content: contactStack.availability.content,
      },

      footer: {
        root: contactSpacing.footer,

        content: contactStack.footer.content,

        left: contactStack.footer.left,

        right: contactStack.footer.right,

        meta: contactStack.footer.meta,
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
