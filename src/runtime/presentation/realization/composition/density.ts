import type { CompositionDensity } from "@/runtime/presentation/composition/contract";

export const compositionDensity: Record<CompositionDensity, string> = {
  tight: "space-y-24 md:space-y-32",

  balanced: "space-y-32 md:space-y-40",

  spacious: "space-y-40 md:space-y-56 xl:space-y-64",
};
