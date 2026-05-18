import type { ResolvedLayoutRuntime } from "../contracts";

import { resolveSectionSpacing } from "./resolveSectionSpacing";

import { resolveStackLayout } from "./resolveStackLayout";

export function resolveLayoutRuntime(): ResolvedLayoutRuntime {
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
  };
}
