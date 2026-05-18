// runtime/presentation/layout/contracts/types.ts

export type ResolvedHeroLayout = {
  root: string;

  grid: string;

  content: string;

  meta: string;

  display: string;

  description: string;

  marker: string;

  copy: string;

  availability: string;
};

export type ResolvedPhilosophyLayout = {
  root: string;

  divider: string;

  ambientBloom: string;

  stack: string;

  left: string;

  right: string;

  heading: string;

  body: string;

  metadata: string;

  metadataItem: string;
};

export type ResolvedExperienceLayout = {
  section: string;

  root: string;

  hero: {
    content: string;

    titleWrap: string;

    glow: string;

    divider: string;

    description: string;

    tags: string;
  };

  visual: {
    root: string;

    desktopBackground: string;

    mobileBackground: string;

    content: string;

    stack: string;
  };

  panel: {
    root: string;

    content: string;

    title: string;

    description: string;
  };
};

export type ResolvedLayoutRuntime = {
  hero: ResolvedHeroLayout;

  philosophy: ResolvedPhilosophyLayout;

  experience: ResolvedExperienceLayout;
};
