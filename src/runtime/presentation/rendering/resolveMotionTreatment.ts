import type { MotionCadence } from "../motion";

import type { MotionTreatment } from "./types";

type Props = {
  motion: MotionCadence;
};

export function resolveMotionTreatment({ motion }: Props): MotionTreatment {
  return {
    softness: motion.transitionSoftness,

    restraint: motion.motionRestraint ?? 1,
  };
}
