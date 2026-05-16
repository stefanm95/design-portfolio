import type { MotionCadence } from "./cadence";

import type { RuntimeBlockRelationship } from "@/runtime/presentation/interpreter/relationships";

type Props = {
  cadence: MotionCadence;

  relationships: RuntimeBlockRelationship;
};

export function resolveContextualMotion({
  cadence,
  relationships,
}: Props): MotionCadence {
  //
  // IMMERSIVE ENTRY
  //

  if (relationships.continuity.enteringImmersive) {
    return {
      ...cadence,

      fade: {
        ...cadence.fade,

        duration: cadence.fade.duration * 1.15,

        offset: cadence.fade.offset * 1.2,
      },

      stagger: cadence.stagger * 1.2,

      sectionDelay: cadence.sectionDelay * 1.25,
    };
  }

  //
  // IMMERSIVE EXIT
  //

  if (relationships.continuity.exitingImmersive) {
    return {
      ...cadence,

      fade: {
        ...cadence.fade,

        duration: cadence.fade.duration * 0.92,
      },

      stagger: cadence.stagger * 0.9,
    };
  }

  //
  // COMPRESSION
  //

  if (relationships.continuity.compressionTransition) {
    return {
      ...cadence,

      fade: {
        ...cadence.fade,

        duration: cadence.fade.duration * 0.9,

        offset: cadence.fade.offset * 0.8,
      },

      stagger: cadence.stagger * 0.75,
    };
  }

  //
  // DECOMPRESSION
  //

  if (relationships.continuity.decompressionTransition) {
    return {
      ...cadence,

      fade: {
        ...cadence.fade,

        duration: cadence.fade.duration * 1.08,
      },

      stagger: cadence.stagger * 1.1,
    };
  }

  return cadence;
}
