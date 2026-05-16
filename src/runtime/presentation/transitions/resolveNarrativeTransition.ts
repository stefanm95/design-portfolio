import type { RuntimeBlockRelationship } from "../interpreter/relationships";

import type { NarrativeTransition } from "./types";

type Props = {
  relationships: RuntimeBlockRelationship;
};

export function resolveNarrativeTransition({
  relationships,
}: Props): NarrativeTransition {
  const {
    enteringImmersive,
    exitingImmersive,
    compressionTransition,
    decompressionTransition,
  } = relationships.continuity;

  //
  // IMMERSIVE EXPANSION
  //

  if (enteringImmersive || decompressionTransition) {
    return {
      spacing: `
        pt-24 md:pt-32
      `,

      intensity: 1,

      cinematicWeight: 1,

      continuity: "dramatic",

      atmosphereShift: true,
    };
  }

  //
  // IMMERSIVE EXIT
  //

  if (exitingImmersive || compressionTransition) {
    return {
      spacing: `
        pt-16 md:pt-20
      `,

      intensity: 0.7,

      cinematicWeight: 0.7,

      continuity: "soft",

      atmosphereShift: true,
    };
  }

  //
  // SECTIONAL CONTINUITY
  //

  if (
    relationships.previousRole === "section" &&
    relationships.nextRole === "section"
  ) {
    return {
      spacing: `
        pt-14 md:pt-16
      `,

      intensity: 0.5,

      cinematicWeight: 0.5,

      continuity: "balanced",

      atmosphereShift: false,
    };
  }

  //
  // DEFAULT
  //

  return {
    spacing: `
      pt-12
    `,

    intensity: 0.4,

    cinematicWeight: 0.4,

    continuity: "balanced",

    atmosphereShift: false,
  };
}
