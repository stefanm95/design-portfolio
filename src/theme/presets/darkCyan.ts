import { gradients } from "../core/gradients";
import {
  cinematicDisplay,
  headingTypography,
  labelTypography,
  textTypography,
} from "../core/typography";

export const darkCyan = {
  typography: {
    display: cinematicDisplay,
    heading: headingTypography,
    label: labelTypography,
    text: textTypography,
  },

  gradients,

  atmosphere: {
    accent: "cyan",
    background: "#050505",

    colors: {
      primaryAtmosphere: "rgba(0,180,255,0.16)",
      secondaryAtmosphere: "rgba(212,175,122,0.10)",

      gridPrimary: "rgba(68,202,187,0.18)",
      gridSecondary: "rgba(212,175,122,0.12)",
    },
  },
};
