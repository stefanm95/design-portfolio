import { motion } from "framer-motion";

import type { ReactNode } from "react";

import { motionPresets } from "@/theme";

type Props = {
  children: ReactNode;

  delay?: number;

  className?: string;
};

export default function FadeIn({
  children,

  delay = 0,

  className,
}: Props) {
  const fadeIn = motionPresets.fadeIn;

  return (
    <motion.div
      className={className}
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      viewport={fadeIn.viewport}
      transition={{
        ...fadeIn.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
