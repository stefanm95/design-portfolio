import { monochromeAtmosphere } from "./atmosphere";
import { monochromeColors } from "./colors";
import { monochromeContactLinks } from "./contactLinks";
import { monochromeContactScene } from "./contactScene";
import { monochromeEffects } from "./effects";
import { monochromeExperiencePanel } from "./experiencePanel";
import { monochromeExperienceScene } from "./experienceScene";
import { monochromeGradients } from "./gradients";
import { monochromeShowcase } from "./showcase";
import { monochromeTypography } from "./typography";

export const monochrome = {
  colors: monochromeColors,

  gradients: monochromeGradients,

  typography: monochromeTypography,

  effects: monochromeEffects,

  atmosphere: monochromeAtmosphere,

  showcase: monochromeShowcase,

  experiencePanel: monochromeExperiencePanel,

  contactLinks: monochromeContactLinks,

  scenes: {
    experience: monochromeExperienceScene,
    contact: monochromeContactScene,
  },
};
