import { obsidianGoldAtmosphere } from "./atmosphere";
import { obsidianGoldColors } from "./colors";
import { obsidianGoldContactLinks } from "./contactLinks";
import { obsidianGoldContactScene } from "./contactScene";
import { obsidianGoldEffects } from "./effects";
import { obsidianGoldExperiencePanel } from "./experiencePanel";
import { obsidianGoldExperienceScene } from "./experienceScene";
import { obsidianGoldGradients } from "./gradients";
import { obsidianGoldShowcase } from "./showcase";
import { obsidianGoldTypography } from "./typography";
import { obsidianGoldVisuals } from "./visuals";

export const obsidianGold = {
  colors: obsidianGoldColors,

  gradients: obsidianGoldGradients,

  typography: obsidianGoldTypography,

  effects: obsidianGoldEffects,

  atmosphere: obsidianGoldAtmosphere,

  showcase: obsidianGoldShowcase,

  experiencePanel: obsidianGoldExperiencePanel,

  contactLinks: obsidianGoldContactLinks,
  visuals: obsidianGoldVisuals,

  scenes: {
    experience: obsidianGoldExperienceScene,

    contact: obsidianGoldContactScene,
  },
};
