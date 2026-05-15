import type { ReactNode } from "react";

import { motion } from "framer-motion";

type MotionRhythm = "editorial" | "cinematic" | "immersive";

type MotionTransition = "soft" | "balanced" | "dramatic";

type RevealDirection = "up" | "down" | "left" | "right";

type Props = {
  children: ReactNode;

  rhythm?: MotionRhythm;

  transition?: MotionTransition;

  direction?: RevealDirection;

  className?: string;
};

const rhythmReveal = {
  editorial: {
    duration: 0.8,

    distance: 24,
  },

  cinematic: {
    duration: 1.2,

    distance: 48,
  },

  immersive: {
    duration: 1.6,

    distance: 72,
  },
} as const;

const transitionReveal = {
  soft: {
    ease: [0.25, 1, 0.5, 1],

    multiplier: 0.9,
  },

  balanced: {
    ease: [0.22, 1, 0.36, 1],

    multiplier: 1,
  },

  dramatic: {
    ease: [0.16, 1, 0.3, 1],

    multiplier: 1.2,
  },
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

  rhythm = "editorial",

  transition = "balanced",

  direction = "up",

  className,
}: Props) {
  const rhythmPreset = rhythmReveal[rhythm];

  const transitionPreset = transitionReveal[transition];

  const axis = resolveAxis(direction, rhythmPreset.distance);

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
          duration: rhythmPreset.duration * transitionPreset.multiplier,

          ease: transitionPreset.ease,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
