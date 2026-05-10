import { motion } from "framer-motion";

import type { ReactNode } from "react";

import {
  motionDuration,
  motionEase,
  motionReveal,
  motionViewport,
} from "@/theme";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeIn({ children, delay = 0, className }: Props) {
  const preset = motionPresets.fadeIn;

  return (
    <motion.div
      className={className}
      initial={motionReveal.fadeUp.initial}
      whileInView={motionReveal.fadeUp.animate}
      viewport={motionViewport.reveal}
      transition={{
        duration: motionDuration.reveal,
        delay,
        ease: motionEase.cinematic,
      }}
    >
      {children}
    </motion.div>
  );
}
