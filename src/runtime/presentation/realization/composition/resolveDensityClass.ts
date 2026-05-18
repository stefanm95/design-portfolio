import type { CompositionDensity } from "@/runtime/presentation/composition/contract";

export function resolveDensityClass(density: CompositionDensity): string {
  switch (density) {
    case "tight":
      return `
        space-y-24
        md:space-y-32
      `;

    case "spacious":
      return `
        space-y-40
        md:space-y-56
        xl:space-y-64
      `;

    case "balanced":
    default:
      return `
        space-y-32
        md:space-y-40
      `;
  }
}
