import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { useMotionCadence } from "@/runtime/presentation/motion";

type RevealDirection = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;

  direction?: RevealDirection;

  className?: string;
};

const transitionEases = {
  soft: [0.25, 1, 0.5, 1],
  balanced: [0.22, 1, 0.36, 1],
  dramatic: [0.16, 1, 0.3, 1],
} as const;

function resolveAxis(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };

    case "down":
      return { x: 0, y: -distance };

    case "left":
      return { x: distance, y: 0 };

    case "right":
      return { x: -distance, y: 0 };

    default:
      return { x: 0, y: distance };
  }
}

export default function Reveal({
  children,

  direction = "up",

  className,
}: Props) {
  const cadence = useMotionCadence();

  const axis = resolveAxis(direction, cadence.reveal.distance);

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

          ease: transitionEases.balanced,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
