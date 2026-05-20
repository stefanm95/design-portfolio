import { aboutScale } from "./about.scale";
import { contactScale } from "./contact.scale";
import { experienceScale } from "./experience.scale";
import { heroScale } from "./hero.scale";
import { philosophyScale } from "./philosophy.scale";
import { projectsScale } from "./projects.scale";

export const layoutScales = {
  hero: heroScale,

  contact: contactScale,

  about: aboutScale,

  philosophy: philosophyScale,

  experience: experienceScale,

  projects: projectsScale,
} as const;
