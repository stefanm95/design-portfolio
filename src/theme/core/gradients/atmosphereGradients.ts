import { rgba } from "../rgba";

export const atmosphereGradients = {
  primaryBloom: `radial-gradient(circle, ${rgba.cyanAtmosphere} 0%, transparent 72%)`,

  secondaryBloom: `radial-gradient(circle, ${rgba.goldAtmosphere} 0%, transparent 72%)`,

  vignette: `radial-gradient(circle at center, transparent 22%, ${rgba.vignette} 100%)`,

  topFade: `linear-gradient(to bottom, ${rgba.cinematicFade}, transparent)`,
};
