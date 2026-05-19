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

export type ResolvedContactLayout = {
  root: string;

  content: string;

  grid: {
    root: string;

    left: string;

    right: string;
  };

  hero: {
    root: string;

    content: string;

    left: string;

    right: string;

    infoGroup: string;
  };

  links: {
    root: string;

    content: string;

    label: string;

    list: string;

    row: string;

    top: string;

    status: string;
  };

  availability: {
    root: string;

    content: string;
  };

  footer: {
    root: string;

    content: string;

    left: string;

    right: string;

    meta: string;

    cta: string;
  };
};
export type ResolvedAboutLayout = {
  section: string;

  stack: string;

  hero: {
    root: string;

    label: string;

    statement: string;
  };

  philosophy: {
    root: string;

    left: string;

    right: string;

    content: string;
  };

  principles: {
    root: string;

    content: string;

    right: string;

    stack: string;

    list: string;
  };

  stackFooter: string;
};

export type ResolvedProjectsSectionLayout = {
  section: string;

  bloom: string;

  content: string;
};

export type ResolvedPageLayoutRuntime = {
  hero: ResolvedHeroLayout;

  philosophy: ResolvedPhilosophyLayout;

  projects: ResolvedProjectsSectionLayout;

  experience: ResolvedExperienceLayout;

  contact: ResolvedContactLayout;

  about: ResolvedAboutLayout;
};
