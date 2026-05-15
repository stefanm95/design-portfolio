import type { ReactNode } from "react";

import { motion } from "framer-motion";

type MotionRhythm = "editorial" | "cinematic" | "immersive";

type MotionTransition = "soft" | "balanced" | "dramatic";

type Props = {
  children: ReactNode;

  rhythm?: MotionRhythm;

  transition?: MotionTransition;

  className?: string;

  delay?: number;
};

const rhythmMotion = {
  editorial: {
    duration: 0.6,

    delay: 0,

    y: 24,
  },

  cinematic: {
    duration: 1,

    delay: 0.1,

    y: 48,
  },

  immersive: {
    duration: 1.4,

    delay: 0.2,

    y: 72,
  },
} as const;

const transitionMotion = {
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

export default function FadeIn({
  children,

  rhythm = "editorial",

  transition = "balanced",

  delay = 0,

  className,
}: Props) {
  const rhythmPreset = rhythmMotion[rhythm];

  const transitionPreset = transitionMotion[transition];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: rhythmPreset.y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-10%",
      }}
      transition={{
        duration: rhythmPreset.duration * transitionPreset.multiplier,

        delay: rhythmPreset.delay + delay,

        ease: transitionPreset.ease,
      }}
    >
      {children}
    </motion.div>
  );
}
