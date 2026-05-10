import { motion } from "framer-motion";

import type { ReactNode } from "react";

import { motionPresets } from "@/theme";

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
      initial={preset.initial}
      whileInView={preset.whileInView}
      viewport={preset.viewport}
      transition={{
        ...preset.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
