import { monochromeAtmosphere } from "./atmosphere";
import { monochromeColors } from "./colors";
import { monochromeContactScene } from "./contactScene";
import { monochromeEffects } from "./effects";
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

  scenes: {
    experience: monochromeExperienceScene,
    contact: monochromeContactScene,
  },
};
