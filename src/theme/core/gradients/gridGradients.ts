import { rgba } from "../rgba";

export const gridGradients = {
  primary: `
      linear-gradient(to right, ${rgba.cyanGrid} 1px, transparent 1px),
      linear-gradient(to bottom, ${rgba.cyanGrid} 1px, transparent 1px)
    `,

  subtle: `
      linear-gradient(to right, ${rgba.whiteGrid} 1px, transparent 1px),
      linear-gradient(to bottom, ${rgba.whiteGrid} 1px, transparent 1px)
    `,

  secondary: `
      linear-gradient(to right, ${rgba.goldGrid} 1px, transparent 1px),
      linear-gradient(to bottom, ${rgba.goldGrid} 1px, transparent 1px)
    `,
};
