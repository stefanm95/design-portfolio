import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { useMotionCadence } from "@/runtime/presentation/motion";

type Props = {
  children: ReactNode;

  className?: string;

  delay?: number;
};

const transitionEases = {
  soft: [0.25, 1, 0.5, 1],
  balanced: [0.22, 1, 0.36, 1],
  dramatic: [0.16, 1, 0.3, 1],
} as const;

export default function FadeIn({
  children,

  delay = 0,

  className,
}: Props) {
  const cadence = useMotionCadence();

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: cadence.fade.offset,
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
        duration: cadence.fade.duration,

        delay: cadence.fade.delay + delay,

        ease: transitionEases.balanced,
      }}
    >
      {children}
    </motion.div>
  );
}
