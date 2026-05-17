import type { ReactNode } from "react";

import { useMotionCadence } from "@/runtime/presentation/motion";
import { motion } from "framer-motion";
import { usePresentation } from "@/runtime/presentation";

type RevealDirection = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;

  direction?: RevealDirection;

  className?: string;
};

function resolveAxis(direction: RevealDirection, distance: number) {
  const directionalMultiplier =
    direction === "left" || direction === "right" ? 0.8 : 1;
  const effectiveDistance = distance * directionalMultiplier;

  switch (direction) {
    case "up":
      return { x: 0, y: effectiveDistance };

    case "down":
      return { x: 0, y: -effectiveDistance };

    case "left":
      return { x: effectiveDistance, y: 0 };

    case "right":
      return { x: -effectiveDistance, y: 0 };

    default:
      return { x: 0, y: effectiveDistance };
  }
}

export default function Reveal({
  children,

  direction = "up",

  className,
}: Props) {
  const cadence = useMotionCadence();

  const presentation = usePresentation();

  const restraint = presentation.currentScene.environment.motionRestraint;
  const restrainedDistance = cadence.reveal.distance / restraint;

  const axis = resolveAxis(direction, restrainedDistance);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{
          opacity: 0,
          x: axis.x,
          y: axis.y,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-10%",
        }}
        transition={{
          duration: cadence.reveal.duration,

          ease: cadence.fade.ease,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
